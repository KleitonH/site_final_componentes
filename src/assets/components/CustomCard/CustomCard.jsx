import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

const CustomCard = ({ title, description, onButtonClick, imageUrl, children }) => {
  return (
    <Card
      sx={{
        width: "100%", // Permite que o card use todo o espaço disponível
        margin: "20px auto",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={imageUrl || "https://via.placeholder.com/150"}
          alt={title}
        />
      )}
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {children}
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={onButtonClick}
          style={{ marginLeft: "auto" }}
        >
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
