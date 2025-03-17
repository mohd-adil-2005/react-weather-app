import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  "./infoBox.css"








function InfoBox({info}){
    const IMG_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    return(
        <div className="InfoBox" >
           
        <div className='infocontainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
       <p> temprature={info.temp}&deg;</p>
       <p> Humidity={info.humidity}&deg;</p>
       <p>temp-min={info.temp_min}&deg;</p>
       <p> temp-max={info.temp_max}&deg;</p>
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