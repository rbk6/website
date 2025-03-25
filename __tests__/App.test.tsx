import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App Component", () => {
  test("renders placeholder text", () => {
    render(<App />);
    expect(screen.queryByText("howdy planet")).not.toBeNull();
  });
});
