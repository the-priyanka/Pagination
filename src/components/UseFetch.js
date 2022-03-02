import React, { useEffect, useState } from "react";
import paginate from "./Utils";

const url =
  "https://api.github.com/users/john-smilga/followers?per_page=100";

const UseFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    paginate(data);
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};

export default UseFetch;
