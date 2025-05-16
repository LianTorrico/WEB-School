import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiRain, WiCloudy, WiSnow } from "react-icons/wi";

// Componente principale della Stazione Meteo
const StazioneMeteo = () => {
    const [citta, setCitta] = useState("Roma"); // Città predefinita
    const [meteo, setMeteo] = useState(null);
    const [caricamento, setCaricamento] = useState(false);


    const API_KEY = "1a34389f28b79e5972fe679b31b107ec";

    // Recupera il meteo della città all'avvio
    useEffect(() => {
        recuperaMeteo();
    }, []);

    // Funzione per ottenere i dati meteo
    const recuperaMeteo = async () => {
        if (!citta) return;
        setCaricamento(true);
        try {
            const risposta = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=${API_KEY}&units=metric&lang=it`
            );
            setMeteo(risposta.data);
        } catch (errore) {
            console.error("Errore nel recupero dei dati meteo:", errore);
        }
        setCaricamento(false);
    };

    // Funzione per selezionare l'icona meteo
    const getIconaMeteo = (condizione) => {
        switch (condizione) {
            case "Clear":
                return <WiDaySunny size={50} />;
            case "Rain":
                return <WiRain size={50} />;
            case "Clouds":
                return <WiCloudy size={50} />;
            case "Snow":
                return <WiSnow size={50} />;
            default:
                return <WiCloudy size={50} />;
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>?? Stazione Meteo</h1>

            {/* Input per la città */}
            <input
                type="text"
                value={citta}
                onChange={(e) => setCitta(e.target.value)}
                placeholder="Inserisci una città"
                style={{ padding: "5px", fontSize: "16px" }}
            />

            {/* Bottone per cercare il meteo */}
            <button onClick={recuperaMeteo} disabled={caricamento} style={{ marginLeft: "10px", padding: "5px 10px" }}>
                {caricamento ? "Caricamento..." : "Cerca"}
            </button>

            {/* Visualizzazione dati meteo */}
            {meteo && meteo.main && (
                <div style={{
                    marginTop: "20px", border: "1px solid gray",
                    padding: "20px", display: "inline-block"
                }}>
                    <h2>{meteo.name}</h2>
                    {getIconaMeteo(meteo.weather[0].main)}
                    <p>?? Temperatura: {meteo.main.temp}°C</p>
                    <p>?? Vento: {meteo.wind.speed} m/s</p>
                    <p>?? Condizione: {meteo.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default StazioneMeteo;