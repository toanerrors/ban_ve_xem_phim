const { default: axiosClient }= require('./axiosClient');

const RapApi = {
    getAllRap: () => {
        return axiosClient.get('/rap');
    },
    getRapById: (id) => {
        return axiosClient.get(`/rap/${id}`);
    },
}

export default RapApi;