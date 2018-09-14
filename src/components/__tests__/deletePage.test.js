import React from "react";
import {shallow} from "enzyme";
import DeletePage from "../../adminComponents/deletePage";

describe("delete page", () => {
    const prop = {
        book:  {
            "id": "",
            "title": "",
            "author": "",
            "category": "",
            "url": "",
        }
}
    it("table renders", () => {
        expect(shallow(<DeletePage location={prop}/>).find("table").exists()).toBe(true)
    }),
    it("container renders", () => {
        expect(shallow(<DeletePage location={prop}/>).find("div.container").exists()).toBe(true)
    })
})