import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [author, setAuthor] = useState(""); // ability to set values
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate(); // allows you the channge the url of the app
    //useEffect Hook is similar componentDidMount
    useEffect(() => { // Go to server and get record with following id
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/book/' + id)
            .then((response) => { // respoonse from record associated with id
                // Assign Response data to the arrays using useState.
                setTitle(response.data.title); // update fields
                setCover(response.data.cover);
                setAuthor(response.data.author);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    const handleSubmit = (event) => { // Sends record back to database // edit book calls handleSubmit
        event.preventDefault();
        const newBook = { // Generate new object
            id: id,
            title: title,
            cover: cover,
            author: author
        };
        axios.put('http://localhost:4000/api/book/' + id, newBook) // Axois called to overwrite // pass up new object
            .then((res) => {
                console.log(res.data); // response is the new editted data displayed to the console
                navigate('/read'); // navigates page back to /read after edited 
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group"> 
                    <input type="submit" value="Edit Book" className="btn btn-primary"></input>
                </div>
</form>
</div>
);
}
    