import React, { Component } from 'react';
import axios from 'axios';
import './Content.scss';

export class Content extends Component {

    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=2e9c41a7f1ee46f09d700a555d77e80d`)
            .then(res => this.setState({ posts: res.data.articles, isLoaded: true }));
    }

    render() {
        var gridElements = [];
        var rowElements = [];
        for (var i = 0; i < 9; i++) {
            gridElements.push(
                <div className="container">
                    <a href="#kokot">
                        <h3>{this.state.isLoaded ? this.state.posts[i].title : ''}</h3>
                        <p>{this.state.isLoaded ? this.state.posts[i].publishedAt : ''}</p>
                        <div className='imageDiv'>
                            <img src={this.state.isLoaded ? this.state.posts[i].urlToImage : ''} alt="" />
                        </div>
                    </a>
                </div>
            );
        }

        for (i = 10; i < 15; i++) {
            rowElements.push(
                <div className="rowDiv">
                    <a href="#kokot">
                        <h3>{this.state.isLoaded ? this.state.posts[i].title : ''}</h3>
                        <img src={this.state.isLoaded ? this.state.posts[i].urlToImage : ''} alt="" />
                    </a>
                </div>
            );
        }


        if (this.state.isLoaded === true) {
            console.log(this.state.posts);
        }

        return (
            <div>
                <header>
                    <nav>
                        <h1>The John Times</h1>
                    </nav>
                </header>

                <div id="gridContent">
                    {gridElements}
                </div>

                <div id='rowContent'>
                    {rowElements}
                </div>

                <div id='footer'>
                    <h2 id='author'>Coded by Jan Schejbal</h2>
                    <h2 id='api'>API data provided by <a href="https://newsapi.org/" target='_blank' rel="noopener noreferrer">newsapi.org</a></h2>
                    <h2 id='copyright'>© Copyright 2020</h2>
                </div>
            </div>


        )
    }
}

export default Content;
