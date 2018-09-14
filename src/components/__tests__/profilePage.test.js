import React from "react";
import {shallow, mount} from "enzyme";
import ProfilePage from "../profilePage";

describe(" user profile page", () => {
    it("renders avatar", () => {
            expect(shallow(<ProfilePage/>).find("img.avatar").exists()).toBe(true);
    })
    it("renders navigation bar", () => {
        expect(shallow(<ProfilePage/>).find("nav").exists()).toBe(true);
    })
    it("renders col div", () => {
        expect(shallow(<ProfilePage/>).find("div.row").exists()).toBe(true);
    })
})