import React, { useEffect, useState } from "react";
import { getAllData } from "../api";
import Main from "./main";

export default function Index() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllData()
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  }, []);

  return <Main data={data} loading={loading} />;
}
