"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import "@/styles/globals.css";

import PeopleCard from "../../components/V1/peopleCard";
import BurgerMenu from "../../components/V1/burgermenu";
import SocialCard from "../../components/V1/socialDirectLink";
import FooterWithSocialLinks from "@/components/footer";

export default function HandesportV1() {
  const [theme, setTheme] = useState("light");

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

  return (
    <div className="container mx-auto px-4 ">
      <BurgerMenu />
      <header className="text-center py-6">
        <h1 className="text-5xl font-bold">HAND E-SPORT V1 2024</h1>
      </header>

      <section id="intro" className="py-8">
        <h2 className="text-4xl font-semibold mb-8">
          HAND E-SPORT, C&rsquo;ÉTAIT QUOI ?
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
                consistait en un tournoi e-sport ouvert à tous, avec une
                attention particulière portée à la sensibilisation aux
                handicaps.
                <br />
                Divers défis liés aux handicaps étaient intégrés à un tournoi
                grâce à une roue aléatoire, le jour de l&apos;événement, en
                parallèle aux stands de présentation.
                <br />
                <br />
                La première itération de l&apos;événement s&apos;est tenue le 9
                mars 2024 au CESI de Reims. Avec un super tournoi, des stands de
                présentation et une ambiance chaleureuse, l&apos;événement a été
                un succès, accueillant près de 50 visiteurs en physique et plus
                de 200 spectateurs sur notre live.{" "}
                <Link href="/galerie">
                  <u>Voir les photos de l&apos;événement.</u>
                </Link>
                <br />
                <br />
                Le tout a été diffusé en direct sur{" "}
                <a
                  href="https://www.twitch.tv/videos/2085585097"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Twitch</u>
                </a>
                . Nous remercions tous nos partenaires et soutiens qui ont
                contribué à faire de cet événement une réussite.
              </p>
            </div>
          </div>
          <div className="image-container w-1/3 pl-5">
            <Image
              src={theme === "dark" ? "/logo.png" : "/logo_w.png"}
              alt="Logo Hand E-Sport"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section id="who-we-are" className="py-8">
        <h2 className="text-3xl font-semibold mb-8">
          HAND E-SPORT V1, C&rsquo;ÉTAIT QUI ?
        </h2>
        <div className="flex flex-wrap justify-between">
          <PeopleCard />
        </div>
        <p className="mt-8">
          L&apos;équipe de HAND E-SPORT V1 était composée de passionnés de jeux
          vidéo et de défenseurs de l&apos;inclusion. Chacun d&apos;entre eux a
          contribué avec ses compétences et sa passion pour faire de cette
          première édition un succès.
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
