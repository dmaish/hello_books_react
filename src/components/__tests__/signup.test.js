import React from "react";
import { shallow, mount, render} from "enzyme";
import SignUp from "../signup";

//make our assertion form in component is being rendered
// make sure the inputs on the signup form render correctly
describe("signup component form is present ", () => 
it("should render without errors", () => {
    expect(shallow(<SignUp/>).find("form.signUpForm").exists()).toBe(true)
}),

it("renders email input", () => {
    expect(shallow(<SignUp/>).find("#emailField").length).toEqual(1)
}),

it("renders username input", () => {
    expect(shallow(<SignUp/>).find("#usernameField").length).toEqual(1)
}),

it("renders password input", () => {
    expect(shallow(<SignUp/>).find("#passwordField").length).toEqual(1)
})
)


