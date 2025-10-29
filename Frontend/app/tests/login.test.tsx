
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Login } from "../components/login";
import { vi } from "vitest"


//Test 1 renders Login title, inputs, and button

test("renders Login title, inputs, and button", () => {
  // RENDER the component
  render(<Login />);

  //  elements expected to see
 
  expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();          // email input
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();      // password input
  expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument(); // button

});


// Test 2: posts typed credentials to /users/login
test("triggers fetch to /users/login after form input", async () => {
  // mock fetch so no real server is called
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: vi.fn().mockResolvedValue({ error: "Missing fields" }),
  } as unknown as Response);

  // 1) Render component
  render(<Login />);

  // 2) Type like a real user
  const user = userEvent.setup();
  await user.type(screen.getByPlaceholderText("Email"), "a@b.com");
  await user.type(screen.getByPlaceholderText("Password"), "secret");

  // 3) Click the Login button
  await user.click(screen.getByRole("button", { name: /login/i }));

  // 4) Verify fetch was called once with the correct URL and options
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith("http://localhost:5000/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "a@b.com", password: "secret" }),
    credentials: "include",
  });
});


