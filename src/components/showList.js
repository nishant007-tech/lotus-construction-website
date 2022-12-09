import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ShowList() {
 
    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let resData = await axios.get(`https://api.backendless.com/6D7483E2-8B99-207C-FFD3-7D11D5117600/A8F2BD9D-54EA-4660-A816-F8F23390A798/data/products`)
            console.log("resData is",resData);
            if (resData?.data?.length > 0) {
                setState(resData?.data)
            }
        }
        fetchData();
    }, [])

    return (
        <div className="Wrapper1">
                    <h2 id='headCard'>E-Market List</h2>
                    <div className="containerCard1">
                        {
                            state?.length > 0 ?
                                state.map(item => (
                                    <div key={item.objectId} className="card1">
                                        <p className="campaignBody" ><strong>Crop name:</strong> {item.cropname}</p>
                                        <p className="Count"><strong>Price:</strong> {item.price}</p>
                                        <p className="campaignBody" ><strong>Quantity:</strong> {item.quantity}</p>
                                        <p className="campaignBody" ><strong>Phone No.:</strong> {item.contact}</p>
                                        <p className="campaignBody" ><strong>Address:</strong> {item.address}</p>
                                    </div>
                                ))
                                :
                                <div>
                                    <p className="NoData">No product in the E-Market</p>
                                </div>
                        }
                    </div >
        </div >

    )
}

export default ShowList