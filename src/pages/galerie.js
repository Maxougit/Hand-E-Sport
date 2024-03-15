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
];
