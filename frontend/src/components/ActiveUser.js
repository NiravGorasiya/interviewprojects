import React, { useEffect, useState } from 'react'
import axios from "axios"

const ActiveUser = () => {
    const [data, setData] = useState([])

    const activeUserData = () => {
        axios.get("http://localhost:5000/activeuser")
            .then((res) => {
                setData(res?.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        activeUserData()
    }, [])

    return (
        <div>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Hour</th>
                        <th>Active user</th>
                    </tr>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{item?.hour}</td>
                                <td>{item?.hour}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ActiveUser