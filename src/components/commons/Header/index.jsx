import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

import { Menu } from "@mui/icons-material";

function Header() {
  return (
    <AppBar
      sx={{
        // bgcolor: "#fff",
        borderBottom: "solid 1px #e5e5e5",
        top: 0,
        right: 0,
        left: "auto",
        height: "8vh",
        zIndex: 10,
      }}
      elevation={0}
    >
      <Toolbar>
        <IconButton size="large" sx={{ mr: 2 }}>
          <Menu sx={{ color: "#f4f4f4" }} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Asset Management
        </Typography>
        <Button color="inherit">User</Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {};

export default Header;
