import { Login } from "../login/login";
import React from "react";


export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function login() {
  return <Login />;
}
