import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Outlet } from "react-router-dom";
import Footer from "../commons/Footer";
import Header from "../commons/Header";
import Menu from "../commons/Menu";

function Layout() {
  return (
    <Stack minHeight={"100vh"}>
      {/* header */}
      <Header />
      {/* menu */}
      <Grid container width={"100vw"}>
        <Grid xs={0} lg={3} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box
            position={"sticky"}
            // zIndex={20}
            top={0}
            borderRight={"solid 1px #f3f3f3"}
          >
            <Menu />
          </Box>
        </Grid>
        {/* page */}
        <Grid xs={12} lg={9}>
          <Container
            maxWidth={false}
            sx={{
              mt: "8vh",
              p:2,
              minHeight:"85vh"
            }}
          >
            <Outlet />
          </Container>
          {/* Footer */}
          <Grid>
            <Container maxWidth="false" sx={{ bgcolor: "#888" }}>
              <Footer />
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Layout;
