import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ProjectDetail from './projectDetail';



import {
  ArrowUpRight,
  Code2,
  Download,
  Github,
  Layers3,
  Mail,
  Menu,
  Moon,
  Palette,
  Phone,
  Send,
  Smartphone,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import './styles.css';

// Clé publique Web3Forms (voir web3forms.com). Tant qu'elle n'est pas remplacée,
// le formulaire ouvre l'application e-mail du visiteur (mode de secours).
const WEB3FORMS_KEY = 'adce50dc-e0cc-4b67-9a8c-21ec5aba27c3';
const CONTACT_EMAIL = 'tounkaraaissata474@gmail.com';

const projects = [
  {
    title: 'HotelSmart',
    category: 'mobile',
    image: '/projects/hotelsmart/2.jpeg',
    description: 'Application mobile de gestion hôtelière (admin, réceptionniste, client) — projet de la 1re place régionale WorldSkills Algeria 2026.',
    tech: ['Flutter', 'Dart', 'SQLite', 'Provider'],
  },
  {
    title: 'Rendevo',
    category: 'fullstack',
    image: '/projects/rendevo/poster.jpeg',
    description: 'Plateforme sociale d’événements (projet en binôme) — création d’événements, tableau de bord, billets QR envoyés par e-mail et scan à l’entrée.',
    tech: ['PWA', 'QR code', 'Paiement mobile'],
  },
  {
    title: 'GestionMenuiserie',
    category: 'fullstack',
    image: '/projects/menuiserie/1.png',
    description: 'Application de gestion pour menuisiers — devis clients, commandes et factures en un seul outil.',
    tech: ['Laravel', 'MySQL', 'React', 'Tailwind CSS'],
  },
  {
    title: 'AnoBox',
    category: 'fullstack',
    image: '/projects/anonbox/1.jpeg',
    description: 'Messagerie anonyme — envoyez et recevez des messages sans révéler votre identité.',
    tech: ['Next.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'MyAgenda',
    category: 'frontend',
    image: '/projects/myagenda/1.png',
    description: 'Gestion de rendez-vous avec notifications 1 h ou 24 h avant chaque RDV.',
    tech: ['React', 'JavaScript', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'ShopApp',
    category: 'mobile',
    image: '/projects/shopapp/1.jpeg',
    description: 'App mobile e-commerce — connexion, inscription, ajout de produits en vente et gestion du panier.',
    tech: ['Flutter', 'Dart'],
  },
  {
    title: 'AuthApp',
    category: 'mobile',
    image: '/projects/authapp/1.jpeg',
    description: 'App mobile avec authentification complète — connexion, déconnexion, inscription et accueil personnalisé.',
    tech: ['Flutter', 'Dart', 'Firebase'],
  },
];

const skills = [
  { name: 'Mobile', items: ['Flutter', 'Dart', 'Provider', 'SQLite', 'Firebase'] },
  { name: 'Front-end', items: ['React', 'Next.js', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'] },
  { name: 'Back-end', items: ['Laravel', 'PHP', 'API REST'] },
  { name: 'Données & conception', items: ['MySQL', 'UML', 'Figma'] },
  { name: 'Outils', items: ['Git / GitHub', 'GitHub Actions', 'Tests automatisés', 'Vercel'] },
];

function App() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light');
  const [filter, setFilter] = useState('all');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | mailto

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const navItems = ['Accueil', 'Services', 'Projets', 'Compétences', 'Contact'];

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Retour accueil">
          <span>AT</span>
          <strong>Aïssata Tounkara</strong>
        </a>

        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item} href={`#${slug(item)}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            aria-label={theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'}
            title={theme === 'dark' ? 'Thème clair' : 'Thème sombre'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label="Ouvrir le menu"
            title="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section id="accueil" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">
             <Sparkles size={16} /> Développeuse Full-Stack · Diplômée BTS Web & Mobile
          </p>
          <h1>Je conçois des applications web et mobile complètes, du back-end à l’interface.</h1>
          <p className="lead">
               Diplômée d’un BTS en développement web et mobile et lauréate de la 1re place régionale
               WorldSkills Algeria 2026 en développement d’applications mobiles. Je développe avec Flutter,
               React et Laravel. Je recherche un stage ou un premier emploi de développeuse full-stack.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projets">
                Voir mes projets <ArrowUpRight size={18} />
              </a>
              <a className="button ghost" href="#contact">
                Me contacter <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual profile-visual" aria-label="Photo de profil">
            <div className="portrait-frame">
              <img
                src="/profile.jpg"
                alt="Portrait d’Aïssata Tounkara"
                onError={(event) => {
                  event.currentTarget.src = '/profile-placeholder.svg';
                }}
              />
            </div>
            <div className="floating-panel top">
              <Code2 size={20} />
              <span>React + design</span>
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Chiffres clés">
          <Metric value="1re place" label="régionale WorldSkills Algeria 2026 (mobile)" />
          <Metric value="BTS" label="Web & Mobile, diplômée 2026" />
          <Metric value="7" label="projets réalisés" />
        </section>

        <section id="services" className="section compact">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
          <h2>Du web au mobile, des solutions complètes du back-end à l’interface.</h2>
          </div>
          <div className="service-grid">
            <ServiceCard
              icon={<Layers3 />}
              title="Applications web full-stack"
              text="Interface React ou Next.js, API Laravel et base de données MySQL, pensées pour un vrai besoin métier."
            />
            <ServiceCard
              icon={<Smartphone />}
              title="Applications mobiles"
              text="Applications Flutter multi-profils, avec base de données locale, notifications et tests automatisés."
            />
            <ServiceCard
              icon={<Palette />}
              title="Conception et interface"
              text="Wireframes, diagrammes UML et interfaces claires et responsives avant d’écrire le code."
            />
          </div>
        </section>

        <section id="projets" className="section">
          <div className="section-heading row">
            <div>
              <p className="eyebrow">Sélection</p>
              <h2>Projets</h2>
            </div>
            <div className="filters" aria-label="Filtrer les projets">
            {['all', 'frontend', 'fullstack', 'mobile'].map((item) => (     
             <button
                  key={item}
                  className={filter === item ? 'active' : ''}
                  type="button"
                  onClick={() => setFilter(item)}
                >
                  {labelFilter(item)}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >
              <button
                className="project-link"
                type="button"
                onClick={() => navigate(`/projet/${project.title.toLowerCase()}`)}
                aria-label={`Voir le projet ${project.title}`}
              >
                <img src={project.image} alt={`Aperçu de ${project.title}`} />
                <div className="project-content">
                  <div>
                    <p>{labelFilter(project.category)}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-arrow" aria-hidden="true">
                    <ArrowUpRight size={19} />
                  </span>
                  <span>{project.description}</span>
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <small key={tech}>{tech}</small>
                    ))}
                  </div>
                </div>
              </button>
            </article>
            ))}
          </div>
        </section>

        <section id="competences" className="section split">
          <div className="section-heading">
            <p className="eyebrow">Compétences</p>
          <h2>Une stack complète, du mobile au back-end.</h2>
          <p>
              Flutter pour le mobile, React et Next.js pour le front-end, Laravel et MySQL pour le back-end :
              je couvre toute la chaîne pour livrer des applications solides et testées.
            </p>
          </div>
          <div className="skill-panel">
            {skills.map((group) => (
              <div className="skill-group" key={group.name}>
                <strong>{group.name}</strong>
                <div className="tech-list">
                  {group.items.map((item) => (
                    <small key={item}>{item}</small>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Un projet, un stage, une opportunité ? Parlons-en.</h2>
          <p>
            Diplômée d’un BTS en développement web et mobile, je suis disponible pour un stage ou un premier emploi
            de développeuse full-stack, ainsi que pour des missions et collaborations.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '1.5rem 0' }}>
            
            <a href="mailto:tounkaraaissata474@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={17} /> tounkaraaissata474@gmail.com
            </a>

            <a 
              href="https://www.linkedin.com/in/aissata-tounkara-62710637a" 
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span style={{ 
              background: '#1c1e20', 
              color: 'white', 
              borderRadius: '4px', 
              padding: '2px 6px', 
              fontSize: '12px', 
              fontWeight: 'bold' 
            }}>in</span> 
            LinkedIn — Aïssata Tounkara
            </a>

            <a 
            href="https://github.com/Aissata-Tounkara" 
            target="_blank" 
            rel="noreferrer" 
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Github size={17} /> GitHub — Aissata Tounkara
          </a>

            <a 
              href="https://wa.me/22378619780"
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Send size={17} /> WhatsApp — +22378619780
            </a>

            <a 
              href="tel:+213797592024"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Phone size={17} /> Appel — +213797592024
            </a>

          </div>

          <a className="download-link" href="/cv.pdf" download aria-label="Télécharger le CV">
            <Download size={18} /> Télécharger mon CV
          </a>
        </div>

        <form className="contact-form" onSubmit={async (event) => {
          event.preventDefault();
          const formEl = event.currentTarget;
          const form = new FormData(formEl);
          const name = form.get('name');
          const email = form.get('email');
          const message = form.get('message');

          if (WEB3FORMS_KEY === 'COLLEZ_VOTRE_CLE_ICI') {
            const subject = encodeURIComponent(`Contact portfolio — ${name}`);
            const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\n\n${message}`);
            window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
            setStatus('mailto');
            return;
          }

          setStatus('sending');
          try {
            const response = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
              body: JSON.stringify({
                access_key: WEB3FORMS_KEY,
                subject: `Contact portfolio — ${name}`,
                from_name: 'Portfolio Aïssata Tounkara',
                name,
                email,
                message,
                botcheck: form.get('botcheck') || '',
              }),
            });
            const result = await response.json();
            if (result.success) {
              setStatus('success');
              formEl.reset();
            } else {
              setStatus('error');
            }
          } catch {
            setStatus('error');
          }
        }}>
          <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
          <label>
            Nom
            <input name="name" type="text" placeholder="Votre nom" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="votre@email.com" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Parlez-moi de votre projet" rows="5" required />
          </label>
          <button className="button primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi en cours…' : <>Envoyer <Send size={18} /></>}
          </button>
          {status === 'success' && <p className="form-status">Merci ! Votre message a bien été envoyé. Je vous répondrai rapidement.</p>}
          {status === 'error' && (
            <p className="form-status">
              L’envoi a échoué. Écrivez-moi directement à <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          )}
          {status === 'mailto' && <p className="form-status">Votre application e-mail va s’ouvrir pour envoyer le message.</p>}
        </form>
      </section>
      </main>

      <footer>
      <span>© 2026 Aïssata Tounkara </span>
      <div>
        <a 
          href="https://github.com/Aissata-Tounkara" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Github"
        >
          <Github size={19} />
        </a>
        <a 
          href="https://www.linkedin.com/in/aissata-tounkara-62710637a" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="LinkedIn"
        >
          <span style={{ 
            background: '#0d0e10', 
            color: 'white', 
            borderRadius: '4px', 
            padding: '2px 6px', 
            fontSize: '12px', 
            fontWeight: 'bold' 
          }}>in</span>
        </a>
        <a 
          href="https://wa.me/22378619780"
          target="_blank" 
          rel="noreferrer" 
          aria-label="WhatsApp"
        >
          <Send size={19} />
        </a>
        <a 
          href="mailto:tounkaraaissata474@gmail.com"
          aria-label="Email"
        >
          <Mail size={19} />
        </a>
      </div>
    </footer>
    </>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function slug(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
}

function labelFilter(value) {
 const labels = {
  all: 'Tous',
  frontend: 'Frontend',
  fullstack: 'Fullstack',
  mobile: 'Mobile',
};
  return labels[value];
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projet/:id" element={<ProjectDetail />} />
    </Routes>
  </BrowserRouter>
);
