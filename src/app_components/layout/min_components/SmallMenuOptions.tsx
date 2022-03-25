import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'

const SmallMenuOptions = ({menuSubOptions, menuTitle}:any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpts, setMenuOpts] = useState(menuSubOptions)

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: '#94a3b8', fontWeight: 'bold', textTransform: 'none'}}
      >
        {menuTitle}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {
          menuOpts.map((menuOpt):any => {
          return <MenuItem  key={menuOpt.id} sx={menuOpt.styles} onClick={menuOpt.onclick}>{menuOpt.subTitle}</MenuItem> 
          })
        }
      </Menu>
    </div>
  );
}

export default SmallMenuOptions