import { useState } from 'react'
import '../../Assets/Styles/CustomSelect/CustomSelect.scss'
import { CaretDownFill } from "react-bootstrap-icons"

function CustomSelect(props) {
    const { placeholder, onChange, value, options } = props

    const [openOptions, setOpenOptions] = useState(false)
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)

    const handleSelect = (index, value) => {
        onChange(value)
        setSelectedOptionIndex(index)
    }

    return (
        <div className="custom-select-container">
            <div className="custom-select-input-container">
                <span>{value !== null ? value : placeholder}</span>
                <span onClick={() => { setOpenOptions(!openOptions) }}><CaretDownFill /></span>
            </div>
            {openOptions &&
                <div className="custom-select-options-container">
                    {
                        options.length > 0 ?
                            options.map((option, index) => (
                                <div key={index} className={index === selectedOptionIndex ? "custom-select-option-selected" : "custom-select-option"} onClick={() => { handleSelect(index, option) }}>
                                    {option}
                                </div>
                            ))
                            :
                            <div className="custom-select-option">
                                Not found
                            </div>
                    }
                </div>
            }
        </div>
    )
}

export default CustomSelect