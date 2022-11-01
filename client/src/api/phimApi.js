const { default: axiosClient }= require('./axiosClient');

const PhimApi = {
    getAllPhimHot: () => {
        return axiosClient.get('/phims/hot');
    },
    getAllPhim: () => {
        return axiosClient.get('/phims');
    },
    getPhimById: (id) => {
        return axiosClient.get(`/phims/${id}`);
    },
    getPhimByCategory: (category) => {
        return axiosClient.get(`/phims/category/${category}`);
    },
    getPhimByName: (name) => {
        return axiosClient.get(`/phims/name/${name}`);
    },
    addPhim: (phim) => {
        return axiosClient.post('/phims', phim);
    },
    updatePhim: (phim, idPhim) => {
        return axiosClient.put(`/phims/${idPhim}`, phim);
    },
    deletePhim: (id) => {
        return axiosClient.delete(`/phims/${id}`);
    },
    getGheByPhim: (id) => {
        return axiosClient.get(`/ghes/${id}`);
    },
    resetPhim: (id) => {
        return axiosClient.get(`/ghes/reset/${id}`);
    }
}

export default PhimApi;