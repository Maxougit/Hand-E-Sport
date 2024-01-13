// pages/partenaires.js
import Image from "next/image";
import styles from "./partenaires.module.css"; // Assurez-vous de créer ce fichier CSS
import BurgerMenu from "@/components/burgermenu";
import { Typography } from "@material-ui/core";

// Simulacre de données des partenaires
const partenaires = [
  {
    nom: "Crous de Reims",
    logo: "/PartenaireLogo/crous.png",
    description: "Financement et soutien",
    lien: "https://www.crous-reims.fr/",
  },
  {
    nom: "CVEC",
    logo: "/PartenaireLogo/cvec.png",
    description: "Financement",
    lien: "https://cvec.etudiant.gouv.fr/",
  },
  // Ajoutez d'autres partenaires ici...
];

export default function Partenaires() {
  return (
    <div className={styles.container}>
      <BurgerMenu />
      <Typography variant="h3" component="h1" my={1}>
        Nos Partenaires
      </Typography>
      <div className={styles.partenairesList}>
        {partenaires.map((partenaire, index) => (
          <div key={index} className={styles.partenaire}>
            <a href={partenaire.lien} target="_blank" rel="noopener noreferrer">
              <Image
                src={partenaire.logo}
                alt={`Logo de ${partenaire.nom}`}
                width={150}
                height={150}
              />
            </a>
            <Typography variant="h6" my={1}>
              {partenaire.nom}
            </Typography>
            <Typography variant="Typography">
              {partenaire.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
