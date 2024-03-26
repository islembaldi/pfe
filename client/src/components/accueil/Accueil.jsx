import React, { useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faArrowRight,
  faSmile,
} from "@fortawesome/free-solid-svg-icons"; // Importer les icônes nécessaires
import { handleScroll } from "./scrollVisibility.js";

function Accueil() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="animated-background">
      {/* Contenu de la page d'accueil ici */}
      <div className="text-container">
        <h1>Bienvenue sur notre application AutoCompagnon!</h1>
        <p>Commencez votre parcours d'apprentissage dès aujourd'hui.</p>
        <p>
          Bonne chance <FontAwesomeIcon icon={faSmile} />
        </p>
      </div>

      <button className="watch-button">
        {/* Bouton "Watch" */}
        <span className="text">Watch more videos</span>{" "}
        <FontAwesomeIcon icon={faArrowRight} className="icon" />
      </button>

      <div className="content" id="content">
        {/* Contenu principal */}

        <p className="para">PRÉPAREZ L'ÉPREUVE DU CODE</p>
        <p>
          AutoCompagnon est une application web qui vous aide à étudier et
          apprendre le code de la route en Tunisie totalement gratuit à votre
          rythme en ligne.
        </p>
        <p>
          Découvrez tous les nouveaux contenus pour réussir votre code de la
          route: nouveaux panneaux en ligne, nouveaux thèmes de l'examen du code
          de la route et enfin des séries de test composés de 30 questions
          chacune identique à l'examen officiel.
        </p>
        <p>
          Le Code de la Route en Tunisie: Cours gratuit Test Examen Permis de
          Conduire en Tunisie.
        </p>
        <p>
          Étudier le Code de la Route gratuitement et à votre rythme en ligne,
          voir les cours, test gratuit, examens et Auto école en Tunisie.
        </p>
        <p className="para">Tous les outils indispensables pour réussir</p>
      </div>

      <div className="comment-container">
        <FontAwesomeIcon icon={faComment} className="comment-icon" />
        {/* Icône du commentaire */}
        <p>
          Préparez-vous à prendre le volant avec confiance <br />
          et assurance grâce à notre auto-école.{" "}
        </p>
        {/* Champ de commentaire */}
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 HardCode. Tous droits réservés.</p>
      </div>
    </div>
  );
}

export default Accueil;
