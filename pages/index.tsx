import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h3" component="h2" mb={2} mt={2}>
        Front-end Task with Next.js
      </Typography>
      <Typography variant="h4" component="h2" mb={3} mt={2}>
        Static Site Generation (SSG) with `getStaticProps`
      </Typography>
      <Button
        variant="contained"
        onClick={() => router.push("/motorpoint-users")}
      >
        Check out available users
      </Button>
    </Box>
  );
};

export default Home;
