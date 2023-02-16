import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const CardMui = () => {
  const muiApi = [
    {
      img: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/e8/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BC%D1%83%D1%80%D0%B0%D0%B2%D0%B5%D0%B9_%D0%B8_%D0%9E%D1%81%D0%B0_%E2%80%94_%D0%9A%D0%B2%D0%B0%D0%BD%D1%82%D0%BE%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F.jpeg/800px-%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BC%D1%83%D1%80%D0%B0%D0%B2%D0%B5%D0%B9_%D0%B8_%D0%9E%D1%81%D0%B0_%E2%80%94_%D0%9A%D0%B2%D0%B0%D0%BD%D1%82%D0%BE%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F.jpeg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
      title: "HIGHLIGHT pubg mobile | Major Pride",
      channel: "Major Pride",
      duration: "13 hour ago",
    },
    {
      img: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
      title: "HIGHLIGHT pubg mobile | Major Pride",
      channel: "HVVP",
      duration: "3 min ago",
    },
    {
      img: "https://www.gamespot.com/a/uploads/scale_landscape/1701/17013431/4094410-all-marvel-movies-in-order-of-release-studiobinder.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
      title: "HIGHLIGHT pubg mobile | Major Pride",
      channel: "A7",
      duration: "45 min ago",
    },
    {
      img: "https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
      title: "HIGHLIGHT pubg mobile | Major Pride",
      channel: "Nova easports",
      duration: "15 hour ago",
    },
    {
      img: "https://leadergamer.com.tr/app/uploads/2022/10/marvel.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
      title: "HIGHLIGHT pubg mobile | Major Pride",
      channel: "S2G",
      duration: "2 hour ago",
    },
    {
      img: "https://www.dunyahalleri.com/wp-content/uploads/2019/03/avengers-infinity-war-990x556.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
      title: "HIGHLIGHT pubg mobile | Major Pride",
      channel: "Navi",
      duration: "1 hour ago",
    },
    {
      img: "https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
      title: "HIGHLIGHT pubg mobile | Major Pride",
      channel: "MadBulls",
      duration: "5 hour ago",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "start",
        padding: "15px"
      }}
    >
      <Grid container spacing={2}> 
      {muiApi?.map((mui, index) => (
        <Grid item  md={4} lg={3} sx={3} xl={2}>
          <Card key={index}>
              <img
                src={mui.img}
                alt=""
                sx={{ height: 140 }}
                title="green iguana"
                style={{
                  borderRadius: "15px",
                  width: "100%",
                  height: "200px",
                  backgroundImage: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "cover",
                }}
              />
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
  );
};

export default CardMui;
