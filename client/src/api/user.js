import api from "./axios"

export const signup = async(formData) => {
    let res = await api.post("/signup", formData);
    return res.data;
}

export const login = async(formData) => {
    let res = await api.post("/login", formData);
    return res.data;
}

export const logout = async() => {
    let res = await api.get("/logout");
    return res.data;
}