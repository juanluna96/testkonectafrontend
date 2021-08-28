import { GET_SOLICITUDES, GUARDAR_SOLICITUD } from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
    switch (type) {

        case GET_SOLICITUDES:
            return { ...state, solicitudes: payload }
        case GUARDAR_SOLICITUD:
            return { ...state, nuevaSolicitud: payload }

        default:
            return state
    }
}
