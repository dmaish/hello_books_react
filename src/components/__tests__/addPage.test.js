import React from "react";
import {shallow, mount} from "enzyme";
import AddPage from "../../adminComponents/addPage"

describe("addPage renders", () => {
    it("form renders", () => {
        const component = shallow(<AddPage/>)
        expect(component.find("div.row").exists()).toBe(true)
    })
})