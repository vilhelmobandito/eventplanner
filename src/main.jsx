import { createRoot } from "react-dom/client";

import App from "./components/App.jsx";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

const courseTitel = "Frontend Develoopment";
const participants = 5;

root.render(

    <App />


  );
