import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import ShippingTracking from "../pages/ShippingTracking";
import store from "../redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <ShippingTracking />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
