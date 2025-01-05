'use client';

import { useState } from 'react';
import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { MessageInput } from './chat-bot/message-input';
import { MessageList } from './chat-bot/message-list';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! How can I help you today?',
      sender: 'bot',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    
    // Simulate bot response
    setIsLoading(true);
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Thank you for your message! This is a demo response.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button size="icon" className="h-12 w-12 rounded-full">
              <Bot className="h-6 w-6" />
            </Button>
          </motion.div>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] flex flex-col h-[600px]">
          <SheetHeader>
            <SheetTitle>Chat Assistant</SheetTitle>
          </SheetHeader>
          <MessageList messages={messages} />
          <MessageInput onSend={handleSendMessage} isLoading={isLoading} />
        </SheetContent>
      </Sheet>
    </div>
  );
}