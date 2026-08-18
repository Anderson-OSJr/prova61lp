'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'Anderson Silva',
    role: 'Tech Lead & Full Stack',
    bio: '10+ anos de experiência em desenvolvimento de sistemas complexos.',
    social: { github: '#', linkedin: '#', email: '#' }
  },
  {
    name: 'Mariana Costa',
    role: 'Desenvolvedora Front-end',
    bio: 'Especialista em UI/UX e experiências imersivas com Next.js.',
    social: { github: '#', linkedin: '#', email: '#' }
  },
  {
    name: 'Rafael Oliveira',
    role: 'Backend & IA Specialist',
    bio: 'Expert em integração de agentes de IA e automação com N8N.',
    social: { github: '#', linkedin: '#', email: '#' }
  }
]

export function Team() {
  return (
    <section id="equipe" className="py-24 bg-gradient-to-b from-white to-navy-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
            Quem somos
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-950 mt-4 mb-6">
            Time de especialistas
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-navy-700 to-navy-900">
              prontos para inovar
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Três desenvolvedores plenos com visão de futuro e paixão por tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-navy-900 to-navy-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center">
                      <span className="text-6xl text-white/30">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-navy-950">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="text-gray-400 hover:text-navy-700 transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-navy-700 transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-navy-700 transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}