import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from ".";

describe("Header Component", () => {
  it("should render header properly", () => {
    const headerComponent = render(<Header />);
    expect(headerComponent).not.toBeNull();

    const title = screen.getByText("gnunes.dev");
    expect(title).toBeInTheDocument();
  });
});
