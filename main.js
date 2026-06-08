document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. MODO ESCURO (DARK MODE)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verifica se o usuário já tinha uma preferência salva
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Salva a preferência do usuário
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });

    // ==========================================================================
    // 2. MENU HAMBÚRGUER RESPONSIVO
    // ==========================================================================
    const menuToggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link dele
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // ==========================================================================
    // 3. CARROSSEL AUTOMÁTICO
    // ==========================================================================
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;

    function showSlide(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[index].classList.add('active');
    }

    function nextSlide() {
        if (carouselItems.length > 0) {
            currentSlide = (currentSlide + 1) % carouselItems.length;
            showSlide(currentSlide);
        }
    }

    // Troca de slide a cada 4 segundos
    setInterval(nextSlide, 4000);

    // ==========================================================================
    // 4. CARDS EXPANSÍVEIS (Sustentabilidade)
    // ==========================================================================
    const expandableCards = document.querySelectorAll('.card-expandable');

    expandableCards.forEach(card => {
        card.style.cursor = 'pointer'; // Feedback visual de clique
        
        card.addEventListener('click', () => {
            const shortText = card.querySelector('.card-short');
            const fullText = card.querySelector('.card-full');
            
            if (fullText.classList.contains('hidden')) {
                fullText.classList.remove('hidden');
                shortText.classList.add('hidden');
            } else {
                fullText.classList.add('hidden');
                shortText.classList.remove('hidden');
            }
        });
    });

    // ==========================================================================
    // 5. QUIZ DA SUSTENTABILIDADE
    // ==========================================================================
    const quizQuestions = [
        {
            question: "Qual tecnologia ajuda a economizar até 60% de água na irrigação?",
            options: ["Gotejamento com sensores", "Aspersão comum", "Inundação de sulcos"],
            correct: 0
        },
        {
            question: "O que os drones fazem principalmente no agronegócio moderno?",
            options: ["Transportam a colheita pesada", "Mapeiam pragas e falhas nutricionais", "Substituem os tratores guiados por GPS"],
            correct: 1
        },
        {
            question: "Qual o destino correto das embalagens de defensivos agrícolas?",
            options: ["Queimar na propriedade", "Descarte no lixo comum", "Logística reversa (devolução correta)"],
            correct: 2
        }
    ];

    let currentQuestionIndex = 0;
    const quizQuestionEl = document.getElementById('quiz-question');
    const quizOptionsEl = document.getElementById('quiz-options');
    const quizFeedbackEl = document.getElementById('quiz-feedback');
    const quizNextBtn = document.getElementById('quiz-next-btn');

    function loadQuestion() {
        quizFeedbackEl.classList.add('hidden');
        quizNextBtn.classList.add('hidden');
        quizOptionsEl.innerHTML = '';

        const currentQuiz = quizQuestions[currentQuestionIndex];
        quizQuestionEl.textContent = currentQuiz.question;

        currentQuiz.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn');
            button.style.margin = '5px 0';
            button.style.textAlign = 'left';
            
            button.addEventListener('click', () => checkAnswer(index));
            quizOptionsEl.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        const currentQuiz = quizQuestions[currentQuestionIndex];
        const buttons = quizOptionsEl.querySelectorAll('button');

        buttons.forEach(btn => btn.disabled = true);

        if (selectedIndex === currentQuiz.correct) {
            quizFeedbackEl.textContent = "Correto! Excelente escolha.";
            quizFeedbackEl.style.color = "var(--cor-principal)";
        } else {
            quizFeedbackEl.textContent = `Errado. A resposta correta era: ${currentQuiz.options[currentQuiz.correct]}`;
            quizFeedbackEl.style.color = "#d90429";
        }

        quizFeedbackEl.classList.remove('hidden');
        quizNextBtn.classList.remove('hidden');
    }

    quizNextBtn.addEventListener('click', () => {
        currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
        loadQuestion();
    });

    // Inicializa o quiz pela primeira vez
    loadQuestion();

    // ==========================================================================
    // 6. CALCULADORA DE ECONOMIA DE ÁGUA
    // ==========================================================================
    const inputArea = document.getElementById('input-area');
    const btnCalc = document.getElementById('btn-calc');
    const calcResult = document.getElementById('calc-result');

    btnCalc.addEventListener('click', () => {
        const area = parseFloat(inputArea.value);

        if (isNaN(area) || area <= 0) {
            calcResult.textContent = "Por favor, insira um valor válido de área maior que zero.";
            calcResult.style.color = "#d90429";
            calcResult.classList.remove('hidden');
            return;
        }

        const economiaLitros = area * 15;

        calcResult.innerHTML = `<strong>Resultado:</strong> Utilizando sensores e gotejamento na sua área de <strong>${area}m²</strong>, você economizará aproximadamente <strong>${economiaLitros.toLocaleString('pt-BR')} litros</strong> de água por semana!`;
        calcResult.style.color = "var(--cor-texto)";
        calcResult.classList.remove('hidden');
    });

    // ==========================================================================
    // 7. SIMULADOR DE CLIMA E LAVOURA
    // ==========================================================================
    const climaButtons = document.querySelectorAll('.btn-clima');
    const climaResult = document.getElementById('clima-result');

    const cenariosClima = {
        sol: "☀️ <strong>Sensores em ação:</strong> Diante do Sol Intenso, os sensores de umidade reduzem o fluxo de água nas horas mais quentes para evitar a evaporação e ativam o gotejamento cirúrgico no fim da tarde.",
        chuva: "🌧️ <strong>Automatização ativada:</strong> Com a Chuva Forte, o sistema inteligente de irrigação é totalmente desligado para evitar encharcamento das raízes e o desperdício de energia.",
        seca: "🍂 <strong>Modo de Contingência:</strong> Na Seca Prolongada, a inteligência artificial recalcula a distribuição da água priorizando as fases mais críticas da cultura e aciona o alerta para o uso das cisternas de captação."
    };

    climaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tipoClima = btn.getAttribute('data-clima');
            
            if (cenariosClima[tipoClima]) {
                climaResult.innerHTML = cenariosClima[tipoClima];
                climaResult.classList.remove('hidden');
            }
        });
    });
});