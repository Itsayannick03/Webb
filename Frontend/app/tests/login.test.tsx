import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Login } from "../login/login";
import { vi } from "vitest"

test("renders Login title, inputs, and button", () => {
  // RENDER the component
  render(<Login />);

  //  elements expected to see
  expect(screen.getByText("Login")).toBeInTheDocument();                 // title
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();      // email input
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();   // password input
  expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument(); // button
});


//test 1 to se when fetch happens by creating a fake fetch so that wed dont need a real sever
test("triggers fetch to /users/login after form input", async () => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true, // optional but nice to include
    status: 200,
    json: vi.fn().mockResolvedValue({ error: "Missing fields" }),
  } as any);

  render (<Login/>); 
});

// test 2 for stimulationg typing + click and after that making the fetch call

//type like a real user here only needs email and password 
const user = userEvent.setup();
await user.type(screen.getByPlaceholderText("Email"), "abc@.com");
await user.type(screen.getByPlaceholderText("Password"), "secret"); 


//clicking the login button

await user.click(screen.getByRole("button", {name: /login/i}));  //means find the button whose label (accessible name) looks like ‘login’,  i is for ignoring case.














