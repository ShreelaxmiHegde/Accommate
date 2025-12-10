import api from "./axios"

export const fetchListings = async() => {
    let res = await api.get("/listings");
    return res.data;
}

export const fetchListing = async(id) => {
    let res = await api.get(`/listings/${id}`);
    return res.data.listing;
}

export const createListing = async(formData) => {
    let res = await api.post("/listings", formData);
    return res.data;
}

export const editListing = async(id, formData) => {
    let res = await api.put(`/listings/${id}`, formData);
    return res.data;
}

export const deleteListing = async(id) => {
    let res = await api.delete(`/listings/${id}`);
    return res.data;
}