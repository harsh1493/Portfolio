import ReactDOM from "react-dom"
import React from "react"
import { softShadows,OrbitControls } from "@react-three/drei"
import "./styles.css"
import App from "./components/App";


// Inject soft shadow shader
softShadows()

ReactDOM.render(
  <App/>,
  document.getElementById("root")
)
