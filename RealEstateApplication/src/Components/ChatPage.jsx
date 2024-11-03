import { useState } from 'react';
import { Send } from 'lucide-react';

const ChatPage = ({close}) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", isUser: false },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Add user message
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: newMessage,
        isUser: true
      }]);
      // Add mock response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: "This is a mock response. In a real app, you would integrate with a chat API here.",
          isUser: false
        }]);
      }, 1000);
      setNewMessage("");
    }
  };

  return (
    <div style={{height:500}} className="flex flex-col max-w-2xl mx-auto p-4">
        <button onClick={()=>close(false)}>Close</button>
      <div className="bg-gray-50 rounded-t-lg p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Chat Interface</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isUser
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="border-t p-4 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatPage;