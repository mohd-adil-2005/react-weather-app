import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  "./infoBox.css"

import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';






function InfoBox({info}){
    const rain_URL="https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_URL= "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_URL= "https://images.unsplash.com/photo-1740809711862-18976afc4b2f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    
    
    return(
        <div className="InfoBox" >
           
        <div className='infocontainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? rain_URL:info.temp>15?hot_URL:cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.name}
          {info.humidity>80?
           <CloudIcon/>:info.temp>15?
           <WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
       <p> temprature={info.temp}&deg;</p>
       <p> Humidity={info.humidity}&deg;</p>
       <p>temp-min={info.temp_min}&deg;</p>
       <p> temp-max={info.temp_max}&deg;</p>
       <p>sunset at </p>
       <p>The Weather can be described as {info.weather.main}  and feels like {info.feels_like}&deg;</p>
       
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>


    </div>
            
        </div>
    );
}
export default InfoBox;