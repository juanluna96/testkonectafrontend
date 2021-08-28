import React, { useReducer } from 'react'
import empleadoReducer from './empleadoReducer';
import empleadoContext from './empleadoContext';
import { GET_EMPLEADOS, GUARDAR_EMPLEADO } from '../../types';
import clienteAxios from '../../config/axios';

const EmpleadoState = ({ children }) => {
    const initialState = {
        empleados: [],
        nuevoEmpleado: null
    }

    const [state, dispatch] = useReducer(empleadoReducer, initialState);

    const getEmpleados = async () => {
        const { data: empleados } = await clienteAxios.get('/empleados');
        dispatch({
            type: GET_EMPLEADOS,
            payload: empleados.empleados
        })
    }

    const agregarEmpleado = async (valores) => {
        const dataForm = convertFormToFormData(valores);
        const { data: { empleado } } = await clienteAxios.post('/empleados', dataForm);

        dispatch({
            type: GUARDAR_EMPLEADO,
            payload: empleado
        })
    }

    const convertFormToFormData = (form) => {
        let dataForm = new FormData();
        Object.keys(form).forEach(key => dataForm.append(key, form[key]));

        return dataForm;
    }

    return (
        <empleadoContext.Provider value={ {
            empleados: state.empleados,
            nuevoEmpleado: state.nuevoEmpleado,
            getEmpleados,
            agregarEmpleado
        } }>
            { children }
        </empleadoContext.Provider>
    )
}

export default EmpleadoState
