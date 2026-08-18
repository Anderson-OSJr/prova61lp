'use client'

import { motion } from 'framer-motion'

const team = [
  {
    name: 'Anderson Silva Jr',
    role: 'Tech Lead & Full Stack',
    bio: 'Conduz a arquitetura dos projetos, do backend à integração dos agentes de IA.',
    stack: ['Next.js', 'TypeScript', 'Prisma'],
  },
  {
    name: 'Felipe Borges',
    role: 'Desenvolvedor Front-end',
    bio: 'Cuida da experiência de interface, responsividade e detalhes visuais.',
    stack: ['React', 'Tailwind', 'UI/UX'],
  },
  {
    name: 'Raissa Albino',
    role: 'Backend & IA Specialist',
    bio: 'Especialista em automação com N8N e integração de agentes de IA.',
    stack: ['N8N', 'APIs', 'Agentes de IA'],
  },
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
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-navy-50 text-navy-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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