# Pack 2 — implementação inicial

## Decisões

HTML5, CSS e ES modules nativos. O escopo de uma rota não necessita de React para oferecer animações fluidas. As transições usam transform e opacity, IntersectionObserver e requestAnimationFrame, sem bloquear a rolagem. A amplitude do parallax fica entre -12 e +12 px, apenas no desktop. A preferência por movimento reduzido é respeitada inclusive quando alterada com a página aberta.

Paleta preservada: #004E36, #006F46, #2C8746, #FAF5EB, #F8F7F5 e #2E2D2B. Newsreader e Manrope são carregadas por Google Fonts, com Georgia e Arial como alternativas caso a rede esteja indisponível.

Ordem implementada: cabeçalho, hero com painel sobreposto, atalhos, história, ofertas, produtos, visita, contato e rodapé. No mobile o hero empilha foto e texto. Os atalhos usam divisórias e tipografia; os recortes fotográficos ficam para a substituição pelas imagens reais. O contato final usa creme, provisoriamente sem uma nova fotografia. Não há emojis, KPIs, carrinho ou cadastro.

## Dados da loja

Editar `src/data/store.js`. Campos `null` ou listas vazias mantêm textos de indisponibilidade, sem links falsos. O endereço habilita rota e cópia; um WhatsApp brasileiro válido habilita os CTAs. Horários são apresentados como informados, sem inferir “aberto agora”. O mapa incorporado só aceita URL HTTPS do Google Maps em `/maps/embed` e exige endereço. Sem mapa confirmado há um painel informativo, não um mapa fictício.

O JSON-LD GroceryStore só é inserido quando há endereço e telefone. Canonical, URL Open Graph e demais dados locais devem ser finalizados após definir a URL pública e confirmar os dados. Perfis sociais não foram adicionados sem URLs oficiais.

## Ofertas

Editar o array `offers` em `src/data/offers.js`. Campos:

| Campo | Regra |
|---|---|
| name, category, unit | Strings não vazias |
| price | Número positivo em reais |
| previousPrice | Opcional, verdadeiro e maior que o preço atual |
| startsAt, endsAt | Datas reais no formato YYYY-MM-DD, inclusivas |
| available | true apenas enquanto houver disponibilidade |
| image | Opcional; caminho local assets/images/nome.webp, png ou jpg |

Ofertas futuras, vencidas, indisponíveis e inválidas são filtradas. O dia comercial usa America/Sao_Paulo. A virada do dia é reavaliada a cada minuto e ao reabrir a aba. A grade não é reconstruída desnecessariamente para preservar o foco dos links. O array está vazio porque não foram fornecidas ofertas reais. Dados usados nos testes são exclusivos dos testes e não chegam à página.

## Imagem provisória

`assets/images/feira-ilustrativa.webp`: imagem gerada com a ferramenta de imagens integrada, 1536 × 1024, convertida em WebP com qualidade 85 (aproximadamente 208 KB). Serve de composição ilustrativa, sem representar a loja ou produtos confirmados. Reutilizada temporariamente nas seções editoriais; substituir por fotografias autorizadas distintas.

Brief utilizado: fotografia editorial natural de frutas, verduras e pães brasileiros sobre bancada de madeira; luz da manhã, alimentos concentrados à direita para permitir painel à esquerda; sem pessoas, fachada, marcas, textos ou colagem. As legendas e o rodapé identificam a natureza ilustrativa.

## Verificação

- `npm test`: três testes aprovados — validade inclusiva em São Paulo e virada do dia; exclusão de ofertas inválidas/indisponíveis; sanitização e ausência de WhatsApp.
- HTML inspecionado para IDs duplicados, âncoras e existência de recursos locais.
- JavaScript verificado com `node --check`.
- Servidor local executado com `npm start`; sem instalação de dependências.
- Não foi possível concluir inspeção visual automatizada: Chromium ausente e download retornou HTTP 502. Nenhuma pontuação de desempenho ou conformidade WCAG é alegada.

## Próxima revisão

1. Testar visualmente em 390, 768 e 1440 px, e com ampliação de texto de 200%.
2. Testar menu com teclado, Escape e mudança de largura; verificar foco, leitor de tela e contraste.
3. Conferir as fontes carregadas, recortes das imagens e movimento reduzido.
4. Inserir informações comerciais e fotografias confirmadas.
5. Testar rotas, cópia do endereço e WhatsApp no dispositivo real.
6. Medir desempenho e publicar no serviço escolhido pela equipe.

O servidor incluído serve apenas para desenvolvimento local, em 127.0.0.1. Para hospedar, basta servir os arquivos estáticos da aplicação; não é necessário backend.
