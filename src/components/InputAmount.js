import React from "react";
import { Grid, TextField, InputAdornment } from "@mui/material";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
const InputAmount = () => {
  const { amount, setAmount } = useContext(CurrencyContext);
  return (
    <Grid item xs={12} md>
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmount;
