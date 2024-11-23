"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import PeopleCard from "../components/peopleCard";
import FooterWithSocialLinks from "../components/footer";
import BurgerMenu from "../components/burgermenu";
import SocialCard from "../components/socialDirectLink";

import { Box, Card, CardContent, Button } from "@mui/material";
import styled, { keyframes } from "styled-components";

const moveGradient = keyframes` 
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedGradientButton = styled(Button)`
  && {
    width: 100%;
    background: linear-gradient(135deg, #4289ff, #ffffff);
    background-size: 200% 200%;
    border-radius: 20px;
    color: #0a1b3c;
    font-weight: bold;
    padding: 10px 30px; // Ajustez le padding selon vos besoins
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    border: none; // Pour enlever la bordure par défaut des boutons MUI

    &:hover {
      animation: ${moveGradient} 3s linear infinite;
      transform: scale(1.02);
      color: #f7c748; // Changez la couleur du texte au survol si nécessaire
    }
  }
`;

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [timeRemaining, setTimeRemaining] = useState("...");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    updateTheme(mediaQuery); // Initial check
    mediaQuery.addEventListener("change", updateTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-03-08T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeRemaining("L&apos;événement est en cours ou terminé!");
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto px-4 ">
      <Head>
        <title>Hand E-Sport</title>
      </Head>
      <BurgerMenu />
      <header className="text-center py-6">
        <h1 className="text-5xl font-bold">HAND E-SPORT V2</h1>
        <p className="mt-4 text-3xl font-semibold">
          Compte à rebours jusqu&apos;au 8 mars 2025 :
        </p>
        <p className="mt-2 text-5xl font-bold text-center">{timeRemaining}</p>
      </header>

      <section id="intro" className="py-8">
        <h2 className="text-4xl font-semibold mb-8">
          HAND E-SPORT, C&rsquo;EST QUOI ?
        </h2>
        <div className="full-text-container flex items-center">
          <div className="text-container effect-container w-2/3 bg-opacity-30 bg-blue-400 p-5 rounded-lg relative overflow-hidden">
            <div className="text-content">
              <p>
                HAND-E-SPORT est une initiative visant à associer la
                compétitivité de l&apos;e-sport à la combativité des personnes
                souffrant de handicaps, promouvant le jeu comme un terrain
                d&apos;égalité pour tous.
                <br />
                <br />
                Initié par un groupe passionné de Rémois, l&apos;événement
                consiste en un tournoi e-sport ouvert à tous, avec une attention
                particulière portée à la sensibilisation aux handicaps.
                <br />
                Pour ce faire, divers défis liés aux handicaps sont intégrés à
                un tournoi grâce à une roue aléatoire, le jour de
                l&apos;événement, en parallèle aux stands de présentation.
                <br />
                <br />
                La première itération de l&apos;événement a eu lieu le{" "}
                <strong>8 mars 2025</strong> au{" "}
                <a
                  href="https://www.google.fr/maps/place/Campus+CESI/@49.2315449,4.009956,16z/data=!3m1!4b1!4m6!3m5!1s0x47e9748c4dfd3633:0x21e7a3d383c840e7!8m2!3d49.2315449!4d4.0125309!16s%2Fg%2F1td9vfsp?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <u>CESI de Reims</u>
                </a>
                . Avec un super tournoi, des stands de présentation et une
                ambiance chaleureuse, l&apos;événement a été un succès,
                accueillant prêt de 50 visiteurs en physique et plus de 200
                visiteurs sur notre live.{" "}
                <Link href="/galerie">
                  <u>Photos de l&apos;événement.</u>
                </Link>
                <br />
                <br />
                Le tout a été diffusé en direct sur{" "}
                <a href="https://www.twitch.tv/handesportreims" target="_blank">
                  <u>Twitch</u>
                </a>
                . Pour soutenir l&apos;événement pour les prochaines éditions,
                nous recherchons des partenaires prêts à s&apos;associer pour
                une cause inclusive, offrant en retour une visibilité accrue et
                d&apos;autres avantages promotionnels.
              </p>
            </div>
          </div>
          <div className="image-container w-1/3 pl-5">
            <Image
              src={theme === "dark" ? "/logo.png" : "/logo_w.png"}
              alt="Description de l'image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section id="who-we-are" className="py-8">
        <h2 className="text-3xl font-semibold mb-8">
          HAND E-SPORT, C&rsquo;EST QUI ?
        </h2>
        <div className="flex flex-wrap justify-between">
          <PeopleCard />
        </div>
        <p className="mt-8">
          L&apos;équipe de HAND E-SPORT est composée de passionnés de jeux vidéo
          et de défenseurs de l&apos;inclusion. Chacun d&apos;entre eux
          contribue avec ses compétences et sa passion pour faire de cet
          événement un succès.
        </p>
      </section>
      <h2 className="text-3xl font-semibold mb-8">
        NOUS SUIVRE SUR LES RÉSEAUX !
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SocialCard />
      </div>
      <FooterWithSocialLinks />
    </div>
  );
}
