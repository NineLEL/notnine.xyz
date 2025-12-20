let data = {};
let currentSubject = "";
let index = 0;

const flashcard = document.getElementById("flashcard");
const subjectSelect = document.getElementById("subject-select");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

// Fetch the JSON
fetch("../data/Flashcard.json")
  .then((res) => res.json())
  .then((json) => {
    data = json;
    Object.keys(data).forEach((subj) => {
      const opt = document.createElement("option");
      opt.value = subj;
      opt.textContent = subj;
      subjectSelect.appendChild(opt);
    });
  });

subjectSelect.addEventListener("change", (e) => {
  currentSubject = e.target.value;
  index = 0;
  flashcard.classList.remove("flipped");
  renderCard();
});

function renderCard() {
  const cards = data[currentSubject];
  const total = cards.length;

  // Update Content
  document.getElementById("question-text").textContent = cards[index].q;
  document.getElementById("answer-text").textContent = cards[index].a;

  // Update Stats
  progressText.textContent = `${index + 1} / ${total} Cards`;
  progressBar.style.width = `${((index + 1) / total) * 100}%`;
}

// Interactions
flashcard.addEventListener("click", () =>
  flashcard.classList.toggle("flipped")
);

document.getElementById("next-btn").addEventListener("click", () => {
  if (index < data[currentSubject].length - 1) {
    index++;
    flashcard.classList.remove("flipped");
    setTimeout(renderCard, 200);
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (index > 0) {
    index--;
    flashcard.classList.remove("flipped");
    setTimeout(renderCard, 200);
  }
});
