import axios from 'axios';

const setAuthHeader = token => {
    if(token) {
        axios.defaults.headers.common['my-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['my-auth-token'];
    }
}

export default setAuthHeader;