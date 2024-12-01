import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error/Error.jsx";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import { About } from "./Pages/Introduction/About/About.jsx";
import { Staff } from "./Pages/Introduction/Staff/Staff.jsx";
import TeachingMethod from "./Pages/Introduction/TeachingMethod/TeachingMethod.jsx";
import HighGradeStudents from "./Pages/Students/HighGradeStudents/HighGradeStudents.jsx";
import FeedBack from "./Pages/Students/FeedBack/FeedBack.jsx";
import MatGoc from "./Pages/Courses/MatGoc/MatGoc.jsx";
import CapToc from "./Pages/Courses/CapToc/CapToc.jsx";
import OneOnOne from "./Pages/Courses/OneOnOne/OneOnOne.jsx";
import Aim75 from "./Pages/Courses/Aim75/Aim75.jsx";
import Aim65 from "./Pages/Courses/Aim65/Aim65.jsx";
import Aim55 from "./Pages/Courses/Aim55/Aim55.jsx";
import Login from "./Pages/Login/Login.jsx";
import ProtectedRoute from "./Management/ProtectedRoute.jsx";
import Dashboard from "./Management/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "teaching-method",
        element: <TeachingMethod />,
      },
      {
        path: "high-grade-students",
        element: <HighGradeStudents />,
      },
      {
        path: "feedback",
        element: <FeedBack />,
      },
      {
        path: "mat-goc",
        element: <MatGoc />,
      },
      {
        path: "cap-toc",
        element: <CapToc />,
      },
      {
        path: "one-on-one",
        element: <OneOnOne />,
      },
      {
        path: "aim-7-5",
        element: <Aim75 />,
      },
      {
        path: "aim-6-5",
        element: <Aim65 />,
      },
      {
        path: "aim-5-5",
        element: <Aim55 />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
