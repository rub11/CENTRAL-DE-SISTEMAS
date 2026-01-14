// js/main.js

// Dados das áreas de atuação
const areasData = [
    {
        id: "restaurantes",
        title: "Restaurantes & Lanchonetes",
        icon: "fas fa-utensils",
        description: "Sistemas completos para gestão de restaurantes, cardápios digitais, pedidos online e controle de delivery.",
        projects: 8,
        color: "#FF6B6B",
        details: "Soluções personalizadas para o setor alimentício, incluindo sistemas de comanda eletrônica, gestão de mesas, controle de estoque de insumos, integração com apps de delivery, cardápios digitais interativos e muito mais.",
        projectIdeas: [
            "Sistema de Comanda Eletrônica",
            "Cardápio Digital Interativo",
            "Gestão de Delivery Integrado",
            "Controle de Estoque de Insumos",
            "Sistema de Reservas Online",
            "Relatórios de Desempenho",
            "App para Clientes",
            "Integração com Pagamentos"
        ]
    },
    {
        id: "comercio",
        title: "Comércio & Lojas",
        icon: "fas fa-store",
        description: "Soluções para varejo físico e online, gestão de inventário, PDV e e-commerce integrado.",
        projects: 10,
        color: "#4ECDC4",
        details: "Sistemas completos para comércio varejista e atacadista, com PDV avançado, controle de inventário em tempo real, gestão de múltiplas lojas, relatórios de vendas, integração com marketplaces e plataformas de e-commerce.",
        projectIdeas: [
            "PDV Avançado",
            "Controle de Inventário",
            "E-commerce Personalizado",
            "Gestão de Multi-lojas",
            "Sistema de Fidelidade",
            "Relatórios de Vendas",
            "App para Vendedores",
            "Integração com Marketplaces"
        ]
    },
    {
        id: "estoque",
        title: "Estoque & Logística",
        icon: "fas fa-boxes",
        description: "Sistemas de controle de estoque, gestão de supply chain, rastreamento e logística inteligente.",
        projects: 6,
        color: "#FFD166",
        details: "Soluções para gestão de estoque e logística, com controle de entrada e saída, rastreamento de produtos, gestão de fornecedores, previsão de demanda, otimização de espaço de armazenamento e relatórios de movimentação.",
        projectIdeas: [
            "Controle de Entrada/Saída",
            "Rastreamento de Produtos",
            "Gestão de Fornecedores",
            "Previsão de Demanda",
            "Otimização de Armazenamento",
            "Relatórios de Movimentação"
        ]
    },
    {
        id: "delivery",
        title: "Delivery & Pedidos Online",
        icon: "fas fa-motorcycle",
        description: "Plataformas de delivery, apps para entregadores, gestão de pedidos e rastreamento em tempo real.",
        projects: 7,
        color: "#06D6A0",
        details: "Sistemas completos para negócios de delivery, com plataforma de pedidos online, apps para clientes e entregadores, rastreamento em tempo real, gestão de zonas de entrega, sistema de avaliações e relatórios de desempenho.",
        projectIdeas: [
            "Plataforma de Pedidos Online",
            "App para Entregadores",
            "Rastreamento em Tempo Real",
            "Gestão de Zonas de Entrega",
            "Sistema de Avaliações",
            "Relatórios de Desempenho",
            "Integração com Pagamentos"
        ]
    },
    {
        id: "clinicas",
        title: "Clínicas & Consultórios",
        icon: "fas fa-clinic-medical",
        description: "Sistemas de gestão médica, agendamento online, prontuário eletrônico e telemedicina.",
        projects: 9,
        color: "#118AB2",
        details: "Soluções especializadas para o setor de saúde, com prontuário eletrônico, agendamento online, gestão de pacientes, controle financeiro, prescrição digital, telemedicina e conformidade com legislação de proteção de dados.",
        projectIdeas: [
            "Prontuário Eletrônico",
            "Agendamento Online",
            "Gestão de Pacientes",
            "Controle Financeiro",
            "Prescrição Digital",
            "Sistema de Telemedicina",
            "Conformidade LGPD",
            "Relatórios Clínicos"
        ]
    },
    {
        id: "salones",
        title: "Salões & Barbearias",
        icon: "fas fa-cut",
        description: "Sistemas para agendamento, gestão de clientes, controle de procedimentos e vendas de produtos.",
        projects: 5,
        color: "#EF476F",
        details: "Soluções para o setor de beleza e bem-estar, com agendamento online, ficha de clientes, controle de procedimentos realizados, gestão de profissionais, venda de produtos e programas de fidelidade.",
        projectIdeas: [
            "Agendamento Online",
            "Ficha de Clientes",
            "Controle de Procedimentos",
            "Gestão de Profissionais",
            "Venda de Produtos",
            "Programa de Fidelidade"
        ]
    },
    {
        id: "escolas",
        title: "Escolas & Cursos",
        icon: "fas fa-graduation-cap",
        description: "Plataformas de ensino, gestão acadêmica, controle de matrículas e ambiente virtual de aprendizagem.",
        projects: 8,
        color: "#7209B7",
        details: "Sistemas educacionais completos, com gestão acadêmica, portal do aluno, controle de matrículas e mensalidades, ambiente virtual de aprendizagem, biblioteca digital, sistema de avaliações e comunicação com pais.",
        projectIdeas: [
            "Portal do Aluno",
            "Gestão Acadêmica",
            "Controle de Matrículas",
            "Ambiente Virtual de Aprendizagem",
            "Biblioteca Digital",
            "Sistema de Avaliações",
            "Comunicação com Pais",
            "Controle Financeiro"
        ]
    },
    {
        id: "empresas",
        title: "Empresas & Escritórios",
        icon: "fas fa-building",
        description: "Sistemas de gestão empresarial, CRM, controle de projetos, ferramentas de produtividade.",
        projects: 12,
        color: "#3A86FF",
        details: "Soluções corporativas abrangentes, incluindo CRM avançado, ERP personalizado, gestão de projetos, controle de tarefas, sistema de pontos, ferramentas de comunicação interna e relatórios gerenciais.",
        projectIdeas: [
            "CRM Avançado",
            "ERP Personalizado",
            "Gestão de Projetos",
            "Controle de Tarefas",
            "Sistema de Pontos",
            "Ferramentas de Comunicação",
            "Relatórios Gerenciais",
            "Gestão de Documentos"
        ]
    },
    {
        id: "prestadores",
        title: "Prestadores de Serviço",
        icon: "fas fa-tools",
        description: "Sistemas para agendamento de serviços, orçamentos, controle de equipes e faturamento.",
        projects: 6,
        color: "#FB5607",
        details: "Soluções para prestadores de serviços diversos, com agendamento online, emissão de orçamentos, controle de equipes em campo, sistema de visitas técnicas, faturamento automatizado e avaliação de serviços.",
        projectIdeas: [
            "Agendamento Online",
            "Emissão de Orçamentos",
            "Controle de Equipes",
            "Sistema de Visitas Técnicas",
            "Faturamento Automatizado",
            "Avaliação de Serviços"
        ]
    },
    {
        id: "construcao",
        title: "Construção & Obras",
        icon: "fas fa-hard-hat",
        description: "Gestão de canteiros de obras, controle de materiais, planejamento de projetos e equipes.",
        projects: 7,
        color: "#FF9E00",
        details: "Sistemas especializados para o setor da construção civil, com gestão de canteiros de obras, controle de materiais e equipamentos, planejamento de etapas, gestão de fornecedores, controle de segurança e relatórios de progresso.",
        projectIdeas: [
            "Gestão de Canteiros",
            "Controle de Materiais",
            "Planejamento de Etapas",
            "Gestão de Fornecedores",
            "Controle de Segurança",
            "Relatórios de Progresso",
            "Controle Financeiro"
        ]
    },
    {
        id: "oficinas",
        title: "Oficinas & Auto Center",
        icon: "fas fa-car",
        description: "Sistemas para gestão de oficinas, ordens de serviço, controle de peças e agendamento.",
        projects: 5,
        color: "#8338EC",
        details: "Soluções para oficinas mecânicas e auto centers, com emissão de ordens de serviço, controle de estoque de peças, histórico de veículos, agendamento de serviços, integração com fornecedores e relatórios de produtividade.",
        projectIdeas: [
            "Ordens de Serviço",
            "Controle de Peças",
            "Histórico de Veículos",
            "Agendamento de Serviços",
            "Integração com Fornecedores",
            "Relatórios de Produtividade"
        ]
    },
    {
        id: "hoteis",
        title: "Hotéis & Pousadas",
        icon: "fas fa-hotel",
        description: "Sistemas de reservas, gestão de hóspedes, controle de apartamentos e serviços adicionais.",
        projects: 6,
        color: "#3A86FF",
        details: "Soluções para o setor hoteleiro, com sistema de reservas online, check-in/out digital, gestão de apartamentos, controle de serviços adicionais, integração com canais de venda e relatórios de ocupação.",
        projectIdeas: [
            "Reservas Online",
            "Check-in/out Digital",
            "Gestão de Apartamentos",
            "Controle de Serviços",
            "Integração com Canais",
            "Relatórios de Ocupação"
        ]
    },
    {
        id: "eventos",
        title: "Eventos & Festas",
        icon: "fas fa-glass-cheers",
        description: "Sistemas para gestão de eventos, vendas de ingressos, controle de convidados e logística.",
        projects: 5,
        color: "#FF006E",
        details: "Soluções para o setor de eventos, com gestão completa de eventos, venda de ingressos online, controle de convidados, logística de montagem, sistema de credenciamento e relatórios pós-evento.",
        projectIdeas: [
            "Gestão de Eventos",
            "Venda de Ingressos Online",
            "Controle de Convidados",
            "Logística de Montagem",
            "Sistema de Credenciamento",
            "Relatórios Pós-evento"
        ]
    },
    {
        id: "quiosques",
        title: "Quiosques & Trailers",
        icon: "fas fa-utensil-spoon",
        description: "Sistemas leves para pequenos negócios, controle de vendas, estoque simplificado e pagamentos.",
        projects: 4,
        color: "#FFBE0B",
        details: "Soluções simplificadas para pequenos empreendimentos como quiosques e trailers de comida, com controle de vendas, estoque básico, gestão de fornecedores, relatórios de lucratividade e integração com maquininhas de cartão.",
        projectIdeas: [
            "Controle de Vendas",
            "Estoque Básico",
            "Gestão de Fornecedores",
            "Relatórios de Lucratividade",
            "Integração com Maquininhas"
        ]
    },
    {
        id: "infoprodutos",
        title: "Negócios Digitais & Infoprodutos",
        icon: "fas fa-laptop-code",
        description: "Plataformas para cursos online, áreas de membros, assinaturas e automação de marketing.",
        projects: 9,
        color: "#00BBF9",
        details: "Soluções para empreendedores digitais, com plataformas de cursos online, áreas de membros, sistema de assinaturas, automação de marketing, funil de vendas, integração com gateways de pagamento e análises de conversão.",
        projectIdeas: [
            "Plataforma de Cursos Online",
            "Área de Membros",
            "Sistema de Assinaturas",
            "Automação de Marketing",
            "Funil de Vendas",
            "Integração com Pagamentos",
            "Análises de Conversão",
            "Emissão de Certificados"
        ]
    }
];

