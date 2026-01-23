import React, { useState, useEffect, useRef } from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useGeo } from '../../context/GeoContext';
import { GeoLocation } from '../../types';
import { GEO_OPTIONS } from '../../constants';
import './GeoSelector.scss';
import arrowIcon from '../../assets/images/chevron-down.svg';

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
            const option = GEO_OPTIONS.find(opt => opt.value === value);
            return (
              <div className="geo-selector__content">
                <img src={option?.flag} alt={option?.label} className="geo-selector__flag" />
                {option?.label}
              </div>
            );
          }}
        >
          {GEO_OPTIONS.map((option) => (
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