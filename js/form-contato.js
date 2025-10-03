document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const message = document.getElementById('message').value.trim();
        const alertDiv = document.getElementById('formAlert');
        if (!name || !email || !cpf || !message) {
            alertDiv.style.display = 'block';
            alertDiv.className = 'alert alert-danger';
            alertDiv.textContent = 'Preencha todos os campos.';
            return;
        }
        if (!validarCPF(cpf)) {
            alertDiv.style.display = 'block';
            alertDiv.className = 'alert alert-danger';
            alertDiv.textContent = 'CPF inválido.';
            return;
        }
        alertDiv.style.display = 'block';
        alertDiv.className = 'alert alert-success';
        alertDiv.textContent = 'Formulário enviado com sucesso!';
        contactForm.reset();
        setTimeout(() => {
            alertDiv.style.display = 'none';
        }, 2000);
    });
});

function validarCPF(cpf) {
    cpf = cpf.replace(/[\.\-]/g, "");
    if (cpf.length !== 11 || /^([0-9])\1+$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) return false;
    return true;
}