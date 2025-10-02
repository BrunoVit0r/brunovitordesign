document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const alertDiv = document.getElementById('loginAlert');
        if (email === 'teste@teste' && password === 'teste') {
            alertDiv.style.display = 'block';
            alertDiv.className = 'alert alert-success';
            alertDiv.textContent = 'Login realizado com sucesso!';
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1500);
        } else {
            alertDiv.style.display = 'block';
            alertDiv.className = 'alert alert-danger';
            alertDiv.textContent = 'Usuário ou senha inválidos.';
        }
    });
});
