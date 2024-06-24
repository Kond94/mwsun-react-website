import React, { useContext } from "react";

import AddIcon from "@material-ui/icons/Add";
import { Context } from "../../hooks/Context";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import data from "../../hooks/data";
import useGlobalContext from "../../hooks/useGlobalContext";
import { useRouter } from "next/router";

export default function Total() {
  const [items] = useContext(Context);
  const { meals } = useGlobalContext();
  const router = useRouter();

  const totalPrice = Object.keys(items).reduce((acc, curr) => {
    const [group, item] = curr.split("-");

    const amount = items[curr] * meals.find((meal) => meal.id == item).price;
    return acc + amount;
  }, 0);

  return (
    <div className='total'>
      <span className='total-title'>Total:</span>
      <span className='total-price'>
        Mk {totalPrice.toLocaleString("en-us")}
      </span>
      <Fab variant='extended' size='small' color='primary' aria-label='add'>
        Send
      </Fab>
      <Fab
        variant='extended'
        size='small'
        color='primary'
        aria-label='add'
        onClick={() => router.push("/Catering")}
      >
        close
      </Fab>
    </div>
  );
}
