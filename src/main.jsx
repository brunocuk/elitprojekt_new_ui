import { LocaleProvider } from "./config/localeContext.jsx"
import { ContentProvider } from "./config/contentContext.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocaleProvider>
    <ContentProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContentProvider>
    </LocaleProvider>
  </React.StrictMode>
);
