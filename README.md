<h1 align="center">
  <img src="assets/atomize_logo.png" height="300" width="300"/>
  <br/>Atomize
</h1>

<p align="center">
A collection of tiny, modular & type-safe libraries that enhance the default React workflow
</p>

## Packages

-   [@atomize/component](#atomizecomponent) - A toolkit for creating stylizable and extensible React components
-   [@atomize/context](#atomizecontext) - Enhanced React-Context management

-   (WIP) @atomize/redux

## Philosophy

_What?_

> The basic idea behind Atomize, as the name suggests, is to provide several **modular** toolkits to improve and simplify various workflows in React.

Some characteristics of each library:

-   modular
-   tiny size
-   completely type-safe

_Why?_

> [I](https://github.com/eykrehbein) started the project because I often had to create new abstract components and the boilerplate code got on my nerves. So I thought about how I can abstract my ideas and help other people as well.

# Documentation

## @atomize/component

_What?_

This library is a toolkit for creating stylizable and extensible React components. It is based on [styled-components](https://styled-components.com) and integrates [Framer Motion](https://www.framer.com/motion) for animations. Additionally, it integrates some [helper](#) functions that make styling easier.

_Getting started_

```
yarn add @atomize/component
```

```
npm i @atomize/component
```

### **API**

### Creating a "Base Component"

This is the core of @atomize/component. A base component is a plain styled-component including the integration of the features named above. Furthermore, it provides an additional property to style components inline.

_Usage_

```tsx
import { createBaseComponent, px, percent } from "@atomize/component";

const Button = createBaseComponent("button")`
  background-color: red;
`;

...

<Button animate={{ opacity: 1 }} s={{ marginTop: px(10), width: percent(100)}}>Click me!</Button>
```

### Helper Functions

Helper Functions are tiny functions that convert some arguments into a CSS string, e.g. `px(10)` into `"10px"`. Inspired by https://github.com/typestyle/csx

#### `px(value: number)`

Example

```js
px(10); // => `10px`
```

#### `percent(value: number)`

Example

```js
percent(100); // => `100%`
```

#### `vh(value: number)`

Example

```js
vh(100); // => `100vh`
```

#### `vw(value: number)`

Example

```js
vw(100); // => `100vw`
```

#### `multiplePx(...values: number[])`

Example

```js
multiplePx(1, 2, 3, 4); // => `1px 2px 3px 4px`
```

#### `boxShadow(offsetX: number, offsetY: number, blurRadius: number, color: string)`

Example

```js
boxShadow(1, 2, 3, "#000000"); // => `1px 2px 3px #000000`
```

#### `border(lineWidth: number, lineStyle: "solid" | "dotted" | ..., color: string)`

Example

```js
border(5, "solid", "#000000"); // => `5px solid #000000`
```

## @atomize/context

_What?_

This library builds on the existing React Context API and makes creating and working with contexts easier.

_Getting started_

```
yarn add @atomize/context
```

```
npm i @atomize/context
```

### **API**

### Creating Contexts and Providers

The library provides the possibility to **simultaneously create a provider** when creating a context. This offers the decisive advantage of ensuring uniformity in the creation of providers.

_Creating a context & provider from scratch:_

```tsx
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

```tsx
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

```tsx
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

<br>

### `createProvider`

```tsx
createProvider<T>(context: React.Context<T>, computeProviderValues: () => T) =>
    React.ComponentType;
```

Creates a Context.Provider based on an existing Context.

<br>

### `createDefaultContextState`

```tsx
createDefaultContextState<T>(
    defaultValue?: T
) => ContextState<T>;
```

Creates a <ins>[`ContextState`](#contextstatet)</ins> object.

<br>

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

# LICENSE

MIT
