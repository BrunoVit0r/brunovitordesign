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
});


function showAlert(msg, type='info'){
alertBox.style.display = 'block';
alertBox.className = `alert alert-${type}`;
alertBox.textContent = msg;
}

// Animação de destaque nos cards de serviço e como funciona
document.querySelectorAll('.servico-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        card.classList.add('active-card');
    });
    card.addEventListener('mouseleave', function() {
        card.classList.remove('active-card');
    });
});

// Efeito de fade nos textos da sessão Como Funciona
document.querySelectorAll('#funciona .servico-card p').forEach(function(p) {
    p.style.opacity = 0.5;
    p.addEventListener('mouseenter', function() {
        p.style.transition = 'opacity 0.3s';
        p.style.opacity = 1;
    });
    p.addEventListener('mouseleave', function() {
        p.style.opacity = 0.5;
    });
});

