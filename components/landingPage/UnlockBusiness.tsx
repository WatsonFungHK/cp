import React from "react";
import { Typography, Stack, Grid } from "@mui/material";

const UnlockBusiness = () => {
  return (
    <Stack
      sx={{
        px: "80px",
      }}
      spacing={"16px"}
    >
      <Stack
        sx={{
          textAlign: "center",
        }}
        spacing={"16px"}
      >
        <Typography variant="h2" component={"span"}>
          Unlock
          <Stack
            component={"span"}
            sx={{
              color: "#7352ff",
            }}
          >
            business growth
          </Stack>
        </Typography>
        <Typography variant="body1">
          Manage your cash flow and reach business milestones with accessible
          growth capital. It's e-commerce funding that's fast, flexible and
          founder-friendly.
        </Typography>
      </Stack>
      <img
        src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/64916d3a70e6f03c6d360e10_RBF_7-p-2000.webp"
        width="100%"
      />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <img
              src={
                "https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b72d5b5e4a2233dffead_icon.svg"
              }
              width={"36px"}
            />
            <Typography variant="body2">Purchase inventory</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <img
              src={
                "https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b72d5b5e4a2233dffead_icon.svg"
              }
              width={"36px"}
            />
            <Typography variant="body2">No collateral needed</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <img
              src={
                "https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b72d5b5e4a2233dffead_icon.svg"
              }
              width={"36px"}
            />
            <Typography variant="body2">Invest in ads and marketing</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <img
              src={
                "https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b72d5b5e4a2233dffead_icon.svg"
              }
              width={"36px"}
            />
            <Typography variant="body2">Simple, one-time flat fee</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <img
              src={
                "https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b72d5b5e4a2233dffead_icon.svg"
              }
              width={"36px"}
            />
            <Typography variant="body2">Expand into new markets</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <img
              src={
                "https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b72d5b5e4a2233dffead_icon.svg"
              }
              width={"36px"}
            />
            <Typography variant="body2">
              Use the funds the way you want
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default UnlockBusiness;
