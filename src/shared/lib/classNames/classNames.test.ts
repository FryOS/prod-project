import { classNames } from './classNames';


describe("classNames", () => {
    test("test only first param", () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("test additional class", () => {
        const expected = "someClass class1 class2";
        expect(classNames("someClass", {}, ["class1", "class2"]))
            .toBe(expected);
    });

    test("test with mods", () => {
        const expected = "someClass class1 class2 hovered";
        expect(classNames("someClass", {hovered: true}, ["class1", "class2"]))
            .toBe(expected);
    });

    test("test with mods false", () => {
        const expected = "someClass class1 class2 hovered";
        expect(classNames("someClass", 
            {hovered: true, scrollable: false}, 
            ["class1", "class2"]))
            .toBe(expected);
    });

    test("test with mods undefined", () => {
        const expected = "someClass class1 class2 hovered";
        expect(classNames("someClass", 
            {hovered: true, scrollable: undefined}, 
            ["class1", "class2"]))
            .toBe(expected);
    });

    test("test with mods", () => {
        const expected = "someClass class1 class2 hovered scrollable";
        expect(classNames("someClass", 
            {hovered: true, scrollable: true}, 
            ["class1", "class2"]))
            .toBe(expected);
    });
})