// pages/partenaires.js
import Image from 'next/image';
import styles from './partenaires.module.css'; // Assurez-vous de créer ce fichier CSS
import BurgerMenu from '@/components/burgermenu';

// Simulacre de données des partenaires
const partenaires = [
  {
    nom: 'Partenaire 1',
    logo: '/chemin/vers/logo1.png',
    description: 'Description du partenaire 1.',
    lien: 'https://partenaire1.com'
  },
  {
    nom: 'Partenaire 2',
    logo: '/chemin/vers/logo2.png',
    description: 'Description du partenaire 2.',
    lien: 'https://partenaire2.com'
  },
  // Ajoutez d'autres partenaires ici...
];

export default function Partenaires() {
  return (
    <div className={styles.container}>
    <BurgerMenu />
      <h1>Nos Partenaires</h1>
      <div className={styles.partenairesList}>
        {partenaires.map((partenaire, index) => (
          <div key={index} className={styles.partenaire}>
            <a href={partenaire.lien} target="_blank" rel="noopener noreferrer">
              <Image src={partenaire.logo} alt={`Logo de ${partenaire.nom}`} width={150} height={150} />
            </a>
            <h2>{partenaire.nom}</h2>
            <p>{partenaire.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
