import { store, whatsappUrl } from '../data/store.js';
import { offers, activeOffers } from '../data/offers.js';
import { initMotion } from './motion.js';

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function initMenu() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navegacao');
  const mobile = matchMedia('(max-width: 900px)');
  button.hidden = false;
  nav.classList.add('menu-enabled');
  const close = () => { button.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    close();
    if (mobile.matches) {
      const target = document.querySelector(link.hash);
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { close(); button.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) close(); });
  mobile.addEventListener('change', close);
}

function renderStore() {
  const contact = whatsappUrl(store.whatsapp);
  if (contact) {
    document.querySelectorAll('[data-whatsapp], [data-whatsapp-final]').forEach(link => {
      link.href = contact; link.hidden = false; link.setAttribute('aria-label', 'Falar no WhatsApp');
      const label = link.querySelector('span'); if (label) label.textContent = 'Falar no WhatsApp';
    });
    document.querySelector('#contact-note').textContent = 'Tem alguma dúvida? Converse com a gente pelo WhatsApp.';
  }
  if (store.address) {
    const address = document.querySelector('#address');
    address.textContent = store.address;
    if (store.reference) address.append(element('p', store.reference));
    document.querySelector('#footer-contact>p').textContent = store.address;
    document.querySelector('#visit-actions').hidden = false;
    document.querySelector('#directions').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.name}, ${store.address}`)}`;
    document.querySelector('#copy-address').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(store.address); document.querySelector('#copy-status').textContent = 'Endereço copiado.'; }
      catch { document.querySelector('#copy-status').textContent = 'Não foi possível copiar automaticamente. Selecione o endereço acima para copiar.'; }
    });
    try {
      const url = new URL(store.mapEmbedUrl);
      if (url.protocol === 'https:' && ['www.google.com', 'maps.google.com'].includes(url.hostname) && url.pathname.startsWith('/maps/embed')) {
        const frame = element('iframe'); frame.src = url.href; frame.title = 'Localização da Mercearia do Seu Zé'; frame.loading = 'lazy'; frame.referrerPolicy = 'no-referrer-when-downgrade';
        document.querySelector('#map-panel').replaceChildren(frame);
      }
    } catch { /* No confirmed map: keep the informative panel. */ }
  }
  if (store.hours.length) {
    const hours = document.querySelector('#hours'); hours.replaceChildren();
    store.hours.forEach(({ label, value }) => { const row = element('div'); row.append(element('dt', label), element('dd', value)); hours.append(row); });
  }
  if (store.holidayNote) document.querySelector('#holiday-note').textContent = store.holidayNote;
  if (store.phone) {
    const digits = String(store.phone).replace(/\D/g, '');
    if (/^55\d{10,11}$/.test(digits)) {
      const phone = element('a', store.phone); phone.href = `tel:+${digits}`;
      document.querySelector('#footer-contact').append(element('br'), phone);
    }
  }
  if (store.address && store.phone) {
    const schema = element('script'); schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'GroceryStore', name: store.name, address: store.address, telephone: store.phone });
    document.head.append(schema);
  }
}

const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const date = value => value.split('-').reverse().join('/');
function renderOffers() {
  const list = document.querySelector('#offers-list'); list.replaceChildren();
  const current = activeOffers(offers);
  document.querySelector('#offers-empty').hidden = current.length > 0;
  current.forEach(offer => {
    const article = element('article', '', 'offer');
    // Local, versioned images only; optional while the product photo is pending.
    if (typeof offer.image === 'string' && /^assets\/images\/[\w.-]+\.(webp|png|jpe?g)$/i.test(offer.image)) {
      const image = element('img'); image.src = offer.image; image.alt = offer.name; image.width = 400; image.height = 400; image.loading = 'lazy'; article.append(image);
    }
    article.append(element('h3', offer.name), element('p', offer.unit, 'unit'));
    const price = element('p', '', 'price');
    if (Number.isFinite(offer.previousPrice) && offer.previousPrice > offer.price) price.append(element('del', money.format(offer.previousPrice)));
    price.append(document.createTextNode(`${money.format(offer.price)} / ${offer.unit}`)); article.append(price);
    article.append(element('p', `De ${date(offer.startsAt)} a ${date(offer.endsAt)}`, 'validity'));
    const url = whatsappUrl(store.whatsapp, `Olá! Gostaria de consultar a oferta de ${offer.name}.`);
    if (url) { const link = element('a', 'Consultar oferta', 'text-link'); link.href = url; article.append(link); }
    list.append(article);
  });
}

initMenu(); renderStore(); renderOffers(); initMotion();
document.querySelector('#year').textContent = new Date().getFullYear();
// Revalidate dates when returning to a tab and across midnight in São Paulo.
let renderedDay = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo' }).format(new Date());
function refreshOffers() {
  const day = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo' }).format(new Date());
  if (day !== renderedDay) { renderOffers(); renderedDay = day; }
}
setInterval(refreshOffers, 60_000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshOffers(); });
