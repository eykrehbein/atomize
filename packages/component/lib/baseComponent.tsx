import styled, { StyledComponent } from "styled-components";
import { StandardProperties } from "csstype";
import { motion, MotionProps } from "framer-motion";

export interface BaseComponentStyles
    extends Omit<StandardProperties, "alignItems" | "justifyContent"> {
    align?: StandardProperties["alignItems"];
    ff?: StandardProperties["fontFamily"];
    justify?: StandardProperties["justifyContent"];
}

export interface BaseComponentProps {
    s?: BaseComponentStyles;
}

export const createBaseComponent = <T extends keyof JSX.IntrinsicElements>(
    target: T
) => <C extends object>(
    a: any,
    ...b: any
): StyledComponent<T, any, C & MotionProps & BaseComponentProps, never> => {
    /**
     * This function will be added to the values of the Tag Function in order to parse the `s` styled properties.
     */
    const parseFunc = ({ s }: BaseComponentProps) => {
        let str = "";

        if (!s) {
            return "";
        }

        for (const key of Object.keys(s)) {
            switch (key) {
                case "align":
                    str += `align-items: ${s[key]}; \n`;
                    break;

                case "justify":
                    str += `justify-content: ${s[key]}; \n`;
                    break;

                case "ff":
                    str += `font-family: ${s[key]}; \n`;
                    break;

                default:
                    str += `${key.replace(
                        /([A-Z])/g,
                        (g) => `-${g[0].toLowerCase()}`
                    )}: ${s[key]};\n`;
            }
        }

        return str;
    };

    const values = [...b, parseFunc];

    // @ts-ignore
    return styled(motion[target])(a, values);
};
