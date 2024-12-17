import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import i from "./iii.png";
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundImage: "linear-gradient(144deg,rgba(107, 255, 255, 0.29),rgba(40, 84, 225, 0.47))", borderRadius: "20px",height:"50%" }}
      >
        <Grid2 size={{ xs: 10, sm: 6 }}>
          <img
            src={i}
            alt="picture"
            style={{ width: "60%",height:"90%",marginTop:"40px",marginLeft:"30px", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "800", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900",fontSize:"30px" }}
            >
              RECIPES
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify",fontWeight: "900", fontSize: "20px" }}
            >
              A recipe introduction is a brief, engaging piece of writing that sets the stage for the recipe you're sharing. It often provides context, adds a personal touch, or highlights the recipe’s significance.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
             
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
