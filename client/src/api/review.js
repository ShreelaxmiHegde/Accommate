import api from "./axios"

export const addReview = async(id, reviewData) => {
    let res = await api.post(`/listings/${id}/reviews`, reviewData);
    return res.data;
}

export const editReview = async(id, reviewId, reviewData) => {
    let res = await api.put(`/listings/${id}/reviews/${reviewId}/edit`, reviewData);
    return res.data;
}

export const deleteReview = async(id, reviewId) => {
    let res = await api.delete(`/listings/${id}/reviews/${reviewId}`);
    return res.data;
}