import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const CustomCard = ({ title, description, onButtonClick }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: '20px auto',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={onButtonClick}
        >
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
