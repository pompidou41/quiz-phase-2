const answerForm = document.querySelector('.answer-form');

if (answerForm) {
  try {
    answerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { answer } = e.target;
      const card = e.target.closest('.question');
      const response = await fetch(
        `/category/${card.dataset.catid}/question/${card.dataset.id}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answer: answer.value }),
        }
      );
      const data = await response.json();
      if (data.success) {
        document.querySelector('.feedback').innerHTML = data.message;
      } else {
        document.querySelector('.feedback').innerHTML = data.message;
      }
    });
  } catch ({ message }) {
    console.log(message);
  }
}
