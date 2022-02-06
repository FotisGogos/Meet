import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import  Event  from "../Event"

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test("Renders summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("Renders location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("Renders date and timezone", () => {
    expect(EventWrapper.find(".start-date")).toHaveLength(1);
  });

  test("Renders show details button", () => {
    expect(EventWrapper.find(".show-details-btn")).toHaveLength(1);
  });

  test("event element is collapsed by default", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("clicking on show details button shows extra details", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".show-details-btn").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("clicking on hide details button hides extra details", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".hide-details-btn").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

});