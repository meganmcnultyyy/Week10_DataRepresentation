import React from "react";
import { Books } from "./books"; // Books Component from Books.js

export class Read extends React.Component { //Accessing the React Functionality & marked for export

    state = {// Holding the components data
        books: [ // An array of books

            {
                "title": "Learn Git in a Month of Lunches",
                "isbn": "1617292419",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                "status": "MEAP",
                "authors": ["Rick Umali"],
                "categories": []
            },
            {
                "title": "MongoDB in Action, Second Edition",
                "isbn": "1617291609",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", "status": "MEAP",
                "authors": [
                    "Kyle Banker",
                    "Peter Bakkum",
                    "Tim Hawkins",
                    "Shaun Verch",
                    "Douglas Garrett"
                ],
                "categories": []
            },
            {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
            }
        ]

    }

    render() {
        return ( // Where the visual content of this component will be added
            <div>
                <h3>Hello from my Read Component!</h3>
                <Books books={this.state.books}></Books> {/* Imported from the Books Component & state  is used to contain data or information about the component */}
            </div>
        );
    }
}