import { useState, useEffect } from 'react';

export interface Conversation {
  id: string;
  title: string;
  preview: string;
  timestamp: number;
  messages: Message[];
}

interface Message {
  id: string;
  content: string;
  timestamp: number;
  sender: 'user' | 'assistant';
}

export const useConversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>(() => {
    const saved = localStorage.getItem('conversations');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('conversations', JSON.stringify(conversations));
  }, [conversations]);

  const addConversation = (conversation: Omit<Conversation, 'id'>) => {
    const newConversation = {
      ...conversation,
      id: crypto.randomUUID(),
    };
    setConversations(prev => [newConversation, ...prev]);
    return newConversation;
  };

  const deleteConversation = (id: string) => {
    setConversations(prev => prev.filter(conv => conv.id !== id));
  };

  const updateConversation = (id: string, updates: Partial<Conversation>) => {
    setConversations(prev =>
      prev.map(conv =>
        conv.id === id ? { ...conv, ...updates } : conv
      )
    );
  };

  return {
    conversations,
    addConversation,
    deleteConversation,
    updateConversation,
  };
};