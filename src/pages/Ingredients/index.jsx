import { Box, Button, Dialog, Stack } from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import axiosClient from "../../app/axiosClient.js";
import CreateIngredientForm from "../../components/forms/CreateIngredientForm";
import ListIngredient from "../../components/commons/ListIngredient/index.jsx";

function Ingredients(props) {
  const [ingredients, setIngredient] = useState([])
  const list = [
    {

      "pricePerUnit": 1,
      "description": "Crisp green lettuce leaves",
      "quantity": 50,
      "name": "Lettuce",
      "importDate": "2024-04-02",
      "expiredDate": "2024-04-10",
      "image": null
    },
    {
      name: "Cua hoàng đế",
      quantity: "19",
      exp_date: dayjs().format("YYYY-MM-DD"),
      imp_date: dayjs().format("YYYY-MM-DD"),
      price: "100000",
      des: "",
      id: "123",
    },
  ];
  const [open, setOpen] = useState(false)

  const getIngredients = async () => {
    const ingredients = await axiosClient.get('ingredients');
    setIngredient(ingredients.data)
  }

  useEffect(() => {
    getIngredients();
  }, [])


  return (
    <>
      <Stack direction={'row'} justifyContent={'end'}>
        <Button variant="contained" onClick={() => setOpen(true)}>add</Button>
        <Dialog onClose={() => setOpen(false)} open={open}>
          <Box margin={'5%'}>
            <CreateIngredientForm />
          </Box>
        </Dialog>
      </Stack>
      <ListIngredient ingredients={ingredients} />
    </>
  );
}

Ingredients.propTypes = {};

export default Ingredients;
