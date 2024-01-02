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

      <Box
        display="flex"
        justifyContent="center"
        alignItems="stretch"
        gap={2}
        sx={{ width: "100%" }}
      >
        {/* Twitter Card */}
        <Card sx={{ flex: 1, minHeight: 300 }}>
          <CardContent>
            <Typography variant="h5" component="h2" my={2}>
              Twitter
            </Typography>
            {/* Twitter Embed */}
            <Box
              dangerouslySetInnerHTML={{
                __html: `<blockquote class="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/3BNnleMIhY">pic.twitter.com/3BNnleMIhY</a></p>&mdash; Out of Context Human Race (@NoContextHumans) <a href="https://twitter.com/NoContextHumans/status/1741791382702870971?ref_src=twsrc%5Etfw">January 1, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
              }}
            />
          </CardContent>
        </Card>

        {/* Twitch Card */}
        <Card sx={{ flex: 1, minHeight: 300 }}>
          <CardContent>
            <Typography variant="h5" component="h2" my={2}>
              Twitch
            </Typography>
            {/* Twitch Embed */}
            <iframe
              src={`https://player.twitch.tv/?channel=handesport_reims&parent=localhost`}
              height="300"
              width="100%"
              allowFullScreen={true}
              className="border-none"
            ></iframe>
          </CardContent>
        </Card>

        {/* Instagram Card */}
        <Card sx={{ flex: 1, minHeight: 300 }}>
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
