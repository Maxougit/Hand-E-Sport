import React, { useState } from "react";
import Link from "next/link";
import styles from "./BurgerMenu.module.css"; // Assurez-vous de créer ce fichier CSS correspondant

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.burgerMenuContainer}>
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.burgerIcon}>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
      </button>
      <div className={`${styles.menuItems} ${isOpen ? styles.menuOpen : ""}`}>
        <Link href="/" passHref>
          <span className={styles.menuLink}>Accueil</span>
        </Link>
        {/* <Link href="/galerie" passHref>
          <span className={styles.menuLink}>Galerie</span>
        </Link> */}
        <Link href="/partenaire" passHref>
          <span className={styles.menuLink}>Partenaires</span>
        </Link>
        {/* <Link href="/reseaux" passHref>
            <span className={styles.menuLink}>Réseaux</span>
          </Link> */}
        {/* <Link href="/flyer" passHref>
          <span className={styles.menuLink}>Flyer</span>
        </Link> */}
      </div>
    </div>
  );
};

export default BurgerMenu;
