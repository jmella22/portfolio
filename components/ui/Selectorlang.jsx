//React
import React from "react";

//Next

import { useRouter } from "next/router";

//Other library

//Material UI
import { FormControl, Select, MenuItem } from "@mui/material";

//Personal

export const Selectorlang = () => {
  const router = useRouter();
  const onChangeLan = (e) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };

  return (
    <FormControl>
      <Select value={router.locale} onChange={onChangeLan}>
        <MenuItem value={"es"}>ES</MenuItem>
        <MenuItem value={"en"}>EN</MenuItem>
      </Select>
    </FormControl>
  );
};
