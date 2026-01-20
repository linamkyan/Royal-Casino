import React from 'react';
import { Button } from '@mui/material';
import { useGeo } from '../../context/GeoContext';
import { GeoSelector } from '../GeoSelector/GeoSelector';
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

export const Footer: React.FC = () => {
  const { t } = useGeo();

  const socialLinks = [
    { 
      icon: instagramIcon, 
      label: 'Instagram', 
      className: 'instagram',
      url: 'https://instagram.com/casinoroyale',
      external: true
    },
    { 
      icon: tgIcon, 
      label: 'Telegram', 
      className: 'telegram',
      url: 'https://t.me/casinoroyale_official',
      external: true
    },
    { 
      icon: xIcon, 
      label: 'X', 
      className: 'x',
      url: 'https://x.com/casinoroyale',
      external: true
    },
    { 
      icon: mailIcon, 
      label: 'Email', 
      className: 'email',
      url: 'mailto:support@casinoroyale.com',
      external: false
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <img src={mascotImage} alt="Casino Mascot" className="footer__mascot" />

          <div className="footer__download-card">
            <img src={mainLogo} alt="Casino Royale" className="footer__logo" />
            <h3 className="footer__title">{t.downloadCasino}</h3>
            <p className="footer__description">{t.downloadDescription}</p>
            <Button className="footer__button">
              <img src={downloadIcon} alt="" />
              {t.download}
            </Button>
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
    </footer>
  );
};