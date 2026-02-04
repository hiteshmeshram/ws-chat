import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [socket, setSocket ] = useState<WebSocket>()
  const messageRef = useRef(null);
  const [messages, setMessages] = useState("")
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8081")
    setSocket(ws);
    ws.onmessage = (e) => {
      setMessages(e.data)
    }
  }, [])
  function sendMessage() {
    if (!socket) return ;
    const message = messageRef.current.value;
    socket.send(message)
  }
  return (
    <>
      <input ref={messageRef} type='text' placeholder='Enter your message'></input>
      <button onClick={sendMessage}>send</button>
      {messages}
    </>
  )
}

export default App
