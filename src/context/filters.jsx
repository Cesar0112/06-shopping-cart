import { createContext, useState } from "react";

//1. Crear el contexto

export const FiltersContext = createContext();
//2. Crear el Provider, Proveer el contexto

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "smartphones",
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider
      value={{
        //Definir el estado inicial
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
