import React from "react";
import { Stack, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#061849",
        padding: "0 40px",
        color: "white",
      }}
    >
      <Stack
        sx={{
          padding: "48px 0",
        }}
        direction={"row"}
      >
        <Stack spacing={3}>
          <img
            src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c292b6a746029e98b36d_ChocoUp.svg"
            width="160"
          />
          <p>Asia's largest revenue based financing platform</p>
          <Stack spacing={1} direction="row">
            <a href="https://www.facebook.com/getchocoup/">
              <img src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c3297ff49ba2a18b2c30_Facebook_icon_(black)%201.svg" />
            </a>
            <a href="https://www.instagram.com/getchocoup/">
              <img src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c329e7294df521c70262_Linkedin_circle%201.svg" />
            </a>
          </Stack>
        </Stack>
        <Grid container>
          <Grid item sm={4} md={3} mb={2}>
            <Typography variant="h6" mb={2}>
              Company
            </Typography>
            <Stack spacing={0.5}>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} md={3}>
            <Typography variant="h6" mb={2}>
              Resources
            </Typography>
            <Stack spacing={0.5}>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} md={3}>
            <Typography variant="h6" mb={2}>
              Success stories
            </Typography>
            <Stack spacing={0.5}>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} md={3}>
            <Typography variant="h6" mb={2}>
              Support
            </Typography>
            <Stack spacing={0.5}>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
            </Stack>
          </Grid>
          <Grid item sm={4} md={3}>
            <Typography variant="h6" mb={2}>
              Legal
            </Typography>
            <Stack spacing={0.5}>
              <Typography>Something</Typography>
              <Typography>Something</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Typography textAlign={"center"}>
        © Copyright 2023 Choco Up. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
