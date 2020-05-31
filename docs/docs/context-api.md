---
id: context-api
title: "@atomize/context - API"
sidebar_label: API Reference
---

## Methods

---

### `createContext`

```tsx
createContext<T>(
    defaultValues: T,
    computeProviderValue: () => T
) => {
    Context: React.Context<T>;
    Provider: React.ComponentType;
};
```

Creates a Context and a Context.Provider.

<br><br>

### `createProvider`

```tsx
createProvider<T>(context: React.Context<T>, computeProviderValues: () => T) =>
    React.ComponentType;
```

Creates a Context.Provider based on an existing Context.

<br><br>

### `createDefaultContextState`

```tsx
createDefaultContextState<T>(
    defaultValue?: T
) => ContextState<T>;
```

Creates a <ins>[`ContextState`](#contextstatet)</ins> object.

<br><br>

## Types

---

### `ContextState<T>`

```tsx
type ContextState<T> = {
    value: T | undefined;
    setValue: React.Dispatch<React.SetStateAction<T | undefined>>;
};
```

A _ContextState_ includes the value of the current state and a method to change it. The `setValue` type matches the type of the `React.useState` setter.
