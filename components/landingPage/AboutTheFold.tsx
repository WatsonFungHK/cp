import React from "react";
import { Box, Stack, Typography, Hidden, Button } from "@mui/material";

const AboutTheFold = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
      }}
      direction="row"
      alignItems={"center"}
      spacing={2}
    >
      <Box
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            width: "50%",
          },
        })}
      >
        <Typography variant="h4" mb={"16px"}>
          Choco Up
        </Typography>
        <Typography variant="body1" mb={"16px"}>
          Helping e-commerce brands grow by providing easy access to working
          capital that's flexible and non-dilutive.
          <br />
          <br /> Say hello to revenue-based financing.
        </Typography>
        <Button
          sx={{
            backgroundImage: `linear-gradient(97deg,#7352ff,#16cbe1)`,
            color: "white",
            borderRadius: "5rem",
          }}
        >
          Get Funded
        </Button>
      </Box>
      <Hidden mdDown>
        <Box
          sx={{
            width: "60%",
            maxWidth: "48rem",
            paddingTop: "5%",
            position: "absolute",
            top: "auto",
            bottom: "auto",
            left: "auto",
            right: "-5%",
          }}
        >
          <img
            src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b57f2810c50b8ed23301_Group%202389.svg"
            width="100%"
          />
        </Box>
      </Hidden>
    </Stack>
  );
};

export default AboutTheFold;
