import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    screenshot: false
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id], header[id]').forEach((el) => {
      observer.observe(el);
    });

    // Initial hero animation
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      <header className={`hero ${isVisible.hero ? 'animate-in' : ''}`} id="hero">
        <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="gradient-mesh"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="highlight">Fou d'Ball</span>
              <br />
              <span className="subtitle-text">L'app qui révolutionne</span>
              <br />
              <span className="subtitle-text">tes matchs</span>
            </h1>
            <p className="hero-subtitle">
              Organise tes équipes, planifie tes matchs et reste connecté avec tes coéquipiers. 
              L'expérience football nouvelle génération.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">1K+</div>
                <div className="stat-label">Utilisateurs actifs</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Matchs organisés</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.8⭐</div>
                <div className="stat-label">Note moyenne</div>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="https://apps.apple.com/us/app/fou-dball/id1506943262" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <div className="btn-content">
                  <span className="btn-icon">📱</span>
                  <div>
                    <div className="btn-text">Télécharger sur</div>
                    <div className="btn-store">App Store</div>
                  </div>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.strime.fou_dball" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                <div className="btn-content">
                  <span className="btn-icon">🤖</span>
                  <div>
                    <div className="btn-text">Disponible sur</div>
                    <div className="btn-store">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-frame">
                <img src="/app.png" alt="Fou d'Ball App" className="app-icon" />
              </div>
              <div className="floating-elements">
                <div className="floating-ball">⚽</div>
                <div className="floating-whistle">🏆</div>
                <div className="floating-calendar">📅</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={`features ${isVisible.features ? 'animate-in' : ''}`} id="features">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">✨ Fonctionnalités</div>
            <h2>Tout ce dont ton équipe a besoin</h2>
            <p>Une suite complète d'outils pour organiser et gérer tes matchs comme un pro</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card feature-card-highlight">
              <div className="feature-header">
                <div className="feature-icon">⚽</div>
                <div className="feature-badge">Populaire</div>
              </div>
              <h3>Calendrier intelligent</h3>
              <p>Invite tes amis dans ton équipe et visualise qui est disponible pour ton prochain match. Synchronisation automatique avec ton calendrier.</p>
              <div className="feature-benefits">
                <div className="benefit">✓ Invitations automatiques</div>
                <div className="benefit">✓ Suivi des disponibilités</div>
                <div className="benefit">✓ Rappels intelligents</div>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">💬</div>
              </div>
              <h3>Buvette connectée</h3>
              <p>Discute avec ton équipe, partage des moments et reste connecté avant et après les matchs.</p>
              <div className="feature-benefits">
                <div className="benefit">✓ Chat en temps réel</div>
                <div className="benefit">✓ Partage de photos</div>
                <div className="benefit">✓ Notifications push</div>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">🌙</div>
              </div>
              <h3>Mode sombre</h3>
              <p>Interface adaptative qui s'ajuste à tes préférences et préserve ta batterie pendant les longues sessions.</p>
              <div className="feature-benefits">
                <div className="benefit">✓ Économie d'énergie</div>
                <div className="benefit">✓ Confort visuel</div>
                <div className="benefit">✓ Auto-adaptation</div>
              </div>
            </div>
          </div>
          
          <div className="features-extra">
            <div className="extra-feature">
              <span className="extra-icon">📊</span>
              <div>
                <h4>Statistiques avancées</h4>
                <p>Analyse tes performances et celles de ton équipe</p>
              </div>
            </div>
            <div className="extra-feature">
              <span className="extra-icon">🏆</span>
              <div>
                <h4>Système de récompenses</h4>
                <p>Débloquer des badges et relever des défis</p>
              </div>
            </div>
            <div className="extra-feature">
              <span className="extra-icon">📍</span>
              <div>
                <h4>Localisation des terrains</h4>
                <p>Trouve les meilleurs spots près de chez toi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`screenshot ${isVisible.screenshot ? 'animate-in' : ''}`} id="screenshot">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">📱 Aperçu</div>
            <h2>Une interface pensée pour le terrain</h2>
            <p>Design intuitif et moderne pour une expérience utilisateur exceptionnelle</p>
          </div>
          
          <div className="screenshot-showcase">
            <div className="screenshot-main">
              <div className="screenshot-frame">
                <img src="/screenshot/screenshoot.png" alt="Screenshot Fou d'Ball" className="screenshot-image" />
              </div>
            </div>
            
            <div className="screenshot-features">
              <div className="screen-feature">
                <div className="screen-icon">🎯</div>
                <div>
                  <h4>Interface intuitive</h4>
                  <p>Navigation fluide et accessible à tous</p>
                </div>
              </div>
              <div className="screen-feature">
                <div className="screen-icon">⚡</div>
                <div>
                  <h4>Performance optimisée</h4>
                  <p>Rapidité et fluidité garanties</p>
                </div>
              </div>
              <div className="screen-feature">
                <div className="screen-icon">🎨</div>
                <div>
                  <h4>Design moderne</h4>
                  <p>Esthétique et fonctionnalité réunies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="developer-card">
                <div className="developer-avatar">
                  <img src="/me.jpg" alt="Gaëtan Sancassani" />
                </div>
                <div className="developer-details">
                  <h3>Gaëtan Sancassani</h3>
                  <p className="developer-title">Développeur Apps mobile</p>
                  <p className="footer-location">📍 Grenoble, France</p>
                  <p className="footer-email">
                    ✉️ <a href="mailto:sancassani.gaetan@gmail.com">sancassani.gaetan@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Retrouvez-moi</h4>
              <div className="social-links">
                <a href="https://gaetan-s.me" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </div>
                  <span>Site web</span>
                </a>
                <a href="https://www.linkedin.com/in/gaetan-sancassani/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.malt.fr/profile/gaetansancassani" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <span>Malt</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Fou d'Ball. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;