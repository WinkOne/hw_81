import axiosApi from "../axios-api";


export const LINK_REQUEST = 'LINK_REQUEST';
export const LINK_SUCCESS = 'LINK_SUCCESS';
export const LINK_ERROR = 'LINK_ERROR';

export const linkRequest = () => {
    return {type: LINK_REQUEST}
};
export const linkSuccess = (data) => {
    return {type: LINK_SUCCESS, data}
};
export const linkError = () => {
    return {type: LINK_ERROR}
};


export const postLinks = (link) => {
    return async dispatch => {
       const response = await axiosApi.post('/links', link);
        dispatch(linkSuccess(response.data))
    }
};