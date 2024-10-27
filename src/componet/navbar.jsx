import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./css/Heder.css";
import hamburger from "../img/hamburger.svg";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 225 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <img
        src={logo}
        alt="Indofon"
        style={{ width: "55%", marginLeft: "20px", marginTop: "25px" }}
      />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="HOME" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/about">
            <ListItemText primary="ABOUT US" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/products">
            <ListItemText primary="PRODUK" />
          </ListItemButton>
        </ListItem>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="PAPAN PLAFON PVC" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="LIST PLAFON PVC" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="ORNAMEN PVC" />
          </ListItemButton>
        </List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/blog">
            <ListItemText primary="BLOG" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/contact">
            <ListItemText primary="CONTACT" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "10px",
        padding: "10px",
        borderBottom: "1px solid #ddd",
        position: "relative",
      }}
    >
      <div className="logo">
        <img src={logo} alt="Indofon" style={{ height: "40px" }} />
      </div>
      {isMobile ? (
        <Button
          onClick={toggleDrawer(true)}
          style={{ fontWeight: "bold", marginLeft: "50px" }}
        >
          <img src={hamburger} alt="Indofon" style={{ height: "30px" }} />
        </Button>
      ) : (
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Link
            to="/"
            style={{
              marginLeft: "20px",
              textDecoration: "none",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            HOME
          </Link>
          <Link
            to="/about"
            style={{
              marginLeft: "20px",
              textDecoration: "none",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            ABOUT US
          </Link>
          <div
            onClick={handleDropdownClick}
            style={{
              position: "relative",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                textDecoration: "none",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              PRODUK
            </span>
            {dropdownOpen && (
              <ul
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "0",
                  listStyle: "none",
                  padding: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  fontSize: "10px",
                  width: "150px",
                }}
              >
                <li style={{ marginBottom: "10px" }}>
                  <Link
                    to="/papan"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    PAPAN PLAFON PVC
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link
                    to="/products#list-plafon"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    LIST PLAFON PVC
                  </Link>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <Link
                    to="/papan"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    ORNAMEN PVC
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            to="/blog"
            style={{
              marginLeft: "20px",
              textDecoration: "none",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            BLOG
          </Link>
          <Link
            to="/contact"
            style={{
              marginLeft: "20px",
              textDecoration: "none",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            CONTACT
          </Link>
        </nav>
      )}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            top: isMobile ? "0px" : "64px",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            color: "#000",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          },
        }}
      >
        {drawerList()}
      </Drawer>
    </header>
  );
};

export default Navbar;
