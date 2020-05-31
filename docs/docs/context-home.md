---
id: context-home
title: Atomize Context - Getting started & concepts
sidebar_label: Getting started & concepts
---

Atomize Context builds on the existing <ins>[React Context API](https://reactjs.org/docs/context.html)</ins> and adds a number of useful & modular functions that simplify development.

> The goal of this library is to provide a standardized & opinionated way to work with the React Context API in a consistent manner.

## Requirements

-   `react@^16.0.0`

## Installation

```text
npm install @atomize/context
```

```text
yarn install @atomize/context
```

## Concepts

### Creating Contexts and Providers

Atomize offers the possibility to **simultaneously create a provider** when creating a context. This offers the decisive advantage of ensuring uniformity in the creation of providers.

_Creating a context & provider from scratch:_

```jsx
import { createContext } from "@atomize/context";

const { Context, Provider } = createContext(
    { email: "test@atomize.com" },
    () => {
        if (condition) return { email: "conditionTrue@atomize.com" };

        return { email: "conditionFalse@atomize.com" };
    }
);

return <Provider>...</Provider>;
```

_Creating a provider using an existing context:_

```jsx
import { createProvider } from "@atomize/context";

const Provider = createProvider(context, () => {
    if (condition) return { email: "conditionTrue@atomize.com" };

    return { email: "conditionFalse@atomize.com" };
});

return <Provider>...</Provider>;
```

### Handling state in Providers

The more complex the structure of the context is, the more difficult it is to work with states in the provider.

Atomize uses the so called `ContextState` in order to provide a consistent experience. The `ContextState` is an object with the structure `{ value, setValue }`. As you can see, it fits perfectly for being used with `React.useState`, and that's exactly what it was made for.

_An example integration:_

```jsx
import React, { useState } from "react";
import {
    ContextState,
    createDefaultContextState,
    createContext,
} from "@atomize/context";

// Declaring types.
interface User {
    email: ContextState<string>;
    id: ContextState<number>;
}

// Creating default values.
const defaultValues: User = {
    email: createDefaultContextState(),
    id: createDefaultContextState(1),
};

// Creating context and provider.
const { Context, Provider } = createContext(defaultValues, () => {
    const [email, setEmail] = useState(defaultValues.email.value);
    const [id, setId] = useState(defaultValues.id.value);

    return {
        email: { value: email, setValue: setEmail },
        id: { value: id, setValue: setId },
    };
});

/* ... */

// In a consumer component:

return <p>Email: {consumer.email.value}</p>;
```
