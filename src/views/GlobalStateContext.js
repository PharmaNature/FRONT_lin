import React, { createContext, useContext, useState } from 'react';

// Créez un contexte
const GlobalStateContext = createContext();

// Créez un composant fournisseur pour encapsuler votre état global
export const GlobalStateProvider = ({ children }) => {
    const [globalVariable, setGlobalVariable] = useState("FRANÇAIS");

    return (
        <GlobalStateContext.Provider value={{ globalVariable, setGlobalVariable }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Utilisez un hook pour accéder à la variable globale et à la fonction pour la mettre à jour
export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState doit être utilisé à l'intérieur de GlobalStateProvider");
    }
    return context;
};
