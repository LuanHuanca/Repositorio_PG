import React, { useState, useEffect } from "react";

export function useFetch(url, key) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => {
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((result) => {
            setData(result[key]);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
    }, [url, key]);

    return { data, loading, error };
}