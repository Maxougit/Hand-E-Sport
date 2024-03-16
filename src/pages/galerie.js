import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import BurgerMenu from "@/components/burgermenu";

// Amélioration de la présentation avec des overlays d'informations et des interactions
export default function EnhancedImageGallery() {
  return (
    <Box sx={{ width: "100%", overflowY: "scroll" }}>
      <BurgerMenu />
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <Image
              src={`${item.img}`}
              alt={item.title}
              width={248}
              priority
              style={{ layout: "contain", width: "100%", height: "100%" }}
              height={Math.floor(Math.random() * (400 - 250 + 1) + 250)} // Hauteur aléatoire pour un effet masonry plus dynamique
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info sur ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
              actionPosition="right"
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div id="twitch-embed"></div>
    </Box>
  );
}

const itemData = [
  {
    img: "/EventPicture/IMG_20240309_105715.jpg",
    title: "Stand de démonstration Minecraft et the last of us",
  },
  {
    img: "/EventPicture/IMG_20240309_105835.jpg",
    title: "Stand de démonstration Fallguys et stand avec @gopandanku",
  },
  {
    img: "/EventPicture/IMG_20240309_105933.jpg",
    title: "Salle tournoi",
  },
  {
    img: "/EventPicture/IMG_20240309_105936.jpg",
    title: "Salle tournoi",
  },
  {
    img: "/EventPicture/IMG_20240309_110004.jpg",
    title: "Régie live",
  },
  {
    img: "/EventPicture/IMG_20240309_110017.jpg",
    title: "Régie live",
  },
  {
    img: "/EventPicture/IMG_20240309_170035.jpg",
    title: "Stand fallguys avec playAbility et Xbox Adaptive Controller",
  },
  {
    img: "/EventPicture/IMG_20240309_170038.jpg",
    title: "Un joueur heureux sur Fallguys",
  },
  {
    img: "/EventPicture/PXL_20240308_134857226.MP.jpg",
    title: "Point de vue la régie live",
  },
  {
    img: "/EventPicture/PXL_20240308_150950613.jpg",
    title: "Salle tournoi",
  },
  {
    img: "/EventPicture/PXL_20240308_151016229.jpg",
    title: "Les beaux ordinateurs de la salle tournoi",
  },
  {
    img: "/EventPicture/PXL_20240308_180044996.jpg",
    title: "Salle présentation",
  },
  {
    img: "/EventPicture/PXL_20240309_071622489.jpg",
    title: "La régie live",
  },
  {
    img: "/EventPicture/ECE42526-9C7A-4E76-8F1F-8E9E5D89AC74 2.jpeg",
    title: "Stand fallguys avec playAbility et Xbox Adaptive Controller",
  },
  {
    img: "/EventPicture/IMG_1990 2.jpeg",
    title: "Stand minecraft avec playAbility et Xbox Adaptive Controller",
  },
  {
    img: "/EventPicture/IMG_1992 2.jpeg",
    title: "Salle tournoi",
  },
  {
    img: "/EventPicture/IMG_1993 2.jpeg",
    title: "Ordinateur gaming du tournoi",
  },
  {
    img: "/EventPicture/IMG_1995 2.jpeg",
    title: "Un petit échauffement avant le tournoi",
  },
  {
    img: "/EventPicture/IMG_1997 2.jpeg",
    title: "Des joueurs heureux !",
  },
  {
    img: "/EventPicture/IMG_1998 2.jpeg",
    title: "La roue des défis",
  },
  {
    img: "/EventPicture/IMG_1999 2.jpeg",
    title: "Lunettes de déficience visuelle",
  },
  {
    img: "/EventPicture/IMG_2002 2.jpeg",
    title: "La dream team de Cheffffffff ! Avec deficience visuelle",
  },
  {
    img: "/EventPicture/IMG_2004 2.jpeg",
    title: "Stand avec @gopandanku",
  },
  {
    img: "/EventPicture/IMG_2005 2.jpeg",
    title: "Concentration maximal pendant le tournoi",
  },
  {
    img: "/EventPicture/IMG_2006 2.jpeg",
    title: "Concentration maximal pendant le tournoi",
  },
  {
    img: "/EventPicture/IMG_2007 2.jpeg",
    title: "Redifusion du live, interview avec Capgame",
  },
  {
    img: "/EventPicture/IMG_2009 2.jpeg",
    title: "Défis mobilite réduite",
  },
  {
    img: "/EventPicture/IMG_2014 2.jpeg",
    title: "",
  },
  {
    img: "/EventPicture/IMG_2015 2.jpeg",
    title: "Defis playAbility, ouvrir la bouche pour sauter",
  },
];
