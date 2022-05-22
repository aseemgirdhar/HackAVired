import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import ProfileImg1 from '../../assets/images/Profile-1.jpg';
import ProfileImg2 from '../../assets/images/Profile-2.jpg';
import ProfileImg3 from '../../assets/images/Profile-3.jpg';
import ProfileImg4 from '../../assets/images/Profile-4.jpg';
import ProfileImg5 from '../../assets/images/Profile-5.jpg';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {Link} from 'react-router-dom'
import './header.css';
const Header = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl1);
  const openProfile = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClickProfile = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl1(null);
  };
  const handleCloseProfile = () => {
    setAnchorEl2(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className="header-dropdown">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            The A Team
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Notification">
              <IconButton
                anchorEl={anchorEl1}
                size="large"
                aria-label="show 5 new notifications"
                color="inherit"
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Badge badgeContent={5} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl1}
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
              <div className="menu-header">
                Notification <NotificationsIcon />
              </div>

              <MenuItem>
                <Avatar src={ProfileImg1} />
                <div className="comment-text">
                  <div className="comment-details">
                    <strong>Shivanshu</strong> commented on{' '}
                    <strong>your post</strong>
                  </div>
                  <small>30 minutes ago</small>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem>
                <Avatar src={ProfileImg2} />
                <div className="comment-text">
                  <div className="comment-details">
                    <strong>Shivanshu</strong> commented on{' '}
                    <strong>your post</strong>
                  </div>
                  <small>30 minutes ago</small>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem>
                <Avatar src={ProfileImg3} />
                <div className="comment-text">
                  <div className="comment-details">
                    <strong>Shivanshu</strong> commented on{' '}
                    <strong>your post</strong>
                  </div>
                  <small>30 minutes ago</small>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem>
                <Avatar src={ProfileImg4} />
                <div className="comment-text">
                  <div className="comment-details">
                    <strong>Shivanshu</strong> commented on{' '}
                    <strong>your post</strong>
                  </div>
                  <small>30 minutes ago</small>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem>
                <Avatar src={ProfileImg5} />
                <div className="comment-text">
                  <div className="comment-details">
                    <strong>Shivanshu</strong> commented on{' '}
                    <strong>your post</strong>
                  </div>
                  <small>30 minutes ago</small>
                </div>
              </MenuItem>
            </Menu>
            <Tooltip title="Profile">
              <IconButton
                anchorEl={anchorEl2}
                size="large"
                edge="end"
                aria-label="account of current user"
                color="inherit"
                onClick={handleClickProfile}
                aria-controls={openProfile ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openProfile ? 'true' : undefined}
              >
                <Avatar alt="Profile" src={ProfileImg3} />
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl2}
              id="account-menu"
              open={openProfile}
              onClose={handleCloseProfile}
              onClick={handleCloseProfile}
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
              <MenuItem>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                <div className="profile-dropdown">
                  <strong>Settings</strong>
                  <small>Access Profile settings</small>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <SupportAgentIcon fontSize="small" />
                </ListItemIcon>
                <div className="profile-dropdown">
                  <strong>Help</strong>
                  <small>Contact our support</small>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem to="/">
                <ListItemIcon>
                  <ExitToAppIcon fontSize="small" />
                </ListItemIcon>
                <Link className="linkLogout" to="/"><div className="profile-dropdown">
                  <strong>Log Out</strong>
                  <small>Logout from your account</small>
                </div></Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
export default Header;
