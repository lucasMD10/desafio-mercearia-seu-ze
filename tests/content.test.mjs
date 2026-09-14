import test from 'node:test';
import assert from 'node:assert/strict';
import { activeOffers, saoPauloDate } from '../src/data/offers.js';
import { whatsappUrl } from '../src/data/store.js';
const base = { name: 'Produto de teste', category: 'Teste', unit: 'kg', price: 5, startsAt: '2026-09-14', endsAt: '2026-09-14', available: true };
test('validade respeita o dia em São Paulo e inclui o último dia', () => {
  assert.equal(saoPauloDate(new Date('2026-09-15T02:59:00Z')), '2026-09-14');
  assert.equal(activeOffers([base], new Date('2026-09-15T02:59:00Z')).length, 1);
  assert.equal(activeOffers([base], new Date('2026-09-15T03:00:00Z')).length, 0);
  assert.equal(activeOffers([base], new Date('2026-09-14T02:59:00Z')).length, 0);
});
test('ofertas inválidas ou indisponíveis não são publicadas', () => {
  const now = new Date('2026-09-14T12:00:00Z');
  for (const patch of [{ available: false }, { price: 0 }, { price: NaN }, { name: '' }, { unit: '' }, { category: '' }, { startsAt: '2026-02-30' }, { endsAt: '2026-09-13' }]) {
    assert.equal(activeOffers([{ ...base, ...patch }], now).length, 0);
  }
});
test('WhatsApp aceita número completo e não inventa contato', () => {
  assert.equal(whatsappUrl(null), null);
  assert.equal(whatsappUrl('1234'), null);
  assert.equal(whatsappUrl('+55 (41) 99999-0000', 'Olá!'), 'https://wa.me/5541999990000?text=Ol%C3%A1!');
});
