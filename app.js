
  
  const latestIndex = quizData.length - 8;
  const defaultIdx = 0;
  let currentQuestionIndex = defaultIdx;
  let selectedAnswers = [];
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuestion() {
    // Clear previous options and reset selection
    optionsEl.innerHTML = "";
    selectedAnswers = [];
    nextBtn.disabled = true;
  
    if(document.querySelector("#explanation").className === "explanation"){
      document.querySelector("#explanation").innerHTML = null;
      document.querySelector("#explanation").classList ="";
    }  
   
  
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
  
    // Render options
    currentQuestion.options.forEach((option, index) => {
      const optionEl = document.createElement("div");
      optionEl.classList.add("option");
      optionEl.textContent = option;
      optionEl.onclick = () => selectAnswer(index, optionEl);
      optionsEl.appendChild(optionEl);
    });
  }
  
  
  function selectAnswer(index, optionEl) {
    const currentQuestion = quizData[currentQuestionIndex];
  
    // Toggle selection for multiple-choice questions
    if (currentQuestion.correct.length > 1) {
      if (selectedAnswers.includes(index)) {
        selectedAnswers = selectedAnswers.filter((i) => i !== index);
        optionEl.classList.remove("selected");
      } else {
        selectedAnswers.push(index);
        optionEl.classList.add("selected");
      }
    } else {
      // Single choice: Clear other selections
      selectedAnswers = [index];
      Array.from(optionsEl.children).forEach((child) =>
        child.classList.remove("selected")
      );
      optionEl.classList.add("selected");
    }
  
    // Enable the "Next" button if an answer is selected
    nextBtn.disabled = selectedAnswers.length === 0;
  }
  
  function checkAnswer() {
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswers = currentQuestion.correct;
  
    // Mark options as correct or incorrect
    Array.from(optionsEl.children).forEach((child, index) => {
      if (correctAnswers.includes(index)) {
        child.classList.add("correct");
      } else if (selectedAnswers.includes(index)) {
        child.classList.add("incorrect");
      }
      child.onclick = null; // Disable further clicks
    });
    document.querySelector("#explanation").classList += 'explanation';
    document.querySelector("#explanation").innerHTML = quizData[currentQuestionIndex].explanation;
    nextBtn.disabled = false;
  }
  
  nextBtn.onclick = () => {
    if (nextBtn.textContent === "Next") {
      checkAnswer();
      nextBtn.textContent = "Continue";
    } else {
      // Load the next question or end the quiz
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextBtn.textContent = "Next";
      } else {
        questionEl.textContent = "Quiz Complete! 🎉";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
      }
    }
  };
  
  // Start the quiz
  loadQuestion();
  