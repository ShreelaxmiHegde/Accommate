import api from "./axios"


export const addReview = async(id, reviewData) => {
    let res = await api.post(`/listings/${id}/reviews`, reviewData);
    return res.data;
}