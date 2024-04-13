import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Dialog, Stack } from "@mui/material";
import CreateAssetForm from "../../components/forms/CreateAssetFrom";
import ActionAreaCardAssets from "../../components/commons/List assets";

function Tools(props) {
  const list = [
    {
      name: "Bàn ăn",
      pic: "/sdfhbs/sdfdshjb",
      quantity: "12",

      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Ghế",
      pic: "fvjnxf/fgbjkfnbd",
      quantity: "25",

      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Chén ăn",
      pic: "",
      quantity: "8",

      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Muỗng",
      pic: "",
      quantity: "5",

      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Thìa",
      pic: "",
      quantity: "35",

      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Đũa",
      pic: "",
      quantity: "65",

      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Dao",
      pic: "",
      quantity: "65",

      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Kéo",
      pic: "",
      quantity: "9",

      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Hũ gia vị",
      pic: "",
      quantity: "6",

      price: "100000",
      des: "",
      id: "123",
    },
    {
      name: "Nồi",
      pic: "",
      quantity: "19",

      price: "100000",
      des: "",
      id: "123",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <Stack direction={"row"} justifyContent={"end"}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          add
        </Button>
        <Dialog onClose={() => setOpen(false)} open={open}>
          <Box margin={"5%"}>
            <CreateAssetForm />
          </Box>
        </Dialog>
      </Stack>
      <ActionAreaCardAssets assets={list} />
    </>
  );
}

Tools.propTypes = {};

export default Tools;
