"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

// URLs das imagens temporárias
const IMAGES = {
  left: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=600&fit=crop&crop=center&q=80",
  right:
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=600&fit=crop&crop=center&q=80",
};

export function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Fundo com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-navy-950 to-black" />

      {/* Grid de linhas neon */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,76,0.05) 40px, rgba(201,168,76,0.05) 41px),
          repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201,168,76,0.05) 40px, rgba(201,168,76,0.05) 41px)
        `,
        }}
      />

      {/* Círculo de luz pulsante */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-600/5 blur-3xl"
      />

      {/* Partículas CSS - Só no cliente */}
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const x = Math.random() * 100;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold-500/20 rounded-full"
                initial={{ x: `${x}%`, y: "-10%" }}
                animate={{
                  y: ["100%", "-10%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 15 + Math.random() * 20,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
                style={{ left: `${x}%` }}
              />
            );
          })}
        </div>
      )}

      {/* Conteúdo principal - Grid com imagens */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Imagem Esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block lg:col-span-3 relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold-600/20 shadow-[0_0_30px_rgba(201,168,76,0.1)]">
              <Image
                src={IMAGES.left}
                alt="Tecnologia e inovação"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Badge sobre a imagem */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-gold-400 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gold-600/20">
                  ✦ INOVAÇÃO
                </span>
              </div>
            </div>
          </motion.div>

          {/* Texto Central */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge futurista */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-600/30 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="text-sm font-medium text-gold-400 tracking-widest">
                  TECNOLOGIA PARA O FUTURO
                </span>
              </motion.div>

              {/* Título */}
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                O amanhã começa
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-white to-gold-400 bg-[length:200%_auto] animate-shimmer">
                  com suas ideias.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                Desenvolvimento de software de alto impacto, modelagem 3D
                precisa e agentes de IA que transformam seus processos.
              </p>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="group relative bg-gold-600 hover:bg-gold-700 text-black font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_50px_rgba(201,168,76,0.6)]"
                  asChild
                >
                  <a
                    href="https://wa.me/5516999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conectar ao Futuro
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base backdrop-blur-sm"
                >
                  Explorar Soluções
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-6 border-t border-white/5">
                {[
                  { label: "PROJETOS", value: "50+" },
                  { label: "TECNOLOGIAS", value: "15+" },
                  { label: "SATISFAÇÃO", value: "98%" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl md:text-3xl font-bold text-gold-500 font-display">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 tracking-widest">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Imagem Direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block lg:col-span-3 relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold-600/20 shadow-[0_0_30px_rgba(201,168,76,0.1)]">
              <Image
                src={IMAGES.right}
                alt="Desenvolvimento e tecnologia"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

              {/* Badge sobre a imagem */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-gold-400 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gold-600/20">
                  ⚡ FUTURO
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-12 rounded-full border border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-4 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(201,168,76,0.8)]" />
        </div>
      </motion.div>
    </section>
  );
}
