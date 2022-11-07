import React from "react";
import axios from "axios"; // A JS Library used to make HTTP Requests from Node.js

export class Create extends React.Component { //Accessing the React Functionality & marked for export

    constructor() { // Binding events
        super(); // inheriting parents constructer
        this.handleSubmit = this.handleSubmit.bind(this); // the correct instance will get invoked
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);

        this.state = {  
            title: '',
            cover: '',
            author: ''
        }
    }

    handleSubmit(e) { // When Add Book button is clicked it will invoke this method
        e.preventDefault(); // cancels the event, action of the event will not occur
       
        console.log(`button clicked
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`); // Print out to console
        
        const book = {
            title: this.state.title,
            cover: this.state.cover,
            author: this.state.author
        }

        axios.post('http://localhost:4000/api/books',book) // Axois Post makes HTTP request with post method and send to url 
        .then() // callback function 
        .catch(); // a function with possible error

        this.setState({ // re-rendered with updated state
            title: '',
            cover: '',
            author:''
        })
    }

    onChangeBookTitle(e) { // When the value inside the field changes updates the state
        this.setState({
            title: e.target.value
        })
    }

    onChangeBookCover(e) { // When the value inside the field changes updates the state
        this.setState({
            cover: e.target.value
        })
    }

    onChangeAuthor(e) { // When the value inside the field changes updates the state
        this.setState({
            author: e.target.value
        })
    }

    render() {
        return ( // Where the visual content of this component will be added
            <div>
                <h3>Hello from my Create Component!</h3>
                <br />
                <form onSubmit={this.handleSubmit}> {/* Book Title Form with submission button */}
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeAuthor}
                        />
                    </div>

                <br />

                    <input type="submit" value="Add Book" />
                </form>

                <br />

                

            </div>
        );
    }
}