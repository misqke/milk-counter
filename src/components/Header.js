

export default function Header(props) {
    return (
        <div id='header'>
            <h1 id="title">Milk Counter 9000</h1>
            <div id="btn-container">
                <button onClick={props.countClick}>Counting</button>
                <button onDoubleClick={props.orderClick}>Ordering</button>
            </div>
        </div>
    );
}
