import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [equipe, setEquipe] = React.useState('');

  const handleChange = (event) => {
    setEquipe(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl required fullWidth margin="dense">
        <InputLabel id="demo-simple-select-label">Equipe</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={equipe}
          label="Age"
          onChange={handleChange}
        
        >
          <MenuItem value={10}>Komanda</MenuItem>
          <MenuItem value={20}>Devs Cariri</MenuItem>
          <MenuItem value={30}>Cariri Inovação</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
