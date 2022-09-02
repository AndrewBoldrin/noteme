import React, { ReactElement } from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../../../../helpers/pagesConfig';

export const ResponsiveMainNav = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const openNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const closeNavMenu = (): void => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={openNavMenu}
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
        onClose={closeNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={closeNavMenu}>
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
