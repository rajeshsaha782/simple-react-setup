import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(this.state.items)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h2>List</h2>
                    <ul className="list-group">
                        {items.map(item => (
                            <li className="list-group-item" key={item.id}>
                                <Link style={{color:"black"}} to={`/shop/${item.id}`}>{item.id} {item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Shop;
