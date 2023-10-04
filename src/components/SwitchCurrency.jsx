import React, { useContext } from "react";
import { Grid, Button } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { CurrencyContext } from "../context/CurrencyContext";
const SwitchCurrency = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  return (
    <Grid item xs={12} md="auto">
      <Button
        sx={{
          borderRadius: 1,
          height: "100%",
        }}
        onClick={handleSwitch}
      >
        <CompareArrowsIcon
          sx={{
            fontSize: 30,
          }}
        />
      </Button>
    </Grid>
  );
};

export default SwitchCurrency;
