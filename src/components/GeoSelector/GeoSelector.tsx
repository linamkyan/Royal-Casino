import React from 'react';
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

  const handleChange = (event: SelectChangeEvent<GeoLocation>) => {
    setGeo(event.target.value as GeoLocation);
  };

  return (
    <div className="geo-selector">
      <FormControl size="small">
        <Select
          value={geo}
          onChange={handleChange}
          className="geo-selector__select"
          IconComponent={CustomArrow}
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