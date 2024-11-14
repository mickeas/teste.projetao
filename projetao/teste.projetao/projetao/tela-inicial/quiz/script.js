const questions = [
  {
    question: "Você prefere trabalhar com:",
    options: [
      "Design e experiência do usuário (UI/UX)",
      "Lógica de programação e banco de dados",
      "Criação de aplicativos e soluções móveis",
      "Soluções de infraestrutura e automação"
    ],
    points: [0, 1, 2, 3] // Indica a área que mais se identifica com a resposta
  },
  {
    question: "Você se interessa mais por:",
    options: [
      "Aparência e interatividade de sites e aplicativos",
      "Construir a lógica que faz sistemas funcionarem",
      "Desenvolver jogos e experiências imersivas",
      "Gerenciar servidores e melhorar a performance"
    ],
    points: [0, 1, 2, 3]
  },
  {
    question: "Em qual destas atividades você mais se sente motivado?",
    options: [
      "Criar designs e interfaces agradáveis",
      "Desenvolver funções complexas e trabalhar com dados",
      "Criar jogos e simulações realistas",
      "Garantir que sistemas e infraestruturas funcionem de forma eficiente"
    ],
    points: [0, 1, 2, 3]
  },
  {
    question: "Quais habilidades você prefere desenvolver?",
    options: [
      "HTML, CSS, JavaScript, Design",
      "Linguagens de programação como Python, Java, SQL",
      "Motores de jogos como Unity e Unreal Engine",
      "Ferramentas de automação e infraestrutura como Docker e Kubernetes"
    ],
    points: [0, 1, 2, 3]
  },
  {
    question: "Você gostaria de trabalhar com:",
    options: [
      "Aparência visual e experiência do usuário",
      "Desenvolvimento de soluções lógicas e sistemas",
      "Jogos e novas formas de entretenimento interativo",
      "Redes, servidores e processos de CI/CD"
    ],
    points: [0, 1, 2, 3]
  }
];

let currentQuestionIndex = 0;
let scores = [0, 0, 0, 0]; // Pontuação para cada área: [Front-end, Back-end, Mobile, DevOps]

function displayQuestion() {
  const questionContainer = document.getElementById('question-container');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  
  const currentQuestion = questions[currentQuestionIndex];

  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.textContent = option;
    optionElement.onclick = () => handleAnswer(index);
    optionsContainer.appendChild(optionElement);
  });
}

function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const points = currentQuestion.points[selectedIndex];
  
  // Distribui as pontuações para cada área
  scores[points]++;

  document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    document.getElementById('next-button').style.display = 'none';
  } else {
    showResults();
  }
}

function showResults() {
  const resultText = document.getElementById('result-text');
  
  const maxScore = Math.max(...scores);
  const areas = ["Desenvolvimento Web", "Desenvolvimento de Software (Back-end)", "Desenvolvimento de Aplicativos (Mobile)", "DevOps"];

  let bestArea = areas[scores.indexOf(maxScore)];

  resultText.textContent = `Você mais se identifica com a área de: ${bestArea}!`;

  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
}

window.onload = function() {
  displayQuestion();
};
