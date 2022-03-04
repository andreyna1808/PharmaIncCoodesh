import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  const goPatients = () => {
    navigate('/list-patients')
  }

  return (
    <div>
      <h1>Sou a Home</h1>

      <button onClick={goPatients}>Ver pacientes</button>

    </div>
  )
}
