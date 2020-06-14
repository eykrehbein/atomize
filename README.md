<h1 align="center">
  <img src="assets/atomize_logo.png" height="300" width="300"/>
  <br/>Atomize
</h1>

<p align="center">
A collection of tiny, modular & type-safe libraries that enhance the default React workflow
</p>

## Packages

-   [@atomize/component](https://www.npmjs.com/package/@atomize/component) - A toolkit for creating stylizable and extensible React components
-   [@atomize/context](https://www.npmjs.com/package/@atomize/context) - Enhanced React-Context management

-   (WIP) @atomize/redux

## Docs

You can find a well structured documentation at [docs.atomize.xyz](https://docs.atomize.xyz)

## Examples (more can be found in the docs)

### Creating stylable and animatable components

```tsx
import { createBaseComponent, px, percent } from "@atomize/component";

const Button = createBaseComponent("button")`
  background-color: red;
`;

export const App = () => (
    <Button animate={{ width: percent(100) }} $color="red" $marginTop={px(20)}>
        Click
    </Button>
);
```

### Creating context and provider at the same time

```tsx
import { createContext } from "@atomize/context";

const { Context, Provider } = createContext(
    { email: "test@atomize.xyz" },
    () => {
        if (condition) return { email: "conditionTrue@atomize.xyz" };

        return { email: "conditionFalse@atomize.xyz" };
    }
);

// ---

const App = () => <Provider>Hello World</Provider>;
```

# LICENSE

MIT
