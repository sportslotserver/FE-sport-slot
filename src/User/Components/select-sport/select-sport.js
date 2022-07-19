import { useState } from "react"
import './select-sport.scss'

const SelectSport = ({ sports, setSport }) => {
    const [ activeSport, setActiveSport ] = useState(null)

    return (
        <div className='select-sport'>
            { sports?.map((sport, index) => {
                return <div 
                            className="sport-item"
                            onClick={() => {
                                setSport(sport)
                                setActiveSport(sport)
                            }} 
                            style={activeSport ? activeSport == sport ? { backgroundColor: 'green' } : { backgroundColor: 'white' } : { backgroundColor: 'white' }}
                            key={index}>{ sport }</div>
            }) }
        </div>
    )
}

export default SelectSport