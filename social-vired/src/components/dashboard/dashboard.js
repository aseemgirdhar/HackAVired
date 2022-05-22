import React, {useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import './dashboard.css'
import CreateIcon from '@mui/icons-material/Create';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import VideocamIcon from '@mui/icons-material/Videocam';
import Card from '@mui/material/Card';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Avatar from "@mui/material/Avatar";
import ProfileImg from "../../assets/images/Profile-2.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ListItemIcon from "@mui/material/ListItemIcon";
import LanguageIcon from '@mui/icons-material/Language';
import Divider from "@mui/material/Divider";
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';

const Dashboard = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const [value, setValue] = React.useState(0);
    const [activity , setActivity] = useState(false)
    const handleChange = (event, newValue) => {
        setValue(newValue);
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
        if(activity === true) {
            setActivity(false);
        }
    };

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    const removeImg = () => {
        setSelectedFile('')
    }
    const [name, setName] = useState('');

    const USERS = [
        { id: 1, name: 'Shivanshu'},
        { id: 2, name: 'Aseem' },
        { id: 3, name: 'Sahil'},
        { id: 4, name: 'Thilak'},

    ];

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

    return(
       <>
           <div className='dashboard-wrapper'>
            <Container maxWidth="xl">
               <Box sx={{ flexGrow: 1 }}>
                   <Grid container spacing={2}>
                       <Grid item xs={6} md={3}>
                           <Item>xs=6 md=8</Item>
                       </Grid>
                       <Grid item xs={6} md={6}>
                           <Card variant="outlined">
                               <Box sx={{ width: '100%' }}>
                                   <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                       <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                           <Tab icon={<CreateIcon />} label='Publish'  {...a11yProps(0)} />
                                           <Tab  icon={<ArtTrackIcon />} label='Albums' {...a11yProps(1)} />
                                           <Tab  icon={<VideocamIcon />} label='Video' {...a11yProps(2)} />
                                       </Tabs>
                                   </Box>
                                   <TabPanel value={value} index={0} className='tab-body'>
                                       <Avatar alt="Profile" src={ProfileImg} className='avatar'/>
                                       <TextareaAutosize
                                           aria-label="minimum height"
                                           minRows={5}
                                           maxRows={8}
                                           placeholder="Write something about you..."
                                       />
                                       <div className='media-img-preview'>
                                           {selectedFile && preview !== '' ? <CancelIcon onClick={removeImg} /> : ''}
                                           <input type='file' onChange={onSelectFile} id="fileUpload" />
                                           {selectedFile &&  <img src={preview} /> }
                                       </div>
                                       <div className='media'>
                                           <Stack direction="row" spacing={1}>
                                            <label  for="fileUpload">  <Chip  icon={<CameraAltOutlinedIcon />} label="Media" variant="outlined" /></label>
                                            <Chip icon={<InsertEmoticonIcon /> } label="Activity" variant="outlined" onClick={media} />
                                            <Chip label="..." variant="outlined" onClick={media} />
                                           </Stack>
                                       </div>

                                       {activity ? <div className='post-wrapper'>
                                           <div className='post-list'>
                                               <div className='list-radio'>
                                                   <label className="radio-container">
                                                       <input type="checkbox" name="radio" />
                                                       <span className="check"></span>
                                                   </label>
                                                   <span><NotificationsIcon /> Activity Feed</span>
                                               </div>

                                               <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                   <Select
                                                       value={feed}
                                                       onChange={handleChangeFeed}
                                                       displayEmpty
                                                       inputProps={{ 'aria-label': 'Without label' }}
                                                   >
                                                       <MenuItem value="">
                                                           <em> <InsertEmoticonIcon /> Friends</em>
                                                       </MenuItem>
                                                       <MenuItem value={10}>
                                                           <ListItemIcon>
                                                               <LanguageIcon fontSize="small" />
                                                           </ListItemIcon>
                                                           <div className='profile-dropdown'>
                                                               <strong>Public</strong>
                                                               <small>Anyone can see this publication</small>
                                                           </div>
                                                       </MenuItem>
                                                       <MenuItem value={20}>
                                                           <ListItemIcon>
                                                               <GroupIcon fontSize="small" />

                                                           </ListItemIcon>
                                                           <div className='profile-dropdown'>
                                                               <strong>Friends</strong>
                                                               <small>only friends can see this publication.</small>
                                                           </div>
                                                       </MenuItem>
                                                       <Divider />
                                                       <MenuItem value={30}>
                                                           <ListItemIcon>
                                                               <LockIcon fontSize="small" />
                                                           </ListItemIcon>
                                                           <div className='profile-dropdown'>
                                                               <strong>Only Me</strong>
                                                               <small>Only me can see this publication.</small>
                                                           </div>

                                                       </MenuItem>

                                                   </Select>

                                               </FormControl>



                                           </div>
                                           <div className='post-list'>
                                               <div className='list-radio'>
                                                   <label className="radio-container">
                                                       <input type="checkbox" name="radio" />
                                                       <span className="check"></span>
                                                   </label>
                                                   <span><NotificationsIcon /> My Story</span>
                                               </div>

                                               <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                   <Select
                                                       value={storyFeed}
                                                       onChange={handleChangeStoryFeed}
                                                       displayEmpty
                                                       inputProps={{ 'aria-label': 'Without label' }}
                                                   >
                                                       <MenuItem value="">
                                                           <em> <InsertEmoticonIcon /> Friends</em>
                                                       </MenuItem>
                                                       <MenuItem value={10}>
                                                           <ListItemIcon>
                                                               <LanguageIcon fontSize="small" />
                                                           </ListItemIcon>
                                                           <div className='profile-dropdown'>
                                                               <strong>Public</strong>
                                                               <small>Anyone can see this publication</small>
                                                           </div>
                                                       </MenuItem>
                                                       <MenuItem value={20}>
                                                           <ListItemIcon>
                                                               <GroupIcon fontSize="small" />
                                                           </ListItemIcon>
                                                           <div className='profile-dropdown'>
                                                               <strong>Friends</strong>
                                                               <small>only friends can see this publication.</small>
                                                           </div>
                                                       </MenuItem>
                                                       <Divider />
                                                       <MenuItem value={30}>
                                                           <ListItemIcon>
                                                               <LockIcon fontSize="small" />
                                                           </ListItemIcon>
                                                           <div className='profile-dropdown'>
                                                               <strong>Only Me</strong>
                                                               <small>Only me can see this publication.</small>
                                                           </div>
                                                       </MenuItem>
                                                   </Select>
                                               </FormControl>
                                           </div>

                                           <div className='send-directly'>
                                               <div className='send-message'>
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
                                                           <Avatar alt="Profile" src={ProfileImg} className='user-img' />
                                                           {user.name}
                                                       </MenuItem>
                                                   ))
                                               ) : (
                                                   <h1>No results found!</h1>
                                               )}



