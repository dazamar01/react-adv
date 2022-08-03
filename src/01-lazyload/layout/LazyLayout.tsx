import React from "react"
import { Navigation } from "../router/Navigation";

export const LazyLayout = () => {
  return (
    <React.Fragment>
      <div>
        <h1>LazyLayout - Main page</h1>
        <Navigation />
      </div>
    </React.Fragment>
  )
}

export default LazyLayout;