// Inicialização do site
document.addEventListener('DOMContentLoaded', function() {
    // Carregar áreas na grid
    loadAreasGrid();
    
    // Configurar navegação
    setupNavigation();
    
    // Configurar formulário de contato
    setupContactForm();
    
    // Configurar eventos dos cards
    setupAreaCards();
    
    // Configurar footer links
    setupFooterLinks();
    
    // Inicializar partículas
    initParticles();
    
    // Configurar menu mobile
    setupMobileMenu();
});

// Carregar áreas na grid
function loadAreasGrid() {
    const areasGrid = document.getElementById('areasGrid');
    
    if (!areasGrid) return;
    
    areasGrid.innerHTML = '';
    
    areasData.forEach(area => {
        const areaCard = document.createElement('div');
        areaCard.className = 'area-card';
        areaCard.setAttribute('data-area', area.id);
        
        areaCard.innerHTML = `
            <div class="area-icon" style="background: linear-gradient(135deg, ${area.color}, ${darkenColor(area.color, 20)});">
                <i class="${area.icon}"></i>
            </div>
            <h3 class="area-title">${area.title}</h3>
            <p class="area-description">${area.description}</p>
            <div class="area-projects">
                <span>${area.projects} projetos</span>
                <span><i class="fas fa-arrow-right"></i></span>
            </div>
        `;
        
        areasGrid.appendChild(areaCard);
    });
}

