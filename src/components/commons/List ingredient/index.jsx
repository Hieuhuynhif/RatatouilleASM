import { MoreVert } from "@mui/icons-material";
import { CardActionArea, CardHeader, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

ActionAreaCard.propTypes = {
  ingredients: PropTypes.arrayOf(Object),
};

export default function ActionAreaCard(props) {
  const { ingredients } = props;

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ingredients.slice(startIndex, endIndex);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {getPageData().map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.name}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title={item.name.toUpperCase()}
              />

              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="src\assets\p1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Description:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expire date: {item.exp_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity} kg
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Import date: {item.imp_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expiry date: {item.exp_date}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} alignItems={"end"} mt={2}>
        <Pagination
          color="primary"
          count={Math.ceil(ingredients.length / itemsPerPage)} // Total number of pages
          page={currentPage}
          onChange={handlePageChange}
          defaultPage={1}
          boundaryCount={2}
          showFirstButton
          showLastButton
        />
      </Stack>
    </Box>
  );
}
