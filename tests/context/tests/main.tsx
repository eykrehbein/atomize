import React, {
    useState,
    useContext,
    createContext as reactCreateContext,
} from "react";
import { shallow } from "enzyme";

import {
    createContext,
    createDefaultContextState,
    ContextState,
    createProvider,
} from "@atomize/context";

interface TestContextProps {
    email: ContextState<string>;
    id: ContextState<number>;
}

describe("testing createDefaultContextState", () => {
    it("should have an undefined value when not providing an argument", () => {
        const { value, setValue } = createDefaultContextState();

        expect(value).toBeUndefined();
    });

    it("should not have an undefined value when providing an argument", () => {
        const { value, setValue } = createDefaultContextState<string>("Hello");

        expect(value).toStrictEqual("Hello");
    });
});

describe("testing createContext", () => {
    it("should create and render a basic context", () => {
        const { Context, Provider } = createContext<string>("Hello", () => {
            return "World";
        });

        const wrapper = shallow(
            <Provider>
                <Context.Consumer>{(value) => value}</Context.Consumer>
            </Provider>
        );

        expect(wrapper.html()).toStrictEqual("World");
    });

    it("should create and render an interactive context", () => {
        const { Context, Provider } = createContext<TestContextProps>(
            {
                email: createDefaultContextState(),
                id: createDefaultContextState(),
            },
            () => {
                const [email, setEmail] = useState("test@test.com");
                const [id, setId] = useState(123);

                return {
                    email: { value: email, setValue: setEmail },
                    id: { value: id, setValue: setId },
                };
            }
        );

        const TestComponent = () => {
            const consumer = useContext(Context);

            consumer.id.setValue(456);

            return <>{consumer.id.value}</>;
        };

        const wrapper = shallow(
            <Provider>
                <TestComponent />
            </Provider>
        );

        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});

describe("testing createProvider", () => {
    it("should create and render a provider", () => {
        const Context = reactCreateContext<TestContextProps>({
            email: createDefaultContextState(),
            id: createDefaultContextState(),
        });

        const Provider = createProvider<TestContextProps>(Context, () => {
            const [email, setEmail] = useState("test@test.com");
            const [id, setId] = useState(123);

            return {
                email: { value: email, setValue: setEmail },
                id: { value: id, setValue: setId },
            };
        });

        const wrapper = shallow(
            <Provider>
                <Context.Consumer>
                    {(value) => value.email.value}
                </Context.Consumer>
            </Provider>
        );

        expect(wrapper.html()).toStrictEqual("test@test.com");
    });
});
