const { default: axiosClient }= require('./axiosClient');

const VeApi = {
    datVe: (data) => {
        return axiosClient.post('/ve/dat-ve', data);
    },
    getVeByUser: (idUser) => {
        return axiosClient.get(`/ve/${idUser}`);
    }
}

export default VeApi;