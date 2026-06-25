const QUESTIONS = [
  {
    id: 1,
    question: "Bagaimana kondisi utama kulit wajah Anda saat ini?",
    options: [
      { text: "Mudah memerah, perih, terasa gatal, atau iritasi ringan", score: { Centella: 2 } },
      { text: "Sangat kering, kencang, kasar, atau bersisik", score: { "Hyalu-Cica": 2 } },
      { text: "Berminyak di dahi dan hidung, tapi pori-pori tampak membesar", score: { Poremizing: 2 } },
      { text: "Mudah berjerawat, beruntusan, dan sangat berminyak", score: { "Tea-Trica": 2 } },
      { text: "Kusam, banyak noda hitam bekas jerawat, warna tidak merata", score: { "Tone Brightening": 2 } },
      { text: "Barrier kulit terasa rusak parah, kering ekstrem, perih mengelupas", score: { "Probio-Cica": 2 } }
    ]
  },
  {
    id: 2,
    question: "Apa masalah utama yang paling mendesak untuk diatasi?",
    options: [
      { text: "Menenangkan kulit sensitif yang meradang/iritasi", score: { Centella: 2 } },
      { text: "Mengatasi kekeringan parah dan mengunci hidrasi kulit", score: { "Hyalu-Cica": 2 } },
      { text: "Mengecilkan pori-pori dan mengontrol minyak berlebih", score: { Poremizing: 2 } },
      { text: "Menyembuhkan jerawat meradang dan meredakan beruntusan", score: { "Tea-Trica": 2 } },
      { text: "Mencerahkan kulit kusam dan memudarkan flek hitam", score: { "Tone Brightening": 2 } },
      { text: "Memperbaiki dan memperkuat kembali skin barrier yang rusak", score: { "Probio-Cica": 2 } }
    ]
  },
  {
    id: 3,
    question: "Bagaimana reaksi kulit Anda setelah mencuci wajah?",
    options: [
      { text: "Mudah memerah, gatal, atau muncul reaksi perih ringan", score: { Centella: 2 } },
      { text: "Terasa kaku, tertarik, dan sangat kering", score: { "Hyalu-Cica": 2 } },
      { text: "Terlihat mengilap berminyak dengan pori-pori terbuka lebar", score: { Poremizing: 2 } },
      { text: "Cepat berminyak kembali dan terasa rentan berjerawat", score: { "Tea-Trica": 2 } },
      { text: "Terlihat kusam, layu, dan kurang bercahaya", score: { "Tone Brightening": 2 } },
      { text: "Perih, kering terkelupas, serta gatal tak nyaman", score: { "Probio-Cica": 2 } }
    ]
  }
];

let currentStep = 0;
let userScores = {
  Centella: 0,
  "Hyalu-Cica": 0,
  Poremizing: 0,
  "Tea-Trica": 0,
  "Tone Brightening": 0,
  "Probio-Cica": 0
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
        for (const [line, points] of Object.entries(selectedOption.score)) {
          userScores[line] += points;
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
    let recommendedLine = "Centella"; // fallback
    let maxScore = -1;
    
    for (const [line, score] of Object.entries(userScores)) {
      if (score > maxScore) {
        maxScore = score;
        recommendedLine = line;
      }
    }

    // Map recommended line to a specific hero product ID:
    const lineHeroProducts = {
      "Centella": "centella-ampoule",
      "Hyalu-Cica": "hyalu-cica-blue-serum",
      "Poremizing": "poremizing-fresh-ampoule",
      "Tea-Trica": "tea-trica-relief-ampoule",
      "Tone Brightening": "tone-brightening-ampoule",
      "Probio-Cica": "probio-cica-ampoule"
    };

    const heroProductId = lineHeroProducts[recommendedLine] || "centella-ampoule";
    
    // Delay redirect for animation effect
    setTimeout(() => {
      window.location.href = `product.html?id=${heroProductId}&recommended=true`;
    }, 1500);
  }

  // Start quiz
  renderStep();
});
