import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./hooks/auth";
import GlobalStyle from "./styles/global";

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;