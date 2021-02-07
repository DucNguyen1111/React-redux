const initialState = {
    list: [{ id: 'haha', title: 'Hi Duc' }],
    activeId: null,
};
const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            console.log('duc1');
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            }
        }
        case 'SET_ACTIVE_HOBBY': {
            console.log('haha');
            const newId = action.payload.id;
            return {
                ...state,
                activeId: newId,
            }
        }
        default:
            return state
    }
}
export default hobbyReducer;