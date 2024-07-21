import { v1 as uuidv1 } from 'uuid';

export const bookReducer = (state,action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state,{
                title: action.book.title,
                author: action.book.author,
                id: uuidv1()
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}