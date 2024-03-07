const err =  document.querySelector('.form-error') as HTMLDivElement;
err.style.display = "none";
const form = document.querySelector('#accessKeyForm') as HTMLFormElement;
const input = form.querySelector('input') as HTMLInputElement;
const button = form.querySelector('button') as HTMLButtonElement;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    button.disabled = true; // ボタンを無効化

    const response = await fetch('/verify-key', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: input.value }),
    });

    if (!response.ok) {

      err.style.display = "block";

        setTimeout(() => {
          err.style.display = "none";
        }, 3000);
    } else {
        const data = await response.json();
        window.location.href = data.redirect;
    }

    button.disabled = false; // ボタンを再度有効化
});
