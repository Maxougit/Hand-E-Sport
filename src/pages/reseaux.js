import BurgerMenu from "@/components/burgermenu";

export default function Integrations() {
    return (
        <div className="flex flex-col items-center">
            <BurgerMenu className="absolute top-0 left-0" />
            <h1 className="text-3xl font-bold my-4">Nos réseaux sociaux</h1>
            
            <div className="space-x-4 flex justify-center items-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold my-2">Twitter</h2>
                    {/* Replace 'TWITTER_EMBED_CODE' with the actual Twitter embed code */}
                    <div dangerouslySetInnerHTML={{ __html: 'TWITTER_EMBED_CODE' }} />
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-semibold my-2">Twitch</h2>
                    <iframe
                        src={`https://player.twitch.tv/?channel=handesport_reims&parent=localhost`}
                        height="300"
                        width="400"
                        allowFullScreen={true}
                        className="border-none">
                    </iframe>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-semibold my-2">Instagram</h2>
                    <div id="instagram-feed">Contenu Instagram ici</div>
                </div>
            </div>  
        </div>
    );
}
