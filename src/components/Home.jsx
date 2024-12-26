import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CardComponent from "./Card";
import getData from "../index";
import  {Grid}  from "@mui/material";

export default function Home() {
  const [state, setState] = useState([]);
  useEffect(() => {
    try {
      async function getFetch() {
        const { data } = await getData();
        setState(data);
      }
      getFetch();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Grid container spacing={3}>
        {state.map((item) => (
          <Grid item key={item.name} xs={12} sm={6} md={4} lg={3}>
            <CardComponent data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
