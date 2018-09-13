import React from "react";
import {shallow, mount} from "enzyme";
import AddModal from "../../adminComponents/addModal";

describe("test book adding modal", () => {
    it("modal renders", () => {
        expect(shallow(<AddModal/>).find("div.modal-dialog").exists()).toBe(true)
    }),
    it("email field renders", () => {
        expect(shallow(<AddModal/>).find("#title").length).toEqual(1)
    }),
    it("password field renders", () => {
        expect(shallow(<AddModal/>).find("#category").length).toEqual(1)
    }),
    it("email field renders", () => {
        expect(shallow(<AddModal/>).find("#author").length).toEqual(1)
    }),
    it("password field renders", () => {
        expect(shallow(<AddModal/>).find("#url").length).toEqual(1)
    })
})