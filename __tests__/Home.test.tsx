import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("Should have Docs text", () => {
  render(<Home />); //ARRANGE

  const myEl = screen.getByText("Docs"); //ACT

  expect(myEl).toBeInTheDocument(); //ASSERT
});

//Triple A (AAA) Pattern - Arrange, Act, Assert
// First we arrange, then we take action and then we assert and make sure
//that everything is as expected.
