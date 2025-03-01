import React from 'react'
import { connect } from 'react-redux'
import { setUserAuthFalse } from '../../../../store/actions/actions'
import { Link } from 'react-router-dom'

import userPhoto from '../../../../assets/avatar-user.jpg'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

import ThemeSwitch from '../toggleDarkMode/ThemeSwitch'

const UserPanel = (props:any) => {

  const { setAuthFalse } = props

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Ajustes">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <div className=' h-[40px] flex flex-row items-center gap-2 pr-3 text-sm font-bold rounded-full dark:bg-slate-800 dark:border-slate-600 dark:text-gray-300 bg-slate-200'>
              <Avatar sx={{ width: 40, height: 40 }}><img className='rounded-full' src={userPhoto} alt='Profile' /></Avatar>
              Username
            </div>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{display: 'flex', justifyContent: 'center'}}>
          <ThemeSwitch />
        </MenuItem>
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Ajustes
        </MenuItem>
        <MenuItem onClick={() => setAuthFalse()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link to='/'>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/discussions'>Discusiones</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/question'>Hacer pregunta</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/asks'>Preguntas Panel</Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    setAuthFalse: () => {
      dispatch(setUserAuthFalse())
    }
  }
}

export default connect(null, mapDispatchToProps)(UserPanel)