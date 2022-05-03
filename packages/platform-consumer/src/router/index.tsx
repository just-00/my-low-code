import React from "react"
import { Route, Routes } from "react-router"
import { HomeView } from "../pages/Home"

export const RouteConfig = () => {
    return (
    <Routes>
        <Route path="/">
          <Route index element={<HomeView />} />
        </Route>
      </Routes>
    )
}