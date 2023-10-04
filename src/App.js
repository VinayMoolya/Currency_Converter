import "./App.css";
import InputAmount from "./components/InputAmount";
import { Container, Typography, Grid, Box } from "@mui/material";
import SelectCountry from "./components/SelectCountry";
import SwitchCurrency from "./components/SwitchCurrency";
import { useState } from "react";
import { useContext } from "react";
import { CurrencyContext } from "./context/CurrencyContext";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
  } = useContext(CurrencyContext);

  const Boxstyles = {
    backgroundColor: "#fdfdfd",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    marginTop: "10rem",
    borderRadius: 2,
    padding: "4rem 2rem",
  };
  const [resCurrency, setResCurrency] = useState(0);
  const codeFromCurrency = (currency) => {
    return currency.split(" ")[1];
  };
  useEffect(() => {
    if (amount) {
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: "fca_live_LpHb73WDy4GgJP6SeXLMOpHHnR2EtYfog70vWRSL",
          base_currency: codeFromCurrency(fromCurrency),
          currencies: codeFromCurrency(toCurrency),
        },
      })
        .then((response) => {
          setResCurrency(response.data.data[codeFromCurrency(toCurrency)]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [fromCurrency, toCurrency]);
  return (
    <Container maxWidth="md" sx={Boxstyles}>
      <Typography variant="h5" sx={{ margin: "2rem 0", textAlign: "center" }}>
        Stay Ahead with Accurate Conversions
      </Typography>
      <Grid container spacing={2}>
        <InputAmount value={amount} setValue={setAmount} />
        <SelectCountry
          value={fromCurrency}
          setValue={setFromCurrency}
          label="From"
        />
        <SwitchCurrency />
        <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>
      {amount && (
        <Box sx={{ marginTop: "2rem" }}>
          <Typography>
            {amount} {fromCurrency} ={" "}
          </Typography>
          <Typography>
            {resCurrency * amount} {toCurrency}
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default App;
