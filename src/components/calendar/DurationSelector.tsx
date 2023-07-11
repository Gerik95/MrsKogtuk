import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DurationSelectorProps } from './Calendar.types';

const DurationSelector: React.FC<DurationSelectorProps> = ({ setDurationForEvent, selectedEvent }) => {
  const defaultValue = 0;
  const [selectedDuration, setSelectedDuration] = useState(defaultValue);

  useEffect(() => {
    if(!!selectedEvent?.duration) {
      setSelectedDuration(selectedEvent.duration);
    }else {
      setSelectedDuration(defaultValue);
    }
  }, [selectedEvent?.duration]);

  const handleDurationChange = (event: SelectChangeEvent<any>) => {
    const duration = parseInt(event.target.value);
    setSelectedDuration(duration);
    setDurationForEvent(duration);
  };

  const renderDurationOptions = () => {
    const options = [];
    for(let hours = 0; hours <= 12; hours++) {
      for(let minutes = 0; minutes < 60; minutes += 15) {
        const totalMinutes = hours * 60 + minutes;
        options.push(
          <MenuItem key={totalMinutes} value={totalMinutes}>
            {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}
          </MenuItem>
        );
      }
    }
    return options;
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          sx={{backgroundColor: '#D9D9D9'}}
          id="simple-select"
          value={selectedDuration}
          onChange={handleDurationChange}
          defaultValue={15}
        >
          {renderDurationOptions()}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DurationSelector;