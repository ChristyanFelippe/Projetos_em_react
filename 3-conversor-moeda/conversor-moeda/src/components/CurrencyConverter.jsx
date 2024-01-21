import React from "react";
import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  return (
    <div className="converter">
      <h2>Conversor de moedas</h2>
      <input type="number" placeholder="Digite o valor a ser convertido"/>
      <span>Selecione as moedas</span>
      <select>
        <option value="BRL">BRL</option>
      </select>
      <span>Para</span>
      <select>
        <option value="USD">USD</option>
      </select>
      <h3>BRL USD</h3>
      <p>5 BRL é 1 USD</p>
    </div>
  );
};

export default CurrencyConverter;
