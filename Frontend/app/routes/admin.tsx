import {  Admin } from "../components/admin";
import React from "react";


export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function admin() {
  return <Admin />;
}