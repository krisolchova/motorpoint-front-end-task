import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { GetStaticProps, NextPage } from "next";
import ErrorPage from "next/error";
import NextLink from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
  address: {
    zipcode: string;
    city: string;
  };
};

const UserPage: NextPage<{ users: User[] }> = (props) => {
  if (!props.users) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Box
      mb={2}
      mt={2}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NextLink href="/">
        <Button variant="contained">Home</Button>
      </NextLink>
      <Typography variant="h5" mt={2}>
        List of Motorpoint Users
      </Typography>
      <Box>
        {props.users.map((user) => {
          return (
            <Box key={user.id} mb={2} mt={2}>
              <Typography>UserID: {user.id}</Typography>
              <Typography>Name: {user.name}</Typography>
              <Typography>Email: {user.email}</Typography>
              <Typography>Zip code: {user.address.zipcode}</Typography>
              <Typography>City: {user.address.city}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/users");
  const users = await response.data;

  return { props: { users } };
};

export default UserPage;
