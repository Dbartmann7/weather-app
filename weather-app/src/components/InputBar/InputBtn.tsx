'use client'
import styles from '@/styles/components/InputBtn.module.css'
type InputBtnProps = {
    buttonFn:any,
    buttonLabel:string
}


const InputBtn = ({buttonFn, buttonLabel}:InputBtnProps) => {
    return (
        <button onClick={buttonFn} className={styles.inputBtn}>
            {buttonLabel}
        </button>
       
    )
}

export default InputBtn