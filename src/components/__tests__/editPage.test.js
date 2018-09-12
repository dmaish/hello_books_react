import React from "react";
import {shallow} from "enzyme";
import EditPage from "../../adminComponents/editPage";

describe("test edit page renders", () => {
    const prop = {
        book:  {
            "id": "",
            "title": "",
            "author": "",
            "category": "",
            "url": "",
        }
}
    it("form renders", () => {
        expect(shallow(<EditPage location={prop}/>).find("form").exists()).toBe(true)
    }),
    it("email field renders", () => {
        expect(shallow(<EditPage location={prop}/>).find("#title").exists()).toBe(true)
    }),
    it("password field renders", () => {
        expect(shallow(<EditPage location={prop}/>).find("#category").exists()).toBe(true)
    }),
    it("email field renders", () => {
        expect(shallow(<EditPage location={prop}/>).find("#author").exists()).toBe(true)
    }),
    it("password field renders", () => {
        expect(shallow(<EditPage location={prop}/>).find("#url").exists()).toBe(true)
    })
})