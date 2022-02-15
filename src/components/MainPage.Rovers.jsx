import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { GlobalData } from './Context'
import { Card, Button } from 'antd';
import { Navigate } from "react-router-dom";
const MainPageRovers = () => {
    
    // const [apidata, setApiData] = useState([])
    // const Global = useContext(GlobalData)
    // // console.log(Global.data)
    // useEffect(() => {
    //     // GetAllData();
    //     getdata()
    // }, []);
    // async function getdata() {
       
    //     try {
    //         const res = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=63hccB90lLfe6XsLonb0JB5PejjDZ4q9YJYybUtn`);
    //         const dataset = res.data;
    //         setApiData(dataset.photos);
    //         Global.data = dataset.photos
    //         // console.log(dataset.photos);
           
    //         // console.log(Global.data)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // const GetAllData = () => {
    //      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=63hccB90lLfe6XsLonb0JB5PejjDZ4q9YJYybUtn`)
    //         .then(res => {
    //             const dataset = res.data;
    //             setApiData(dataset.photos);
    //             Global.data = dataset.photos
    //             // console.log(dataset.photos);
    //             console.log(Global.data)

    //         })
    // }
    return (
         <>
            <Card title="Curiosity" style={{ width: 300 }}>
                <p>Name: Curiosity {/*Global.data[0].rover.name*/}</p>
                <p>Landing date: 2012-08-06{/*Global.data[0].rover.landing_date*/}</p>
                <p>Launch date: 2011-11-26{/*Global.data[0].rover.launch_date*/}</p>
                <p>Status: active{/*Global.data[0].rover.status*/}</p>
                <p>Camera Count: 5</p>
                <p>Camera Names: FHAZ, RHAZ, MAST, CHEMCAM, NAVCAM</p>

                <a type="primary" href="/mars">Show Photo</a>
            </Card>
            {/* {apidata.map((item, index) => {
                // handlegroup(item);
                // console.log(item.rover.landing_date)
                // console.log(item)
                if(apidata[index].rover.name != item.rover.name){ 
                    console.log(item.rover);
                    console.log(Global.data.rover);
                return (
                    <Card title="Default size card" style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                )}else{
                    // console.log("no")
                    return <></>
                }
            })} */}
        </> 
    )
}

export default MainPageRovers
