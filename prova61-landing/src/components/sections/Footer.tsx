'use client'

import { MapPin, Mail, Instagram, Github, Linkedin, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Prova <span className="text-gold-500">61</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Educação e Desenvolvimento - Transformando ideias em soluções 
              tecnológicas inovadoras.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-gold-400 transition-colors">Serviços</a></li>
              <li><a href="#equipe" className="hover:text-gold-400 transition-colors">Equipe</a></li>
              <li><a href="#franquia" className="hover:text-gold-400 transition-colors">My Robot</a></li>
              <li><a href="#contato" className="hover:text-gold-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 mt-0.5 text-gold-500" />
                <span>
                  <a href="https://wa.me/5516999999999" className="hover:text-white transition-colors">
                    (16) 99999-9999
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold-500" />
                <a href="mailto:contato@prova61.com.br" className="hover:text-white transition-colors">
                  contato@prova61.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-500" />
                <span>Araraquara, SP - Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Localização</h4>
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14845.5!2d-48.2!3d-21.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ4JzAwLjAiUyA0OMKwMTInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Prova 61"
              />
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-gold-400 hover:text-gold-300 transition-colors mt-2 inline-block"
            >
              Abrir no Google Maps →
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-sm text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Prova 61 - Educação e Desenvolvimento. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}