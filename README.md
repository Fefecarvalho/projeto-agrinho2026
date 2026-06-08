# Agrinho 2026 - Tecnologia e Sustentabilidade no Campo 🌱🛰️

Este é um projeto web interativo desenvolvido especialmente para o **Programa Agrinho 2026**. O site foi criado com o objetivo de conscientizar estudantes, professores e comunidades sobre o impacto real da **tecnologia de ponta** (como Inteligência Artificial, drones e automação) aliada às **práticas sustentáveis** no agronegócio moderno, mostrando que a inovação é o caminho para alimentar o mundo em harmonia com a natureza.

---

## 🚀 Funcionalidades Principais

O projeto conta com uma interface moderna, visualmente atraente (estilo clean/orgânico) e com diversos recursos interativos controlados inteiramente por JavaScript puro (Vanilla JS):

* **🌓 Modo Escuro Nativo (Dark Mode):** Alterne entre o tema claro e escuro com um único clique. A preferência de cor do usuário fica salva no navegador (`localStorage`), mantendo a escolha mesmo se a página for atualizada.
* **📱 Menu Hambúrguer Responsivo:** Sistema de navegação otimizado e adaptável para dispositivos móveis (smartphones e tablets).
* **🔄 Carrossel de Destaques:** Transição automatizada temporizada (4 segundos) que exibe mensagens-chave sobre a evolução do campo.
* **🃏 Cards Expansíveis (Acordeão):** Mecanismo de clique nos pilares da sustentabilidade para revelar informações profundas sem poluir o visual inicial da página.
* **🌱 Quiz de Consciência Ambiental:** Jogo de perguntas e respostas dinâmico focado em práticas do agro sustentável, com validação de respostas e feedback visual instantâneo (Verde para correto, Vermelho para incorreto).
* **🧮 Calculadora de Economia Hídrica:** Ferramenta interativa que realiza uma simulação baseada em dados reais de campo, calculando quantos litros de água seriam poupados por semana utilizando irrigação inteligente por gotejamento na área inserida pelo usuário.
* **🌦️ Simulador de Cenários Climáticos:** Demonstração prática do comportamento de sensores de uma fazenda inteligente ao interagir com três condições climáticas extremas: Sol Intenso, Chuva Forte e Seca Prolongada.

---

## 🛠️ Tecnologias e Boas Práticas Utilizadas

* **HTML5 Semântico:** Uso correto de tags como `<header>`, `<main>`, `<section>`, `<nav>` e `<aside>`, garantindo uma estrutura limpa e otimizada para motores de busca (SEO).
* **CSS3 Avançado (Moderno):**
  * **Custom Properties (Variáveis CSS):** Centralização de toda a paleta de cores e transições do projeto, facilitando a manutenção e a troca de temas (Light/Dark).
  * **Layouts Flexíveis:** Uso combinado de **CSS Grid Layout** e **Flexbox** para criar um design totalmente responsivo que se ajusta a qualquer tamanho de tela sem quebrar.
  * **Design Orgânico:** Uso de bordas arredondadas e suavizadas (`--radius-organico`), transmitindo o conceito de natureza e tecnologia integrada.
* **JavaScript Moderno (ES6+):** Manipulação eficiente da árvore do DOM (Document Object Model), escutadores de eventos (`addEventListener`), funções de matriz (`forEach`) e manipulação de strings com Template Literals.

---

## 📂 Estrutura do Projeto

Para garantir que o ecossistema do site funcione perfeitamente, certifique-se de manter os três arquivos principais no **mesmo diretório (pasta)**:

```text
├── index.html       # Estrutura de conteúdo e seções do site
├── style.css        # Identidade visual, regras de layout e Modo Escuro
├── script.js        # Toda a inteligência, interatividade e lógica do sistema
└── README.md        # Documentação e guia do projeto (este arquivo)

## 📝 Créditos e Atribuições
* **Imagens de fundo:** Obtidas gratuitamente através do banco de imagens Unsplash.
* **Textos e Base de Código:** Desenvolvidos de forma autoral com o auxílio do assistente de IA Gemini (Prompt utilizado: *"Ajude-me a estruturar um painel interativo em JS com quiz, calculadora de água e simulador de clima focado no tema agronegócio sustentável"*).