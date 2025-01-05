'use client';

import { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface MessageInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
}

export function MessageInput({ onSend, isLoading = false }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t">
      <Textarea
        placeholder="Type your question..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[50px] max-h-[200px] resize-none"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
      />
      <Button 
        type="submit" 
        size="icon"
        disabled={isLoading || !message.trim()}
      >
        <SendHorizontal className="h-4 w-4" />
      </Button>
    </form>
  );
}