# Mercearia do Seu Zé

Cartão de visitas digital para uma mercearia de bairro em Curitiba, com foco em proximidade, confiança, produtos frescos e acesso rápido às informações que realmente ajudam o cliente: ofertas, horário, endereço, localização e WhatsApp.

## Estado atual

**Pack 1 — planejamento e wireframes concluídos.**

Nesta etapa ainda não há HTML, CSS ou JavaScript. Primeiro foram definidos a direção visual, a arquitetura da informação, as regras de conteúdo, as regras de movimento e os wireframes que orientarão a implementação da tela no próximo pack.

## Objetivo do projeto

Criar uma página institucional completa, moderna e responsiva para colocar a Mercearia do Seu Zé no ambiente digital. A experiência deve funcionar como uma extensão da loja física: simples de entender, acolhedora, confiável e útil tanto para clientes antigos quanto para quem acabou de chegar ao bairro.

## Público-alvo

- Jovens adultos, universitários e novos moradores do Centro de Curitiba e bairros próximos.
- Filhos e netos de clientes tradicionais que procuram informações da loja pelo celular.
- Moradores da região que desejam consultar ofertas, horário, localização ou iniciar uma conversa no WhatsApp.

## Direção visual

A identidade combina duas referências com funções diferentes:

- [Whole Foods Market](https://www.wholefoodsmarket.com/): referência principal para cores, hierarquia tipográfica, distribuição dos conteúdos, uso de fotografias e alternância entre blocos editoriais.
- [Lune Croissanterie](https://lunecroissanterie.com/): referência de movimento, fluidez, ritmo de rolagem, revelação de textos e imagens e acabamento contemporâneo.

O resultado pretendido não é uma cópia dos sites. A página terá personalidade própria e adequada a uma mercearia brasileira de bairro.

### Paleta principal

| Papel | Cor | Uso previsto |
|---|---:|---|
| Verde institucional | `#004E36` | Cabeçalho, rodapé e grandes áreas de marca |
| Verde de ação | `#006F46` | Botões, links principais e estados ativos |
| Verde de apoio | `#2C8746` | Hover, detalhes e pequenos destaques |
| Creme quente | `#FAF5EB` | Seções editoriais e fundos acolhedores |
| Branco suave | `#F8F7F5` | Fundo geral e respiro visual |
| Branco | `#FFFFFF` | Painéis de conteúdo e contraste |
| Grafite | `#2E2D2B` | Textos principais |
| Cinza de apoio | `#565553` | Textos secundários e observações |
| Amarelo de oferta | `#F4C542` | Destaques promocionais pontuais, nunca como cor dominante |

### Tipografia proposta

- **Newsreader:** títulos editoriais, chamada principal e frases de marca.
- **Manrope:** navegação, parágrafos, preços, botões e informações práticas.

As duas são fontes abertas e cumprem papéis semelhantes às famílias serifada e sans-serif observadas nas referências.

## Estrutura planejada da página

1. Cabeçalho fixo com marca, navegação e acesso ao WhatsApp.
2. Hero fotográfico com painel editorial, apresentação curta e chamadas para ofertas e localização.
3. Faixa de atalhos úteis para ofertas, produtos frescos e contato.
4. Seção de história e proposta de valor em composição dividida entre texto e fotografia.
5. Ofertas da semana com produtos, preços, validade e aviso de disponibilidade.
6. Faixa editorial sobre produtos e atendimento de bairro.
7. Seção “Visite a mercearia” com endereço, horários e mapa.
8. Chamada final para WhatsApp.
9. Rodapé com navegação, contato e redes sociais.

## Regras que orientam o projeto

- Não usar emojis como ícones. A interface usará ícones SVG consistentes.
- Não criar KPIs, estatísticas ou cards sem função real.
- Não usar carrossel automático, vídeo de abertura, som ou loader que bloqueie o conteúdo.
- Priorizar leitura rápida, contraste, navegação por teclado e uso no celular.
- Usar animação como apoio à hierarquia, com alternativa para `prefers-reduced-motion`.
- Exibir somente endereço, horários, contatos e preços confirmados.
- Manter ofertas com período de validade e aviso de disponibilidade de estoque.
- Direcionar o WhatsApp por link oficial com número sanitizado e mensagem inicial curta.
- Preservar consistência local de nome, endereço e telefone para SEO.

## Documentação

- [Planejamento detalhado](docs/PLANEJAMENTO.md)
- [Análise das referências visuais](docs/REFERENCIAS-VISUAIS.md)
- [Leitura e anotações dos wireframes](docs/WIREFRAME.md)
- [Wireframe desktop](docs/wireframe-desktop.svg)
- [Wireframe mobile](docs/wireframe-mobile.svg)

### Prévia dos wireframes

#### Desktop

![Wireframe desktop da Mercearia do Seu Zé](docs/wireframe-desktop.svg)

#### Mobile

![Wireframe mobile da Mercearia do Seu Zé](docs/wireframe-mobile.svg)

## Estrutura do repositório nesta fase

```text
desafio-mercearia-seu-ze/
├── README.md
├── assets/
│   └── images/
│       └── .gitkeep
└── docs/
    ├── PLANEJAMENTO.md
    ├── REFERENCIAS-VISUAIS.md
    ├── WIREFRAME.md
    ├── wireframe-desktop.svg
    └── wireframe-mobile.svg
```

Os arquivos de interface serão criados somente no próximo pack, após a aprovação do planejamento e do wireframe.

## Plano de execução

| Fase | Resultado | Estado |
|---|---|---|
| 1. Descoberta | Requisitos, referências e restrições consolidados | Concluída |
| 2. Planejamento | Arquitetura, identidade, conteúdo, movimento e regras | Concluída |
| 3. Wireframe | Versões desktop e mobile documentadas | Concluída |
| 4. Interface | HTML semântico e estrutura completa da página | Próximo pack |
| 5. Estilo | CSS responsivo, tokens visuais e componentes | Pendente |
| 6. Interações | JavaScript progressivo e animações acessíveis | Pendente |
| 7. Validação | Responsividade, acessibilidade, SEO e desempenho | Pendente |
| 8. Entrega | Revisão final e publicação | Pendente |

## Equipe

| Integrante | Informações disponíveis nesta fase |
|---|---|
| Lucas Marcondes | Engenharia de Software; desenvolvimento, Git/GitHub, dados e automação |
| Daniel | Apoio na análise e no GitHub; demais informações profissionais a confirmar |
| Joaquim | Informações profissionais e links a confirmar |
| Rafael | Informações profissionais e links a confirmar |
| Rafael Ribeiro | Informações profissionais e links a confirmar |
| Fábio | Informações profissionais e links a confirmar |

Antes da entrega acadêmica, o mini currículo e os links profissionais de cada integrante deverão ser completados.

## Dados ainda necessários

- Endereço completo e ponto de referência.
- Horários de segunda a sexta, sábado, domingo e feriados.
- Telefone e WhatsApp.
- Produtos e preços reais das ofertas.
- Slogan definitivo.
- Redes sociais.
- Fotografias autorizadas da fachada, interior, equipe e produtos.
- Informações profissionais e links dos integrantes.
