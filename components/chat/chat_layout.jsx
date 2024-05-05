'use client';
import React, { useState } from 'react';

function ChatLayout() {
  const [messages, setMessages] = useState([]);
  const options = ['Hello!', 'Goodbye', 'Thank you', 'How are you?', 'What is your name?', 'What is the weather like?', 'What is the time?', 'What is your favorite color?', 'What is your favorite food?', 'What is your favorite movie?', 'What is your favorite song?', 'What is your favorite book?', 'What is your favorite animal?', 'What is your favorite sport?', 'What is your favorite hobby?', 'What is your favorite subject?', 'What is your favorite place?', 'What is your favorite season?', 'What is your favorite holiday?', 'What is your favorite number?', 'What is your favorite letter?', 'What is your favorite word?', 'What is your favorite quote?', 'What is your favorite joke?', 'What is your favorite riddle?', 'What is your favorite puzzle?', 'What is your favorite game?', 'What is your favorite app?', 'What is your favorite website?', 'What is your favorite social media?', 'What is your favorite video?', 'What is your favorite picture?', 'What is your favorite memory?', 'What is your favorite dream?', 'What is your favorite goal?', 'What is your favorite achievement?', 'What is your favorite challenge?', 'What is your favorite problem?', 'What is your favorite solution?', 'What is your favorite question?', 'What is your favorite answer?', 'What is your favorite idea?', 'What is your favorite thought?', 'What is your favorite feeling?', 'What is your favorite emotion?', 'What is your favorite mood?', 'What is your favorite attitude?', 'What is your favorite behavior?', 'What is your favorite action?', 'What is your favorite reaction?', 'What is your favorite interaction?', 'What is your favorite relationship?', 'What is your favorite connection?', 'What is your favorite communication?', 'What is your favorite conversation?', 'What is your favorite collaboration?', 'What is your favorite cooperation?', 'What is your favorite competition?', 'What is your favorite conflict?', 'What is your favorite resolution?', 'What is your favorite decision?', 'What is your favorite choice?', 'What is your favorite option?', 'What is your favorite alternative?', 'What is your favorite possibility?', 'What is your favorite probability?', 'What is your favorite uncertainty?', 'What is your favorite risk?', 'What is your favorite reward?', 'What is your favorite success?', 'What is your favorite failure?', 'What is your favorite mistake?', 'What is your favorite lesson?', 'What is your favorite teacher?', 'What is your favorite student?', 'What is your favorite class?', 'What is your favorite school?'];
  const longParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.';
  const sendMessage = (message) => {
    setMessages([...messages, { text: message, fromBot: false }]);
  };

  const randomBgColor = () => {
    const colors = ['bg-blue-300', 'bg-green-300', 'bg-pink-300', 'bg-purple-300'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow overflow-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 mb-2 flex items-center ${message.fromBot ? 'bg-blue-100 text-blue-700 rounded-r-lg' : 'bg-green-100 text-green-700 rounded-l-lg'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="p-4">
          <div className="flex space-x-2 overflow-x-auto py-0 rounded-lg">
          <button
            onClick={() => sendMessage(longParagraph)}
            className="bg-pink-100 text-blue-700 p-2 shadow cursor-pointer"
          >
            {longParagraph}
          </button>
          </div>
        <div className="flex space-x-2 overflow-x-auto py-2">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => sendMessage(option)}
              className={`${randomBgColor()} text-gray-800 p-2 rounded-lg shadow cursor-pointer whitespace-nowrap`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatLayout;
