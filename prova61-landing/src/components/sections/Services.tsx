'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Code2,
  Box,
  Bot,
  Workflow,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const services = [
  {
    icon: Code2,
    title: 'Desenvolvimento de Software',
    description: 'Sistemas web e mobile com Next.js, React Native e arquiteturas escaláveis.',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
  },
  {
    icon: Box,
    title: 'Modelagem 3D Técnica',
    description: 'Peças técnicas modeladas com precisão para prototipagem e impressão 3D.',
    tech: ['Fusion 360', 'SolidWorks', 'STL'],
  },
  {
    icon: Bot,
    title: 'Agentes de IA',
    description: 'Integração de agentes inteligentes para automação e qualificação de leads.',
    tech: ['N8N', 'OpenAI', 'LangChain'],
  },
  {
    icon: Workflow,
    title: 'Automação com N8N',
    description: 'Workflows automatizados para integrar sistemas e otimizar processos.',
    tech: ['N8N', 'Webhooks', 'APIs'],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(201,168,76,0.2) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 lg:order-2 text-center lg:text-left max-w-3xl mx-auto lg:max-w-none lg:mx-0"
          >
            <span className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
              O que fazemos
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-6">
              Soluções completas em
              <span className="block text-gold-400">
                tecnologia e inovação
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Da concepção à entrega, oferecemos serviços integrados para transformar
              sua ideia em realidade.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:block lg:col-span-5 lg:order-1 relative"
          >
            <div className="relative aspect-square max-w-[75%] mr-auto rounded-lg overflow-hidden border border-gold-600/20 shadow-[0_0_30px_rgba(201,168,76,0.1)]">
              <Image
                src="/images/hero-2.jpg"
                alt="Automação e integração de sistemas com N8N"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Badge sobre a imagem */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-gold-300 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-gold-600/20">
                  ⚙ AUTOMAÇÃO
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                    <service.icon className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium text-gold-400 group-hover:text-gold-300 transition-colors">
                    Saiba mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 text-center"
        >
          <p className="text-sm text-gray-300">
            🖨️ <span className="font-semibold text-white">Impressão 3D disponível:</span>{' '}
            Duas impressoras coloridas para prototipagem rápida. Envie seu arquivo .STL e receba em casa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
