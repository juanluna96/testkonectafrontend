import { GET_EMPLEADOS, GUARDAR_EMPLEADO } from '../../types';
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
    switch (type) {
        case GET_EMPLEADOS:
            return { ...state, empleados: payload }
        case GUARDAR_EMPLEADO:
            return { ...state, nuevoEmpleado: payload }

        default:
            return state
    }
}
