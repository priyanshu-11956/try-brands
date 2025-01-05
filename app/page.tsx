"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Rocket, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart, 
  Send 
} from "lucide-react";
import { HeroIllustration } from "@/components/illustrations/hero-illustration";
import { ServiceCards } from "@/components/illustrations/service-cards";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <motion.section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center text-center px-4 pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Your Brand, In Every Hand
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Building Brands That Trend and Last
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="text-lg">
              Start Your Growth Journey Today!
            </Button>
          </motion.div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={statsRef}
        className="py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <Stats inView={statsInView} />
        </div>
      </motion.section>

      <motion.section
        id="services"
        ref={servicesRef}
        className="py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Core Services
          </h2>
          <ServiceCards inView={servicesInView} />
        </div>
      </motion.section>

      <motion.section
        ref={processRef}
        className="py-20 px-4 bg-muted/50"
        initial={{ opacity: 0, y: 20 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
            Our Process
          </h2>
          <Process inView={processInView} />
        </div>
      </motion.section>

      <motion.section
        id="about"
        ref={aboutRef}
        className="py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="p-6 bg-card rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Users className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Personal Branding</h3>
              <p className="text-muted-foreground">
                We craft distinct identities that resonate with your audience and build
                influence in your niche.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-card rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <BarChart className="h-8 w-8 mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Data-Driven Results</h3>
              <p className="text-muted-foreground">
                Our strategies are backed by data, ensuring measurable results from
                awareness to conversion.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={testimonialsRef}
        className="py-20 px-4 bg-muted/50"
        initial={{ opacity: 0, y: 20 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Client Success Stories
          </h2>
          <Testimonials inView={testimonialsInView} />
        </div>
      </motion.section>

      <motion.section
        id="contact"
        ref={contactRef}
        className="py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Let's Make Your Brand Unforgettable!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </motion.section>
    </main>
  );
}