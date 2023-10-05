import * as React from 'react';
import './DepenseItem.css'
import BasicButtons from './BasicButtons';
import Date from './Date';
import NouvelleDepenseForm from './NouvelleDepenseForm';


function DepenseItem({ date, titel, amount }) {

    //const titel_ = "assurance";
    //const amount_ = 105;
    // <Date date=date >

    return (<>
        <Date date={date}></Date>
        <div> {titel}</div>
        <div>{amount}</div>

    </>)
}
{/* function DepenseItem(props) {
    //const date = new Date(2023,8,24);
    //const titel = "assurance";
    const amount = 105;    
    return (<>
    props
    <div>{props.date.toISOString()}</div>
    <div> {props.titel}</div>
    <div>${props.amount}</div>

    </>
    
    )
    */}
export default DepenseItem; 