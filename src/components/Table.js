import { useState, useEffect } from 'react';

const MakeRow = (props) => {
    const [shelfVal, FixShelf] = useState(0);
    const [cratesVal, FixCrates] = useState(0);
    const [total, FixTotal] = useState(0);
    const multiplier = props.num;

    

    const updateTotal = () => {
        if (cratesVal && shelfVal) {
            FixTotal((cratesVal*multiplier) + (shelfVal));
        } else if (shelfVal) {
            FixTotal(shelfVal);
        } else if (cratesVal) {
            FixTotal(cratesVal*multiplier);
        } else {
            FixTotal(0);
        }
    }

    const updateShelf = (e) => {
        if (e.target.value) {
            FixShelf(parseInt(e.target.value));
        } else {
            FixShelf(0);
        } 
    }
    const updateCrates = (e) => {
        if (e.target.value) {
            FixCrates(parseInt(e.target.value));
        } else {
            FixCrates(0);
        }
      
    }
    useEffect(() => {
        updateTotal();
    });

    return (
        <tr key={props.name} className={props.color}>
            <td className="milk-name">{props.name}</td>
            <td><input type="text" pattern="[0-9]*" value={shelfVal} onFocus={ () => FixShelf('')} onChange={ e => {updateShelf(e)}} /></td>
            <td><input type="text" pattern="[0-9]*" value={cratesVal} onFocus={ () => FixCrates('')} onChange={ e => {updateCrates(e)}} /></td>
            <td>{total}</td>
        </tr>
    )
} 

const milkArr = [['gal homo', 4, 'red'], ['gal 2%', 4, 'blue'], ['gal 1%', 4, 'yellow'], ['gal skim', 4, 'lblue'], ['hgl homo', 9, 'red'], ['hgl 2%', 9, 'blue'], ['hgl 1%', 9, 'yellow'], ['hgl skim', 9, 'lblue'], ['qt homo', 16, 'red'], ['qt 2%', 16, 'blue'], ['qt 1%', 16, 'yellow'], ['qt skim', 16, 'lblue'], ['gal choc', 4, 'brown'], ['gal choc 1%', 4, 'lbrown'], ['hgl choc 1%', 9, 'lbrown'], ['hgl choc', 9, 'brown'], ['hgl butter', 9, 'green'], ['qt butter 1%', 16, 'green'], ['qt choc 1%', 16, 'lbrown'], ['qt choc', 16, 'brown'], ['14oz homo', 20, 'red'], ['14oz 2%', 20, 'blue'], ['14oz choc 1%', 20, 'lbrown'], ['14oz choc', 20, 'brown'], ['qt whp crm', 20, 'tea'], ['lemon tea', 4, 'tea'], ['lemonade', 4, 'tea'], ['green tea', 4, 'tea'], ['tea cooler', 4, 'tea'], ['diet lemon', 4, 'tea'], ['diet peach', 4, 'tea'], ['diet decaf', 4, 'tea'], ['sweet tea', 4, 'tea'], ['diet green', 4, 'tea'], ['peach tea', 4, 'tea'], ['diet sweet', 4, 'tea'], ['rasp lemon', 4, 'tea'], ['rasp tea', 4, 'tea'], ['pt iced', 20, 'tea'], ['pt diet lemon', 20, 'tea'], ['pt peach', 20, 'tea'], ['pt sweet tea', 20, 'tea'], ['gal frt punch', 4, 'red'], ['gal org drink', 4, 'orange'], ['gal orange juice', 4, 'orange'], ['gal cal oj', 4, 'orange'], ['hgl orange juice', 16, 'orange'], ['hgl cal oj', 16, 'orange'], ['pt orange juice', 20, 'orange']];


export default function Table() {
    return (
        <div className="table-container">
            <table>
                <tbody>
                    <tr>
                        <th>Milk</th>
                        <th>Shelf</th>
                        <th>Crates</th>
                        <th>Total</th>
                    </tr>
                    {milkArr.map((milk) => MakeRow({'name': milk[0], 'num': milk[1], 'color': milk[2]}))}
                </tbody>
            </table>
        </div>
    )
}
