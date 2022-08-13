//React
import React from "react";

//Next
import { useRouter } from "next/router";

//Other library

//Material UI
import { FormControl, Select, MenuItem, CardMedia } from "@mui/material";

//Personal

export const Selectorlang = () => {
  const router = useRouter();
  const onChangeLan = (e) => {
    e.preventDefault();
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };

  return (
    <FormControl>
      <Select value={router.locale} onChange={onChangeLan}>
        <MenuItem value={"es"}>
          <CardMedia
            component={"img"}
            width={"50px"}
            image={"/Images/language/espanol30.png"}
            alt="español"
          />
        </MenuItem>
        <MenuItem value={"en"}>
          <CardMedia
            component={"img"}
            width={"50px"}
            image={"/Images/language/ingles30.png"}
            alt="español"
          />
        </MenuItem>
      </Select>
    </FormControl>
  );
};
