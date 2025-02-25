import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
const currentYear = new Date().getFullYear();

export default function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <div className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear}
            {"-"}
            {currentYear + 1} <a href="https://handesport.fr/">Hand E-sport</a>.
            All Rights Reserved.
          </div>
          <div>
            <a href="mailto:contact@handesport.fr">contact@handesport.fr</a>
          </div>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <a
              href="https://x.com/handesport_reims"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/handesport_reims/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCZMGwikgTRo4zX2LHrRFBgg"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://www.twitch.tv/handesport_reims"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FontAwesomeIcon icon={faTwitch} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
