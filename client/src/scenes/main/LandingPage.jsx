import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import heroImg from "../../assets/hero-img.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        backgroundColor: "#06283D",
        mt: '-8rem',
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* main page container */}
        <Box
          sx={{
            height: "100%",
            width: "100%",
            color: "#fff",
          }}
        >
          <Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="h2">Donation</Typography>
                <Typography variant="h1">Managment</Typography>

                <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
                  Streamlined Donation Management Made Simple
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color:  '#000',
                    "&:hover": {
                      backgroundColor: "#fff",
                    },
                  }}
                  onClick={() => navigate('/login')}
                >
                  GET STARTED
                </Button>
              </Box>

              <Box sx={{ maxHeight: "40vh", maxWidth: "25vw" }}>
                <img
                  src={heroImg}
                  alt="hero"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default LandingPage;