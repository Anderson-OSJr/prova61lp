'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageCircle, ChevronRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-navy-950 to-navy-800 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-400/5 rounded-full blur-2xl" />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-gold-600/20 text-gold-400 text-sm font-semibold mb-6">
                  🚀 Vamos construir juntos?
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Pronto para transformar
                <span className="block text-gold-400">sua ideia em realidade?</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Conte para nós seu projeto. Nossa equipe está pronta para criar 
                soluções personalizadas com as melhores tecnologias do mercado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gold-600 hover:bg-gold-700 text-navy-950 font-semibold text-lg px-10 py-7 rounded-full group transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="https://wa.me/5516999999999" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Falar no WhatsApp
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-gold-600/30 text-white hover:bg-gold-600/10 rounded-full px-8 text-lg"
                >
                  Ver portfólio
                </Button>
              </div>

              <p className="text-sm text-gray-400 mt-6">
                💡 Resposta rápida • Orçamento sem compromisso • Atendimento personalizado
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}