// Configurar navegação
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.getAttribute('data-page');
            
            // Atualizar links ativos
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar seção correspondente
            sections.forEach(section => {
                section.classList.remove('active');
                
                if (section.id === targetPage) {
                    setTimeout(() => {
                        section.classList.add('active');
                        // Scroll para a seção
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 50);
                }
            });
            
            // Fechar menu mobile se aberto
            const mobileMenu = document.querySelector('.mobile-menu-btn');
            const navLinksContainer = document.querySelector('.nav-links');
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// Configurar formulário de contato
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const business = document.getElementById('business').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !business || !message) {
            showNotification('Por favor, preencha todos os campos.', 'error');
            return;
        }
        
        // Simular envio
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        
        // Resetar formulário
        contactForm.reset();
    });
}

// Configurar eventos dos cards
function setupAreaCards() {
    document.addEventListener('click', function(e) {
        // Verificar se clique foi em um card de área
        const areaCard = e.target.closest('.area-card');
        if (areaCard) {
            const areaId = areaCard.getAttribute('data-area');
            const areaData = areasData.find(area => area.id === areaId);
            
            if (areaData) {
                openAreaModal(areaData);
            }
        }
        
        // Verificar se clique foi em um link do footer para área
        const areaLink = e.target.closest('[data-area]');
        if (areaLink && areaLink.hasAttribute('data-area') && areaLink.tagName === 'A') {
            e.preventDefault();
            const areaId = areaLink.getAttribute('data-area');
            const areaData = areasData.find(area => area.id === areaId);
            
            if (areaData) {
                openAreaModal(areaData);
            }
        }
    });
}

