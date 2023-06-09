import React, { useState, useRef, useEffect } from 'react'

const Tail = () => {
    const [status, setStatus] = useState([]);
    const [selectedValue, setSelectedValue] = useState('')

    function changeStatus(e) {
        setSelectedValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let temp = [...status]
        let previous = temp[status?.length - 1]
        const lastValue = previous[previous?.length - 1]
        if (lastValue === selectedValue) {
            temp.push(selectedValue)
        } else {
            temp[status.length - 1] += selectedValue
        }
        setStatus(temp);
        setSelectedValue('')
    }

    return (
        <div style={{ marginTop: "50px" }}>
            <select value={selectedValue} onChange={changeStatus}>
                <option>selecte value</option>
                <option value="T">Tail</option>
                <option value="H">Head</option>
            </select>
            <button onClick={handleSubmit}>Submit</button><br />
            <table style={{ marginLeft: "50px" }}>
                <tbody>
                    {
                        status?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tail