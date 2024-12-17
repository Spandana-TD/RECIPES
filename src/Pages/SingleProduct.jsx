import React, { useEffect, useState } from "react";
import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
export default function SingleProduct() {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        setRecipeInfo(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch recipe details.");
      });
  }, [id]);
  if (!recipeInfo) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={2}>
          <Paper
            elevation={0}
            sx={{
              height: "104vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              p: 1,
            }}
          >
            {recipeInfo?.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Recipe ${index+1}`}
                style={{
                  width: "80%",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper
            elevation={0}
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={recipeInfo?.image}
              alt="Selected Recipe"
              style={{
                width: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{ height: "100vh", padding: 2 }}>
            <Typography variant="h4" fontWeight="bold">
              {recipeInfo?.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginTop: 1,
              }}
            >
              <Chip
                size="small"
                label={recipeInfo?.rating}
                color={
                  recipeInfo?.rating > 4.5
                    ? "success"
                    : recipeInfo?.rating > 4
                    ? "warning"
                    : "error"
                }
                icon={<StarRateIcon />}
              />
              <Typography variant="body2">
                {recipeInfo?.reviewCount} Reviews
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Tags</TableCell>
                    <TableCell>{recipeInfo?.tags?.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Meal Type</TableCell>
                    <TableCell>{recipeInfo?.mealType}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ingredients</TableCell>
                    <TableCell>{recipeInfo?.ingredients?.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Instructions</TableCell>
                    <TableCell>{recipeInfo?.instructions}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}