const { default: axiosClient }= require('./axiosClient');

const TinTucApi = {
    getAllTinTuc: () => {
        return axiosClient.get('/tintuc');
    },
    createTinTuc: (tintuc) => {
        return axiosClient.post('/tintuc', tintuc);
    },
    updateTinTuc: (id, tintuc) => {
        return axiosClient.put(`/tintuc/${id}`, tintuc);
    },
    deleteTinTuc: (id) => {
        return axiosClient.delete(`/tintuc/${id}`);
    },
    getTinTucById: (id) => {
        return axiosClient.get(`/tintuc/${id}`);
    }
}

export default TinTucApi;