import React, { createContext as reactCreateContext } from "react";

export interface AtomizeContextModule {
    createContext: AtomizeCreateContext;
}

type AtomizeCreateContext = <T>(
    defaultValues: T,
    computeProviderValue: () => T
) => {
    Context: React.Context<T>;
    Provider: React.ComponentType | null;
};

export const createContext: AtomizeCreateContext = (
    defaultValues,
    computeProviderValue
) => {
    const Context = reactCreateContext(defaultValues);

    const Provider = createProvider(Context, computeProviderValue);

    return { Context, Provider };
};

type AtomizeCreateProvider = <T>(
    context: React.Context<T>,
    computeProviderValues: () => T
) => React.ComponentType;

export const createProvider: AtomizeCreateProvider = (
    context,
    computeProviderValue
) => {
    return ({ children }: { children: React.ReactNode }) => {
        const value = computeProviderValue();

        return <context.Provider value={value}>{children}</context.Provider>;
    };
};
