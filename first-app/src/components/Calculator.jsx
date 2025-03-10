import InputField from "./InputField";
import ResultDisplay from "./ResultDisplay";
import { useState } from "react";



const Calculator = () => {
    
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const sum = parseFloat(num1) + parseFloat(num2);

    const handleNum1Change = (event) => {
        const newValue = event.target.value;
        setNum1(newValue);
    }
    
/*     const handleNum2Change = (event) => {
        const newValue = event.target.value;
        setNum2(newValue);
    } */

    return (
        <div>
            <h3>Live sum calculator</h3>
            <InputField value={num1} placeholder="Enter first number" onChange={(handleNum1Change)} />
            <InputField value={num2} placeholder="Enter second number" onChange={(e) => setNum2(e.target.value)} />
            <ResultDisplay  result={sum}/>
        </div>
    )
}

export default Calculator;