import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Login/Signin";
import Signup from "./Pages/Login/Signup";

function App() {
  let user = {};

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected routes for authenticated users */}
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            {/* Catch-all redirect to the home page */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            {/* Public routes for unauthenticated users */}
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            {/* Redirect any other route to the signin page */}
            <Route path="*" element={<Navigate to="/signin" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
