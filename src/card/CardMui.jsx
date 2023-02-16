import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const CardMui = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const muiApi = [
    {
      img: "https://i.ytimg.com/vi/U1h5WZT4k8I/maxresdefault.jpg",
      logo: "https://quberten.ru/sites/default/files/styles/cover/public/major_pride-topper-06-01.png?itok=Sxte-m6t",
      title: "HIGHLIGHT pubg mobile | Major Pride",
      channel: "Major Pride",
      duration: "13 hour ago",
    },
    {
      img: "https://egw.news/uploads/cache/news/750/1666556723443-16x9.jpg",
      logo: "https://i.ytimg.com/vi/X2FqzjFamUI/maxresdefault.jpg",
      title: "HIGHLIGHT pubg mobile | HVVP",
      channel: "HVVP",
      duration: "3 min ago",
    },
    {
      img: "https://staticg.sportskeeda.com/editor/2021/07/fa2e2-16272408490456-800.jpg",
      logo: "data:image/jpeg;base64,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",
      title: "HIGHLIGHT pubg mobile | A7",
      channel: "A7",
      duration: "45 min ago",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/589bff0c414fb513e704c6e9/1608034176925-Y8QSGR6SNZ4OUT52Y3FH/PMGC+Roster.png?format=1000w",
      logo: "https://cdn.escharts.com/uploads/public/61e/95f/04b/61e95f04baa53594560529.png",
      title: "HIGHLIGHT pubg mobile | Nova easports",
      channel: "Nova easports",
      duration: "15 hour ago",
    },
    {
      img: "https://rus.egw.news/uploads/cache/news/750/1673196133730-4x3.jpg",
      logo: "https://i.scdn.co/image/ab67616d0000b273bc59d99ac1bd1850d8cb5a0c",
      title: "HIGHLIGHT pubg mobile | S2G",
      channel: "S2G",
      duration: "2 hour ago",
    },
    {
      img: "https://staticg.sportskeeda.com/editor/2022/10/cdca1-16649757614779-1920.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5f/NAVI_Logo.svg/1200px-NAVI_Logo.svg.png",
      title: "HIGHLIGHT pubg mobile | Navi",
      channel: "Navi",
      duration: "1 hour ago",
    },
    {
      img: "https://gamingonphone.com/wp-content/uploads/2022/10/madbulls_pmpl_weu_2022_Champions.jpg",
      logo: "data:image/jpeg;base64,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",
      title: "HIGHLIGHT pubg mobile | MadBulls",
      channel: "MadBulls",
      duration: "5 hour ago",
    },
    {
      img: "https://egw.news/uploads/cache/news/750/1675370512106-16x9.jpg",
      logo: "https://i.imgur.com/8Xc5Ps7.png",
      title: "HIGHLIGHT pubg mobile | Gaimin Gladiators",
      channel: "Gaimin Gladiators",
      duration: "1 min ago",
    },

    
  ];


//   const handleSearch = () => {
// if(!searchTerm){
//   return muiApi;
// }else{
//   return setSearchResults(muiApi.filter((item) => (
//         item.channel.toLowerCase().includes(searchTerm.toLowerCase())
//       )))
// }
//   };
  useEffect(() => {
    setSearchResults(muiApi.filter((item) => (
      item.channel.toLowerCase().includes(searchTerm.toLowerCase())
    )))
  }, [])
  return (
    <div>
             <TextField
        label="Поиск"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => setSearchResults(e)}
      >
        Очистить
      </Button>
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
        <Grid key={index} item  md={4} lg={3} xs={6} xl={2}>
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
