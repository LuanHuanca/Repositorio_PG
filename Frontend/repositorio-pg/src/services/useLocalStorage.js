import { useState } from "react";

// Función para obtener y establecer valores en localStorage
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      //recuperamos el elemento de la key que le pasamos  
      const item = window.localStorage.getItem(key);
      //vamos a devolvemor el key, y si no tenemos ningun item pues devolves el valor inicial
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
        //en el caso que haya error entonces devolvemos el initialvalue
    }
  });

  //
  const setValue = (value) => {
    try {
    //guardaremos en el setStoredValue 
      setStoredValue(value);
      //ponemos el key para que sea de cualquier valor, y su valor que pasamos, solo se puede guardar de tipo String, por eso lo convertimos con JSON.stringify
    //   window.localStorage.setItem(key, value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  //devolver el primer valor que tenemos guardado, y el segundo sera la forma de actualizar el localStorage
  return [storedValue, setValue];
}
