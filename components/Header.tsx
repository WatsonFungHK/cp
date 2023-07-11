import React from "react";
import {
  Stack,
  Button,
  Link,
  Hidden,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        padding: "8px 40px",
        position: "fixed",
        top: 0,
        bottom: "auto",
        left: 0,
        right: "auto",
        backdropFilter: "blur(5px)",
        backgroundColor: "transparent",
        zIndex: 999,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <img
        src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c63739759cbe020bd289_ChocoUp.svg"
        alt="ChocoUp"
        width="120"
      />
      <Hidden mdDown>
        <Stack
          direction={"row"}
          sx={{
            "> a": {
              padding: "12px 16px",
              color: "#061849",
            },
          }}
        >
          <Link href="#">Funding</Link>
          <Link href="#">Success Stories</Link>
          <Link href="#">Partner</Link>
          <Link href="#">About</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Login</Link>
        </Stack>

        <Button variant="contained">Get Funded</Button>
      </Hidden>
      <Hidden mdUp>
        <IconButton onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem href="#">Funding</MenuItem>
          <MenuItem href="#">Success Stories</MenuItem>
          <MenuItem href="#">Partner</MenuItem>
          <MenuItem href="#">About</MenuItem>
          <MenuItem href="#">Resources</MenuItem>
          <MenuItem href="#">Login</MenuItem>
        </Menu>
      </Hidden>
    </Stack>
  );
};

export default Header;
