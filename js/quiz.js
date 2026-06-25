const QUESTIONS = [
  {
    id: 1,
    question: "Bagaimana kondisi kulit wajah Anda di siang hari?",
    options: [
      { text: "Sangat berminyak di seluruh area wajah", score: { Oily: 2, Combination: 0.5 } },
      { text: "Kering, kusam, bahkan bersisik/mengelupas", score: { Dry: 2 } },
      { text: "Berminyak di area T-zone (dahi, hidung, dagu) tapi kering di area pipi", score: { Combination: 2 } },
      { text: "Mudah memerah, terasa perih, gatal, atau iritasi", score: { Sensitive: 2 } }
    ]
  },
  {
    id: 2,
    question: "Apa masalah utama kulit yang paling ingin Anda atasi?",
    options: [
      { text: "Jerawat membandel, pori-pori besar, dan komedo", score: { Oily: 2, Combination: 0.5 } },
      { text: "Kulit terasa kasar, kaku, dan garis halus tampak jelas", score: { Dry: 2 } },
      { text: "Kadar minyak tidak merata (kadang berminyak, kadang kering)", score: { Combination: 2 } },
      { text: "Kemerahan tiba-tiba dan mudah bereaksi buruk terhadap kosmetik", score: { Sensitive: 2 } }
    ]
  },
  {
    id: 3,
    question: "Bagaimana reaksi kulit Anda setelah mencuci wajah?",
    options: [
      { text: "Segar dan bersih, tapi minyak muncul kembali dengan cepat", score: { Oily: 2 } },
      { text: "Terasa kencang, kaku, dan seperti ditarik", score: { Dry: 2 } },
      { text: "Bersih di dahi dan hidung, tapi pipi terasa kering", score: { Combination: 2 } },
      { text: "Tampak memerah atau timbul rasa perih/gatal", score: { Sensitive: 2 } }
    ]
  }
];

let currentStep = 0;
let userScores = {
  Oily: 0,
  Dry: 0,
  Sensitive: 0,
  Combination: 0
};

document.addEventListener("DOMContentLoaded", () => {
  const quizBox = document.getElementById("quiz-box");
  const progressBar = document.getElementById("progress-bar");
  
  if (!quizBox) return; // Only run on quiz page

  function renderStep() {
    // Update progress bar
    const progressPercent = (currentStep / QUESTIONS.length) * 100;
    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }

    if (currentStep >= QUESTIONS.length) {
      showRecommendation();
      return;
    }

    const currentQuestion = QUESTIONS[currentStep];
    
    // Create HTML template for question
    quizBox.innerHTML = `
      <div class="quiz-step active">
        <h2 class="quiz-question">${currentQuestion.question}</h2>
        <div class="quiz-options">
          ${currentQuestion.options.map((opt, index) => `
            <button class="option-btn" data-index="${index}">
              ${opt.text}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // Add click listeners to option buttons
    const buttons = quizBox.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const optionIndex = parseInt(e.currentTarget.getAttribute("data-index"));
        const selectedOption = currentQuestion.options[optionIndex];
        
        // Sum score
        for (const [skinType, points] of Object.entries(selectedOption.score)) {
          userScores[skinType] += points;
        }

        // Go to next step
        currentStep++;
        renderStep();
      });
    });
  }

  function showRecommendation() {
    if (progressBar) progressBar.style.width = "100%";
    
    // Show spinner loading
    quizBox.innerHTML = `
      <div class="quiz-loading" style="display: flex;">
        <div class="spinner"></div>
        <p>Menganalisis jenis kulit Anda...</p>
      </div>
    `;

    // Calculate highest score
    let recommendedType = "Oily"; // fallback
    let maxScore = -1;
    
    for (const [type, score] of Object.entries(userScores)) {
      if (score > maxScore) {
        maxScore = score;
        recommendedType = type;
      }
    }

    // Find product matching recommended skin type
    const matchedProduct = PRODUCTS.find(p => p.skinType === recommendedType);
    
    // Delay redirect for animation effect
    setTimeout(() => {
      if (matchedProduct) {
        window.location.href = `product.html?id=${matchedProduct.id}&recommended=true`;
      } else {
        window.location.href = "index.html";
      }
    }, 1500);
  }

  // Start quiz
  renderStep();
});
