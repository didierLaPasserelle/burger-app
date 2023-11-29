import React from "react";
import Button from "../../../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        className="submit-button"
        label={"Ajouter un nouveau produit à votre carte"}
        version="success"
      />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
