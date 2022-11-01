import ChatApi from 'api/chatApi'
import React, { useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import './index.scss'

const host = 'http://localhost:5000'

export default function Chat({ setTrangthai }) {
    const [messages, setMessages] = React.useState([])
    const [message, setMessage] = React.useState('')

    if(messages.length === 0) {
        const fetchHistory = async () => {
            const { data } = await ChatApi.chat_get_all()
            setMessages(data)
        }
        fetchHistory()
    }

    const user = JSON.parse(localStorage.getItem('user'));
    const socketRef = React.useRef()
    
    useEffect(() => {
        socketRef.current = socketIOClient(host)
        socketRef.current.on('RECEIVE_MESSAGE', (data) => {
            setMessages(messages => [...messages, data])
        })
    }, [])

    const handleSendMessage = () => {
        socketRef.current.emit('RECEIVE_MESSAGE', {
            message,
            user: user.name,
            idUser: user._id
        })
        setMessage('')
    }

    const formatDate = (date) => {
        const d = new Date(date)
        return `${d.getHours()}:${d.getMinutes()}`
    }

    const messagesEndRef = React.useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

  return (
        <div className="chat-container">
            <div className="chat-header">
                <h1>Chat</h1>
                <p><b>Tên: </b>{user.name}</p>
            </div>
            <div className="chat-body">
                <div id='scrollDiv' className="chat-messages">
                    {messages.map((message, index) => (
                        <div className={`${message.idUser !== user._id ? 'you-message' : 'other-message'} chat-message`} key={index}>
                            <div className="chat-message-header">
                                <h1>{message.user}</h1>
                            </div>
                            <div className="chat-message-body">
                                <span>{formatDate(message.create_date)}</span>
                                <p>{message.message}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} className='end-chat chat-message'></div>
                </div>
                <></>
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onSubmit={handleSendMessage}
                    onKeyPress={e => e.key === 'Enter' ? handleSendMessage() : null}
                />
            </div>
        </div>
  )
}
