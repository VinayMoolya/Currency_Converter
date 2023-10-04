import React, { useState } from "react";
import { createContext } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("🇮🇳 INR - India");
  const [toCurrency, setToCurrency] = useState("🇺🇸 USD - United States");
  const value = {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
