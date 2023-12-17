import BurgerMenu from "@/components/burgermenu";

export default function Integrations() {
    return (
      <div>
        <BurgerMenu style={{ position: 'absolute', top: 0, left: 0 }} />
        <h1>Nos réseaux sociaux</h1>
  
        <h2>Twitter</h2>
        {/* Vous devez remplacer 'TWITTER_EMBED_CODE' par le code d'intégration Twitter approprié */}
        <div dangerouslySetInnerHTML={{ __html: 'TWITTER_EMBED_CODE' }} />
  
        <h2>Twitch</h2>
        {/* Remplacez 'TWITCH_CHANNEL_NAME' par le nom de la chaîne que vous souhaitez intégrer */}
        <iframe
          src={`https://player.twitch.tv/?channel=handesport_reims&parent=localhost`}
          height="300"
          width="400"
          allowFullScreen={true}>
        </iframe>
  
        <h2>Instagram</h2>
        {/* Instagram n'autorise plus l'intégration complète via iframe, mais vous pouvez utiliser leur API pour obtenir des données */}
        {/* Vous devez utiliser le Graph API d'Instagram pour intégrer des contenus spécifiques */}
        <div id="instagram-feed">Contenu Instagram ici</div>
      </div>
    );
  }
  