# Planejamento do projeto

## 1. Visão do produto

A Mercearia do Seu Zé precisa de uma presença digital mais completa do que uma página escolar com conteúdo estático e aparência genérica. O produto será uma página institucional de uma só rota, responsiva e orientada a ações locais.

A função principal é responder rapidamente a cinco perguntas:

1. O que é a Mercearia do Seu Zé?
2. O que encontro nela?
3. Quais são as ofertas atuais?
4. Onde fica e quando abre?
5. Como entro em contato?

### Promessa de experiência

“Tudo o que você precisa saber sobre a mercearia do bairro, com a mesma clareza e proximidade do atendimento do Seu Zé.”

## 2. Objetivos

### Objetivos do usuário

- Confirmar rapidamente endereço e horário.
- Ver promoções sem precisar procurar em redes sociais.
- Entender o tipo e a qualidade dos produtos oferecidos.
- Abrir uma conversa no WhatsApp com poucos toques.
- Criar confiança antes da primeira visita.

### Objetivos do negócio

- Ser encontrado por novos moradores e clientes da região.
- Transformar visitas ao site em visitas à loja ou conversas no WhatsApp.
- Comunicar tradição sem parecer ultrapassado.
- Dar visibilidade a ofertas e produtos frescos.
- Criar uma base que possa evoluir sem reconstrução completa.

### Critérios de sucesso

- As informações essenciais aparecem sem esforço e têm texto legível no celular.
- Endereço, horário e WhatsApp são acessíveis em até duas interações.
- A identidade é reconhecível pelo uso consistente dos verdes, do creme e da tipografia.
- A página transmite qualidade por composição, fotografia e movimento, sem excesso de elementos.
- A versão final alcança boas práticas de acessibilidade, SEO local e desempenho.

## 3. Escopo

### Incluído

- Página inicial institucional responsiva.
- Apresentação da mercearia.
- Ofertas da semana.
- Destaques de produtos e serviços.
- História e valores.
- Horários, endereço, ponto de referência e mapa.
- Telefone, WhatsApp e redes sociais.
- Metadados de compartilhamento e SEO local.
- Animações progressivas e acessíveis.

### Fora do escopo desta primeira versão

- Loja virtual, carrinho e pagamento.
- Cadastro ou autenticação de clientes.
- Estoque em tempo real.
- Painel administrativo.
- Programa de fidelidade.
- Avaliações inventadas ou indicadores sem fonte.
- KPIs públicos e cards estatísticos decorativos.

## 4. Público e contexto de uso

### Público principal

Jovens adultos, universitários e novos moradores do Centro de Curitiba e bairros próximos. A maior parte das consultas tende a acontecer pelo celular, muitas vezes em deslocamento.

### Público secundário

Filhos e netos de clientes tradicionais, além de moradores que já conhecem a loja, mas precisam consultar informações práticas.

### Necessidades de acessibilidade

- Contraste mínimo compatível com WCAG AA.
- Fonte de corpo nunca menor que 16 px na versão principal.
- Navegação completa por teclado.
- Estados de foco visíveis.
- Textos alternativos objetivos para imagens.
- Sem informação transmitida apenas por cor.
- Redução ou remoção de movimento quando solicitada pelo sistema.

## 5. Arquitetura da informação

| Ordem | Seção | Conteúdo | Ação principal |
|---:|---|---|---|
| 1 | Cabeçalho | Marca, navegação, horário resumido e WhatsApp | Falar no WhatsApp |
| 2 | Hero | Promessa principal, breve explicação e fotografia | Ver ofertas |
| 3 | Atalhos úteis | Ofertas, produtos frescos e contato | Ir para a seção |
| 4 | Nossa história | Tradição, proximidade e qualidade | Conhecer a mercearia |
| 5 | Ofertas da semana | Produto, unidade, preço, validade e disponibilidade | Consultar oferta |
| 6 | Produtos e atendimento | Categorias essenciais e diferenciais reais | Ver o que encontra |
| 7 | Visite a mercearia | Endereço, referência, horários e mapa | Como chegar |
| 8 | Contato final | Convite curto e WhatsApp | Iniciar conversa |
| 9 | Rodapé | Contato, navegação, redes e direitos | Acesso secundário |

### Navegação proposta

- Início
- Ofertas
- Produtos
- Nossa história
- Visite
- Falar no WhatsApp

## 6. Estratégia de conteúdo

### Tom de voz

- Próximo, direto e respeitoso.
- Brasileiro e natural, sem texto corporativo artificial.
- Confiante, mas sem promessas exageradas.
- Acolhedor, sem infantilização.

### Diretriz para títulos

Títulos devem ser curtos, concretos e ligados ao cotidiano. Exemplos de direção, ainda não definitivos:

- “O frescor do bairro, pertinho de você.”
- “Oferta boa é a que cabe na rotina.”
- “Tudo para o dia a dia, com atendimento de verdade.”

### Diretriz para fotografias

- Preferir fotos reais da loja, equipe e produtos.
- Luz natural, cores quentes e composição limpa.
- Evitar banco de imagens com aparência corporativa ou estrangeira demais.
- Fotografar alimentos com textura e proximidade, seguindo a força editorial das referências.
- Manter área livre na foto do hero para acomodar o painel de texto.

