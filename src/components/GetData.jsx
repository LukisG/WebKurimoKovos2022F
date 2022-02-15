import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { Image, Card, Row, Button } from 'antd';
import { GlobalData } from './Context'
import "./GetData.css"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, set } from "firebase/database";
import { setDoc, addDoc } from "firebase/firestore";
import { Form, DatePicker } from 'antd';
// import firestore from "./firestore";
const { Meta } = Card;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

//firebase config----------------------------------------------------------------


const firebaseConfig = {
    apiKey: "AIzaSyAUeC33qxsQRmp1eDLVwE_b6mKJtlB-ICE",
    authDomain: "webkurimokovos2022-f.firebaseapp.com",
    projectId: "webkurimokovos2022-f",
    storageBucket: "webkurimokovos2022-f.appspot.com",
    messagingSenderId: "331618773085",
    appId: "1:331618773085:web:9b442a02aab0381f2885b4"
};


//Main component-------------------------------------------
const GetData = () => {
    const Global = useContext(GlobalData)
    const [apidata, setApiData] = useState([])
    const [tempval, setTempval] = useState("")
    useEffect(() => {
        GetAllData();
    }, []);
    const GetAllData = () => {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=63hccB90lLfe6XsLonb0JB5PejjDZ4q9YJYybUtn`)
            .then(res => {
                const dataset = res.data;
                setApiData(dataset.photos);
                Global.data = dataset.photos
                // console.log(dataset.photos.map(item => {return item.camera.name}));
                // console.log(Global.data)
            })
    }
    //------------------------------------------------------------------------------
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    async function getCities(db) {
        const citiesCol = collection(db, 'IMG');
        const datasnapshot = await getDocs(citiesCol);
        const filtereddata = datasnapshot.docs.map(doc => doc.data());
        console.log(filtereddata)
    }
    function writedata(img) {
        console.log(tempval)
        const docRef = addDoc(collection(db, "IMG"), {
            image: tempval,
        });
        console.log("Document written with ID: ", docRef.id);
        // const databases = firebase.firestore();


        // set(ref('users/' + index),{
        //     img: img,
        // });
        db.collection("IMG")
            .doc(img)
            .set({
                image: img,
            })
            .then(function () {
                console.log("Value successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing Value: ", error);
            });
    }
    const handlegroup = (item) => {
        // console.log(item.camera.id);
        // const newList = apidata.filter((item) => item.id === apidata.camera.id);
        // const newCart = [...apidata];
        // let photo = newCart.find(
        //     (localval) => item.id === localval.camera.id
        // )
        // console.log(photo)
        // setProduct(newList);
    }
    const savetodatabase = (index) => {
        console.log(apidata[index].img_src);
        getCities(db);
        setTempval(apidata[index].img_src)
        writedata(apidata[index].img_src);
        // const groceriesColRef = collection(db, 'IMG')
        // return addDoc(groceriesColRef, {
        //         created: serverTimestamp(),
        //         image: apidata[index].img_src,
        //     });
    }
    //form---------------------------------------------
    const onFinish = (fieldsValue: any) => { //<< NE ERRORAS
        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker'];
        const rangeTimeValue = fieldsValue['range-time-picker'];
        const values = {
            ...fieldsValue,
            'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        };
        console.log('Received values of form: ', values);
        //

        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${values["date-picker"]}&api_key=63hccB90lLfe6XsLonb0JB5PejjDZ4q9YJYybUtn`)
            .then(res => {
                const dataset = res.data;
                setApiData(dataset.photos);
                Global.data = dataset.photos
                // console.log(dataset.photos.map(item => {return item.camera.name}));
                console.log(dataset.photos)
                apidata ? alert('No data found on this date might be false alert sorry!') : console.log("yes")
            })
            

    };
    //--------------------------------------------
    return (
        <>
            <h1>curiosity</h1>
            <h4>No loading animation sorry! Please wait!</h4>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item name="date-picker" label="Filter by date">
                    <DatePicker />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        OK
        </Button>
                </Form.Item>
            </Form>
            <Row>
                {apidata.map((item, index) => {
                    // handlegroup(item);
                    return <div key={index} span={6} className="site-card-wrapper" style={gridStyle} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 250px)" }}><Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<Image width={200} src={item.img_src} />}
                        extra={<Button type="primary" onClick={() => savetodatabase(index)}>Save Photo</Button>}
                    >
                        <Meta title={"Camera name: " + item.camera.name} description={"Landing date: " + item.rover.landing_date + ", launch date" + item.rover.launch_date} />

                    </Card>
                    </div>
                })}
            </Row>
        </>
    )
}

export default GetData
