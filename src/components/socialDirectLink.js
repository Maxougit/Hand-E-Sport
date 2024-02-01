import { Card, CardContent, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { FaTwitch, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

// Animation de dégradé qui bouge
const moveGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Extension du style du Card avec styled-components
const GradientCard = styled(Card)`
  width: 345px;
  height: 200px;
  background: ${(props) => props.gradient};
  background-size: 200% 200%; // Taille de fond pour l'animation
  border-radius: 20px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: ${moveGradient} 3s linear infinite;
    transform: scale(1.1); // Effet de zoom léger au survol
  }
`;

const socialMedia = [
  {
    name: "Discord",
    icon: <SiDiscord />,
    gradient: "linear-gradient(135deg, #4289ff, #ffffff)",
    link: "https://discord.gg/N3mSpcG4sf",
  },
  {
    icon: <FaXTwitter />,
    gradient: "linear-gradient(135deg, #000000, #ffffff05)",
    link: "https://x.com/HandESportReims",
  },
  {
    name: "Twitch",
    icon: <FaTwitch />,
    gradient: "linear-gradient(135deg, #6441a5, #ffffff)",
    link: "https://www.twitch.tv/handesport_reims",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    gradient: "linear-gradient(135deg, #e1306c, #f77737)",
    link: "https://www.instagram.com/handesport_reims/",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    gradient: "linear-gradient(135deg, #ff0000, #ffffff)",
    link: "https://www.youtube.com/channel/UCZMGwikgTRo4zX2LHrRFBgg",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    gradient: "linear-gradient(135deg, #000000, #ffffff)",
    link: "https://www.tiktok.com/",
  },
];

const SocialCard = ({ name, icon, gradient, link }) => {
  return (
    <GradientCard gradient={gradient}>
      <CardContent
        onClick={() => window.open(link, "_blank")}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography variant="h2" component="div" sx={{ color: "white" }}>
          {icon}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ marginLeft: "10px", color: "white" }}
        >
          {name}
        </Typography>
      </CardContent>
    </GradientCard>
  );
};

const SocialMediaGrid = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {socialMedia.map((media) => (
        <SocialCard
          key={media.name}
          name={media.name}
          icon={media.icon}
          gradient={media.gradient}
          link={media.link}
        />
      ))}
    </div>
  );
};

export default SocialMediaGrid;
