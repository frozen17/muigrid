import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";



const CardMui = ({value, filteresProducts, setValue}) => {

  return (
    <div>
        <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "start",
        padding: "15px"
      }}
    >

      <Grid container spacing={2}> 
      {filteresProducts?.map((mui, index) => (
        <Grid key={index} item  md={4} lg={3} xs={12} xl={2} sm={6}>
          <Card key={index}>
              <div
                style={{
                  borderRadius: "15px",
                  width: "100%",
                  height: "200px",
                  backgroundImage: `url(${mui.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}>
              </div>
              <CardContent style={{ display: "flex" }}>
                <img
                  src={mui.logo}
                  alt=""
                  style={{ width: "25px", height: "25px", padding: "5px" }}
                />
                <div>
                  <Typography gutterBottom variant="h6" component="div">
                    {mui.title}
                  </Typography>

                  <Typography gutterBottom variant="p" component="div">
                    {mui.channel}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    {mui.duration}
                  </Typography>
                </div>
              </CardContent>
            
          </Card>
        </Grid>
      ))}</Grid>
    </div>  
    </div>

  );
};

export default CardMui;
