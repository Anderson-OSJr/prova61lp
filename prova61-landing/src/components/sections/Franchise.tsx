'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Rocket, GraduationCap, Wrench, Users, Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const pillars = [
  { icon: GraduationCap, label: 'Turmas por faixa etária' },
  { icon: Wrench, label: 'Ambiente 100% prático' },
  { icon: Users, label: 'Professores especializados' },
  { icon: Sparkles, label: 'Projetos reais dos alunos' },
]

export function Franchise() {
  return (
    <section id="franquia" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(10,22,40,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
              Franquia parceira
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mt-4 mb-6">
              My Robot School
              <span className="block text-gold-600">Araraquara</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Como parte do ecossistema Prova 61, a My Robot School forma a próxima
              geração de inovadores através do ensino de robótica, programação e
              modelagem 3D.
            </p>
            <div className="space-y-4 mb-8">
              {[
                '🤖 Robótica educacional',
                '💻 Programação e desenvolvimento de jogos',
                '🎨 Modelagem 3D criativa',
                '🚀 Empreendedorismo jovem'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="text-gold-600">✦</span>
                  {item}
                </motion.div>
              ))}
            </div>
            <Button
              className="bg-gold-600 hover:bg-gold-700 text-navy-950 font-semibold rounded-xl px-8"
              asChild
            >
              <a href={siteConfig.myRobotSchool.url} target="_blank" rel="noopener noreferrer">
                Conhecer My Robot
                <Rocket className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-navy-50/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-navy-100"
                >
                  <pillar.icon className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                  <p className="text-sm font-medium text-navy-800">{pillar.label}</p>
                </motion.div>
              ))}
              <div className="col-span-2 bg-gold-50 rounded-2xl p-6 text-center border border-gold-200">
                <p className="text-gold-700 font-semibold">
                  🌟 Unidade própria em Araraquara
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Parte do ecossistema Prova 61
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}