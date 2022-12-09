import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function BasicMenu() {
  let menu = ["opcion1","opcion2","opcion3","opcion4"]
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  let [opciones,setOpciones] = React.useState('Opciones'
);
  const open =  Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    if(event.target.innerText!==""){
    setOpciones(opciones = event.target.innerText)
    }else(setOpciones(opciones="Opciones"))

  };

  function SetMenu(){
    let menuready = menu.map((element)=>{
      return <MenuItem onClick={handleClose}>{element}</MenuItem>
    })
    return menuready

  }
  

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{textTransform:'none'}}
      >
        {opciones}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
      {SetMenu()}
      </Menu>
    </div>
  );
}