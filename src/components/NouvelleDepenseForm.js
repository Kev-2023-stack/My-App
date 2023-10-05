// NouvelleDepenseForm.js
import React, { useState } from 'react';

function NouvelleDepenseForm({ onAddDepense }) {
    const [titel, setTitel] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState(""); // Zustand für Fehlermeldung

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

        if (!titel || !date || !amount) {
            setError("Bitte füllen Sie alle Felder aus.");
            return;
        }

        // Neues Ausgabenelement erstellen
        const newDepense = {
            titel,
            date,
            amount
        };

        // Ausgabenelement zur Liste hinzufügen
        onAddDepense(newDepense);

        // Formular zurücksetzen
        setTitel("");
        setDate("");
        setAmount("");
        setError("");
    }

    return (
        <div>
            <form onSubmit={speichern}>
                <label>
                    Titel: <input name="titel" onChange={changeTitel} value={titel} />
                </label>
                <label>
                    Date: <input name="date" onChange={changeDate} value={date} />
                </label>
                <label>
                    Amount: <input name="amount" onChange={changeAmount} value={amount} />
                </label>
                <button type="submit">Speichern</button>
            </form>
            {error && <div className="error-message">{error}</div>} {/* Anzeige der Fehlermeldung */}
        </div>
    );
}

export default NouvelleDepenseForm;
