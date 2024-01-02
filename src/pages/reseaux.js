import React from "react";
import BurgerMenu from "@/components/burgermenu";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function Integrations() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <BurgerMenu className="absolute top-0 left-0" />
      <Typography variant="h3" component="h1" my={4}>
        Nos réseaux sociaux
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        {/* Twitter Card */}
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" my={2}>
              Twitter
            </Typography>
            <Box dangerouslySetInnerHTML={{ __html: "TWITTER_EMBED_CODE" }} />
          </CardContent>
        </Card>

        {/* Twitch Card */}
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" my={2}>
              Twitch
            </Typography>
            <iframe
              src={`https://player.twitch.tv/?channel=handesport_reims&parent=localhost`}
              height="300"
              width="400"
              allowFullScreen={true}
              className="border-none"
            ></iframe>
          </CardContent>
        </Card>

        {/* Instagram Card */}
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" my={2}>
              Instagram
            </Typography>
            <div id="instagram-feed">Contenu Instagram ici</div>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
