import './style.css';
import forestVideo from './assets/oceano.mp4';

const whatsapp = 'https://wa.me/5533999388641';
const instagram = 'https://www.instagram.com/sitew.aves/';

document.querySelector('#app').innerHTML = `
<header class="header">
    <a href="#inicio" class="logo">
        SITEWAVES<span>.</span>
    </a>

    <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">
        <span></span>
        <span></span>
    </button>

    <nav class="navigation">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#projetos">Projetos</a>
    </nav>

    <a href="${whatsapp}" class="header-contact" target="_blank" rel="noopener noreferrer">
        Vamos conversar <span>↗</span>
    </a>
</header>

<main>

    <section class="hero forest-hero" id="inicio">

        <video class="hero-video" autoplay muted loop playsinline preload="auto">
            <source src="${forestVideo}" type="video/mp4">
        </video>

        <div class="hero-overlay"></div>

        <div class="hero-content forest-hero-content">
            <h1 class="forest-logo reveal">
                SITEWAVES
            </h1>
        </div>

    </section>

    <section class="manifesto sand-section" id="sobre">
        <div class="section-top">
            <span>01 / A SITEWAVES</span>
            <span>QUEM SOMOS</span>
        </div>

        <div class="manifesto-content">
            <div class="manifesto-heading reveal">
                <span class="overline">NOSSA VISÃO</span>
                <h2>
                    O extraordinário<br>
                    começa com uma<br>
                    <span>nova perspectiva.</span>
                </h2>
            </div>

            <div class="manifesto-description reveal">
                <div class="decorative-mark">“</div>
                <p>
                    Acreditamos que cada marca possui uma
                    história que merece ser apresentada
                    de maneira única.

                    Por isso, combinamos criatividade,
                    tecnologia e propósito para criar
                    experiências digitais memoráveis.
                </p>
                <span class="signature">SITEWAVES — DIGITAL STUDIO</span>
            </div>
        </div>

        <div class="manifesto-footer">
            <span>CRIATIVIDADE COM DIREÇÃO.</span>
            <span>TECNOLOGIA COM PROPÓSITO.</span>
        </div>
    </section>

    <section class="services navy-section" id="servicos">
        <div class="section-top light-top">
            <span>02 / NOSSAS SOLUÇÕES</span>
            <span>O QUE FAZEMOS</span>
        </div>

        <div class="services-intro reveal">
            <span class="overline">DO CONCEITO À EXPERIÊNCIA</span>
            <h2>
                Construímos o<br>
                seu próximo <span>passo.</span>
            </h2>
            <p>
                Soluções digitais pensadas para destacar
                sua marca e aproximá-la das pessoas.
            </p>
        </div>

        <div class="services-list">

            <article class="service-item reveal">
                <span class="service-number">01</span>
                <div class="service-info">
                    <h3>Websites institucionais</h3>
                    <p>
                        Presença digital com personalidade,
                        estrutura e identidade própria.
                    </p>
                </div>
                <span class="service-symbol">↗</span>
            </article>

            <article class="service-item reveal">
                <span class="service-number">02</span>
                <div class="service-info">
                    <h3>Landing pages</h3>
                    <p>
                        Páginas estratégicas para apresentar
                        produtos, serviços e campanhas.
                    </p>
                </div>
                <span class="service-symbol">↗</span>
            </article>

            <article class="service-item reveal">
                <span class="service-number">03</span>
                <div class="service-info">
                    <h3>Design de experiências</h3>
                    <p>
                        Interfaces, interações e animações
                        que tornam cada visita especial.
                    </p>
                </div>
                <span class="service-symbol">↗</span>
            </article>

        </div>
    </section>

    <section class="portfolio sand-section" id="projetos">
        <div class="section-top">
            <span>03 / PORTFÓLIO</span>
            <span>PROJETOS CONCEITUAIS</span>
        </div>

        <div class="portfolio-heading reveal">
            <div>
                <span class="overline">NOSSO UNIVERSO CRIATIVO</span>
                <h2>Design que deixa<br><span>impressão.</span></h2>
            </div>

            <p>
                Conceitos visuais que demonstram
                diferentes possibilidades para marcas.
            </p>
        </div>

        <div class="project-grid">

            <article class="project-card project-large reveal">
                <div class="project-visual project-fashion">
                    <span class="project-index">01</span>
                    <div class="fashion-art">
                        <span>STREET</span>
                        <strong>KICKS</strong>
                        <small>MOVE DIFFERENT.</small>
                    </div>
                    <span class="project-category">FASHION / E-COMMERCE</span>
                </div>
                <div class="project-caption">
                    <h3>StreetKicks</h3>
                    <span>Conceito de loja de sneakers ↗</span>
                </div>
            </article>

            <article class="project-card reveal">
                <div class="project-visual project-automotive">
                    <span class="project-index">02</span>
                    <div class="auto-art">
                        <span>PRECISION</span>
                        <strong>AUTOMOTIVE</strong>
                        <small>BEYOND THE SURFACE.</small>
                    </div>
                    <span class="project-category">AUTOMOTIVE / SERVICES</span>
                </div>
                <div class="project-caption">
                    <h3>AutoPrime</h3>
                    <span>Conceito automotivo ↗</span>
                </div>
            </article>

            <article class="project-card reveal">
                <div class="project-visual project-floral">
                    <span class="project-index">03</span>
                    <div class="floral-art">
                        <span>FLORESCER</span>
                        <strong>Flor & Jardim</strong>
                        <small>A BELEZA EM CADA DETALHE.</small>
                    </div>
                    <span class="project-category">LIFESTYLE / COMMERCE</span>
                </div>
                <div class="project-caption">
                    <h3>Flor & Jardim</h3>
                    <span>Conceito de floricultura ↗</span>
                </div>
            </article>

        </div>
    </section>

    <section class="process navy-section">
        <div class="section-top light-top">
            <span>04 / NOSSO PROCESSO</span>
            <span>COMO CRIAMOS</span>
        </div>

        <div class="process-heading reveal">
            <span class="overline">CADA DETALHE IMPORTA</span>
            <h2>
                Da ideia à<br>
                <span>realidade digital.</span>
            </h2>
        </div>

        <div class="process-grid">
            <article class="process-step reveal">
                <span>01</span>
                <h3>Descoberta</h3>
                <p>Entendemos sua marca, seus objetivos e suas necessidades.</p>
            </article>

            <article class="process-step reveal">
                <span>02</span>
                <h3>Criação</h3>
                <p>Desenvolvemos a direção visual e a experiência do projeto.</p>
            </article>

            <article class="process-step reveal">
                <span>03</span>
                <h3>Desenvolvimento</h3>
                <p>Transformamos o conceito em um site funcional e responsivo.</p>
            </article>

            <article class="process-step reveal">
                <span>04</span>
                <h3>Publicação</h3>
                <p>Preparamos o projeto para chegar ao mundo.</p>
            </article>
        </div>
    </section>

    <section class="contact sand-section" id="contato">
        <div class="section-top">
            <span>05 / CONTATO</span>
            <span>SEU PRÓXIMO CAPÍTULO</span>
        </div>

        <div class="contact-content reveal">
            <span class="overline">VAMOS CRIAR ALGO ÚNICO?</span>
            <h2>
                Sua próxima<br>
                grande ideia<br>
                <span>começa aqui.</span>
            </h2>

            <p>
                Toda grande presença digital começa
                com uma conversa.
            </p>

            <a href="${whatsapp}" class="button-dark" target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp <span>↗</span>
            </a>
        </div>

        <footer class="footer">
            <a href="#inicio" class="logo footer-logo">
                SITEWAVES<span>.</span>
            </a>

            <div class="footer-socials">
                <a href="${instagram}" target="_blank" rel="noopener noreferrer">
                    Instagram ↗
                </a>

                <a href="${whatsapp}" target="_blank" rel="noopener noreferrer">
                    WhatsApp ↗
                </a>
            </div>

            <span>DESIGN. TECHNOLOGY. EXPERIENCE.</span>
            <span>© <span id="year"></span> SITEWAVES</span>
        </footer>
    </section>

</main>
`;

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('active');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});