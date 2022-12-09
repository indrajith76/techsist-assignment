import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, FormControl, OutlinedInput } from "@mui/material";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Logo2 from "../../assets/Logo2.png";
import basketShopping2 from "../../assets/icons/basketShopping2.png";
import SearchIcon from "../../assets/icons/search.png";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const drawerWidth = 240;

export default function Header(props) {
  const { user, logOut } = useContext(AuthContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navItems = (
    <>
      <ListItem sx={{}}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <Box sx={{ position: "relative" }}>
            <img src={basketShopping2} alt="" />
            <span
              style={{ position: "absolute", marginTop: "-15px", left: "15px" }}
            >
              0
            </span>
          </Box>
        </Link>
      </ListItem>
      <ListItem sx={{}}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Track Orders
        </Link>
      </ListItem>
      {user ? (
        <ListItem sx={{}}>
          <Button
            onClick={handleSignOut}
            style={{ color: "white", textDecoration: "none" }}
          >
            Log Out
          </Button>
        </ListItem>
      ) : (
        <ListItem sx={{}}>
          <Link to="/signin" style={{ color: "white", textDecoration: "none" }}>
            SIgn In / Register
          </Link>
        </ListItem>
      )}
    </>
  );

  const sideNavItems = (
    <>
      <ListItem>
        <Button sx={{ color: "#fff" }} variant="text">
          <Link to="/" style={{ textDecoration: "none" }}>
            Track Orders
          </Link>
        </Button>
      </ListItem>
      <ListItem>
        {user ? (
          <Button onClick={handleSignOut} sx={{}} variant="text">
            Log Out
          </Button>
        ) : (
          <Button sx={{ color: "#fff" }} variant="text">
            <Link to="/signin" style={{ textDecoration: "none" }}>
              SIgn In / Register
            </Link>
          </Button>
        )}
      </ListItem>
    </>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={Logo2} alt="" />
      </Typography>
      <Divider />
      <List>{sideNavItems}</List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", mb: "60px" }}>
      <AppBar
        component="nav"
        sx={{
          py: "10px",
          boxShadow: "none",
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Link to="/">
                <img src={logo} alt="" style={{ width: "150px" }} />
              </Link>
            </Box>
            <FormControl
              sx={{
                width: { xs: "80%", lg: "45%" },
                bgcolor: "#fff",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <OutlinedInput
                sx={{ pl: "30px" }}
                placeholder={`Search here ...`}
              />
              <img
                src={SearchIcon}
                style={{
                  height: "50%",
                  top: "25%",
                  left: "10px",
                  position: "absolute",
                }}
                alt=""
              />
            </FormControl>
            <Box
              sx={{
                display: { xs: "none", sm: "block", md: "flex" },
                alignItems: "center",
              }}
            >
              {navItems}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}
