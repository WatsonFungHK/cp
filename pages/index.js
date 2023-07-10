import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutTheFold from "../components/landingPage/AboutTheFold";
import UnlockBusiness from "../components/landingPage/UnlockBusiness";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
      }}
    >
      <Header />
      <Box
        sx={{
          backgroundImage: `url(https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/641313aea9b46d2d4b83979b_Mesh%20gradient%201.svg),url(https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6bebdf7a7562fe6c2075d_Group%202358.svg)`,
          backgroundPosition: "100% 0,0 0",
          backgroundRepeat: "no-repeat,no-repeat",
          backgroundSize: "auto,auto",
          "> *": {
            padding: "0 40px",
          },
        }}
      >
        {/* <AboutTheFold /> */}
        <UnlockBusiness />
      </Box>
      <Footer />
    </Box>
  );
}
