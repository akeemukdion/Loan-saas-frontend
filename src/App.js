import { Provider } from "react-redux";
import "./GlobalStyle.js";
import { GlobalStyle } from "./GlobalStyle.js";
import PageRoutes from "./routes/index";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <PageRoutes />
      </div>
    </Provider>
  );
}

export default App;
