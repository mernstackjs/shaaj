import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id, name } = useParams();

  console.log(id, name);
  return (
    <div>
      Details
      <h1>Name : {name}</h1>
      <h1>ID : {id}</h1>
    </div>
  );
}
