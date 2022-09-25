import UserPage, { getStaticProps, User } from "@/pages/motorpoint-users";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mockUsers: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
];

const mock = new MockAdapter(axios);

mock.onGet("https://jsonplaceholder.typicode.com/users").reply(200, mockUsers);

describe("UserPage", () => {
  it("should render a user page", () => {
    render(<UserPage users={mockUsers} />);

    const heading = screen.getByRole("heading", {
      name: /List of Motorpoint Users/i,
    });

    const button = screen.getByText("Home");

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should render list of motorpoint users", () => {
    render(<UserPage users={mockUsers} />);

    const id = screen.queryByText("UserID: 1");
    const name = screen.queryByText("Name: Leanne Graham");
    const email = screen.queryByText("Email: Sincere@april.biz");
    const zipcode = screen.queryByText("Zip code: 92998-3874");
    const city = screen.queryByText("City: Gwenborough");

    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(zipcode).toBeInTheDocument();
    expect(city).toBeInTheDocument();
  });

  it("should return users from getStaticProps", async () => {
    //@ts-ignore
    const { props } = await getStaticProps({});

    expect(props.users).toEqual(mockUsers);
  });

  it("should return an error page if users are do not exist", () => {
    render(<UserPage />);

    const errorMessage = screen.queryByText("This page could not be found.");

    expect(errorMessage).toBeInTheDocument();
  });
});
