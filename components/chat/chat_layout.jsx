'use client';
import React, { useState } from 'react';

function ChatLayout() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow overflow-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`
              ${index % 2 === 0 ? 'bg-blue-100 text-blue-700 rounded-r-lg' : 'bg-green-100 text-green-700 rounded-l-lg'}
              p-2 mb-2 flex items-center
            `}
          >
            {message}
          </div>
        ))}
      </div>
      <div className="flex p-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow rounded-l-lg p-2 border border-gray-300 focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="rounded-r-lg bg-blue-500 text-white p-2 hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatLayout;
