import React from "react";
import { Field } from "formik";

import "../../styles/Decks.css";

import AddBoxTwoToneIcon from "@material-ui/icons/AddBoxTwoTone";
import IndeterminateCheckBoxTwoToneIcon from "@material-ui/icons/IndeterminateCheckBoxTwoTone";

export default function DeckField({ index, push, remove }) {
  return (
    <div key={index} className="addDeck-container">
      <Field
        name={`decks[${index}]`}
        className="addDeck-input"
        placeholder="deck name"
      />
      <AddBoxTwoToneIcon
        onClick={() => push("")}
        className="deckForm-button"
        style={{ fontSize: "13pt", marginLeft: "10px" }}
      />

      <IndeterminateCheckBoxTwoToneIcon
        onClick={() => remove(index)}
        className="deckForm-button"
        style={{ fontSize: "13pt" }}
      />
    </div>
  );
}
