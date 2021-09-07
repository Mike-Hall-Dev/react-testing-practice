import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
    render(<Card />);
});

it("first snapshot test", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot()
})
