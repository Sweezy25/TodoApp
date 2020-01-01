let addid = 0;
export const addtodo = text => ({
    type : 'ADD',
    id : addid++,
    text
})
export const deletetodo = id => ({
    type : 'DELETE',
    id
})