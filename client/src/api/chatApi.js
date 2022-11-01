const { default: axiosClient }= require('./axiosClient');

const ChatApi = {
    chat_get_all: () => {
        return axiosClient.get('/chat');
    },
}

export default ChatApi;