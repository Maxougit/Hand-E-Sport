// pages/partenaires.js
import Image from "next/image";
import styles from "./partenaires.module.css";
import BurgerMenu from "@/components/burgermenu";
import { Typography } from "@material-ui/core";

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
    description: "Financement et soutien",
    lien: "https://cvec.etudiant.gouv.fr/",
  },
  {
    nom: "CESI",
    logo: "/PartenaireLogo/cesi.jpg",
    description: "Financement et soutien",
    lien: "https://www.cesi.fr/",
  },
  {
    nom: "LDLC",
    logo: "/PartenaireLogo/LDLC.jpg",
    description: "Soutient, matériel et récompense du tournoi",
    lien: "https://www.ldlc.com/",
  },
  {
    nom: "Université de Reims",
    logo: "/PartenaireLogo/URCA.jpg",
    description: "Financement et soutien",
    lien: "https://cvec.etudiant.gouv.fr/",
  },
];

export default function Partenaires() {
  return (
    <div className={styles.container}>
      <BurgerMenu />
      <Typography variant="h1" component="h1" my={1}>
        Nos Partenaires
      </Typography>
      <div className={styles.partenairesList}>
        {partenaires.map((partenaire, index) => (
          <div key={index} className={styles.partenaire}>
            <a href={partenaire.lien} target="_blank" rel="noopener noreferrer">
              <Image
                src={partenaire.logo}
                alt={`Logo of ${partenaire.nom}`}
                width={150}
                height={150}
                priority={index === 0} // Add priority to the first image
              />
            </a>
            <Typography variant="h6" my={1}>
              {partenaire.nom}
            </Typography>
            <Typography variant="body1">
              {partenaire.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
