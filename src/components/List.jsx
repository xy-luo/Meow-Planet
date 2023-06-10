import "../css/List.css"

function List( {list, wrapperClassName="", itemClassName=""} ) {
    const items = list.map( (item) => <li className={`list-item ${itemClassName}`}>{item}</li>);
    return (
        <ul className={`list ${wrapperClassName}`}>
            {items}
        </ul>
    )
}

export default List;