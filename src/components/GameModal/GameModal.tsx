import React, { useState } from 'react';
import { Modal, IconButton, Box, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './GameModal.scss';

interface GameModalProps {
  open: boolean;
  onClose: () => void;
  gameUrl: string;
}

export const GameModal: React.FC<GameModalProps> = ({ open, onClose, gameUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

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
        <IconButton
          onClick={handleClose}
          className="game-modal__close-button"
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        
        {isLoading && (
          <Box className="game-modal__loading">
            <CircularProgress 
              size={60} 
              thickness={4}
              sx={{ color: '#FF8D6B' }}
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