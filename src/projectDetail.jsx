import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Layers3,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const projectsData = {
  'hotelsmart': {
    title: 'HotelSmart',
    category: 'Mobile',
    date: '2026',
    description: `Application mobile de gestion hôtelière pour un hôtel 4 étoiles (cas d'étude : Le Palace, Alger),
    avec trois profils : administrateur, réceptionniste et client. Projet présenté aux WorldSkills Algeria 2026,
    qui m'a valu la 1re place régionale en développement d'applications mobiles.`,
    features: [
      'Gestion des chambres, clients, réservations et paiements',
      'Tableau de bord statistique et notifications locales de check-in / check-out',
      'Interface bilingue français / anglais, thème sombre',
      'Architecture en couches (UI, providers, services, repositories)',
      '28 tests automatisés et intégration continue GitHub Actions',
    ],
    tech: ['Flutter', 'Dart', 'SQLite', 'Provider', 'Material Design 3'],
    images: [
      '/projects/hotelsmart/1.jpeg',
      '/projects/hotelsmart/2.jpeg',
      '/projects/hotelsmart/3.jpeg',
      '/projects/hotelsmart/4.jpeg',
      '/projects/hotelsmart/5.jpeg',
      '/projects/hotelsmart/6.jpeg',
    ],
    github: 'https://github.com/Aissata-Tounkara/hotel_smart',
  },
  'rendevo': {
    title: 'Rendevo',
    category: 'Fullstack',
    date: '2026',
    description: `Plateforme sociale d'événements réalisée en binôme : découverte d'événements, billetterie,
    paiement mobile et espace organisateur. Ma part du projet : la création d'événements, le tableau de bord
    organisateur, les billets (QR code et code de secours à 6 chiffres envoyés par e-mail) et le scan des billets.`,
    features: [
      "Création d'événements",
      'Tableau de bord organisateur',
      'Billets envoyés par e-mail avec QR code et code à 6 chiffres',
      'Scan des billets à l\'entrée',
    ],
    tech: ['PWA', 'QR code', 'Paiement mobile', 'Travail en binôme'],
    video: '/projects/rendevo/demo.mp4',
    poster: '/projects/rendevo/poster.jpeg',
    demo: 'https://rendevo.sahelstack.tech/',
  },
  'gestionmenuiserie': {
    title: 'GestionMenuiserie',
    category: 'Fullstack',
    date: '2025',
    description: `Application complète de gestion pour menuisiers. 
    Permet de créer des devis clients, gérer les commandes 
    et générer des factures en un seul outil simple et rapide.`,
    features: [
      'Création et envoi de devis clients',
      'Suivi des commandes en temps réel',
      'Génération automatique de factures PDF',
      'Tableau de bord avec statistiques',
    ],
    tech: ['Laravel', 'MySQL', 'React', 'Tailwind CSS'],
    images: [
      '/projects/menuiserie/1.png',
      '/projects/menuiserie/2.png',
      '/projects/menuiserie/3.png',
      '/projects/menuiserie/4.png',
      '/projects/menuiserie/5.png',
    ],
    github: 'https://github.com/Aissata-Tounkara/menuiserie_app_back',
  },
  'anobox': {
    title: 'AnoBox',
    category: 'Fullstack',
    date: '2025',
    description: `Messagerie anonyme — envoyez et recevez des messages 
    sans révéler votre identité.`,
    features: [
      'Envoi et réception de messages anonymes',
      'Boîte de réception personnelle',
      'Aucune inscription requise pour envoyer',
      'Interface minimaliste et intuitive',
    ],
    tech: ['Next.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    images: [
      '/projects/anonbox/1.jpeg',
      '/projects/anonbox/2.jpeg',
      '/projects/anonbox/3.jpeg',
    ],
    github: 'https://github.com/Aissata-Tounkara',
  },
  'myagenda': {
    title: 'MyAgenda',
    category: 'Frontend',
    date: '2025',
    description: `Application de gestion de rendez-vous personnelle. 
    Notez vos RDV et choisissez d'être notifié 1 h ou 24 h avant.`,
    features: [
      'Ajout et gestion de rendez-vous',
      'Notifications 1h ou 24h avant le RDV',
      'Vue calendrier mensuelle',
      'Interface simple et rapide',
    ],
    tech: ['React', 'JavaScript', 'MySQL', 'Tailwind CSS'],
    images: [
      '/projects/myagenda/1.png',
      '/projects/myagenda/2.png',
      '/projects/myagenda/3.png',
      '/projects/myagenda/4.png',
      '/projects/myagenda/5.png',
      '/projects/myagenda/6.png',
    ],
    github: 'https://github.com/Aissata-Tounkara',
  },
  'shopapp': {
    title: 'ShopApp',
    category: 'Mobile',
    date: '2025',
    description: `Application mobile e-commerce complète. 
    Connexion, inscription, ajout de produits et gestion du panier.`,
    features: [
      'Authentification complète',
      'Ajout de produits en vente',
      'Panier avec ajout et suppression',
      'Interface mobile fluide',
    ],
    tech: ['Flutter', 'Dart'],
    images: [
      '/projects/shopapp/1.jpeg',
      '/projects/shopapp/2.jpeg',
      '/projects/shopapp/3.jpeg',
    ],
    github: 'https://github.com/Aissata-Tounkara',
  },
  'authapp': {
    title: 'AuthApp',
    category: 'Mobile',
    date: '2025',
    description: `Application mobile avec système d'authentification complet.
    Connexion, déconnexion, inscription et accueil personnalisé.`,
    features: [
      'Écran de connexion sécurisé',
      'Inscription avec validation',
      'Déconnexion propre',
      "Page d'accueil personnalisée",
    ],
    tech: ['Flutter', 'Dart', 'Firebase'],
    images: [
      '/projects/authapp/1.jpeg',
      '/projects/authapp/2.jpeg',
      '/projects/authapp/3.jpeg',
    ],
    github: 'https://github.com/Aissata-Tounkara/auth-flutter-firebase',
  },
};

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="project-carousel">

      {/* Image principale */}
      <div className="carousel-main">
        <img
          src={images[current]}
          alt={`capture ${current + 1}`}
          loading="lazy"
        />

        {/* Boutons précédent / suivant */}
        <button onClick={prev} className="carousel-btn prev" aria-label="Image précédente">
          <ChevronLeft size={20} />
        </button>

        <button onClick={next} className="carousel-btn next" aria-label="Image suivante">
          <ChevronRight size={20} />
        </button>

        {/* Compteur */}
        <div className="carousel-counter">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Miniatures */}
      <div className="carousel-thumbs">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`carousel-thumb${i === current ? ' active' : ''}`}
          >
            <img src={img} alt={`miniature ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id];

  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2>Projet introuvable</h2>
        <button className="button ghost" onClick={() => navigate('/')}>
          <ArrowLeft size={18} /> Retour
        </button>
      </div>
    );
  }

  return (
    <div className="section" style={{ paddingTop: '40px' }}>

      {/* Bouton retour */}
      <button
        className="button ghost"
        onClick={() => navigate('/')}
        style={{ marginBottom: '2rem' }}
      >
        <ArrowLeft size={18} /> Retour aux projets
      </button>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <p className="eyebrow">
          <Layers3 size={14} /> {project.category}
        </p>
        <h1 style={{ marginBottom: '1rem' }}>{project.title}</h1>
        <p className="lead">{project.description}</p>
      </div>

      {/* Carrousel */}
      {project.video ? (
        <div className="project-carousel">
          <video
            src={project.video}
            poster={project.poster}
            controls
            playsInline
            preload="metadata"
            style={{ width: '100%', borderRadius: '18px', display: 'block', background: '#000' }}
          >
            Votre navigateur ne peut pas lire cette vidéo.
          </video>
        </div>
      ) : (
        <Carousel images={project.images} />
      )}

      {/* Infos */}
      <div className="project-info-grid">

        {/* Fonctionnalités */}
        <div className="project-info-card">
          <h3 style={{ marginBottom: '1.2rem' }}>Fonctionnalités</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
            {project.features.map((f, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'center',
                gap: '10px', color: 'var(--muted)', fontSize: '15px',
              }}>
                <span style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: 'var(--accent)', flexShrink: 0,
                }} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Stack & infos */}
        <div className="project-info-card">
          <h3 style={{ marginBottom: '1.2rem' }}>Stack technique</h3>
          <div className="tech-list" style={{ marginBottom: '1.5rem' }}>
            {project.tech.map((t) => (
              <small key={t}>{t}</small>
            ))}
          </div>

          <h3 style={{ marginBottom: '1rem' }}>Infos</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)' }}>
              <Calendar size={16} color="var(--accent)" />
              <span>Année : {project.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)' }}>
              <Layers3 size={16} color="var(--accent)" />
              <span>Catégorie : {project.category}</span>
            </div>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="button ghost">
                <Github size={17} /> Voir sur GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="button primary">
                <ArrowRight size={17} /> Voir le site
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
