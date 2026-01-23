import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { useGeo } from '../../context/GeoContext';
import './GameModal.scss';

interface GameModalProps {
  open: boolean;
  onClose: () => void;
  gameUrl: string;
}

const StyledCloseButton = styled(IconButton)<{ $buttonColor: string; $buttonHoverColor: string }>`
  && {
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 10;
    background: ${props => props.$buttonColor} !important;
    color: #FFFFFF !important;
    width: 40px !important;
    height: 40px !important;
    transition: all 0.3s ease !important;

    &:hover {
      background: ${props => props.$buttonHoverColor} !important;
      transform: scale(1.05);
    }

    svg {
      color: #FFFFFF !important;
    }
  }
`;

export const GameModal: React.FC<GameModalProps> = ({ open, onClose, gameUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useGeo();

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleClose = () => {
    setIsLoading(true);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="game-modal"
      aria-describedby="casino-game-iframe"
    >
      <Box className="game-modal__container">
        <StyledCloseButton
          onClick={handleClose}
          aria-label="close"
          $buttonColor={theme.buttonColor}
          $buttonHoverColor={theme.buttonHoverColor}
        >
          <CloseIcon />
        </StyledCloseButton>

        {isLoading && (
          <Box className="game-modal__loading">
            <CircularProgress
              size={60}
              thickness={4}
              sx={{ color: theme.buttonColor }}
            />
          </Box>
        )}

        {open && (
          <iframe
            src={gameUrl}
            title="Casino Game"
            className="game-modal__iframe"
            allow="fullscreen; autoplay"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            onLoad={handleIframeLoad}
            style={{ opacity: isLoading ? 0 : 1 }}
          />
        )}
      </Box>
    </Modal>
  );
};