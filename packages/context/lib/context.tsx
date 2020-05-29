import React, { createContext as reactCreateContext } from "react";

// --- STANDALONE TYPES ---

export type ContextStateObject<T> = {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
};

// --- METHODS ---

type AtomizeCreateContext = <T>(
    defaultValues: T,
    computeProviderValue: () => T
) => {
    Context: React.Context<T>;
    Provider: React.ComponentType;
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
) => ({ children }: { children: React.ReactNode }) => {
    const value = computeProviderValue();

    return <context.Provider value={value}>{children}</context.Provider>;
};

type AtomizeCreateEmptyStateObject = <T>(
    defaultValue: T
) => ContextStateObject<T>;

export const createEmptyStateObject: AtomizeCreateEmptyStateObject = (
    defaultValue
) => ({ value: defaultValue, setValue: () => {} });
