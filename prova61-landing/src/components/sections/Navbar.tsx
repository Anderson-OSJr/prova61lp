"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site-config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Equipe", href: "#equipe" },
    { label: "My Robot", href: "#franquia" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy-950/95 backdrop-blur-xl border-b border-white/5 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`relative flex items-center justify-center rounded-md bg-white shadow-[0_0_20px_rgba(201,168,76,0.15)] ring-1 ring-gold-500/20 transition-all duration-300 ${
              isScrolled
                ? "h-[3.25rem] w-[3.25rem] p-1.5"
                : "h-[3.9rem] w-[3.9rem] p-2"
            }`}
          >
            <Image
              src="/images/logo.png"
              alt="Prova 61"
              fill
              sizes="62px"
              className="object-contain p-1"
              priority
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isScrolled
                ? "max-w-0 opacity-0 sm:max-w-xs sm:opacity-100"
                : "max-w-xs opacity-100"
            }`}
          >
            <span className="font-display text-2xl font-bold text-white whitespace-nowrap">
              Prova <span className="text-gold-500">61</span>
            </span>
            <p className="text-[13px] text-gray-400 -mt-1 whitespace-nowrap">
              Educação & Desenvolvimento
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full" />
            </Link>
          ))}
          <Button
            className="bg-gold-600 hover:bg-gold-700 text-navy-950 font-semibold rounded-xl px-6"
            asChild
          >
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-navy-950/95 backdrop-blur-xl border-t border-white/5"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="bg-gold-600 hover:bg-gold-700 text-navy-950 font-semibold rounded-xl w-full"
              asChild
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
