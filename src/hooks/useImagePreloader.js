import { useState, useEffect } from 'react';

export function useImagePreloader(srcArray = []) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (srcArray.length === 0) {
            setLoaded(true);
            return;
        }
        let cancelled = false;  // evita actualizar estado si el componente ya se desmontó
        Promise.all(
            srcArray.map(src =>
                new Promise(resolve => {
                    const img = new Image();
                    img.src = src;
                    img.onload = img.onerror = () => {
                        if (!cancelled) resolve();
                    };
                })
            )
        ).then(() => {
            if (!cancelled) setLoaded(true);
        });
        return () => {
            cancelled = true;   // aquí indicamos que el componente ya no quiere más actualizaciones
        };
    }, [srcArray]);

    return loaded;
}
