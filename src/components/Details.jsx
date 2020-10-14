import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: {}
        };
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result
                    });
                    console.log(this.state.item)
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
        const { error, isLoaded, item } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Link className="btn btn-info mt-2 float-left" to='/shop'> back </Link>
                    <h2>Details</h2>
                    <ul>
                        <p><strong>id </strong>{item.id}</p>
                        <p><strong>title </strong>{item.title}</p>
                        <p><strong>completed </strong>{item.completed}</p>
                    </ul>
                </div>
            );
        }
    }
}

export default Details;
