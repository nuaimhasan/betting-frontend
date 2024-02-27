import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import useAuthCheck from "./hooks/useAuthCheck";

export default function App() {
  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
