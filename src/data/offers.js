// Sem preços fictícios. Consulte docs/IMPLEMENTACAO.md antes de cadastrar.
export const offers = [];

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
