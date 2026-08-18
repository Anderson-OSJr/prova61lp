'use client'

import { motion } from 'framer-motion'
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
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mt-4 mb-6">
            Soluções completas em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-navy-900">
              tecnologia e inovação
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Da concepção à entrega, oferecemos serviços integrados para transformar 
            sua ideia em realidade.
          </p>
        </motion.div>

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
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center mb-6 group-hover:bg-navy-100 transition-colors">
                    <service.icon className="w-7 h-7 text-navy-700" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-navy-50 text-navy-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium text-gold-600 group-hover:text-gold-700 transition-colors">
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
          className="mt-12 p-6 bg-navy-50/50 rounded-2xl border border-navy-100/50 text-center"
        >
          <p className="text-sm text-gray-600">
            🖨️ <span className="font-semibold">Impressão 3D disponível:</span>{' '}
            Duas impressoras coloridas para prototipagem rápida. Envie seu arquivo .STL e receba em casa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}