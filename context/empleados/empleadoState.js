import React, { useReducer } from 'react'
import empleadoReducer from './empleadoReducer';
import empleadoContext from './empleadoContext';

const EmpleadoState = ({ children }) => {
    const initialState = {
        empleados: [],
        nuevoEmpleado: null
    }

    const [state, dispatch] = useReducer(empleadoReducer, initialState);

    const getEmpleados = () => {
        return
    }

    const agregarEmpleado = () => {
        return
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
