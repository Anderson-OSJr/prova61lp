// setup.js - Execute com: node setup.js
const fs = require("fs");
const path = require("path");

// ============================================
// CONTEÚDO DE TODOS OS ARQUIVOS
// ============================================

const files = {
  // PACKAGE.JSON
  "package.json": `{
  "name": "prova61-landing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@radix-ui/react-icons": "^1.3.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.5",
    "typescript": "^5.3.0"
  }
}`,

  // TAILWIND CONFIG
  "tailwind.config.ts": `import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navy: {
          50: '#f0f2f8',
          100: '#d9dff0',
          200: '#b3bfe1',
          300: '#8c9fd2',
          400: '#667fc3',
          500: '#405fb4',
          600: '#334c90',
          700: '#26396c',
          800: '#1a2648',
          900: '#0d1324',
          950: '#0a1628',
        },
        gold: {
          50: '#faf8f0',
          100: '#f5f0e0',
          200: '#ebe1c1',
          300: '#e1d2a2',
          400: '#d7c383',
          500: '#cdb464',
          600: '#c9a84c',
          700: '#a48a3d',
          800: '#7f6b2e',
          900: '#5a4d1f',
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-playfair)'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config`,

  // NEXT CONFIG
  "next.config.js": `/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig`,

  // GLOBALS CSS
  "src/app/globals.css": `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

html {
  scroll-behavior: smooth;
}`,

  // LAYOUT
  "src/app/layout.tsx": `import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Prova 61 - Educação e Desenvolvimento',
  description: 'Desenvolvimento de software, modelagem 3D e integração de agentes de IA para empresas inovadoras.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={\`\${inter.variable} \${playfair.variable}\`}>
      <body>{children}</body>
    </html>
  )
}`,

  // PAGE
  "src/app/page.tsx": `import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Team } from '@/components/sections/Team'
import { Franchise } from '@/components/sections/Franchise'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Franchise />
      <CTA />
      <Footer />
    </main>
  )
}`,

  // UI COMPONENTS
  "src/components/ui/button.tsx": `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`,

  "src/components/ui/card.tsx": `import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`,

  // UTILS
  "src/lib/utils.ts": `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,

  // NAVBAR
  "src/components/sections/Navbar.tsx": `'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'My Robot', href: '#franquia' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${
        isScrolled 
          ? 'bg-navy-950/95 backdrop-blur-xl border-b border-white/5 py-3' 
          : 'bg-transparent py-5'
      }\`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 bg-gold-600/20 rounded-full flex items-center justify-center">
            <span className="font-display text-xl font-bold text-white">
              P<span className="text-gold-500">61</span>
            </span>
          </div>
          <div>
            <span className="font-display text-xl font-bold text-white">
              Prova <span className="text-gold-500">61</span>
            </span>
            <p className="text-xs text-gray-400 -mt-1">Educação & Desenvolvimento</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full" />
            </Link>
          ))}
          <Button 
            className="bg-gold-600 hover:bg-gold-700 text-navy-950 font-semibold rounded-full px-6"
            asChild
          >
            <a href="https://wa.me/5516999999999" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-navy-950/95 backdrop-blur-xl border-t border-white/5"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-gold-600 hover:bg-gold-700 text-navy-950 font-semibold rounded-full w-full">
              WhatsApp
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}`,

  // HERO
  "src/components/sections/Hero.tsx": `'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950"
    >
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, 5]} intensity={0.5} />
          <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#c9a84c"
              attach="material"
              distort={0.3}
              speed={1.5}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1.5}
            enablePan={false}
          />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/60 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-600/10 border border-gold-600/20 mb-8">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="text-sm font-medium text-gold-400">
              Inovação em Desenvolvimento
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Transformamos ideias em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              soluções tecnológicas
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Desenvolvimento de software, modelagem 3D e integração de agentes de IA 
            para empresas que buscam inovação real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gold-600 hover:bg-gold-700 text-navy-950 font-semibold text-lg px-8 py-6 rounded-full group transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://wa.me/5516999999999" target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gold-600/30 text-white hover:bg-gold-600/10 rounded-full px-8 py-6 text-lg"
            >
              Conheça nosso trabalho
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/5">
            {[
              { label: 'Projetos Entregues', value: '50+' },
              { label: 'Tecnologias', value: '15+' },
              { label: 'Clientes Satisfeitos', value: '98%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-gold-500">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-gold-500" />
        </div>
      </motion.div>
    </section>
  )
}`,

  // SERVICES
  "src/components/sections/Services.tsx": `'use client'

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
}`,

  // TEAM
  "src/components/sections/Team.tsx": `'use client'

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
}`,

  // FRANCHISE
  "src/components/sections/Franchise.tsx": `'use client'

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
}`,

  // CTA
  "src/components/sections/CTA.tsx": `'use client'

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
}`,

  // FOOTER
  "src/components/sections/Footer.tsx": `'use client'

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
}`,

  // POSTCSS
  "postcss.config.js": `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,

  // TS CONFIG
  "tsconfig.json": `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`,

  // GITIGNORE
  ".gitignore": `# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts`,
};

// ============================================
// FUNÇÃO PARA CRIAR ARQUIVOS E PASTAS
// ============================================

function createProject() {
  const baseDir = process.cwd();
  console.log("📁 Criando projeto Prova 61 Landing Page em:", baseDir);
  console.log("");

  // Cria a estrutura de pastas
  const folders = [
    "src/app",
    "src/components/ui",
    "src/components/sections",
    "src/lib",
    "public/images",
    "public/fonts",
  ];

  folders.forEach((folder) => {
    const fullPath = path.join(baseDir, folder);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`✅ Pasta criada: ${folder}`);
    }
  });

  // Cria os arquivos
  Object.entries(files).forEach(([filePath, content]) => {
    const fullPath = path.join(baseDir, filePath);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(fullPath, content);
    console.log(`✅ Arquivo criado: ${filePath}`);
  });

  console.log("");
  console.log("🎉 PROJETO CRIADO COM SUCESSO!");
  console.log("");
  console.log("📋 Próximos passos:");
  console.log("1. cd prova61-landing");
  console.log("2. npm install");
  console.log("3. npm run dev");
  console.log("");
  console.log("🚀 Acesse: http://localhost:3000");
}

// ============================================
// EXECUTA O SCRIPT
// ============================================

createProject();
