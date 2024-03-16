import Image from "next/image";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download"; // Assurez-vous que cela est bien importé
import BurgerMenu from "@/components/burgermenu";
import styles from "./galerie.module.css";
import "@/styles/globals.css";
import { Download } from "@mui/icons-material";

export default function EnhancedImageGallery() {
  const [numCols, setNumCols] = useState(3);

  useEffect(() => {
    const updateNumCols = () => {
      if (window.innerWidth <= 480) {
        setNumCols(1);
      } else if (window.innerWidth <= 768) {
        setNumCols(2);
      } else {
        setNumCols(3);
      }
    };

    window.addEventListener("resize", updateNumCols);
    updateNumCols(); // Vérification initiale

    return () => window.removeEventListener("resize", updateNumCols);
  }, []);

  return (
    <div className={styles.container}>
      <Box sx={{ width: "100%", overflowY: "scroll" }}>
        <BurgerMenu />
        <ImageList variant="masonry" cols={numCols} gap={8}>
          {itemData.map((item, index) => (
            <ImageListItem key={index}>
              <Image
                src={`${item.img}`}
                alt={item.title}
                width={248}
                priority
                style={{
                  layout: "contain",
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
                height={Math.floor(Math.random() * (400 - 250 + 1) + 250)} // Hauteur aléatoire
              />
              <ImageListItemBar
                onClick={() => window.open(item.img, "_blank")}
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`Télécharger ${item.title}`}
                  >
                    <DownloadIcon />
                  </IconButton>
                }
                actionPosition="right"
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: "/EventPicture/IMG_20240309_105715.jpg",
    title: "Stand de démonstration Minecraft et The Last of Us",
  },
  {
    img: "/EventPicture/IMG_20240309_105835.jpg",
    title: "Stand de démonstration Fall Guys et stand avec @gopandanku",
  },
  {
    img: "/EventPicture/IMG_20240309_105933.jpg",
    title: "Salle de tournoi",
  },
  {
    img: "/EventPicture/IMG_20240309_105936.jpg",
    title: "Salle de tournoi",
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
    title: "Stand Fall Guys avec PlayAbility et Xbox Adaptive Controller",
  },
  {
    img: "/EventPicture/IMG_20240309_170038.jpg",
    title: "Un joueur heureux sur Fall Guys",
  },
  {
    img: "/EventPicture/PXL_20240308_134857226.MP.jpg",
    title: "Point de vue de la régie live",
  },
  {
    img: "/EventPicture/PXL_20240308_150950613.jpg",
    title: "Salle de tournoi",
  },
  {
    img: "/EventPicture/PXL_20240308_151016229.jpg",
    title: "Les beaux ordinateurs de la salle de tournoi",
  },
  {
    img: "/EventPicture/PXL_20240308_180044996.jpg",
    title: "Salle de présentation",
  },
  {
    img: "/EventPicture/PXL_20240309_071622489.jpg",
    title: "La régie live",
  },
  {
    img: "/EventPicture/ECE42526-9C7A-4E76-8F1F-8E9E5D89AC74 2.jpeg",
    title: "Stand Fall Guys avec PlayAbility et Xbox Adaptive Controller",
  },
  {
    img: "/EventPicture/IMG_1990 2.jpeg",
    title: "Stand Minecraft avec PlayAbility et Xbox Adaptive Controller",
  },
  {
    img: "/EventPicture/IMG_1992 2.jpeg",
    title: "Salle de tournoi",
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
    title: "La dream team de Chef ! Avec déficience visuelle",
  },
  {
    img: "/EventPicture/IMG_2004 2.jpeg",
    title: "Stand avec @gopandanku",
  },
  {
    img: "/EventPicture/IMG_2005 2.jpeg",
    title: "Concentration maximale pendant le tournoi",
  },
  {
    img: "/EventPicture/IMG_2006 2.jpeg",
    title: "Concentration maximale pendant le tournoi",
  },
  {
    img: "/EventPicture/IMG_2007 2.jpeg",
    title: "Rediffusion du live, interview avec Capgame",
  },
  {
    img: "/EventPicture/IMG_2009 2.jpeg",
    title: "Défis mobilité réduite",
  },
  {
    img: "/EventPicture/IMG_2014 2.jpeg",
    title: "",
  },
  {
    img: "/EventPicture/IMG_2015 2.jpeg",
    title: "Défis PlayAbility, ouvrir la bouche pour sauter",
  },
];
