import React from "react";
import { Grid, TextField, Autocomplete } from "@mui/material";
import UseAxios from "../Hooks/UseAxios";
const SelectCountry = ({ value, setValue, label }) => {
  const [data] = UseAxios("https://restcountries.com/v3.1/all");

  const dataFiltered = data.filter((item) => "currencies" in item);

  const dataCountries = dataFiltered.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });
  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={value}
        disableClearable
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={dataCountries}
        fullWidth
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCountry;
