import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
    
    const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-L0kO79TOaZq1eelVVnNlSvzNmvJKnT1Bg0bKMCegzw&s=10";
    const HOT_URL = "https://images.unsplash.com/photo-1696332223399-5238fd1ca9d4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1515890922410-ae767899d6b3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    return(
        <div className="InfoBox" >
         <div className='card-container' >
         <Card  sx={{
    width: "100%",
    maxWidth: "800px",
    borderRadius: "15px",
    border: "2px solid white",
    boxSizing: "border-box",
    overflow: "hidden"
  }}>
      <CardMedia
       sx={{
        height: { xs: 90, sm: 110, md: 120 },
        backgroundPosition: "center",
        backgroundSize: "cover"
    }}
        image= {info.humidity > 80 ? RAIN_URL : (info.temp > 15) ? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"#123A78", fontWeight:"700"}}>
          {info.city} {info.humidity > 80 ? <ThunderstormIcon style={{color:"#64748b"}}/> : (info.temp > 15) ? <SunnyIcon style={{color:"#FFB000"}}/> : <AcUnitIcon style={{color:"white"}}/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} style={{color:"#444"}}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          {/* <p>The weather can be described as <i>{info.weather}</i></p> */}
         <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
      
    </Card>
     </div>


        </div>

        
    )
}