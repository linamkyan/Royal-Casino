import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useGeo } from '../../context/GeoContext';
import { Footer } from '../Footer/Footer';
import { GameModal } from '../GameModal/GameModal';
import mainLogo from '../../assets/images/main-logo.svg';
import slotImage from '../../assets/images/slot.svg';
import './LandingPage.scss';

const GAME_URL = 'https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en';

export const LandingPage: React.FC = () => {
  const { geo, t } = useGeo();
  const [gameOpen, setGameOpen] = useState(false);

  const handleOpenGame = () => {
    setGameOpen(true);
  };

  const handleCloseGame = () => {
    setGameOpen(false);
  };

  return (
    <div className="landing-page" data-geo={geo}>
      <div className="main-content">
        <div className="stars-overlay" />

        <div className="content-container">
          <div className="logo">
            <img src={mainLogo} alt="Casino Royale" className="logo__image" />
          </div>

          <div className="hero-section">
            <div className="hero-image">
              <img src={slotImage} alt="Casino Slot Machine" />
            </div>
            <Button
              className="open-game-button"
              onClick={handleOpenGame}
            >
              {t.openGame}
            </Button>
          </div>
        </div>
      </div>

      <Footer />

      <GameModal
        open={gameOpen}
        onClose={handleCloseGame}
        gameUrl={GAME_URL}
      />
    </div>
  );
};