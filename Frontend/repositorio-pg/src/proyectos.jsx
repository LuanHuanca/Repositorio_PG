import React, { useEffect, useState } from 'react';

const Proyectos = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Usar la dirección local de tu servidor
                const response = await fetch('http://localhost:3000/todoLosTitulos');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            {data.TodosLosTitulos.map((proyecto, index) => (
                <div key={index}>
                    <h2>{proyecto.titulo}</h2>
                    <p>{proyecto.resumen}</p>
                    {/* Otros datos del proyecto */}
                </div>
            ))}
        </div>
    );
};

export default Proyectos;
