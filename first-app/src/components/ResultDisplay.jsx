const ResultDisplay = ({ result }) => {
    return (
        <p>Result: {isNaN(result) ? "Enter numbers to the input fields" : result}</p>
    )
}

export default ResultDisplay;