let exercises = [];

// Charger les exercices depuis JSON local
async function loadExercises() {
  const res = await fetch('data/exercises.json');
  exercises = await res.json();
  populateFilters();
  showExercises(exercises);
}

function populateFilters() {
  const subjects = [...new Set(exercises.map(e => e.subject))];
  const levels = [...new Set(exercises.map(e => e.level))];

  const filterSubject = document.getElementById('filterSubject');
  const filterLevel = document.getElementById('filterLevel');

  subjects.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    filterSubject.appendChild(opt);
  });

  levels.forEach(l => {
    const opt = document.createElement('option');
    opt.value = l;
    opt.textContent = l;
    filterLevel.appendChild(opt);
  });

  filterSubject.addEventListener('change', filterExercises);
  filterLevel.addEventListener('change', filterExercises);
}

function filterExercises() {
  const subject = document.getElementById('filterSubject').value;
  const level = document.getElementById('filterLevel').value;

  const filtered = exercises.filter(e => 
    (subject === 'all' || e.subject === subject) &&
    (level === 'all' || e.level === level)
  );
  showExercises(filtered);
}

function showExercises(list) {
  const container = document.getElementById('exercisesList') || document.getElementById('adminList');
  container.innerHTML = '';

  list.forEach(e => {
    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.innerHTML = `
      <strong>${e.title}</strong> <br>
      Matière : ${e.subject} | Niveau : ${e.level} <br>
      <a href="${e.file}" target="_blank">Voir / Télécharger</a>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadExercises);
