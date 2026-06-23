export const CONSTANTS = {
  whatsapp: '55XXXXXXXXXXX',
  instagram: 'https://www.instagram.com/fenix_veiculos_laranjal',
  facebook: 'https://www.facebook.com/FenixMultimarcasLaranjal',
  address: 'Laranjal, MG',
  hours: 'Segunda a Sábado, 8h às 18h',
  email: '',
  cnpj: '',
  mapsEmbedUrl: '',
  siteUrl: 'https://fenixveiculos.com.br',
}

export const WHATSAPP_URL = (message?: string) => {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais!')
  return `https://wa.me/${CONSTANTS.whatsapp}?text=${text}`
}
