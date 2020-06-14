import React from "react";
import { shallow } from "enzyme";

import {
    createBaseComponent,
    px,
    percent,
    vh,
    vw,
    multiplePx,
    boxShadow,
    border,
} from "@atomize/component";

describe("testing createBaseComponent", () => {
    it("should create a component and set the style properly.", () => {
        const Text = createBaseComponent("p")`
            color: red;
        `;

        const wrapper = shallow(<Text $fontSize={px(18)}>Hello World</Text>);
    });
});

describe("testing style helper functions", () => {
    test("px", () => {
        expect(px(18)).toStrictEqual("18px");
    });

    test("percent", () => {
        expect(percent(99)).toStrictEqual("99%");
    });

    test("vh", () => {
        expect(vh(45)).toStrictEqual("45vh");
    });

    test("vw", () => {
        expect(vw(20)).toStrictEqual("20vw");
    });

    test("multiplePx", () => {
        expect(multiplePx(1, 2, 3, 4, 5)).toEqual("1px 2px 3px 4px 5px");
    });

    test("boxShadow", () => {
        expect(boxShadow(1, 2, 3, "rgba(0,0,0,0.1)")).toStrictEqual(
            "1px 2px 3px rgba(0,0,0,0.1)"
        );
    });

    test("border", () => {
        expect(border(2, "solid", "#000000")).toStrictEqual(
            "2px solid #000000"
        );
    });
});
