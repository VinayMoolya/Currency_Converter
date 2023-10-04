import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const UseAxios = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);
  return [data];
};

export default UseAxios;
