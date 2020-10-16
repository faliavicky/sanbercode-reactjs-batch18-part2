import React, { useState, createContext } from "react";

export const Context = createContext();

export const Provider = props => {
  const [data, setData] = useState([
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]);

  return (
    <Context.Provider value={[data, setData]}>
      {props.children}
    </Context.Provider>
  );
};
