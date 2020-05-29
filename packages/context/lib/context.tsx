import React, { createContext as reactCreateContext } from "react";

// --- STANDALONE TYPES ---

export type ContextState<T> = {
    value: T | undefined;
    setValue: React.Dispatch<React.SetStateAction<T | undefined>>;
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

type AtomizeCreateProvider = <T = unknown>(
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

type AtomizeCreateDefaultContextState = <T>(
    defaultValue?: T
) => ContextState<T>;

export const createDefaultContextState: AtomizeCreateDefaultContextState = (
    defaultValue
) => ({
    value: defaultValue,
    setValue: () => {},
});
