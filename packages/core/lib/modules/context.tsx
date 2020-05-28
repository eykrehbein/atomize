import React, { createContext as reactCreateContext } from "react";

export interface AtomizeContextModule {
    createContext: AtomizeCreateContext;
}

export type AtomizeCreateContext = <T>(
    defaultValues: T,
    computeProviderValues?: () => T
) => {
    Context: React.Context<T>;
    Provider: React.ComponentType | null;
};

export const createContext: AtomizeCreateContext = (
    defaultValues,
    computeProviderValues
) => {
    const Context = reactCreateContext(defaultValues);

    if (!computeProviderValues) {
        return { Context, Provider: null };
    }

    const Provider = ({ children }: { children: React.ReactNode }) => {
        const values = computeProviderValues();

        return <Context.Provider value={values}>{children}</Context.Provider>;
    };

    return { Context, Provider };
};
