import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

//Triple A (AAA) Pattern - Arrange, Act, Assert
// First we arrange, then we take action and then we assert and make sure
//that everything is as expected.

describe("Home", () => {
  it("Should have Docs text", () => {
    render(<Home />); //ARRANGE

    const myEl = screen.getByText("Docs"); //ACT

    expect(myEl).toBeInTheDocument(); //ASSERT
  });

  it('Should contain the text "information"', () => {
    render(<Home />);
    const myEl = screen.getByText(/information/i);
    expect(myEl).toBeInTheDocument();
  });

  it("Should have a heading", () => {
    render(<Home />);
    const myEl = screen.getByRole("heading", {
      name: "Learn",
    });
    expect(myEl).toBeInTheDocument();
  });
});
