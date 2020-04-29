import axios from 'axios';

export const callApi = () => {
    return dispatch => {
        axios
            .get("https://aws.random.cat/meow")
            .then(res => {
                dispatch({ type: "CALL_API", payload: res.data.file })
            })
            .catch(err => console.log("Error from api", err));
    }
}