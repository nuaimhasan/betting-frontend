import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import ToggleModalAdd from "./components/ToggleModalAdd/ToggleModalAdd";
import MobilebottomHeader from "./components/MobilebottomHeader/MobilebottomHeader";

export default function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <ToggleModalAdd />
      <MobilebottomHeader />
    </>
  );
}
