import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [index("routes/home.tsx"), route("login", "routes/login.tsx"), route("registration", "routes/registration.tsx"), route("booking", "routes/booking.tsx"), route("profile", "routes/profile_route.tsx"), route("confirmation", "routes/confirmation.tsx")] satisfies RouteConfig;
