import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <Stack pt={"10vh"} height={"100vh"} overflow={"hidden"}>
      <Button onClick={()=>navigate('ingredients')}>Ingredient</Button>
      <Button onClick={()=>navigate('tools')}>Tool</Button>
    </Stack>
  );
}

export default Menu;
