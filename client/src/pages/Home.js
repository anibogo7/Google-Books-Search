import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Search for a Book to Begin!"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
        .then(res =>
            this.setState({
                books: res.data
            })
        )
        .catch(() =>
        this.setState({
            books: [],
            message: "No new books found, Try a different name"
        })
        );
    };
}