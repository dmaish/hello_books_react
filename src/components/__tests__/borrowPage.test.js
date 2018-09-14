import React from "react";
import {shallow, mount} from "enzyme";
import BorrowPage from "../borrowPage";

describe("borrow page renders", () => {
    const component = shallow(<BorrowPage/>)
    it("navbar renders", () => {  
        expect(component.find("nav.navbar").exists()).toBe(true)
    })
    it("row renders", () => {
        expect(component.find("div.row").exists()).toBe(true)
    })
})

