import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import './dashboard.css';
import CreateIcon from '@mui/icons-material/Create';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import VideocamIcon from '@mui/icons-material/Videocam';
import Card from '@mui/material/Card';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Avatar from '@mui/material/Avatar';
import ProfileImg2 from '../../assets/images/Profile-2.jpg';
import ProfileImg3 from '../../assets/images/Profile-3.jpg';
import ProfileImg4 from '../../assets/images/Profile-4.jpg';
import ProfileImg5 from '../../assets/images/Profile-5.jpg';
import ProfileImg1 from '../../assets/images/Profile-1.jpg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ListItemIcon from '@mui/material/ListItemIcon';
import LanguageIcon from '@mui/icons-material/Language';
import Divider from '@mui/material/Divider';
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import Header from '../header/header';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import Post from '../../assets/images/Post-1.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AvatarGroup from '@mui/material/AvatarGroup';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import CommentIcon from '@mui/icons-material/Comment';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Dashboard = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [value, setValue] = React.useState(0);
  const [activity, setActivity] = useState(false);
  const [comment, setComment] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const likePost = (e) => {
    e.target.setAttribute('style', 'background-color: red;');
  };
  const [feed, setFeed] = React.useState('');

  const handleChangeFeed = (event) => {
    setFeed(event.target.value);
  };

  const [storyFeed, setStoryFeed] = React.useState('');

  const handleChangeStoryFeed = (event) => {
    setStoryFeed(event.target.value);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const media = () => {
    setActivity(true);
    if (activity === true) {
      setActivity(false);
    }
  };
  const showComment = () => {
    setComment(true);
    if (comment === true) {
      setComment(false);
    }
  };

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const removeImg = () => {
    setSelectedFile('');
  };
  const [name, setName] = useState('');

  const USERS = [
    { id: 1, name: 'Shivanshu' },
    { id: 2, name: 'Aseem' },
    { id: 3, name: 'Sahil' },
    { id: 4, name: 'Saket' },
  ];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
    }
    setName(keyword);
  };

  return (
    <>
      <Header />
      <div className="dashboard-wrapper">
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Card>
                  <div className="recommended-pages">Recommended Pages</div>

                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg1}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Fast Pizza </strong>
                      <small>Pizza & Fast Food</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg2}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Lonely Droid</strong>
                      <small>Technology</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg3}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Meta Movies</strong>
                      <small>Movies / Entertainment</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg4}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Nuclearjs</strong>
                      <small>Technology</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg5}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Slicer</strong>
                      <small>Web / Design</small>
                    </div>
                  </MenuItem>
                </Card>

                <Card sx={{ mt: 2 }}>
                  <div className="recommended-pages">Latest activity</div>

                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg1}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Css Ninja </strong>
                      <small>3 hours ago</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg2}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Milly Augustine</strong>
                      <small>5 hours ago</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg3}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Meta Movies</strong>
                      <small>Movies / Entertainment</small>
                    </div>
                  </MenuItem>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab
                          icon={<CreateIcon />}
                          label="Publish"
                          {...a11yProps(0)}
                        />
                        <Tab
                          icon={<ArtTrackIcon />}
                          label="Albums"
                          {...a11yProps(1)}
                        />
                        <Tab
                          icon={<VideocamIcon />}
                          label="Video"
                          {...a11yProps(2)}
                        />
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0} className="tab-body">
                      <Avatar
                        alt="Profile"
                        src={ProfileImg4}
                        className="avatar"
                      />
                      <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        maxRows={8}
                        placeholder="Write something about you..."
                      />
                      <div className="media-img-preview">
                        {selectedFile && preview !== '' ? (
                          <CancelIcon onClick={removeImg} />
                        ) : (
                          ''
                        )}
                        <input
                          type="file"
                          onChange={onSelectFile}
                          id="fileUpload"
                        />
                        {selectedFile && <img src={preview} alt="preview"/>}
                      </div>
                      <div className="media">
                        <Stack direction="row" spacing={1}>
                          <label for="fileUpload">
                            {' '}
                            <Chip
                              icon={<CameraAltOutlinedIcon />}
                              label="Media"
                              variant="outlined"
                            />
                          </label>
                          <Chip
                            icon={<InsertEmoticonIcon />}
                            label="Activity"
                            variant="outlined"
                            onClick={media}
                          />
                          <Chip
                            label="..."
                            variant="outlined"
                            onClick={media}
                          />
                        </Stack>
                      </div>

                      {activity ? (
                        <div className="post-wrapper">
                          <div className="post-list">
                            <div className="list-radio">
                              <label className="radio-container">
                                <input type="checkbox" name="radio" />
                                <span className="check"></span>
                              </label>
                              <span>
                                <NotificationsIcon /> Activity Feed
                              </span>
                            </div>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                              <Select
                                value={feed}
                                onChange={handleChangeFeed}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                              >
                                <MenuItem value="">
                                  <em>
                                    {' '}
                                    <InsertEmoticonIcon /> Friends
                                  </em>
                                </MenuItem>
                                <MenuItem value={10}>
                                  <ListItemIcon>
                                    <LanguageIcon fontSize="small" />
                                  </ListItemIcon>
                                  <div className="profile-dropdown">
                                    <strong>Public</strong>
                                    <small>
                                      Anyone can see this publication
                                    </small>
                                  </div>
                                </MenuItem>
                                <MenuItem value={20}>
                                  <ListItemIcon>
                                    <GroupIcon fontSize="small" />
                                  </ListItemIcon>
                                  <div className="profile-dropdown">
                                    <strong>Friends</strong>
                                    <small>
                                      only friends can see this publication.
                                    </small>
                                  </div>
                                </MenuItem>
                                <Divider />
                                <MenuItem value={30}>
                                  <ListItemIcon>
                                    <LockIcon fontSize="small" />
                                  </ListItemIcon>
                                  <div className="profile-dropdown">
                                    <strong>Only Me</strong>
                                    <small>
                                      Only me can see this publication.
                                    </small>
                                  </div>
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                          <div className="post-list">
                            <div className="list-radio">
                              <label className="radio-container">
                                <input type="checkbox" name="radio" />
                                <span className="check"></span>
                              </label>
                              <span>
                                <NotificationsIcon /> My Story
                              </span>
                            </div>

                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                              <Select
                                value={storyFeed}
                                onChange={handleChangeStoryFeed}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                              >
                                <MenuItem value="">
                                  <em>
                                    {' '}
                                    <InsertEmoticonIcon /> Friends
                                  </em>
                                </MenuItem>
                                <MenuItem value={10}>
                                  <ListItemIcon>
                                    <LanguageIcon fontSize="small" />
                                  </ListItemIcon>
                                  <div className="profile-dropdown">
                                    <strong>Public</strong>
                                    <small>
                                      Anyone can see this publication
                                    </small>
                                  </div>
                                </MenuItem>
                                <MenuItem value={20}>
                                  <ListItemIcon>
                                    <GroupIcon fontSize="small" />
                                  </ListItemIcon>
                                  <div className="profile-dropdown">
                                    <strong>Friends</strong>
                                    <small>
                                      only friends can see this publication.
                                    </small>
                                  </div>
                                </MenuItem>
                                <Divider />
                                <MenuItem value={30}>
                                  <ListItemIcon>
                                    <LockIcon fontSize="small" />
                                  </ListItemIcon>
                                  <div className="profile-dropdown">
                                    <strong>Only Me</strong>
                                    <small>
                                      Only me can see this publication.
                                    </small>
                                  </div>
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>

                          <div className="send-directly">
                            <div className="send-message">
                              Send in Message
                              <input
                                type="search"
                                value={name}
                                onChange={filter}
                                className="input"
                                placeholder="Search friend"
                              />
                            </div>
                            {foundUsers && foundUsers.length > 0 ? (
                              foundUsers.map((user) => (
                                <MenuItem key={user.id}>
                                  <label className="radio-container">
                                    <input type="checkbox" name="radio" />
                                    <span className="check"></span>
                                  </label>
                                  <Avatar
                                    alt="Profile"
                                    src={ProfileImg5}
                                    className="user-img"
                                  />
                                  {user.name}
                                </MenuItem>
                              ))
                            ) : (
                              <h1>No results found!</h1>
                            )}
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                      <Button variant="contained" className="post-button">
                        Publish
                      </Button>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      Item Three
                    </TabPanel>
                  </Box>
                </Card>

                <Card variant="outlined" className="post-cards">
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={Post}
                    alt="Paella dish"
                  />
                  <div className="floating">
                    <span>
                      <Fab
                        color="primary"
                        aria-label="add"
                        onClick={handleClickOpen}
                      >
                        <ScreenShareIcon />
                      </Fab>
                      <Fab color="primary" aria-label="add" onClick={likePost}>
                        <FavoriteIcon />
                      </Fab>
                    </span>
                  </div>

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {'Share Post'}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <Card variant="outlined" className="post-cards">
                          <CardMedia
                            component="img"
                            height="194"
                            image={Post}
                            alt="Paella dish"
                          />
                          <CardContent className="post-body">
                            <Typography variant="body2" color="text.secondary">
                              This impressive paella is a perfect party dish and
                              a fun meal to cook together with your guests. Add
                              1 cup of frozen peas along with the mussels, if
                              you like.
                            </Typography>
                          </CardContent>
                        </Card>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleClose} autoFocus>
                        Share
                      </Button>
                    </DialogActions>
                  </Dialog>

                  <CardContent className="post-body">
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                    <div className="post-liked">
                      <AvatarGroup>
                        <Avatar alt="Remy Sharp" src={Post} />
                        <Avatar alt="Travis Howard" src={ProfileImg1} />
                        <Avatar
                          alt="Agnes Walker"
                          src="/static/images/avatar/4.jpg"
                        />
                        <Avatar alt="Trevor Henderson" src={ProfileImg2} />
                      </AvatarGroup>
                      <span>
                        {' '}
                        <strong>Milly, David </strong>and 23 more liked this
                      </span>
                    </div>

                    <div className="comment-wrapper">
                      <div className="comment-title">Comments (8) </div>

                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <div className="comment-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempo incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris consequat.
                      </div>
                      <Divider />
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <div className="comment-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempo incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris consequat.
                      </div>
                      <div className="comment-input">
                        <textarea placeholder="Write a comment"></textarea>
                        <Button variant="contained">
                          {' '}
                          <SendIcon /> Send
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card variant="outlined" className="post-cards">
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={Post}
                    alt="Paella dish"
                  />
                  <div className="floating">
                    <span>
                      <Fab
                        color="primary"
                        aria-label="add"
                        onClick={handleClickOpen}
                      >
                        <ScreenShareIcon />
                      </Fab>
                      <Fab color="primary" aria-label="add" onClick={likePost}>
                        <FavoriteIcon />
                      </Fab>
                    </span>
                  </div>

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {'Share Post'}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <Card variant="outlined" className="post-cards">
                          <CardMedia
                            component="img"
                            height="194"
                            image={Post}
                            alt="Paella dish"
                          />
                          <CardContent className="post-body">
                            <Typography variant="body2" color="text.secondary">
                              This impressive paella is a perfect party dish and
                              a fun meal to cook together with your guests. Add
                              1 cup of frozen peas along with the mussels, if
                              you like.
                            </Typography>
                          </CardContent>
                        </Card>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleClose} autoFocus>
                        Share
                      </Button>
                    </DialogActions>
                  </Dialog>

                  <CardContent className="post-body">
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                    <div className="post-liked">
                      <AvatarGroup>
                        <Avatar alt="Remy Sharp" src={Post} />
                        <Avatar alt="Travis Howard" src={ProfileImg3} />
                        <Avatar
                          alt="Agnes Walker"
                          src="/static/images/avatar/4.jpg"
                        />
                        <Avatar alt="Trevor Henderson" src={ProfileImg4} />
                      </AvatarGroup>
                      <span>
                        {' '}
                        <strong>Milly, David </strong>and 23 more liked this
                      </span>
                    </div>

                    <div className="comment-wrapper">
                      <div className="comment-title">Comments (8) </div>

                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <div className="comment-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempo incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris consequat.
                      </div>
                      <Divider />
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                      />
                      <div className="comment-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempo incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris consequat.
                      </div>
                      <div className="comment-input">
                        <textarea placeholder="Write a comment"></textarea>
                        <Button variant="contained">
                          {' '}
                          <SendIcon /> Send
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={3}>
                <Card>
                  <div className="recommended-pages">Friends</div>

                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg4}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Shivanshu Pandey </strong>
                      <small>3 Mutual Friends</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg1}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Sahil</strong>
                      <small>5 Mutual Friends</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg3}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Aseem</strong>
                      <small>1 Mutual Friend</small>
                    </div>
                  </MenuItem>
                </Card>
                <Card sx={{ mt: 2 }}>
                  <div className="recommended-pages">New Story</div>

                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg3}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Fast Pizza </strong>
                      <small>Pizza & Fast Food</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg4}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Lonely Droid</strong>
                      <small>Technology</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg2}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Meta Movies</strong>
                      <small>Movies / Entertainment</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg3}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Nuclearjs</strong>
                      <small>Technology</small>
                    </div>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon sx={{ mr: 2 }}>
                      <Avatar
                        alt="Profile"
                        src={ProfileImg1}
                        className="avatar"
                      />
                    </ListItemIcon>
                    <div className="profile-dropdown">
                      <strong>Slicer</strong>
                      <small>Web / Design</small>
                    </div>
                  </MenuItem>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default Dashboard;
