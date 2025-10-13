import { Homepage } from "../Homepage/homepage";
import React from "react";


export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function homepage() {
  return <Homepage />;
}