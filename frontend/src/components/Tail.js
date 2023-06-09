import React, { useState, useRef, useEffect } from 'react'

const Tail = () => {
    const [status, setStatus] = useState([]);
    const [selectedValue, setSelectedValue] = useState('')
    const prevCountRef = useRef(selectedValue);

    useEffect(() => {
        prevCountRef.current = status
    }, [selectedValue])

    function changeStatus(e) {
        setSelectedValue(e.target.value)
    }

    console.log(selectedValue, prevCountRef.current[prevCountRef.current.length - 1]);
    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus([...status, selectedValue]);
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
                            if (prevCountRef.current[prevCountRef.current.length - 1] === selectedValue) {
                                return (
                                    <tr key={index}>
                                        <td>{item}</td>
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr key={index}>
                                        <td>{item}</td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tail