const form = document.querySelector('.regform');

if (form) {
  try {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { name } = e.target;

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.value }),
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
