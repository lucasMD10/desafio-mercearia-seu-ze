// V2: cenário acadêmico autorizado. Contatos demonstrativos não enviam mensagens.
export const store = {
  academic: true,
  slogan: 'O cuidado do bairro. O sabor de escolher bem.',
  name: 'Mercearia do Seu Zé',
  city: 'Curitiba',
  region: 'PR',
  address: 'Av. Sete de Setembro, 82 — Curitiba, PR',
  reference: 'Perto do Batel Grill.',
  whatsapp: '5541900000000',
  phone: '+55 (41) 3000-0000',
  hours: [
    { label: 'Segunda a sexta', value: '7h às 20h' },
    { label: 'Sábado', value: '7h às 18h' },
    { label: 'Domingo', value: '8h às 13h' },
    { label: 'Feriados', value: '8h às 14h' },
  ],
  holidayNote: 'No feriado, um pouco mais de calma: esperamos você das 8h às 14h.',
  social: [{ name: 'Instagram', handle: '@seuze.mercearia' }, { name: 'Facebook', handle: 'Mercearia do Seu Zé' }],
  mapEmbedUrl: null, // URL HTTPS de incorporação do Google Maps.
};

export function whatsappUrl(number, message = 'Olá! Gostaria de saber mais sobre a mercearia.') {
  const digits = String(number ?? '').replace(/\D/g, '');
  if (!/^55\d{10,11}$/.test(digits)) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
