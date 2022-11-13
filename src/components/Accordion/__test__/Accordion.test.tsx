import React from "react";
import Accordion from "../Accordion.component";
import renderer from "react-test-renderer";

it("should renders correctly", () => {
  const props = {
    title: "test",
    description: <h1> description </h1>,
  };
  const tree = renderer.create(<Accordion {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
