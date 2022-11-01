const { default: axiosClient }= require('./axiosClient');

const UserApi = {
    login: (data) => {
        return axiosClient.post('/user/login', data);
    },
    register: (data) => {
        return axiosClient.post('/user/register', data);
    },
    update: (data) => {
        return axiosClient.put('/user/update', data);
    }
}

export default UserApi;
