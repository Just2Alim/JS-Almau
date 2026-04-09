import { useState, useEffect } from "react";

export function useApi(apiFunction) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiFunction()
            .then(setData)
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}