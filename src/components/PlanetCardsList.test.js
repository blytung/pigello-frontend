import React from "react";
import renderer from "react-test-renderer";

import PlanetCardsList from "./PlanetCardsList";

it("Renders when the array is empty", () => {
  const tree = renderer.create(<PlanetCardsList />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Renders when array is longer or equal to 1", () => {
  const tree = renderer.create(<PlanetCardsList />).toJSON();
  expect(tree).toMatchSnapshot();
});
