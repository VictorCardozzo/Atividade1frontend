export function validarFormulario() {
  const form = document.querySelector('.form-cadastro');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.querySelector('#nome');
    const email = form.querySelector('#email');
    const telefone = form.querySelector('#telefone');

    if (!nome.value.trim() || !email.value.trim() || !telefone.value.trim()) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    alert('Cadastro realizado com sucesso!');
    form.reset();
  });
}
