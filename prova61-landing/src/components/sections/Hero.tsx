"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { whatsappHref } from "@/lib/site-config";

const STACK = [
  "Next.js",
  "TypeScript",
  "Prisma",
  "N8N",
  "IA & Agentes",
  "Modelagem 3D",
];

const IMAGES = {
  left: "/images/hero-1.jpg",
};

export function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-navy-50/40 to-white" />

      {/* Grid de linhas técnico */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(10,22,40,0.035) 40px, rgba(10,22,40,0.035) 41px),
          repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(10,22,40,0.035) 40px, rgba(10,22,40,0.035) 41px)
        `,
        }}
      />

      {/* Círculo de luz pulsante */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-400/10 blur-3xl"
      />

      {/* Partículas CSS - Só no cliente */}
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const x = Math.random() * 100;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-navy-700/25 rounded-full"
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
          {/* Imagem Direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block lg:col-span-5 lg:order-2 relative"
          >
            <div className="relative aspect-square max-w-[75%] ml-auto rounded-lg overflow-hidden border border-navy-900/10 shadow-[0_10px_40px_rgba(10,22,40,0.12)]">
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
                <span className="text-xs font-mono text-gold-300 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gold-600/20">
                  ✦ INOVAÇÃO
                </span>
              </div>
            </div>
          </motion.div>

          {/* Texto Central */}
          <div className="lg:col-span-7 lg:order-1 text-center lg:text-left">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-950/[0.04] border border-gold-600/30 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span className="text-sm font-medium text-gold-700 tracking-widest">
                  TECNOLOGIA PARA O FUTURO
                </span>
              </motion.div>

              {/* Título */}
              <h1 className="text-5xl md:text-7xl font-display font-bold text-navy-950 leading-[1.1] mb-6">
                O amanhã começa
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-navy-900 via-gold-600 to-navy-900 bg-[length:200%_auto] animate-shimmer">
                  com suas ideias.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                Desenvolvimento de software de alto impacto, modelagem 3D
                precisa e agentes de IA que transformam seus processos.
              </p>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="group relative bg-gold-600 hover:bg-gold-700 text-black font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:shadow-[0_0_50px_rgba(201,168,76,0.45)]"
                  asChild
                >
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    Conectar ao Futuro
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-navy-900/15 text-navy-900 hover:bg-navy-950/5 rounded-xl px-8 py-6 text-base backdrop-blur-sm"
                  asChild
                >
                  <a href="#servicos">Explorar Soluções</a>
                </Button>
              </div>

              {/* Faixa de stack */}
              <div className="mt-12 pt-6 border-t border-navy-900/10">
                <p className="text-xs text-gray-500 tracking-widest mb-4">
                  NOSSA STACK
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
                  {STACK.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.07 }}
                      className="text-sm font-mono text-gray-500 hover:text-gold-700 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-12 rounded-full border border-navy-900/20 flex items-start justify-center p-2">
          <div className="w-1 h-4 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(201,168,76,0.8)]" />
        </div>
      </motion.div>
    </section>
  );
}
