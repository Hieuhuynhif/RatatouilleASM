import React from "react";
import ActionAreaCard from "../../components/commons/List ingredient";

function Ingredients(props) {
  const list = [
    {
      name: "Cá ngừ",
      pic: "/sdfhbs/sdfdshjb",
      quantity: "12",
      exp_date: "01/04/24",
      imp_date: "01/04/24",
      price: "100000",
    },
    {
      name: "Cá hồi",
      pic: "fvjnxf/fgbjkfnbd",
      quantity: "25",
      exp_date: "20/03/24",
      imp_date: "01/04/24",
      price: "100000",
    },
    {
      name: "Cá saba",
      pic: "",
      quantity: "8",
      exp_date: "02/04/24",
      imp_date: "01/04/24",
      price: "100000",
    },
    {
      name: "Cá lóc",
      pic: "",
      quantity: "5",
      exp_date: "10/02/24",
      imp_date: "01/04/24",
      price: "100000",
    },
    {
      name: "Cá Bống",
      pic: "",
      quantity: "35",
      exp_date: "07/02/24",
      imp_date: "01/04/24",
      price: "100000",
    },
    {
      name: "Thịt heo",
      pic: "",
      quantity: "65",
      exp_date: "10/02/24",
      imp_date: "01/04/24",
      price: "100000",
    },
    {
      name: "Thịt bò",
      pic: "",
      quantity: "65",
      exp_date: "10/02/24",
      imp_date: "01/04/24",
      price: "100000",
    },
    {
      name: "Thịt gà",
      pic: "",
      quantity: "9",
      exp_date: "09/03/24",
      imp_date: "01/04/24",
      price: "100000",
    },
    {
      name: "Thịt cừu",
      pic: "",
      quantity: "6",
      exp_date: "09/02/24",
      imp_date: "01/04/24",
      price: "100000",
    },
    {
      name: "Cua hoàng đế",
      pic: "",
      quantity: "19",
      exp_date: "20/03/24",
      imp_date: "01/04/24",
      price: "100000",
    },
  ];
  return (
    <>
      <ActionAreaCard ingredients={list} />
    </>
  );
}

Ingredients.propTypes = {};

export default Ingredients;
