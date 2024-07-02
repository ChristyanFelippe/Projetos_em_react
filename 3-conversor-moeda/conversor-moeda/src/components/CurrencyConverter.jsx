import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  const [rates, setRates] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/4fca1b1bde5046cfd7de7266/latest/USD"
      )
      .then((response) => {
        console.log(response.data.conversion_rates)
        setRates(response.data.conversion_rates);
      })
      .catch((error) => {
        console.log("ocorreu um erro", error);
      });
  }, []);

  return (
    <div className="converter">
      <h2>Conversor de moedas</h2>
      <input
        type="number"
        placeholder="Digite o valor a ser convertido"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <span>Selecione as moedas</span>
      <select>
      {rates &&
        Object.keys(rates).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
      ))}
      </select>
      <span>Para</span>
      <select>
        <option value="USD">USD</option>
      </select>
      <h3>
        {convertedAmount} {toCurrency}
      </h3>
      <p>
        {amount} {fromCurrency} vale {convertedAmount} {toCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
