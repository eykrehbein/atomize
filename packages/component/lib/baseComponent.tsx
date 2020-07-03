import styled, { StyledComponent } from "styled-components";
import { StandardProperties } from "./types";
import { Brand } from "utility-types";
import { motion, MotionProps } from "framer-motion";

export interface BaseComponentStyles
    extends Omit<
        StandardProperties<string | 0 | Brand<string, "css-length-percentage">>,
        "$alignItems" | "$justifyContent"
    > {
    $align?: StandardProperties["$alignItems"];
    $ff?: StandardProperties["$fontFamily"];
    $justify?: StandardProperties["$justifyContent"];
}

export interface BaseComponentProps extends BaseComponentStyles {}

export const createBaseComponent = <T extends keyof JSX.IntrinsicElements>(
    target: T
) => <C extends object>(
    a: any,
    ...b: any
): StyledComponent<T, any, C & MotionProps & BaseComponentProps, never> => {
    /**
     * This function will be added to the values of the Tag Function in order to parse the `s` styled properties.
     */
    const parseFunc = (props: BaseComponentProps) => {
        let parsedString = "";

        if (!props) {
            return "";
        }

        for (const key of Object.keys(props)) {
            if (!key.startsWith("$")) {
                continue;
            }

            switch (key) {
                case "$align":
                    parsedString += `align-items: ${props[key]}; \n`;
                    break;

                case "$justify":
                    parsedString += `justify-content: ${props[key]}; \n`;
                    break;

                case "$ff":
                    parsedString += `font-family: ${props[key]}; \n`;
                    break;

                default:
                    parsedString += `${key
                        .substr(1)
                        .replace(
                            /([A-Z])/g,
                            (g) => `-${g[0].toLowerCase()}`
                        )}: ${props[key]};\n`;
            }
        }

        return parsedString;
    };

    const values = [...b, ";", parseFunc];

    // @ts-ignore
    return styled(motion[target])(a, values);
};
