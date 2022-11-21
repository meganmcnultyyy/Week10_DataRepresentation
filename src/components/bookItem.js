import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import {Link } from "react-router-dom";

export class BookItem extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header> {/* Each book item title will display */}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.cover} width="200" height="200"></img> {/* Each book item thumbnail will display */}
                            <footer>
                             {this.props.book.author} {/* Each book item authors will display */}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    {/* <Button>Edit</Button> Edit Button from React Bootstrap*/}
                    <Link to={"/edit/"+this.props.book._id} className="btn btn-primary">Edit</Link> {/* Click on edit button link and changes the url of the app */} 
                </Card>
            </div>
        )
    }
}