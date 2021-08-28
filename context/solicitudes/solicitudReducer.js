// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
    switch (type) {

        case typeName:
            return { ...state, ...payload }

        default:
            return state
    }
}
