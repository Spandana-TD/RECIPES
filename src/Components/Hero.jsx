import { Box, Typography } from "@mui/material";
import React from "react";
import pic from "./i.png"
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundPosition:"center",
          backgroundSize:"cover",
          backgroundImage: `url(${pic})`
          // "linear-gradient(144deg, #8000ff4a, #00ff7178)",
          
        }}
      >
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000b8",
          }}
          gutterBottom
        >
         Welcome To Recipe
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "#000000b8" }}
        >
          EXPLORE A NEW TASTE
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "700", color: "#000000b8" }}
        >
          
        </Typography>
      </Box>
    </Box>
  );
}