// Abrir modal da área
function openAreaModal(areaData) {
    const modal = document.getElementById('areaModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.querySelector('.modal-area-details');
    
    if (!modal || !modalTitle || !modalBody) return;
    
    // Atualizar conteúdo do modal
    modalTitle.textContent = areaData.title;
    
    modalBody.innerHTML = `
        <div class="modal-area-visual">
            <div class="modal-area-icon" style="background: linear-gradient(135deg, ${areaData.color}, ${darkenColor(areaData.color, 20)});">
                <i class="${areaData.icon}"></i>
            </div>
        </div>
        <div class="modal-area-info">
            <h4>${areaData.title}</h4>
            <p>${areaData.details}</p>
            
            <div class="modal-projects">
                <h5>Ideias de Projetos Disponíveis:</h5>
                <ul>
                    ${areaData.projectIdeas.map(idea => `<li>${idea} <span class="highlight">→</span></li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-buttons">
                <a href="restaurantes.html" class="btn-primary">Ver Demonstração <i class="fas fa-external-link-alt"></i></a>
                <button class="btn-secondary" id="requestQuote">Quero um Igual <i class="fas fa-gem"></i></button>
            </div>
        </div>
    `;
    
    // Mostrar modal
    modal.classList.add('active');
    
    // Configurar botão de fechar
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    // Fechar modal ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Configurar botão "Quero um igual"
    const requestQuoteBtn = document.getElementById('requestQuote');
    if (requestQuoteBtn) {
        requestQuoteBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            
            // Navegar para seção de contato
            const contactLink = document.querySelector('[data-page="contato"]');
            if (contactLink) {
                contactLink.click();
                
                // Preencher campo de tipo de negócio
                setTimeout(() => {
                    const businessSelect = document.getElementById('business');
                    if (businessSelect) {
                        // Encontrar a opção correspondente
                        const option = Array.from(businessSelect.options).find(opt => 
                            opt.text.toLowerCase().includes(areaData.title.toLowerCase().split(' ')[0])
                        );
                        
                        if (option) {
                            businessSelect.value = option.value;
                        } else {
                            businessSelect.value = 'outro';
                        }
                        
                        // Adicionar informação ao campo de mensagem
                        const messageField = document.getElementById('message');
                        if (messageField) {
                            messageField.value = `Estou interessado em um sistema para ${areaData.title.toLowerCase()}.\n\n`;
                        }
                    }
                }, 500);
            }
        });
    }
}

// Configurar links do footer
function setupFooterLinks() {
    const footerAreaLinks = document.querySelectorAll('.footer-links a[data-area]');
    
    footerAreaLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Navegar para seção de áreas primeiro
            const areasLink = document.querySelector('[data-page="areas"]');
            if (areasLink) {
                areasLink.click();
            }
        });
    });
}

// Configurar menu mobile
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileMenuBtn || !navLinks) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Inicializar partículas
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (!particlesContainer) return;
    
    // Criar partículas
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posição aleatória
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Tamanho aleatório
        const size = Math.random() * 4 + 1;
        
        // Duração da animação aleatória
        const duration = Math.random() * 20 + 10;
        
        // Atraso aleatório
        const delay = Math.random() * 5;
        
        // Aplicar estilos
        particle.style.cssText = `
            position: absolute;
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(231, 57, 70, ${Math.random() * 0.5 + 0.1});
            border-radius: 50%;
            animation: floatParticle ${duration}s infinite linear ${delay}s;
            z-index: -1;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    // Adicionar keyframes para animação de partículas
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(styleSheet);
}

// Mostrar notificação
function showNotification(message, type = 'info') {
    // Remover notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Ícone baseado no tipo
    let icon = 'fas fa-info-circle';
    if (type === 'success') icon = 'fas fa-check-circle';
    if (type === 'error') icon = 'fas fa-exclamation-circle';
    
    notification.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificação
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remover notificação após 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Função auxiliar para escurecer cor
function darkenColor(color, percent) {
    // Converter hex para RGB
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);
    
    // Escurecer
    r = Math.floor(r * (100 - percent) / 100);
    g = Math.floor(g * (100 - percent) / 100);
    b = Math.floor(b * (100 - percent) / 100);
    
    // Converter de volta para hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Adicionar estilos para notificação
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: rgba(13, 27, 42, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(231, 57, 70, 0.3);
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: white;
        font-family: 'Exo 2', sans-serif;
        z-index: 10000;
        transform: translateX(120%);
        transition: transform 0.3s ease;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        max-width: 350px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification.success {
        border-left: 4px solid #06D6A0;
    }
    
    .notification.error {
        border-left: 4px solid #EF476F;
    }
    
    .notification.info {
        border-left: 4px solid #118AB2;
    }
    
    .notification i {
        font-size: 1.2rem;
    }
    
    .notification.success i {
        color: #06D6A0;
    }
    
    .notification.error i {
        color: #EF476F;
    }
    
    .notification.info i {
        color: #118AB2;
    }
`;

document.head.appendChild(notificationStyles);

// Adicionar efeito de scroll no header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.glass-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Efeito de parallax para o background grid
window.addEventListener('scroll', function() {
    const grid = document.querySelector('.background-grid');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (grid) {
        grid.style.transform = `translateY(${rate}px)`;
    }
});

// Inicializar tooltips
document.querySelectorAll('[title]').forEach(element => {
    element.addEventListener('mouseenter', function(e) {
        const title = this.getAttribute('title');
        if (!title) return;
        
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = title;
        
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        
        this.removeAttribute('title');
        this.setAttribute('data-title', title);
    });
    
    element.addEventListener('mouseleave', function() {
        const title = this.getAttribute('data-title');
        if (title) {
            this.setAttribute('title', title);
            this.removeAttribute('data-title');
        }
        
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// Adicionar estilos para tooltips
const tooltipStyles = document.createElement('style');
tooltipStyles.textContent = `
    .tooltip {
        position: fixed;
        background: rgba(13, 27, 42, 0.95);
        backdrop-filter: blur(10px);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.85rem;
        z-index: 10000;
        border: 1px solid rgba(231, 57, 70, 0.3);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        pointer-events: none;
        max-width: 200px;
        text-align: center;
        transform: translateY(-10px);
        opacity: 0;
        animation: tooltipFadeIn 0.2s forwards;
    }
    
    @keyframes tooltipFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(tooltipStyles);