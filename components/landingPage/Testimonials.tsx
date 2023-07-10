import React, { useState, useEffect } from "react";
import { Typography, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  return response.json();
};

interface User {
  id: string;
  email: string;
  address: {
    address: string;
  };
}

const Testimonials = () => {
  const [data, setData] = useState<Array<User>>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const apiData = await fetchData("https://dummyjson.com/users?limit=6");
        setData(apiData.users);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);

  return (
    <Box
      sx={{
        paddingBottom: "48px",
      }}
    >
      <Typography variant="h5">Testimonials</Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {Array.isArray(data) &&
          data.map((user) => {
            return (
              <SwiperSlide key={user.id}>
                <Stack
                  sx={{
                    width: "100%",
                    height: "150px",
                    backgroundColor: "white",
                    padding: "16px",
                    boxShadow: "0 0 20px -7px rgba(0,0,0,.2)",
                    borderRadius: "8px",
                  }}
                >
                  <Typography variant="body1">{user.email}</Typography>
                  <Typography variant="body1">
                    {user.address.address}
                  </Typography>
                </Stack>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
