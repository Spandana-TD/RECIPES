import { Box, Chip, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import NoData from "../Components/NoData";

export default function Shop() {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cuisines, setCuisines] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes?limit=50")
      .then((result) => {
        setRecipes(result.data.recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });

    axios
      .get("https://dummyjson.com/recipes/tags")
      .then((response) => {
        setCuisines(response.data);
      })
      .catch((error) => {
        console.log("Error fetching cuisines:", error);
      });
  }, []);
  useEffect(() => {
    let filtered = [...recipes];
    if (selectedCuisine !== "All") {
      filtered = filtered.filter(
        (recipe) => recipe.tags && recipe.tags.includes(selectedCuisine)
      );
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (recipe) =>
          recipe.name &&
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredRecipes(filtered);
  }, [selectedCuisine, searchTerm, recipes]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sx={{ p: 2 }} xs={12} sm={3}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Filter By category
            </Typography>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "flex-start",
                gap: 1,
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <Chip
                color={selectedCuisine === "All" ? "success" : "default"}
                label={"All"}
                component={Paper}
                onClick={() => setSelectedCuisine("All")}
              />
              {cuisines.map((item, index) => (
                <Chip
                  component={Paper}
                  onClick={() => setSelectedCuisine(item)}
                  color={selectedCuisine === item ? "success" : "default"}
                  key={index}
                  label={item}
                />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} sx={{ p: 2 }}>
          <Box>
            <TextField
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              fullWidth
              type="search"
              label="Search recipe here"
              placeholder="search recipe by title"
            />
            <Box sx={{ flexGrow: 1, p: 3 }}>
              <Grid container spacing={2}>
                {filteredRecipes.length > 0 ? (
                  filteredRecipes.map((item, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                      <ProductCard recipe={item} />
                    </Grid>
                  ))
                ) : (
                  <Box sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <NoData />
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}