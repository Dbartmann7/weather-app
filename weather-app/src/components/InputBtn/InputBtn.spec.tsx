'use client'
import React, { useState } from "react"
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
    let val:string = "fail"
    render(<InputBtn buttonFn={() => {val = "Success"}} buttonLabel={"test"}/>)

    await user.click(screen.getByText("test"))

    expect(val).toBe("Success")
})