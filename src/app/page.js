/* eslint-disable react/no-unescaped-entities */
"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import PeopleCard from "../components/peopleCard";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    }

    const listener = (e) => {
      if (e.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    window.matchMedia("(prefers-color-scheme: dark)").addListener(listener);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeListener(listener);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 ">
      <Head>
        <title>Hand E-Sport</title>
      </Head>

      <header className="text-center py-6">
        <h1 className="text-5xl font-bold">HAND E-SPORT</h1>
      </header>

      <section id="intro" className="py-8 h-screen">
        <h2 className="text-4xl font-semibold mb-8">
          HAND E-SPORT, C&rsquo;EST QUOI ?
        </h2>
        <div className="flex items-center">
          <div className="text-container effect-container w-2/3 bg-opacity-30 bg-blue-400 p-5 rounded-lg relative overflow-hidden">
            <div className="text-content">
              <p>
                HAND-E-SPORT est une initiative visant à associer la
                compétitivité de l'e-sport à la combativité des personnes
                souffrant de handicaps, promouvant le jeu comme un terrain
                d'égalité pour tous.
                <br />
                <br />
                Initié par un groupe passionné de Rémois, l'événement consiste
                en un tournoi esport ouvert à tous, avec une attention
                particulière portée à la sensibilisation aux handicaps.
                <br />
                Pour ce faire, divers défis liés aux handicaps seront intégrés
                au tournoi grâce à une roue aléatoire.
                <br />
                <br />
                L'événement aura lieu le 9 mars 2024 au CESI de Reims, avec des
                équipes de cinq joueurs s'affrontant dans plusieurs jeux vidéo.
                <br />
                <br />
                Des stands dédiés à la découverte de technologies adaptées aux
                handicaps seront également présents.
                <br />
                <br />
                Le tout sera diffusé en direct sur Twitch. Pour soutenir
                l'événement, on recherche des partenaires prêts à s'associer
                pour une cause inclusive, offrant en retour une visibilité
                accrue et d'autres avantages promotionnels.
              </p>
            </div>
          </div>
          <div className="image-container w-1/3 pl-5">
            <Image
              src={theme === "dark" ? "/logo.png" : "/logo_w.png"}
              alt="Description de l'image"
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      <section id="who-we-are" className="py-8">
        <h2 className="text-3xl font-semibold mb-8">
          HAND E-SPORT, C’EST QUI ?
        </h2>
        <div className="flex flex-wrap justify-between">
          {/* Affichage des cartes de toutes les personnes pour chaque itération du data.json */}

          <PeopleCard />
        </div>
        <p className="mt-8">
          L'équipe de HAND E-SPORT est composée de passionnés de jeux vidéo et
          de défenseurs de l'inclusion. Chacun d'entre eux contribue avec ses
          compétences et sa passion pour faire de cet événement un succès.
        </p>
      </section>

      {/* Ajoutez d'autres sections ici */}

      <footer className="text-center py-6">
        <p>Contactez-nous: handesport@gmail.com</p>
      </footer>
    </div>
  );
}
