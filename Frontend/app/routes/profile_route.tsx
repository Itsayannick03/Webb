import {Profile} from '../components/profile'
import React from "react"

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function profil()
{
    return <Profile />;
}