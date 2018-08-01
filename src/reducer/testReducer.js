const defaultState = {
    count: 0
}

export default function(state = defaultState, actions) {
    switch(actions.type){
        case 'INCREMENT':
            return {
                count: state.count+1
            }
        break;
        case 'DECREMENT':
            return {
                count: state.count-1
            }
        break;
        default:
            return state;    
    }
}