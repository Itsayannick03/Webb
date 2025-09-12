import type { Route } from "./+types/home";
import { Registration } from "../registration/registration";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function registration() {
  return <Registration />;
}


