// js/animations.js

// Inicializar animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Animação de entrada para cards
    animateCardsOnScroll();
    
    // Efeito de tilt nos cards
    initTiltEffect();
    
    // Animações de hover para botões
    initButtonHoverEffects();
    
    // Animações para elementos do hero
    initHeroAnimations();
    
    // Configurar observers para animações de entrada
    initIntersectionObserver();
});

// Animação de entrada para cards
function animateCardsOnScroll() {
    const cards = document.querySelectorAll('.area-card, .stat-card, .feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Efeito de tilt nos cards
function initTiltEffect() {
    const cards = document.querySelectorAll('.area-card, .glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;
            const centerX = cardRect.left + cardWidth / 2;
            const centerY = cardRect.top + cardHeight / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            // Calcular rotação baseada na posição do mouse
            const rotateY = (mouseX / cardWidth) * 20; // Máximo de 20 graus
            const rotateX = -(mouseY / cardHeight) * 20; // Máximo de 20 graus
            
            // Aplicar transformação
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            
            // Efeito de brilho
            const glowX = (mouseX / cardWidth) * 100;
            const glowY = (mouseY / cardHeight) * 100;
            
            if (!this.querySelector('.card-glow')) {
                const glow = document.createElement('div');
                glow.className = 'card-glow';
                glow.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: inherit;
                    pointer-events: none;
                    z-index: -1;
                    opacity: 0;
                    background: radial-gradient(circle at ${glowX}% ${glowY}%, rgba(231, 57, 70, 0.3), transparent 70%);
                `;
                this.appendChild(glow);
            } else {
                const glow = this.querySelector('.card-glow');
                glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(231, 57, 70, 0.3), transparent 70%)`;
                glow.style.opacity = '1';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Resetar transformação
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            
            // Remover brilho
            const glow = this.querySelector('.card-glow');
            if (glow) {
                glow.style.opacity = '0';
                setTimeout(() => {
                    if (glow.parentNode === this) {
                        this.removeChild(glow);
                    }
                }, 300);
            }
        });
    });
}

// Animações de hover para botões
function initButtonHoverEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            
            // Efeito de brilho para botão primário
            if (this.classList.contains('btn-primary')) {
                const glow = document.createElement('div');
                glow.className = 'button-glow';
                glow.style.cssText = `
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    right: -5px;
                    bottom: -5px;
                    background: linear-gradient(45deg, #e63946, #ff6b6b, #e63946);
                    border-radius: inherit;
                    z-index: -1;
                    filter: blur(10px);
                    opacity: 0;
                    animation: buttonGlow 1.5s infinite;
                `;
                
                this.style.position = 'relative';
                this.style.zIndex = '1';
                this.appendChild(glow);
                
                // Adicionar keyframes se não existirem
                if (!document.querySelector('#buttonGlowKeyframes')) {
                    const styleSheet = document.createElement('style');
                    styleSheet.id = 'buttonGlowKeyframes';
                    styleSheet.textContent = `
                        @keyframes buttonGlow {
                            0%, 100% { opacity: 0.3; }
                            50% { opacity: 0.7; }
                        }
                    `;
                    document.head.appendChild(styleSheet);
                }
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            
            // Remover brilho
            const glow = this.querySelector('.button-glow');
            if (glow) {
                glow.remove();
            }
        });
    });
}

// Animações para elementos do hero
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroSubtitle.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 600);
    }
    
    if (heroButtons) {
        heroButtons.style.opacity = '0';
        
        setTimeout(() => {
            heroButtons.style.transition = 'opacity 1s ease 0.6s';
            heroButtons.style.opacity = '1';
        }, 900);
    }
}

// Configurar observers para animações de entrada
function initIntersectionObserver() {
    const sections = document.querySelectorAll('.page-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adicionar classe de animação para elementos dentro da seção
                const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
                animatedElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animated');
                    }, index * 100);
                });
            }
        });
    }, {
        threshold: 0.2
    });
    
    sections.forEach(section => {
        observer.observe(section);
        
        // Adicionar classe para elementos que devem ser animados
        const elementsToAnimate = section.querySelectorAll('.section-title, .section-subtitle, .feature, .contact-item');
        elementsToAnimate.forEach(el => {
            el.classList.add('animate-on-scroll');
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    });
    
    // Adicionar classe CSS para animação
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .animate-on-scroll.animated {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(animationStyles);
}

// Efeito de digitação para elementos com classe .typewriter
function initTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Iniciar animação quando o elemento estiver visível
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                typeWriter();
                observer.unobserve(element);
            }
        });
        
        observer.observe(element);
    });
}

// Efeito de onda para botões
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Criar elemento de onda
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.7);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            // Remover elemento após animação
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Adicionar keyframes para efeito de ripple
    if (!document.querySelector('#rippleKeyframes')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'rippleKeyframes';
        styleSheet.textContent = `
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Inicializar efeitos quando a página carregar
window.addEventListener('load', function() {
    initTypewriterEffect();
    initRippleEffect();
    
    // Adicionar classe loaded para transições suaves após carregamento
    document.body.classList.add('loaded');
});