import PropTypes from 'prop-types'

function List(props){

    const category = props.category;
    const itemList = props.items;
        
    //companies.sort((a,b) => a.projects - b.projects); //ASCENDING
    //companies.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //const lowProjCompanies = companies.filter(company => company.projects <3);

    const listItems = itemList.map(item => <li key={item.id}><b>{item.name}</b>  successful projects: <b>{item.projects}</b></li>);

    return(<>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listItems}</ul>
    </>);
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, projects: PropTypes.number}))
}
List.defaultProps = {
    category: "Category",
    items: [],
}

export default List