{/*
                                               <MenuItem>
                                                   <label className="radio-container">
                                                       <input type="checkbox" name="radio" />
                                                       <span className="check"></span>
                                                   </label>
                                                   <Avatar alt="Profile" src={ProfileImg} className='user-img' />
                                                   Shivanshu
                                               </MenuItem>
                                               <MenuItem>
                                                   <label className="radio-container">
                                                       <input type="checkbox" name="radio" />
                                                       <span className="check"></span>
                                                   </label>
                                                   <Avatar alt="Profile" src={ProfileImg} className='user-img' />
                                                   Aseem
                                               </MenuItem>
                                               <MenuItem>
                                                   <label className="radio-container">
                                                       <input type="checkbox" name="radio" />
                                                       <span className="check"></span>
                                                   </label>
                                                   <Avatar alt="Profile" src={ProfileImg} className='user-img' />
                                                   Sahil
                                               </MenuItem>
                                               <MenuItem>
                                                   <label className="radio-container">
                                                       <input type="checkbox" name="radio" />
                                                       <span className="check"></span>
                                                   </label>
                                                   <Avatar alt="Profile" src={ProfileImg} className='user-img' />
                                                   Thilak
                                               </MenuItem>*/}


                                           </div>

                                       </div> : ''}
                                       <Button variant="contained" className='post-button'>Publish</Button>

                                   </TabPanel>
                                   <TabPanel value={value} index={1}>
                                       Item Two
                                   </TabPanel>
                                   <TabPanel value={value} index={2}>
                                       Item Three
                                   </TabPanel>
                               </Box>
                           </Card>
                       </Grid>
                       <Grid item xs={6} md={3}>
                           <Item>xs=6 md=4</Item>
                       </Grid>

                   </Grid>
               </Box>
           </Container>
           </div>
       </>
    )
}
export default Dashboard;