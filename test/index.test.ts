import { describe, expect, it } from "vitest";
import { hello } from "../src/index";

describe("hello", () => {
  it("defaults to World", () => {
    expect(hello()).toBe("Hello World from Pi!");
  });

  it("accepts a name", () => {
    expect(hello("Arc")).toBe("Hello Arc from Pi!");
  });
});
