import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "@fontsource/poppins";

import customTheme from "./customTheme";
import { SignUp } from "./pages/SignUp";
import { ExpenseCategories } from "./pages/ExpenseCategories";

export const App = () => (
    <React.StrictMode>
        <ChakraProvider theme={customTheme} resetCSS>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="expense-categories" element={<ExpenseCategories />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);
