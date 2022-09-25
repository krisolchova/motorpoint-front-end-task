import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home", () => {
  it("should render the landing page", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Front-end Task with Next.js/i,
    });

    const button = screen.getByText("Check out available users");

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
