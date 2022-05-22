import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Dashboard = () => {
    return(
       <>
           <AcUnitIcon />
           <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
           <h1>Hello dashboard here </h1>
       </>
    )
}
export default Dashboard;