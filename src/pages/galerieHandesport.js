import Image from "next/image";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import BurgerMenu from "@/components/burgermenu";
import styles from "./galerie.module.css";
import "@/styles/globals.css";
import { FaEye } from "react-icons/fa";

export default function EnhancedImageGallery() {
  const [numCols, setNumCols] = useState(3);

  useEffect(() => {
    const updateNumCols = () => {
      const width = window.innerWidth;
      setNumCols(width <= 480 ? 1 : width <= 768 ? 2 : 3);
    };

    window.addEventListener("resize", updateNumCols);
    updateNumCols();

    return () => window.removeEventListener("resize", updateNumCols);
  }, []);

  const galleryData = getImagesFromHandesport2025();

  return (
    <div className={styles.container}>
      <Box sx={{ width: "100%", overflowY: "scroll" }}>
        <BurgerMenu />
        <h1 style={{ fontSize: "2rem" }}>Handesport 2025</h1>
        {Object.entries(galleryData).map(([category, items]) => (
          <div key={category}>
            {category === "Autres" ? (
              <p>&nbsp;</p>
            ) : (
              <h2 style={{ fontSize: "1.5rem" }}>{category}</h2>
            )}
            <ImageList variant="masonry" cols={numCols} gap={8}>
              {items.map((item, index) => (
                <ImageListItem key={index}>
                  <Image
                    src={`${item.img}`}
                    alt={item.title || <p>&nbsp;</p>}
                    width={248}
                    height={Math.floor(Math.random() * (400 - 250 + 1) + 250)}
                    style={{
                      layout: "contain",
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    priority
                  />
                  <ImageListItemBar
                    onClick={() => window.open(item.img, "_blank")}
                    title={item.title || <p>&nbsp;</p>}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`Voir ${item.title}`}
                      >
                        <FaEye />
                      </IconButton>
                    }
                    actionPosition="right"
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        ))}
      </Box>
    </div>
  );
}

function getImagesFromHandesport2025() {
  return {
    Autres: [
      { img: "/Handesport2025/Les bgs.jpg", title: "Les bgs" },
      { img: "/Handesport2025/retour stream.jpg", title: "Retour stream" },
      {
        img: "/Handesport2025/Salle_tournoi_installed.jpg",
        title: "Salle tournoi",
      },
      {
        img: "/Handesport2025/Stand decouverte gopandanku.jpg",
        title: "Stand découverte gobandanku",
      },
      {
        img: "/Handesport2025/Stand Mario Kart.jpg",
        title: "Stand Mario Kart",
      },
      {
        img: "/Handesport2025/stand gopandanku 2.jpg",
        title: "Stand gopandanku",
      },
      {
        img: "/Handesport2025/stand playability MC.jpg",
        title: "Stand Playability Minecraft",
      },
      {
        img: "/Handesport2025/tournoi mc 2.jpg",
        title: "Tournoi Minecraft",
      },
      {
        img: "/Handesport2025/tournoi mc.jpg",
        title: "Tournoi Minecraft",
      },
      {
        img: "/Handesport2025/Tournoi roue des defis.jpg",
        title: "Tournoi roue des défis",
      },
      { img: "/Handesport2025/Autres/IMG_20250308_095052.jpg", title: "Régie" },
      {
        img: "/Handesport2025/Autres/IMG_20250308_140558.jpg",
        title: "La perche",
      },
      {
        img: "/Handesport2025/Autres/IMG_20250308_141702.jpg",
        title: "T-shirt Handesport",
      },
      {
        img: "/Handesport2025/Autres/IMG_20250308_153943.jpg",
        title: "Helloooo",
      },
      {
        img: "/Handesport2025/Autres/IMG_20250308_155115.jpg",
        title: "Régie",
      },
    ],
    Decouverte: [
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_094747.jpg",
        title: "Switch",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_094752.jpg",
        title: "PS4 The last of us",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_094804.jpg",
        title: "Stand",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_094919.jpg",
        title: "Xbox Adaptive Controller",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_094931.jpg",
        title: "Xbox Controller",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_094958.jpg",
        title: "Joystick Logitech",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_095006.jpg",
        title: "Thrustmaster Racing Wheel",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_114151.jpg",
        title: "Fifa 25 avec Gopandanku",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_114156.jpg",
        title: "Fifa 25 avec Gopandanku",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_122230.jpg",
        title: "Double stand Minecraft",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_122234.jpg",
        title: "Double stand Minecraft",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_122252.jpg",
        title: "Adaptive buttons Xbox Controller",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_123509.jpg",
        title: "Tobii Eye Tracker",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_140634.jpg",
        title: "Mario kart Switch",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_140643.jpg",
        title: "Mario kart Switch",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_140653.jpg",
        title: "Mario kart Switch",
      },
      {
        img: "/Handesport2025/Decouverte/IMG_20250308_140701.jpg",
        title: "Bouton/comande Switch",
      },
    ],
    Tournoi: [
      {
        img: "/Handesport2025/Tournoi/IMG_20250308_094700.jpg",
      },
      {
        img: "/Handesport2025/Tournoi/IMG_20250308_094717.jpg",
      },
      {
        img: "/Handesport2025/Tournoi/IMG_20250308_094730.jpg",
      },
      {
        img: "/Handesport2025/Tournoi/IMG_20250308_174454.jpg",
      },
    ],
  };
}
