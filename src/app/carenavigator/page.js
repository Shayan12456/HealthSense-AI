"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your HealthSense AI assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input, isBot: false },
    ]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch bot response");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: data.response, isBot: true },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: "Sorry, something went wrong. Please try again.", isBot: true },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
      {/* Header */}
      <div className="p-4 text-center bg-blue-800 shadow-lg">
        <h1 className="text-2xl font-bold">Care Navigator</h1>
        <p className="text-blue-200">Your 24/7 health companion</p>
      </div>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-100 text-black">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isBot ? "justify-start" : "justify-end"
            }`}
          >
            {message.isBot && (
              <div className="flex-shrink-0 mr-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
              </div>
            )}
            <div
              className={`max-w-[75%] rounded-xl px-4 py-3 ${
                message.isBot
                  ? "bg-white text-gray-800 shadow"
                  : "bg-blue-600 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <Loader2 className="h-5 w-5 text-white animate-spin" />
            </div>
            <p className="ml-2 text-gray-600">Typing...</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-gray-900 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your health question..."
          className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="ml-4 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          <Send className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
