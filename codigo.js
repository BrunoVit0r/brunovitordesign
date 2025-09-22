// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();


// Form submission (demo) - here você pode integrar com backend / API
const form = document.getElementById('contactForm');
const alertBox = document.getElementById('formAlert');


form.addEventListener('submit', (e) => {
e.preventDefault();
const data = {
name: document.getElementById('name').value.trim(),
email: document.getElementById('email').value.trim(),
message: document.getElementById('message').value.trim()
};


// Validations simples
if(!data.name || !data.email || !data.message){
showAlert('Preencha todos os campos.', 'danger');
return;
}


// Simula envio
showAlert('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
form.reset();


// TODO: Substitua por fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) }) etc.
});


function showAlert(msg, type='info'){
alertBox.style.display = 'block';
alertBox.className = `alert alert-${type}`;
alertBox.textContent = msg;
setTimeout(()=>{ alertBox.style.display = 'none'; }, 6000);
}