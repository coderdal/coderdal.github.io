import Header from "@/components/Header.jsx";

import styles from "@/styles/app.module.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    //homepage-wildcard route
    path: "*",
    element: <div>home page!</div>,
  },
  {
    //homepage route
    path: "/projects",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <main className={styles.container}>
      <Header />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
