import React, {lazy} from "react"
import { useRoutes, Navigate } from "react-router-dom"
import Error from "../views/Error/Error"
import Home from "../views/Home/Home"
import Layout from "../views/Layout"
import Login from "../views/Login/Login"
import LazyLoad from "./utils/LazyLoad"

export const routeItems = [
  {
    path: "/", key:"/", label: "首页", element: <Navigate to="/login" />
  },
  {
    path: "/login", key:"login", label: "登录", element: <Login />,
  },
  {
    path: "/layout",
    label: "控制台",
    key: "layout",
    element: <Layout />,
    children: [
      { path: "home", key:"home", label: "首页", element: <Home /> },
      { path: "user", key:"user", label: "用户", element: LazyLoad(lazy(() => import("../views/User/User"))) },
    ]
  },
  {
    path: "*", key:"*", label: "404", element: <Error />, hidden: true
  },
]

const GetRoutes = () => {
  const routes = useRoutes(routeItems)

  return routes
}

export default GetRoutes