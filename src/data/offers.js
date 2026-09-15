// Catálogo fictício do estudo acadêmico. Datas comerciais continuam sendo validadas.
export const offers = [
  { id: 'pao', name: 'Pão de fermentação natural', category: 'Padaria', unit: '500 g', price: 18.90, previousPrice: 23.90, description: 'Casca crocante, miolo macio e fermentação lenta.', image: 'assets/images/pao.webp', label: 'Feito com tempo' },
  { id: 'morango', name: 'Morangos selecionados', category: 'Hortifruti', unit: '250 g', price: 12.90, previousPrice: 16.90, description: 'Doçura e frescor para a sua mesa.', image: 'assets/images/morango.webp', label: 'Escolha da estação' },
  { id: 'queijo', name: 'Queijo artesanal meia cura', category: 'Empório', unit: '300 g', price: 29.90, previousPrice: 36.90, description: 'Sabor delicado e textura que derrete na boca.', image: 'assets/images/queijo.webp', label: 'Seleção do Seu Zé' },
  { id: 'cafe', name: 'Café especial da casa', category: 'Empório', unit: '250 g', price: 32.90, previousPrice: 39.90, description: 'Torra média, aroma intenso e notas de chocolate.', image: 'assets/images/cafe.webp', label: 'Para começar bem' },
].map(item => ({ ...item, startsAt: '2026-09-15', endsAt: '2026-09-21', available: true }));

// A apresentação acadêmica usa uma data fixa para manter a vitrine reproduzível.
export const demoDate = new Date('2026-09-15T12:00:00-03:00');

export function saoPauloDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const get = type => parts.find(p => p.type === type).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}

function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function activeOffers(items, now = new Date()) {
  const today = saoPauloDate(now);
  return items.filter(item => item && item.available === true &&
    typeof item.name === 'string' && item.name.trim() &&
    typeof item.category === 'string' && item.category.trim() &&
    typeof item.unit === 'string' && item.unit.trim() &&
    Number.isFinite(item.price) && item.price > 0 &&
    validDate(item.startsAt) && validDate(item.endsAt) &&
    item.startsAt <= today && today <= item.endsAt);
}
