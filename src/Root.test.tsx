import React from "react";
import renderer from "react-test-renderer";

import Root from "./Root";

describe("<Root />", () => {
  test("it has 1 child", () => {
    const tree = renderer.create(<Root />).toJSON();
    expect((tree as any).children.length).toBe(1);
  });
});
