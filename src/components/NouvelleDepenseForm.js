// NouvelleDepenseForm.js
import React, { useState } from 'react';

function NouvelleDepenseForm({ onAddDepense }) {
    const [titel, setTitel] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");


    const changeTitel = (event) => {
        setTitel(event.target.value);
    }

    const changeDate = (event) => {
        setDate(event.target.value);
    }

    const changeAmount = (event) => {
        setAmount(event.target.value);
    }

    const speichern = (event) => {
        event.preventDefault();

        // Neues Ausgabenelement erstellen
        const newDepense = {
            id: Math.random().toString(),
            date: date,
            title: titel,
            amount: amount

        };

        // Ausgabenelement zur Liste hinzufügen
        onAddDepense(newDepense);


        // Formular zurücksetzen
        setTitel("");
        setDate("");
        setAmount("");
    }

    return (
        <div>
            <form onSubmit={speichern}>
                <label>
                    Titel: <input type="text" name="titel" onChange={changeTitel} value={titel} />
                </label>
                <label>
                    Date: <input type='date' name="date" onChange={changeDate} value={date} />
                </label>
                <label>
                    Amount: <input type='number' name="amount" onChange={changeAmount} value={amount} />
                </label>
                <button type="submit">Speichern</button>
            </form>
        </div>
    );
}

export default NouvelleDepenseForm;
