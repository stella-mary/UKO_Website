import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from './components/SideBar/Sidebar'
import Topbar from "./components/TopBar/Topbar";
import Cart from './components/Ecommerce/Cart/Cart'
import Product from './components/Ecommerce/Product/Product'



function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">

          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="cart" element={<Cart />} />
              {/* <Route path="payment" element={<Payment />} />
              <Route path="bill" element={<Bill />} /> */}
              <Route path="product" element={<Product />} />
              {/* <Route path="shop1" element={<Shop1 />} />
              <Route path="checkout1" element={<CheckOut1 />} />
              <Route path="checkout2" element={<CheckOut2 />} />
              <Route path="Complete1" element={<PaymentComplete1 />} />
              <Route path="Complete2" element={<PaymentComplete2 />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;