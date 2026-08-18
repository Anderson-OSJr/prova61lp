'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Rocket, Users, Target } from 'lucide-react'

export function Franchise() {
  return (
    <section id="franquia" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201,168,76,0.2) 1px, transparent 0)',
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
            <span className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
              Franquia parceira
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-6">
              My Robot School
              <span className="block text-gold-400">Araraquara</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
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
                  className="flex items-center gap-3 text-gray-300"
                >
                  <span className="text-gold-400">✦</span>
                  {item}
                </motion.div>
              ))}
            </div>
            <Button 
              className="bg-gold-600 hover:bg-gold-700 text-navy-950 font-semibold rounded-full px-8"
              asChild
            >
              <a href="https://www.myrobotararaquara.com.br" target="_blank" rel="noopener noreferrer">
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
              {[
                { icon: Users, label: 'Alunos Formados', value: '200+' },
                { icon: Rocket, label: 'Projetos Realizados', value: '150+' },
                { icon: Target, label: 'Taxa de Satisfação', value: '97%' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
                >
                  <stat.icon className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
              <div className="col-span-2 bg-gold-600/10 rounded-2xl p-6 text-center border border-gold-600/20">
                <p className="text-gold-400 font-semibold">
                  🌟 Unidade própria em Araraquara
                </p>
                <p className="text-sm text-gray-400 mt-1">
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