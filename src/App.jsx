import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./hooks/useUser";
import { useProducts } from "./hooks/useProducts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { products, saveProduct } = useProducts();
  const [orderItems, setOrderItems] = useState([]);
  const handleSelect = (orderItem) => {
    setOrderItems([...orderItems, orderItem]);
  };

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/">
            <ProtectedRoute>
              <Home
                products={products}
                onSaveProduct={saveProduct}
                onSelectProduct={handleSelect}
                orderItems={orderItems}
              />
            </ProtectedRoute>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
