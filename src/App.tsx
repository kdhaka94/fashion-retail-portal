import { ProductThemes } from "@pages/ProductThemes";
import { ProductDetailsPage } from "@pages/ProductDetails";
import PrivateRoute from "@utils/PrivateRoute";
import PublicRoute from "@utils/PublicRoute";
import { ModalsContainer } from "@utils/zustand/ModalsContainer";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "./pages";

function App() {
  // TODO : Remove the sketchy login mechanism
  !Cookies.get("auth_token") &&
    Cookies.set(
      "auth_token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTc3ZDgzOTU3ODYyN2FhZDNlOWM5YyIsImlhdCI6MTY0NTcwNzE4MX0.wBhiGfT1-A3tsOGyQLCZSAHqCCUHbMNE1VtyClHxH7U"
    );
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
           <Route
            path="/product-theme"
            element={
              <PrivateRoute>
                <ProductThemes />
              </PrivateRoute>
            }
          />
           <Route
            path="/product-detail"
            element={
              <PrivateRoute>
                <ProductDetailsPage />
              </PrivateRoute>
            }
          />
           <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      <ModalsContainer />
    </>
  );
}

export default App;
