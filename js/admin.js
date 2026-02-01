document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('addExerciseBtn');
  addBtn.addEventListener('click', () => {
    const title = document.getElementById('title').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const level = document.getElementById('level').value.trim();
    const file = document.getElementById('file').value.trim();

    if(!title || !subject || !level || !file) return alert('Remplis tous les champs');

    const newExercise = {
      id: exercises.length + 1,
      title, subject, level, file
    };

    exercises.push(newExercise);
    showExercises(exercises);
    alert('Exercice ajouté ✅');

    document.getElementById('title').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('level').value = '';
    document.getElementById('file').value = '';
  });
});
