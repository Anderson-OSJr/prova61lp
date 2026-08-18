// Dados centrais do site. Ajuste aqui e todo o site é atualizado.
export const siteConfig = {
  name: "Prova 61",
  fullName: "Prova 61 - Educação e Desenvolvimento",
  description:
    "Desenvolvimento de software, modelagem 3D técnica e agentes de IA para pequenas e médias empresas.",
  url: "https://www.prova61.com.br",

  whatsappNumber: "5512982080181",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de saber mais sobre os serviços da Prova 61.",

  email: "contato@prova61.com.br",

  location: {
    street: "Av. Padre Francisco Salles Colturato, 470 - Loja 4B",
    city: "Araraquara",
    state: "SP",
    zip: "14802-000",
    country: "Brasil",
    label: "Av. Padre Francisco Salles Colturato, 470 - Loja 4B, Araraquara - SP",
    mapsQuery:
      "Av. Padre Francisco Salles Colturato, 470, Loja 4B, Araraquara - SP, 14802-000",
  },

  myRobotSchool: {
    name: "My Robot School Araraquara",
    url: "https://www.myrobotararaquara.com.br",
  },

  social: {
    // Preencher quando o perfil for criado
    instagram: "",
  },
} as const

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`

export const mapsSearchHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.location.mapsQuery
)}`

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.location.mapsQuery
)}&output=embed`
