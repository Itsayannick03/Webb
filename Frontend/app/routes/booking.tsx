import type { Route } from "./+types/home";
import { Booking } from "../booking/booking";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function booking() {
  return <Booking />;
}
