import React, { useState, useEffect } from "react";

export function useFetch(url, key) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
            throw new Error("Network request failed");
            }

            const result = await response.json();

            // Verifica si la clave proporcionada existe en los datos
            if (key && result.hasOwnProperty(key)) {
            setData(result[key]);
            } else {
            setData(result);
            }

            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        };

        fetchData();
    }, [url, key]);

    return { data, loading, error };
}
