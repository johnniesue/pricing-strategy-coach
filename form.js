
let currentQuestion = 0;
const questions = [
  {
    q: "When was the last time you raised your prices?",
    a: ["Never", "Over 2 years ago", "1-2 years ago", "This year"]
  },
  {
    q: "Do you currently offer tiered pricing?",
    a: ["Yes", "No"]
  },
  {
    q: "Do you offer recurring/subscription options?",
    a: ["Yes", "No"]
  },
  {
    q: "How strong is your customer demand?",
    a: ["Fully booked", "Moderate demand", "Struggling to get clients"]
  },
  {
    q: "Are your competitors charging more than you?",
    a: ["Yes", "No", "Not sure"]
  }
];

let answers = [];

function startQuiz() {
  showQuestion(currentQuestion);
}

function showQuestion(index) {
  const q = questions[index];
  document.getElementById("question-area").innerText = "Question " + (index + 1) + ": " + q.q;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  q.a.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.innerText = answer;
    btn.onclick = () => {
      answers.push(answer);
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
      } else {
        showResult();
      }
    };
    choicesDiv.appendChild(btn);
  });
}

function showResult() {
  document.getElementById("question-area").innerText = "✅ Here's your pricing strategy:";
  document.getElementById("choices").innerHTML = `
    <p><strong>Raise your prices:</strong> You've waited too long if it's been over a year.</p>
    <p><strong>Add tiers:</strong> Always offer Basic, Pro, Premium.</p>
    <p><strong>Recurring offers:</strong> Predictable revenue wins.</p>
    <p><strong>Bundle value:</strong> Don’t just discount—combine services!</p>
    <p><strong>Capture email below to receive full PDF summary.</strong></p>
    <form action="https://formspree.io/f/your-form-id" method="POST">
      <input type="email" name="email" placeholder="Your email" required style="padding:10px;width:80%;margin-top:10px;border-radius:5px;border:1px solid #ccc;"><br>
      <button class="cta" type="submit">Send My Plan</button>
    </form>
  `;
}
