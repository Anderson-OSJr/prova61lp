"use client";

import Image from "next/image";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import {
  siteConfig,
  whatsappHref,
  mapsSearchHref,
  mapsEmbedSrc,
} from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-indigo-950 text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-[3.25rem] w-[3.25rem] shrink-0 rounded bg-white p-1.5 ring-1 ring-gold-500/20">
                <Image
                  src="/images/logo.png"
                  alt="Prova 61"
                  fill
                  sizes="52px"
                  className="object-contain p-0.5"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Prova <span className="text-gold-500">61</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Educação e Desenvolvimento - Transformando ideias em soluções
              tecnológicas inovadoras.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#servicos"
                  className="hover:text-gold-400 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#equipe"
                  className="hover:text-gold-400 transition-colors"
                >
                  Equipe
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="hover:text-gold-400 transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#franquia"
                  className="hover:text-gold-400 transition-colors"
                >
                  My Robot
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-gold-400 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 mt-0.5 text-gold-500" />
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold-500" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-500 shrink-0" />
                <span>
                  {siteConfig.location.label}
                  <br />
                  {siteConfig.location.city} - {siteConfig.location.state},{" "}
                  {siteConfig.location.zip}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Localização</h4>
            <div className="rounded-md overflow-hidden border border-white/10 aspect-video">
              <iframe
                src={mapsEmbedSrc}
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
              href={mapsSearchHref}
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
  );
}
