import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useGeo } from '../../context/GeoContext';
import { Footer } from '../Footer/Footer';
import { GameModal } from '../GameModal/GameModal';
import { getGameUrl } from '../../constants';
import mainLogo from '../../assets/images/main-logo.svg';
import slotImage from '../../assets/images/slot.svg';
import './LandingPage.scss';

const StyledLandingPage = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const StyledMainContent = styled.div<{ $bgGradient: string }>`
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: ${props => props.$bgGradient};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(10, 22, 40, 0.3) 0%,
      rgba(10, 22, 40, 0.7) 100%
    );
    pointer-events: none;
  }
`;

const StyledButton = styled(Button)<{ $buttonColor: string; $buttonHoverColor: string }>`
  && {
    width: 358.5px;
    height: 56px;
    background: ${props => props.$buttonColor};
    color: white;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 20px 24px;
    border-radius: 12px;
    gap: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(255, 140, 0, 0.3);

    &:hover {
      background: ${props => props.$buttonHoverColor};
      transform: translateY(-2px);
      box-shadow: 0 6px 30px rgba(255, 140, 0, 0.4);
    }

    @media (max-width: 992px) {
      width: 320px;
      height: 52px;
      padding: 18px 20px;
    }

    @media (max-width: 768px) {
      width: 100%;
      max-width: 300px;
      height: 48px;
      padding: 16px 20px;
      font-size: 14px;
    }
  }
`;

export const LandingPage: React.FC = () => {
  const { geo, t, theme } = useGeo();
  const [gameOpen, setGameOpen] = useState(false);

  // Set CSS variables dynamically based on theme
  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', theme.primaryColor);
    document.documentElement.style.setProperty('--color-secondary', theme.secondaryColor);
    document.documentElement.style.setProperty('--color-accent', theme.accentColor);
    document.documentElement.style.setProperty('--color-button', theme.buttonColor);
    document.documentElement.style.setProperty('--color-button-hover', theme.buttonHoverColor);
  }, [theme]);

  const handleOpenGame = () => {
    setGameOpen(true);
  };

  const handleCloseGame = () => {
    setGameOpen(false);
  };

  const gameUrl = getGameUrl(geo);

  return (
    <StyledLandingPage data-geo={geo}>
      <StyledMainContent $bgGradient={theme.backgroundGradient}>
        <div className="stars-overlay" />

        <div className="content-container">
          <div className="logo">
            <img src={mainLogo} alt="Casino Royale" className="logo__image" />
          </div>

          <div className="hero-section">
            <div className="hero-image">
              <img src={slotImage} alt="Casino Slot Machine" />
            </div>
            <StyledButton
              onClick={handleOpenGame}
              $buttonColor={theme.buttonColor}
              $buttonHoverColor={theme.buttonHoverColor}
            >
              {t.openGame}
            </StyledButton>
          </div>
        </div>
      </StyledMainContent>

      <Footer />

      <GameModal
        open={gameOpen}
        onClose={handleCloseGame}
        gameUrl={gameUrl}
      />
    </StyledLandingPage>
  );
};