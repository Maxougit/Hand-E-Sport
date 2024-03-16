/* eslint-disable react/no-unescaped-entities */
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
      <BurgerMenu />
      <header className="text-center py-6">
        <h1 className="text-5xl font-bold">HAND E-SPORT</h1>
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
                compétitivité de l'e-sport à la combativité des personnes
                souffrant de handicaps, promouvant le jeu comme un terrain
                d'égalité pour tous.
                <br />
                <br />
                Initié par un groupe passionné de Rémois, l'événement consiste
                en un tournoi e-sport ouvert à tous, avec une attention
                particulière portée à la sensibilisation aux handicaps.
                <br />
                Pour ce faire, divers défis liés aux handicaps sont intégrés à
                un tournoi grâce à une roue aléatoire, le jour de l'événement,
                en parallèle aux stands de présentation.
                <br />
                <br />
                La première itération de l'événement a eu lieu le 9 mars 2024 au
                CESI de Reims. Avec un super tournoi, des stands de présentation
                et une ambiance chaleureuse, l'événement a été un succès,
                accueillant prêt de 50 visiteurs en physique et plus de 200 visiteurs sur notre live.{" "}
                <Link href="/galerie">
                  <u>Photos de l'événement.</u>
                </Link>
                <br />
                <br />
                Le tout a été diffusé en direct sur{" "}
                <a
                  href="https://www.twitch.tv/videos/2085585097"
                  target="_blank"
                >
                  <u>Twitch</u>
                </a>
                . Pour soutenir l'événement pour les prochaines éditions, nous
                recherchons des partenaires prêts à s'associer pour une cause
                inclusive, offrant en retour une visibilité accrue et d'autres
                avantages promotionnels.
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
          HAND E-SPORT, C’EST QUI ?
        </h2>
        <div className="flex flex-wrap justify-between">
          <PeopleCard />
        </div>
        <p className="mt-8">
          L'équipe de HAND E-SPORT est composée de passionnés de jeux vidéo et
          de défenseurs de l'inclusion. Chacun d'entre eux contribue avec ses
          compétences et sa passion pour faire de cet événement un succès.
        </p>
      </section>
      <h2 className="text-3xl font-semibold mb-8">
        NOUS SUIVRE SUR LES RÉSEAUX !
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SocialCard />
      </div>
      {/*<section
        id="Participate"
        className="py-8"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
         <h2 className="text-3xl font-semibold mb-8" >
          COMMENT S'INSCRIRE À L'ÉVÉNEMENT ?
        </h2>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column" },
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Card
            sx={{
              padding: "20px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #0a1b3c70, #f7c74845)",
            }}
          >
            <CardContent>
              <div
                className="text-content"
                style={{ color: theme === "dark" ? "white" : "black" }}
              >
                <p>
                  <strong>
                    Bienvenue à notre événement unique en son genre!&nbsp;
                  </strong>
                  Vous avez la possibilité de participer à un passionnant
                  tournoi e-sport <strong>OU</strong> de découvrir des solutions
                  pour rendre les jeux vidéos accessible à tous dans la zone
                  découverte. Voici comment vous pouvez vous joindre à nous !
                </p>
                <br />
                <h2 className="text-2xl font-semibold mb-2">
                  Zone Découverte :
                </h2>
                <p>
                  Envie de découvrir les dernières accessibilités en terme de
                  manettes et de jeux? Réservez votre place pour la zone
                  découverte ! Vous êtes libre de venir à l'heure qui vous
                  convient, sans contrainte horaire. Veuillez noter que le
                  service de restauration n'est pas disponible dans cette zone.
                </p>
                <br />
                <h2 className="text-2xl font-semibold mb-2">
                  Tournoi e-sport :
                </h2>
                <p>
                  Prêt à relever un défi ? Formez une équipe de cinq et
                  inscrivez-vous pour montrer vos compétences dans notre tournoi
                  e-sport. Ouvert à tous, vous pouvez vous inscrire seul et nous
                  vous trouverons une équipe. Les participants au tournoi
                  bénéficieront d'un service de restauration à midi.
                </p>
                <br />
                <h2 className="text-2xl font-semibold mb-2">Plus d'infos ?</h2>
                <p>
                  Pour tous les détails, rendez-vous sur notre serveur Discord
                  dédié à l'événement
                  <a href="https://discord.gg/N3mSpcG4sf" target="_blank">
                    {" "}
                    (<u>le lien est juste ici</u>){" "}
                  </a>
                  Nous avons hâte de vous voir parmi nous !
                </p>
              </div>
            </CardContent>
          </Card>
          <AnimatedGradientButton
            onClick={() =>
              window.open(
                "https://my.weezevent.com/inscription-hand-e-sport",
                "_blank"
              )
            }
          >
            S'inscrire
          </AnimatedGradientButton>
        </Box> 
      </section> */}
      <FooterWithSocialLinks />
    </div>
  );
}
