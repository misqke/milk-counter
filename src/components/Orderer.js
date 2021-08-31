import { useState, useEffect } from 'react';


const Row = (props) => {
    const [crates, fixCrates] = useState(0);
    const [stacks, fixStacks] = useState(0);
    const [order, fixOrder] = useState(0);
    const multiplier = props.num
    const stackSize = 6;

    const handleCrates = (e) => {
        if (e.target.value) {
        fixCrates(parseFloat(e.target.value));
        } else {
            fixCrates(0);
        }
    }
    const handleStacks = (e) => {
        if (e.target.value) {
        fixStacks(parseFloat(e.target.value));
        } else {
            fixCrates(0);
        }
    }
    const handleOrder = () => {
        if (crates && stacks) {
            fixOrder(Math.floor((crates*multiplier) + (stacks*multiplier*stackSize)));
        } else if (crates) {
            fixOrder(Math.floor(crates*multiplier));
        } else if (stacks) {
            fixOrder(Math.floor(stacks*multiplier*stackSize));
        } else {
            fixOrder(0);
        }
    }
    useEffect(() => {
        handleOrder();
    });


    return (
        <tr className='tea'>
            <td>{props.name}</td>
            <td><input className='input' type="number" min='0' inputMode='decimal' onChange={handleCrates} onFocus={ () => fixCrates('')} value={crates} /></td>
            <td><input className='input' type="number" min='0' inputMode='decimal' onChange={handleStacks} onFocus={ () => fixStacks('')} value={stacks} /></td>
            <td className="total">{order}</td>
        </tr>
    )
}

const sizeArr = [['gallon', 4], ['half gal', 9], ['quart', 16], ['14oz/pint', 20]];


export default function Orderer() {
    return (
        <div id='orderer-container' className="table-container">
            <table>
                <tr className='t-header'>
                    <th>Size</th>
                    <th>Crates</th>
                    <th>Stacks</th>
                    <th>Order</th>
                </tr>
                {sizeArr.map((size) => Row({'name':size[0], 'num':size[1]}))}
            </table>
        </div>
    )
}