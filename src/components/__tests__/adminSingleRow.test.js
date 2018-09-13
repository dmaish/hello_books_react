import React from "react";
import {shallow, mount} from "enzyme";
import {Router} from "react-router-dom";
import SingleRow from "../../adminComponents/singleRow";

describe("prop changes", () => {
    it(() => {
        const book = {
            "title": "title",
            "author": "author",
            "category": "category",
            "url": "url",
        }
        const component = <ResetPage/>
        component.setProps({book})
        expect(component.props("book.title")).toEqual("title")
    })
})

