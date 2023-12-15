import { useState } from "react";
import { Link } from "react-router-dom";
import { formatCategoryName } from "../utilities";

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AnchorIcon from '@mui/icons-material/Anchor';


export default function Navigation(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const { categories } = props;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AnchorIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <MenuItem key='all' onClick={handleCloseNavMenu}>
            <Link to="/category/all-products">
              <Typography textAlign="center" sx={{ color: 'white', textTransform: 'uppercase', fontSize: '14px' }}>{formatCategoryName('all-products')}</Typography>
            </Link>
          </MenuItem>
          {categories.slice(0, 7).map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Link to={`/category/${page}`}>
                <Typography textAlign="center" sx={{ color: 'white', textTransform: 'uppercase', fontSize: '14px' }}>{formatCategoryName(page)}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <AnchorIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Link to="/category/all-products" key="all">
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {formatCategoryName("all-products")}
          </Button>
        </Link>
        {categories.slice(0, 7).map((page) => (
          <Link to={`/category/${page}`} key={page}>
            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {formatCategoryName(page)}
            </Button>
          </Link>
        ))}
      </Box>
    </>
  )
}
