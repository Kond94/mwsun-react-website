import Input from "./Input";
import React from "react";

export default function Extras({ type, items }) {
  return (
    <section className="extras">
      <h2 className="extras-heading">{type}</h2>
      {items.map((item, index) => (
        <article className="menu-item" key={index}>
          <div className="extras-name">{item.name}</div>
          <Input type={type} name={item.name} index={index} />
          <strong className="extras-price">
            $ {item.price.toLocaleString("en-us")}
          </strong>
        </article>
      ))}
    </section>
  );
}
