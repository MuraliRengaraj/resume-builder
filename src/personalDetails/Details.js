import React, { useState } from 'react';
import Heading from "./Heading";
import WorkHistory from "./WorkHistory";
import Education from "./Education";
import Skills from "./Skills";
import Summary from "./Summary";
import "./details.css";

export default function Details(props) {
    const [tempNo, settempNo] = useState(0);
    
    const list = [
        {
            id: 1,
            name: "Heading",
            content: Heading,
            data:props.heading,
            setData:props.setHeading
        },
        {
            id: 2,
            name: "Work History",
            content: WorkHistory,
            data:props.workHistory,
            setData:props.setWorkHistory
        },
        {
            id: 3,
            name: "Education",
            content: Education,
            data:props.education,
            setData:props.setEducation
        },
        {
            id: 4,
            name: "Skills",
            content: Skills
        },
        {
            id: 5,
            name: "Summary",
            content: Summary
        }
    ];
    const index = list[tempNo];
    if (tempNo !==list.length-1 ) {
        var next = list[tempNo + 1];
        next = next.name;
    }
    if (tempNo !== 0) {
        var prev = list[tempNo - 1];
        prev = prev.name;
    }
    return (
        <div className='details'>
            <div className={index.name}>
                <index.content datas ={index.data} setDatas ={index.setData}/>
            </div>
            <div className='btns'>
                <button className={`${tempNo === 0 ? "disabled" : ""}`} onClick={() => settempNo(tempNo - 1)} >PREVIOUS : {`${prev}`}</button>
                <button className={`${tempNo ===list.length-1 ? "disabled" : ""}`} onClick={() => settempNo(tempNo + 1)}>NEXT : {`${next}`}</button>
            </div>
        </div>
    );
}
