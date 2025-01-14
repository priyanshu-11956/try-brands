"use client";

import { motion } from "framer-motion";
import {Mail, Phone, Send, Instagram, Facebook, Youtube, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

export function ContactSection({ inView }: { inView: boolean }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="rounded-lg overflow-hidden h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275.8775080445185!2d77.31661950635203!3d28.370298134480034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc6e4021a8d5%3A0xdb64c816b0b0fbb2!2s11E%2F106A%2C%20Sector%2011D%2C%20Pocket%20E%2C%20Sector%2011%2C%20Faridabad%2C%20Haryana%20121006!5e1!3m2!1sen!2sin!4v1736171220197!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <MapPin className="h-6 w-6" />
          <span>11E, Sector 11D, Pocket E, Sector 11, Faridabad, Haryana, 121006</span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Phone className="h-6 w-6" />
          <span>+92 8922891667</span>
        </div>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Mail className="h-6 w-6" />
          <span>try.x.care@gmail.com</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="min-h-[150px]"
          />
          <Button type="submit" className="w-full" size="lg">
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  );
}