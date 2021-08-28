import React, { useReducer } from 'react'
import solicitudReducer from './solicitudReducer';
import solicitudContext from './solicitudContext';

const SolicitudState = ({ children }) => {
    const initialState = {
        solicitudes: [],
        nuevaSolicitud: null
    }

    const [state, dispatch] = useReducer(solicitudReducer, initialState);

    const getSolicitudes = () => {
        return
    }

    const agregarSolicitudes = () => {
        return
    }

    return (
        <solicitudContext.Provider value={ {
            solicitudes: state.solicitudes,
            nuevaSolicitud: state.nuevaSolicitud,
            getSolicitudes,
            agregarSolicitudes
        } }>
            { children }
        </solicitudContext.Provider>
    )
}

export default SolicitudState
