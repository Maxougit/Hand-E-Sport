// pages/galerie.js
import Image from 'next/image';
import BurgerMenu from '@/components/burgermenu';

// Array of random picture URLs
const pictures = [
    
];

export default function Galerie() {
    return (
        <>
        <BurgerMenu style={{ position: 'absolute', top: 0, left: 0 }} />
        <div id="gallery">
            {pictures.map((pictureUrl, index) => (
                <div key={index}>
                    <Image src={pictureUrl} alt={`Picture ${index}`} width={500} height={300} />
                </div>
            ))}
        </div>
        </>
    );
}
