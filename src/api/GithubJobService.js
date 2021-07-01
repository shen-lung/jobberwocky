import axios from 'axios'


export const extractFlow = file => {
    return axios.post(`${API_URL}/form/ExtractFlow`, file)
}

export const getForm = script => {
    return axios.get(`${API_URL}/form/GetForm`, script)
}
