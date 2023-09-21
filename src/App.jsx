import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

export default function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}
