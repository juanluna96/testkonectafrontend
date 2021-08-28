import React, { useReducer } from 'react'
import solicitudReducer from './solicitudReducer';
import solicitudContext from './solicitudContext';
import { GET_SOLICITUDES, GUARDAR_SOLICITUD } from '../../types';
import clienteAxios from '../../config/axios';

const SolicitudState = ({ children }) => {
    const initialState = {
        solicitudes: [],
        nuevaSolicitud: null
    }

    const [state, dispatch] = useReducer(solicitudReducer, initialState);

    const getSolicitudes = async () => {
        const { data: solicitudes } = await clienteAxios.get('/solicitudes');
        dispatch({
            type: GET_SOLICITUDES,
            payload: solicitudes.solicitudes
        })
    }

    const agregarSolicitud = async (valores) => {
        const dataForm = convertFormToFormData(valores);
        const { data: { solicitud } } = await clienteAxios.post('/solicitudes', dataForm);

        dispatch({
            type: GUARDAR_SOLICITUD,
            payload: solicitud
        })
    }

    const convertFormToFormData = (form) => {
        let dataForm = new FormData();
        Object.keys(form).forEach(key => dataForm.append(key, form[key]));

        return dataForm;
    }

    return (
        <solicitudContext.Provider value={ {
            solicitudes: state.solicitudes,
            nuevaSolicitud: state.nuevaSolicitud,
            getSolicitudes,
            agregarSolicitud
        } }>
            { children }
        </solicitudContext.Provider>
    )
}

export default SolicitudState
