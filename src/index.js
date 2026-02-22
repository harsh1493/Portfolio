import { createRoot } from "react-dom/client"
import React from "react"
import "./styles.css"
import App from "./components/App";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>)
