import React from "react";
import {shallow} from "enzyme";
import returnPage from "../returnBook";

describe("borrow page renders", () => {
    const component = shallow(<returnPage/>)
    it("navbar renders", () => {  
        expect(component.find("nav.navbar").exists()).toBe(true)
    })
    it("row renders", () => {
        expect(component.find("div.row").exists()).toBe(true)
    })
})
