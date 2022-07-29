import { db } from "../database";

export const selectLang = (idiom) => {
  const dblan = db.find((i) => i.language[0] === idiom);
  return dblan;
};
