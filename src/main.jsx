import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Cursos from "./routes/cursos";
import Cotacao from "./routes/cotacao";

const router = createBrowserRouter([
  {
    path: "/",
    //element: <div>Hello world!</div>
    element: <Root />,
    errorElement: <ErrorPage />,
    //inserir uma rota dentro da outra para aparecer o menu lateral
    //com as informações de contato
    //verificar outlet em root.jsx
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      },
      {
        path: "cursos/",
        element: <Cursos />,
        errorElement: <ErrorPage />
      },
      {
        path: "cotacao/",
        element: <Cotacao />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
