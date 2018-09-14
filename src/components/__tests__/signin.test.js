import React from "react";
import { shallow } from "enzyme";
import SignIn from "../signin";

describe("My signIn component", () => {
	it("should render correctly in \"debug\" mode", () => {
		const wrapper = shallow(<SignIn/>)
        expect(wrapper).toMatchSnapshot()
    })
})

//make our assertion that form in component is being rendered
// make sure the inputs on the signin form also render correctly
describe("Sigin component renders well", () => {
	it("form renders", () => {
		expect(shallow(<SignIn/>).find("form.signInForm").exists()).toBe(true)
	}),
	it("email field renders", () => {
		expect(shallow(<SignIn/>).find("#loginEmail").length).toEqual(1)
	}),
	it("password field renders", () => {
		expect(shallow(<SignIn/>).find("#loginPassword").length).toEqual(1)
	})
})

