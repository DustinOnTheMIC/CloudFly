export default function counter(state = true, action: any) {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return state = !state;
        default:
            return state;
    }
}