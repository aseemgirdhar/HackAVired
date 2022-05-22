import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Dashboard = () => {
    return(
       <>
           <AcUnitIcon />
           <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
       </>
    )
}
export default Dashboard;