import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMedicines.module.css";
import Tablet from "./Tablets/Tablet";
import AddMedicine from "./AddMedicine";

export const DUMMY_MedicineS = [
  {
    id: Math.random(),
    name: "Paracetamol",
    description: "reduce a high temperature (fever)",
    price: 22.99,
  },
  {
    id: Math.random(),
    name: "Cetirizine",
    description:
      "treat cold or allergy symptoms such as sneezing, itching, watery eyes",
    price: 16.5,
  },
  {
    id: Math.random(),
    name: "Saridon",
    description: "It usually used for headache relief",
    price: 12.99,
  },
  {
    id: Math.random(),
    name: "Dextromethorphan",
    description: "used to treat a cough.",
    price: 18.99,
  },
];

const AvailableMedicines = () => {
  const [Medicines, newMedicines] = useState(DUMMY_MedicineS);
  const addMedicines = (Medicine) => {
    newMedicines((prevMedicine) => {
      return [Medicine, ...prevMedicine];
    });
  };
  const Medicine = Medicines.map((Medicine) => (
    <Tablet
      id={Medicine.id}
      key={Medicine.id}
      name={Medicine.name}
      description={Medicine.description}
      price={Medicine.price}
    />
  ));

  return (
    <>
      <AddMedicine onAddMedicine={addMedicines} />
      <section className={classes.Medicines}>
        <Card>
          <ul>{Medicine}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMedicines;
