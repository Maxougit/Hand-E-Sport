import Image from "next/image";
import BurgerMenu from "@/components/burgermenu";
import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function TitlebarBelowMasonryImageList() {
  return (
    <div style={{ margin: "0s auto", width: "auto" }}>
      <BurgerMenu />
      <Box padding={2}>
        <ImageList variant="masonry" cols={3} gap={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <Image
                src={`${item.img}?w=auto&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                width={496}
                height={496}
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: "/EventPicture/demo1.jpg",
    title: "demo",
    author: "demo",
  },
  {
    img: "/EventPicture/demo2.jpg",
    title: "demo",
    author: "demo",
  },
  {
    img: "/EventPicture/demo3.jpeg",
    title: "demo",
    author: "demo",
  },
  {
    img: "/EventPicture/demo4.png",
    title: "demo",
    author: "demo",
  },
  {
    img: "/EventPicture/demo5.jpg",
    title: "demo",
    author: "demo",
  },
  {
    img: "/EventPicture/demo6.jpg",
    title: "demo",
    author: "demo",
  },
];
