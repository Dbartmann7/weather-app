import React, { useState } from "react"
import InputBar from "./InputBar"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const TestInputBar = ({placeholder}:{placeholder:string}) => {
    const [val, setVal] = useState<string>("")
    return(
        <>
            <InputBar value={val} setValue={setVal} buttonFn={undefined} buttonLabel={""} errorMsg={""} placeholder={placeholder}/>
        </>
    )
}

it("check input bar renders", () => {
    render(<TestInputBar placeholder={"test"}/>)
    const elem:HTMLElement = screen.getByPlaceholderText("test")

    expect(elem).toBeInTheDocument()
})

it("check typing to input elem works", async () => {

    render(<TestInputBar placeholder={"test"}/>)
    const inputElem:HTMLElement = screen.getByPlaceholderText("test")

    const user = userEvent.setup()
    await user.type(inputElem, "Success")
    expect(inputElem).toHaveValue("Success")
})