## 7. Sistema visual

### 7.1 Paleta

| Token futuro | Valor | Função | Regra de contraste |
|---|---:|---|---|
| `brand-900` | `#004E36` | Marca, cabeçalho, rodapé | Texto branco: 9,80:1 |
| `brand-700` | `#006F46` | Botões, links, ativo | Texto branco: 6,25:1 |
| `brand-500` | `#2C8746` | Hover e apoio | Branco atende AA em texto normal no limite; preferir uso em áreas maiores ou com peso alto |
| `cream-100` | `#FAF5EB` | Fundo editorial | Texto grafite: 12,66:1 |
| `paper-100` | `#F8F7F5` | Fundo geral | Texto grafite: 12,85:1 |
| `white` | `#FFFFFF` | Painéis e texto invertido | Conforme combinação |
| `ink-900` | `#2E2D2B` | Texto principal | Branco: 13,76:1 |
| `ink-600` | `#565553` | Texto secundário | Branco: 7,45:1 |
| `offer-500` | `#F4C542` | Oferta pontual | Usar texto grafite: 8,46:1 |

Distribuição recomendada: superfícies claras dominantes; verde escuro concentrado no cabeçalho, rodapé e chamadas fortes; verde médio em ações; amarelo limitado a marcadores promocionais. O amarelo não deve virar uma segunda identidade.

### 7.2 Tipografia

- **Newsreader** para `h1`, `h2`, frases de marca e grandes chamadas.
- **Manrope** para navegação, corpo, botões, preços e informações funcionais.
- Fallbacks: `Georgia, serif` e `Arial, sans-serif`.

Escala prevista:

| Elemento | Desktop | Mobile |
|---|---:|---:|
| Título principal | 64–80 px | 42–52 px |
| Título de seção | 44–56 px | 34–42 px |
| Subtítulo | 24–30 px | 22–26 px |
| Corpo destacado | 18–20 px | 17–18 px |
| Corpo | 16–18 px | 16 px |
| Rótulo e navegação | 14–16 px | 14–16 px |

### 7.3 Grid e espaçamento

- Grade desktop: 12 colunas.
- Grade tablet: 8 colunas.
- Grade mobile: 4 colunas.
- Largura máxima de conteúdo: 1280 px.
- Margem lateral: 64 px em desktop, 32 px em tablet e 20 px em mobile.
- Unidade base de espaçamento: 8 px.
- Intervalo vertical entre seções: 96–144 px em desktop e 64–88 px em mobile.
- Texto corrido limitado a aproximadamente 60–70 caracteres por linha.

### 7.4 Formas e interface

- Botões de geometria firme, com raio pequeno de 2–6 px.
- Painéis editoriais retangulares, sem sombras pesadas.
- Divisórias finas e espaços em branco no lugar de caixas excessivas.
- Ícones em SVG, com a mesma espessura de traço.
- Sem emojis como ícones.
- Sem KPIs ou blocos numéricos decorativos.
- Ofertas são conteúdo comercial real e podem usar uma grade de produtos; não devem imitar dashboard.

## 8. Composição por seção

### Cabeçalho

Cabeçalho fixo de duas faixas inspirado na organização do Whole Foods. A faixa principal usa o verde institucional e reúne marca, informação prática e CTA. A faixa secundária organiza a navegação da página. Em telas menores, vira cabeçalho compacto com menu e CTA visível.

### Hero

Imagem em largura total, com painel branco sobreposto à esquerda. O título serifado domina o painel. Abaixo, texto curto e duas ações: uma principal preenchida e uma secundária textual. A composição deve mostrar imediatamente comida fresca e proximidade.

### Atalhos úteis

Três faixas horizontais com texto e recorte fotográfico. Elas têm função de navegação e não são cards aleatórios. No celular, tornam-se uma lista vertical compacta.

### História

Composição 50/50, fotografia de um lado e bloco creme do outro. A alternância entre imagem e texto estabelece o ritmo editorial da referência principal.

### Ofertas

Título, explicação e uma grade estática de até quatro ofertas por linha. Cada oferta mostra imagem, produto, unidade, preço atual, preço anterior quando real, validade e condição de estoque. Não haverá rotação automática.

### Produtos e atendimento

Um grande bloco fotográfico com texto editorial. A ideia é falar das categorias e do atendimento do bairro sem preencher a página com dezenas de pequenos cartões.

### Visita

Área dividida: dados completos à esquerda e mapa à direita. Horários são apresentados em lista simples. Endereço e mapa recebem ações claras de copiar ou abrir rota, sem inventar status ou números.

### Contato final

Fotografia em largura ampla, leve camada verde e chamada curta. O botão de WhatsApp é a única ação principal.

### Rodapé

Fundo `#004E36`, marca, contato, navegação, redes e informações legais. Ícones serão SVG oficiais ou consistentes com a biblioteca adotada.

## 9. Movimento e interação

A Lune é referência para o ritmo, não para o tema escuro ou para o vídeo de entrada.

