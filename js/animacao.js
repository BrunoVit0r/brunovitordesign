document.getElementById('year').textContent = new Date().getFullYear();

// Animação de destaque nos cards de serviço e como funciona
document.querySelectorAll('.servico-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        card.classList.add('active-card');
    });
    card.addEventListener('mouseleave', function () {
        card.classList.remove('active-card');
    });
});

// Efeito de fade nos textos da sessão como Funciona
document.querySelectorAll('#funciona .servico-card p').forEach(function (p) {
    p.style.opacity = 0.5;
    p.addEventListener('mouseenter', function () {
        p.style.transition = 'opacity 0.3s';
        p.style.opacity = 1;
    });
    p.addEventListener('mouseleave', function () {
        p.style.opacity = 0.5;
    });
});

