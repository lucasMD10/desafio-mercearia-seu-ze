// Preencher apenas com dados confirmados. null mantém o estado honesto de indisponibilidade.
export const store = {
  name: 'Mercearia do Seu Zé',
  city: 'Curitiba',
  region: 'PR',
  address: null,
  reference: null,
  whatsapp: null, // Formato internacional: país + DDD + número.
  phone: null,
  hours: [], // { label: 'Segunda a sexta', value: '08h às 18h' }
  holidayNote: null,
  mapEmbedUrl: null, // URL HTTPS de incorporação do Google Maps.
};

export function whatsappUrl(number, message = 'Olá! Gostaria de saber mais sobre a mercearia.') {
  const digits = String(number ?? '').replace(/\D/g, '');
  if (!/^55\d{10,11}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
