import React from "react";
import { Stack, Button, Link } from "@mui/material";

const Header = () => {
  return (
    <Stack
      sx={{
        padding: "0 40px",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{
          margin: "8px 40px",
          position: "fixed",
          top: 0,
          bottom: "auto",
          left: 0,
          right: "auto",
          backdropFilter: "blur(5px)",
          backgroundColor: "transparent",
          zIndex: 999,
          width: "100%",
        }}
      >
        <img
          src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c63739759cbe020bd289_ChocoUp.svg"
          alt="ChocoUp"
          width="120"
        />
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
      </Stack>
    </Stack>
  );
};

export default Header;
