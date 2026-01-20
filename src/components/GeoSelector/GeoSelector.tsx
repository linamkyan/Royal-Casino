import React, { useState, useEffect, useRef } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useGeo } from '../../context/GeoContext';
import { GeoLocation } from '../../types';
import './GeoSelector.scss';
import arrowIcon from '../../assets/images/chevron-down.svg';

const geoOptions: { value: GeoLocation; label: string; flag: string }[] = [
  { value: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { value: 'tr', label: 'Türkçe', flag: 'https://flagcdn.com/w40/tr.png' },
  { value: 'it', label: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
  { value: 'ru', label: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
];

const CustomArrow = () => (
  <img src={arrowIcon} alt="" className="geo-selector__arrow" />
);

export const GeoSelector: React.FC = () => {
  const { geo, setGeo } = useGeo();
  const [open, setOpen] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener('scroll', handleScroll, true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [open]);

  const handleChange = (event: SelectChangeEvent<GeoLocation>) => {
    setGeo(event.target.value as GeoLocation);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="geo-selector">
      <FormControl size="small">
        <Select
          value={geo}
          onChange={handleChange}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          className="geo-selector__select"
          IconComponent={CustomArrow}
          MenuProps={{
            disableScrollLock: true,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
          }}
          renderValue={(value) => {
            const option = geoOptions.find(opt => opt.value === value);
            return (
              <div className="geo-selector__content">
                <img src={option?.flag} alt={option?.label} className="geo-selector__flag" />
                {option?.label}
              </div>
            );
          }}
        >
          {geoOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <img src={option.flag} alt={option.label} className="geo-selector__flag" />
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};