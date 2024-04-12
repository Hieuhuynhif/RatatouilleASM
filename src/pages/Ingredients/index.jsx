import React, { useState } from "react";
import ActionAreaCard from "../../components/commons/List ingredient";
import { Box, Button, Dialog, Stack } from "@mui/material";
import CreateIngredientForm from "../../components/forms/CreateIngredientForm";
import dayjs from "dayjs";

function Ingredients(props) {
  const list = [
    {
      name: "Cá ngừ",
      pic: "/sdfhbs/sdfdshjb",
      quantity: "12",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Cá hồi",
      pic: "fvjnxf/fgbjkfnbd",
      quantity: "25",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Cá saba",
      pic: "",
      quantity: "8",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Cá lóc",
      pic: "",
      quantity: "5",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Cá Bống",
      pic: "",
      quantity: "35",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Thịt heo",
      pic: "",
      quantity: "65",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Thịt bò",
      pic: "",
      quantity: "65",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Thịt gà",
      pic: "",
      quantity: "9",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Thịt cừu",
      pic: "",
      quantity: "6",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Cua hoàng đế",
      pic: "",
      quantity: "19",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
  ];
  const [open, setOpen] = useState(false)
  return (
    <>
      <Stack direction={'row'} justifyContent={'end'}>
        <Button variant="contained" onClick={() => setOpen(true)}>add</Button>
        <Dialog onClose={() => setOpen(false)} open={open}>
          <Box margin={'5%'}>
            <CreateIngredientForm/>
          </Box>
        </Dialog>
      </Stack>
      <ActionAreaCard ingredients={list} />
    </>
  );
}

Ingredients.propTypes = {};

export default Ingredients;
