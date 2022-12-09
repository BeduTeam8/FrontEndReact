import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
//import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel'
import BasicMenu from './MenuInSearchResults';

export default function BarSearch() {
  return (
    <Paper
    component="form"
        sx={{ m: 'auto', display: 'flex', flexDirection: 'column', width: 600 }}>
    <Paper
        sx={{ m: '-5px auto -5px 30px',p:'auto -5px' ,width: 120 }}
    >
    <BasicMenu></BasicMenu>
    </Paper>
    <Paper
      component="form"
      sx={{ p: '2px auto',m: 'auto', display: 'flex', alignItems: 'center', width: 600 }}
    >
    
     
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 2 }}
        placeholder="Buscar..."
        inputProps={{ 'aria-label': 'Buscar...' }}
      />
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <CancelIcon />
      </IconButton>
      
      
    </Paper>
    </Paper>
  );
}