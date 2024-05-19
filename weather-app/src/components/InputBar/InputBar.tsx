'use client'
import { CSSProperties, useEffect, useState } from 'react'
import styles from '@/styles/components/InputBar.module.css'
import InputBtn from '../InputBtn/InputBtn'
type InputBarProps = {
    showRed?:boolean
    placeholder?:string,
    value:string | number,
    setValue: any,
    buttonFn:any,
    buttonLabel:string,
    errorMsg:string
}


const InputBar = ({placeholder, value, setValue, buttonFn, buttonLabel, showRed}:InputBarProps) => {
    return (
        <div className={styles.inputContainer}>
            <input
                style={showRed ? {'border': '2px solid red'}: {}}
                className={styles.inputBar}
                placeholder={placeholder}
                value={value}
                onChange={(e) => {setValue(e.target.value)}}        
            />
            <InputBtn buttonFn={buttonFn} buttonLabel={buttonLabel} />
        </div>
    )
}

export default InputBar