'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, Globe, Users } from 'lucide-react';

export default function Dashboard() {
  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience across all platforms',
      icon: Users,
    },
    {
      title: 'Website Development',
      description: 'Create stunning, responsive websites',
      icon: Globe,
    },
    {
      title: 'Analytics & Growth',
      description: 'Data-driven strategies for success',
      icon: BarChart,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <section className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold gradient-text">
              Your Brand, In Every Hand
            </h1>
            <p className="text-xl text-muted-foreground">
              Building Brands That Trend and Last
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-secondary/50 backdrop-blur-sm border-0">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </section>

          <section className="text-center">
            <Button variant="gradient" size="lg" className="glow">
              Start Your Growth Journey
              <ArrowRight className="ml-2" />
            </Button>
          </section>
        </motion.div>
      </main>
    </div>
  );
}