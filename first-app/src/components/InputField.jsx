const InputField = ({ value, onChange, placeholder }) => {
    return (
        <input 
            type="number"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default InputField;