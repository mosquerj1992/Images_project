
export const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementar':
            return { count: state.count + 1 };
        case 'decrementar':
            return { count: state.count - 1 };
        case 'reset':
            return {count:0};
        default:
            return state;

    }

}

