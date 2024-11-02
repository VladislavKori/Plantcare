import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "@screens/home";
import CartPage from "@screens/cart";
import NotFoundPage from "@screens/not-found";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router; 