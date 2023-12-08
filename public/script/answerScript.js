const answerForm = document.querySelector('.answer-form');

if (answerForm) {
  try {
    answerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { answer } = e.target;
      console.log(answer);
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: answer.value }),
      });
      const data = await response.json();
      if (data.success) {
        window.location.href = '/category';
      }
    });
  } catch ({ message }) {
    console.log(message);
  }
}
