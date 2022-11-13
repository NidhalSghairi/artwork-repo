import React from "react";
import renderer from "react-test-renderer";
import ArtWorkMainImage from "../ArtWorkMainImage.component";

it("should renders correctly", () => {
  const props = {
    imageUrl:
      "https://images.saatchiart.com/saatchi/655989/art/8520384/7584428-BHHQLFRA-7.jpg",
  };
  const tree = renderer.create(<ArtWorkMainImage {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
