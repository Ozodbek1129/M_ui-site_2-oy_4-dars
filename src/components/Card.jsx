import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardComponent({ data }) {
  const { name, category, diet, habitat } = data;

  return (
    <Box sx={{minWidth: 100, maxWidth: 300, margin: 3, boxShadow: 5 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              {category}
            </Typography>
            <Typography variant="body2">
              {diet}
              <br />
              {habitat}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
