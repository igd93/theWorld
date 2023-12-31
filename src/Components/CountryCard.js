import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CountryCard(props) {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        sx={{ height: 140, width: 200}}
        alt = {props.name}        
        image={props.flagURL}
        title="flag"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.capital} | {props.population}
        </Typography>
      </CardContent>      
    </Card>
  );
}