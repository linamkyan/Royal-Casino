import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useGeo } from '../../context/GeoContext';
import { GeoSelector } from '../GeoSelector/GeoSelector';
import { SOCIAL_LINKS_CONFIG } from '../../constants';
import './Footer.scss';

import mainLogo from '../../assets/images/main-logo.svg';
import mascotImage from '../../assets/images/men.svg';
import downloadIcon from '../../assets/images/download-icon.svg';
import ageBadge from '../../assets/images/18+.svg';
import licenceBadge from '../../assets/images/licence.svg';
import instagramIcon from '../../assets/images/social/insta.svg';
import tgIcon from '../../assets/images/social/tg.svg';
import xIcon from '../../assets/images/social/x.svg';
import mailIcon from '../../assets/images/social/mail.svg';

const StyledFooter = styled.footer<{ $primaryColor: string; $secondaryColor: string }>`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)),
              linear-gradient(270deg, ${props => props.$primaryColor} 0%, ${props => props.$secondaryColor} 37.03%);
  padding: 60px 32px;

  @media (max-width: 1400px) {
    padding: 50px 24px;
  }

  @media (max-width: 1024px) {
    padding: 40px 24px;
  }

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

const StyledDownloadButton = styled(Button)<{ $buttonColor: string; $buttonHoverColor: string }>`
  && {
    width: max-content !important;
    min-width: 250px !important;
    height: 56px !important;
    padding: 12px 32px !important;
    background: ${props => props.$buttonColor} !important;
    border-radius: 12px !important;
    font-weight: 600 !important;
    font-size: 16px !important;
    line-height: 1.2 !important;
    color: #FFFFFF !important;
    text-transform: none !important;
    white-space: nowrap !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 8px !important;
    box-shadow: 0 4px 12px rgba(255, 140, 0, 0.4) !important;
    transition: all 0.3s ease !important;

    img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    &:hover {
      background: ${props => props.$buttonHoverColor} !important;
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(255, 140, 0, 0.5) !important;
    }

    @media (max-width: 1024px) {
      width: max-content !important;
      min-width: 220px !important;
      height: 52px !important;
      padding: 10px 28px !important;
      font-size: 15px !important;
    }

    @media (max-width: 768px) {
      width: max-content !important;
      min-width: 200px !important;
      height: 48px !important;
      padding: 10px 24px !important;
    }

    @media (max-width: 640px) {
      width: max-content !important;
      min-width: 200px !important;
      max-width: 100% !important;
      height: 48px !important;
      padding: 10px 24px !important;
      font-size: 14px !important;
    }
  }
`;

export const Footer: React.FC = () => {
  const { t, theme } = useGeo();

  const socialIcons: Record<string, string> = {
    instagram: instagramIcon,
    telegram: tgIcon,
    x: xIcon,
    email: mailIcon,
  };

  const socialLinks = SOCIAL_LINKS_CONFIG.map(link => ({
    ...link,
    icon: socialIcons[link.className],
  }));

  return (
    <StyledFooter
      className="footer"
      $primaryColor={theme.primaryColor}
      $secondaryColor={theme.secondaryColor}
    >
      <div className="footer__content">
        <div className="footer__left">
          <img src={mascotImage} alt="Casino Mascot" className="footer__mascot" />

          <div className="footer__download-card">
            <img src={mainLogo} alt="Casino Royale" className="footer__logo" />
            <h3 className="footer__title">{t.downloadCasino}</h3>
            <p className="footer__description">{t.downloadDescription}</p>
            <StyledDownloadButton
              $buttonColor={theme.buttonColor}
              $buttonHoverColor={theme.buttonHoverColor}
            >
              <img src={downloadIcon} alt="" />
              {t.download}
            </StyledDownloadButton>
          </div>

          <div className="footer__badges">
            <div className="footer__badge">
              <img src={ageBadge} alt="18+" />
              <span>{t.ageRestriction}</span>
            </div>
            <div className="footer__badge">
              <img src={licenceBadge} alt="License" />
              <span>{t.licenseText}</span>
            </div>
          </div>
        </div>

        <div className="footer__right">
          <div className="footer__selector">
            <GeoSelector />
          </div>

          <div className="footer__social">
            <span className="footer__social-label">{t.socialMedia}</span>
            <div className="footer__social-icons">
              {socialLinks.map((social) => (
                <a
                  key={social.className}
                  href={social.url}
                  className={`footer__social-icon footer__social-icon--${social.className}`}
                  aria-label={social.label}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                >
                  <img src={social.icon} alt={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};