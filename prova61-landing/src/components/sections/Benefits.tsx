'use client'

import { motion } from 'framer-motion'
import { Globe, Clock, Sparkles, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: Globe,
    title: 'Presença digital própria',
    description:
      'Um site profissional passa credibilidade imediata e coloca sua empresa à frente de quem ainda depende só das redes sociais.',
  },
  {
    icon: Clock,
    title: 'Atendimento que não dorme',
    description:
      'Agentes de IA qualificam leads e respondem dúvidas a qualquer hora, sem depender de alguém estar disponível no WhatsApp.',
  },
  {
    icon: Sparkles,
    title: 'Soluções sob medida',
    description:
      'Nada de templates genéricos: cada sistema é desenhado para o processo real do seu negócio, com a stack certa para cada caso.',
  },
  {
    icon: ShieldCheck,
    title: 'Tecnologia que escala com você',
    description:
      'Arquitetura pensada para crescer junto com a empresa, sem retrabalho quando o volume ou a complexidade aumentar.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-navy-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
            Por que investir agora
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-6">
            Presença digital própria
            <span className="block text-gold-400">
              e IA trabalhando por você
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Ter um site não é só estar online — é abrir a porta para automatizar
            o primeiro contato com quem já quer comprar de você.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm hover:bg-white/[0.07] transition-colors duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
