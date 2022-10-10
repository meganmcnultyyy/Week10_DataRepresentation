import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header> {/* Each book item title will display */}
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.thumbnailUrl} width="200" height="200"></img> {/* Each book item thumbnail will display */}
                            <footer>
                             {this.props.book.authors[0]} {/* Each book item authors will display */}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}