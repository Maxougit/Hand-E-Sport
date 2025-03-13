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
      if (window.innerWidth <= 480) {
        setNumCols(1);
      } else if (window.innerWidth <= 768) {
        setNumCols(2);
      } else {
        setNumCols(3);
      }
    };

    window.addEventListener("resize", updateNumCols);
    updateNumCols();

    return () => window.removeEventListener("resize", updateNumCols);
  }, []);

  const itemDataGIR24 = getImagesFromGIR24();

  return (
    <div className={styles.container}>
      <Box sx={{ width: "100%", overflowY: "scroll" }}>
        <BurgerMenu />
        <h1>Game in Reims 2024</h1>
        <ImageList variant="masonry" cols={numCols} gap={8}>
          {itemDataGIR24.map((item, index) => (
            <ImageListItem key={index}>
              <Image
                src={`${item.img}`}
                alt={item.title || "Image sans titre"}
                width={248}
                priority
                style={{
                  layout: "contain",
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
                height={Math.floor(Math.random() * (400 - 250 + 1) + 250)}
              />
              <ImageListItemBar
                onClick={() => window.open(item.img, "_blank")}
                title={item.title || "Image sans titre"}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`Télécharger ${item.title}`}
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
      </Box>
    </div>
  );
}

function getImagesFromGIR24() {
  return [
    { img: "/GIR24/846dbcd9.jpg", title: "Stand game in Reims" },
    { img: "/GIR24/IMG_0199.jpeg", title: "Équipe responsable du stand" },
    { img: "/GIR24/IMG_0200.jpeg", title: "2 BG" },
    { img: "/GIR24/IMG_20241117_091704.jpg", title: " " },
    {
      img: "/GIR24/IMG_20241117_091727.jpg",
      title: "Gameplay playAbility minecraft",
    },
    {
      img: "/GIR24/IMG_20241117_104816.jpg",
      title: "Gameplay playAbility Fortnite",
    },
    { img: "/GIR24/IMG_20241117_105044.jpg", title: "Stand Fortnite" },
    { img: "/GIR24/IMG_20241117_142110.jpg", title: "Stand Cesi x Handesport" },
    {
      img: "/GIR24/IMG_20241117_142118.jpg",
      title: "Stand avec plein de g@meurs",
    },
    {
      img: "/GIR24/PXL_20241116_144655190.MP.jpg",
      title: "Stand game in Reims",
    },
    { img: "/GIR24/PXL_20241117_074845022.MP.jpg", title: "BG seul" },
    { img: "/GIR24/PXL_20241117_122106128.MP.jpg", title: "Stand minecraft" },
    { img: "/GIR24/PXL_20241117_122109810.MP.jpg", title: "Stand Fortnite" },
  ];
}
