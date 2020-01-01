import {combineReducers} from 'redux';

const reducer = (state = [],action) => {
    switch(action.type) {
        case 'ADD' : return [...state, {id: action.id,text :action.text,deleted : false}];
        case 'DELETE' : return state.map (item => 
            (item.id === action.id)  ? {...item, deleted: !item.deleted}  : item
        );
        default : return state;
    }
}

export default combineReducers({reducer});