### Movimento aprovado

- Entrada do hero com opacidade e deslocamento curto.
- Título principal revelado por linha, com atraso de aproximadamente 80–100 ms.
- Imagens reveladas por máscara ou `clip-path` discreto.
- Elementos de seção com transição de 650–900 ms.
- Parallax limitado a cerca de 24 px em fotografias grandes, apenas em desktop.
- Hover de links com sublinhado progressivo ou pequeno deslocamento de seta.
- Redução sutil da segunda faixa do cabeçalho durante rolagem para liberar espaço.
- Curva base: `cubic-bezier(0.22, 1, 0.36, 1)`.

### Movimento rejeitado

- Loader obrigatório.
- Vídeo automático ou som.
- Cursor personalizado que prejudique usabilidade.
- Texto em animação contínua.
- Carrossel automático.
- Movimento amplo em elementos funcionais.
- Animações que atrasem o acesso a horários, endereço ou contato.

### Acessibilidade de movimento

Com `prefers-reduced-motion: reduce`, a página elimina parallax e deslocamentos, mantém o conteúdo visível e usa somente transições instantâneas ou muito curtas.

## 10. Regras de negócio e conteúdo

### Ofertas

- Campos mínimos: nome, categoria, unidade ou peso, preço, início, término e disponibilidade.
- Preço anterior só aparece quando for verdadeiro.
- A unidade deve acompanhar o preço: `un.`, `kg`, `500 g` etc.
- Toda área promocional mostra “Ofertas válidas enquanto durarem os estoques”.
- Oferta expirada não permanece como atual.

### Horários

- Exibir horários confirmados por dia ou grupo de dias.
- Feriados devem ter aviso próprio quando houver alteração.
- Um possível texto “Aberto agora” só será implementado se os horários definitivos forem fornecidos e a regra usar o fuso `America/Sao_Paulo`.

### WhatsApp e telefone

- O número do link deve conter apenas código do país, DDD e dígitos.
- A mensagem inicial deve ser curta e neutra.
- O texto do botão precisa indicar claramente a ação.
- Não afirmar atendimento imediato ou prazo de resposta sem confirmação.

### Endereço e mapa

- Nome, endereço e telefone devem ser idênticos em todas as áreas da página.
- O mapa deve ter título acessível e alternativa em link para abrir a rota.
- Ponto de referência deve ser texto real, não inventado.

### Redes sociais

- Exibir somente perfis oficiais confirmados.
- Ícones sem perfil válido não serão publicados.

## 11. Plano técnico para o próximo pack

### Base recomendada

- HTML5 semântico.
- CSS organizado por tokens, base, layout, componentes e utilitários.
- JavaScript modular e progressivo, sem dependência obrigatória de framework.
- Conteúdo de ofertas separado da marcação para facilitar atualizações.
- SVG para ícones.

### Estrutura prevista

```text
assets/
├── icons/
└── images/
src/
├── data/
│   └── offers.js
├── scripts/
│   ├── main.js
│   └── motion.js
└── styles/
    ├── tokens.css
    ├── base.css
    ├── layout.css
    ├── components.css
    └── responsive.css
index.html
```

Esta estrutura é uma previsão. Os arquivos de implementação não serão criados antes da aprovação desta fase.

## 12. Qualidade e validação

### Desempenho

- Imagem principal otimizada e dimensionada corretamente.
- Imagens fora da primeira dobra com carregamento tardio.
- Evitar bibliotecas grandes apenas para animação.
- Reservar dimensões das mídias para reduzir deslocamentos de layout.
- Meta de LCP abaixo de 2,5 s e CLS abaixo de 0,1 em condições razoáveis.

### SEO local

- Título e descrição específicos da mercearia e de Curitiba.
- Uma única hierarquia clara de títulos.
- Dados estruturados `GroceryStore` ou `LocalBusiness`.
- Nome, endereço e telefone consistentes.
- Texto alternativo e Open Graph.
- Links reais para mapa, telefone, WhatsApp e redes.

### Testes

- Desktop, tablet e celular.
- Chrome, Edge e Firefox atuais.
- Navegação por teclado.
- Leitor de tela em fluxos essenciais.
- Contraste e foco.
- Movimento reduzido.
- Links externos e mensagens do WhatsApp.

## 13. Dependências e pendências

Antes da implementação final, a equipe precisa confirmar:

1. Endereço e ponto de referência.
2. Horários completos e regra de feriados.
3. Telefone e WhatsApp.
4. Slogan.
5. Produtos e ofertas reais.
6. Fotografias disponíveis e autorização de uso.
7. Redes sociais.
8. Informações profissionais de todos os integrantes.

## 14. Sequência de execução

1. Aprovar arquitetura, paleta, tipografia e wireframes.
2. Reunir dados reais e fotografias.
3. Criar a estrutura semântica completa.
4. Aplicar tokens, grid e responsividade.
5. Integrar ofertas e informações práticas.
6. Adicionar as animações aprovadas.
7. Fazer testes de conteúdo, acessibilidade, desempenho e SEO.
8. Revisar o README e os mini currículos.
9. Publicar e entregar o link do repositório.

