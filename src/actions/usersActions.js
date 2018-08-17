import * as actionTypes from './actionsTypes';
export function receiveUsers(data) {
    return {type: actionTypes.RECEIVE_USERS, users: data};
}

export function fetchUsers() {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if(response.status === 200){
                    dispatch(receiveUsers(response.data))
                }else{
                    var flash = {
                        content: 'There was an error getting the task list. Please try again.',
                        title: 'Error getting task list',
                        type: 'error'
                    }
                    dispatch({type: "DISPLAY_FLASH", data: flash})
                }
            });
    };
}