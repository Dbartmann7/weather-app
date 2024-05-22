'use client'
import React from "react"
import InputBtn from "./InputBtn"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

it("check InputBtn renders", () => {
    render(<InputBtn buttonFn={undefined} buttonLabel={"test"}/>)
    const btn = screen.getByText("test")

    expect(btn).toBeInTheDocument()
})

it('test clickfn is called when InputBtn is clicked', async () => {
    const user = userEvent.setup()
    const testClickFn = jest.fn()
    render(<InputBtn buttonFn={testClickFn} buttonLabel={"test"}/>)

    await user.click(screen.getByText("test"))

    expect(testClickFn).toHaveBeenCalled()
})