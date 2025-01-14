"use client";

import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./logo";

export function Navbar() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="p-4 flex justify-between justify-items-center items-center fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: 90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-2 justify-between items-end">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-end space-x-8 lg:translate-x-56 font-bold">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#services"
              className="text-2xl hover:text-foreground"
            >
              Services
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#about"
              className="text-2xl hover:text-foreground"
            >
              About
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#contact"
              className="text-2xl hover:text-foreground"
            >
              Contact
            </motion.a>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="md:hidden" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden p-4 space-y-4 bg-background border-b"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#services" className="block text-foreground/80 hover:text-foreground">
            Services
          </a>
          <a href="#about" className="block text-foreground/80 hover:text-foreground">
            About
          </a>
          <a href="#contact" className="block text-foreground/80 hover:text-foreground">
            Contact
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}