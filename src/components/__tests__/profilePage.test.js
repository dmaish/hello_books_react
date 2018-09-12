import React from "react";
import {shallow, mount} from "enzyme";
import ProfilePage from "../profilePage";

describe(" user profile page", () => {
    it("renders avatar", () => {
            expect(shallow(<ProfilePage/>).find("img.avatar").exists()).toBe(true);
    })
    it("renders tab", () => {
        expect(shallow(<ProfilePage/>).find("div.tab-content").exists()).toBe(true);
    })
    it("renders col div", () => {
        expect(shallow(<ProfilePage/>).find("div.col-md-9").exists()).toBe(true);
    })
})