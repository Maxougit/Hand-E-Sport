import styles from './pdfviewer.module.css'; // Ensure this CSS file exists and is styled according to your needs
import BurgerMenu from '@/components/burgermenu';
import { Typography } from '@material-ui/core';

export default function PDFViewer() {
    return (
        <div className={styles.container}>
            <BurgerMenu />
            <Typography variant="h3" component="h1" my={1}>
                Notre fiche descriptive
            </Typography>
            <div className={styles.pdfViewer}>
                <iframe
                    src="Hand E-Sport.pdf" // Replace with your PDF file path
                    width="100%"
                    height="100%" // Adjust height as needed
                    allow="fullscreen"
                ></iframe>
            </div>
        </div>
    );
}
