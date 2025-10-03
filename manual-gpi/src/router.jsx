import { createBrowserRouter } from "react-router-dom";
import ManualHome from "./ManualHome.jsx";
import ManualsTec from "./pages/ManualsTec.jsx";
import ManualsApr from "./pages/ManualsApr.jsx";


const router = createBrowserRouter([
  {
    path: "*",
    element: <ManualHome />,
  },
  {
    path: "/manuals",
    element: <ManualsTec />,
  },
  {
    path: "/apresentacoes",
    element: <ManualsApr />,

  }
]);

export default router;