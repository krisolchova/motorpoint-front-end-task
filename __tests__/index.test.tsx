
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { usersListResponse } from "../mocks/usersListResponse";
import Home from "../pages";

const mock = new MockAdapter(axios);

mock
  .onGet("https://jsonplaceholder.typicode.com/users")
  .reply(200, usersListResponse);

describe("Home", () => {
  it("should render a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Front-end Task with Next.js/i,
    });

    const button = screen.getByText("Check out available users");

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should redirect /motorpoint-users page when user clicked on button", () => {
    render(<Home />);

    const button = screen.getByText("Check out available users");

    fireEvent.click(button);
  });
});
