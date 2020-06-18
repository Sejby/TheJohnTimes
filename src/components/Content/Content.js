import React, { Component } from 'react';
import axios from 'axios';
import './Content.scss';

export class Content extends Component {

    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2e9c41a7f1ee46f09d700a555d77e80d`)
            .then(res => this.setState({ posts: res.data.articles, isLoaded: true }));
    }

    render() {

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

                <div id="content">
                    <div class="container">
                        <h3>{this.state.isLoaded ? this.state.posts[0].title : ''}</h3>
                        <p>{this.state.isLoaded ? this.state.posts[0].publishedAt : ''}</p>
                        <img src={this.state.isLoaded ? this.state.posts[0].urlToImage : ''} alt="" height='150px' />
                    </div>
                    <div class="container">
                        <h3>{this.state.isLoaded ? this.state.posts[1].title : ''}</h3>
                        <p>{this.state.isLoaded ? this.state.posts[1].publishedAt : ''}</p>
                        <img src={this.state.isLoaded ? this.state.posts[1].urlToImage : ''} alt="" height='150px' />
                    </div>
                    <div class="container">
                        <h3>{this.state.isLoaded ? this.state.posts[2].title : ''}</h3>
                        <p>{this.state.isLoaded ? this.state.posts[2].publishedAt : ''}</p>
                        <img src={this.state.isLoaded ? this.state.posts[2].urlToImage : ''} alt="" height='150px' />
                    </div>
                    <div class="container">
                        <h3>{this.state.isLoaded ? this.state.posts[3].title : ''}</h3>
                        <p>{this.state.isLoaded ? this.state.posts[3].publishedAt : ''}</p>
                        <img src={this.state.isLoaded ? this.state.posts[3].urlToImage : ''} alt="" height='150px' />
                    </div>
                    <div class="container">
                        <h3>{this.state.isLoaded ? this.state.posts[4].title : ''}</h3>
                        <p>{this.state.isLoaded ? this.state.posts[4].publishedAt : ''}</p>
                        <img src={this.state.isLoaded ? this.state.posts[4].urlToImage : ''} alt="" height='150px' />
                    </div>
                    <div class="container">
                        <h3>{this.state.isLoaded ? this.state.posts[5].title : ''}</h3>
                        <p>{this.state.isLoaded ? this.state.posts[5].publishedAt : ''}</p>
                        <img src={this.state.isLoaded ? this.state.posts[5].urlToImage : ''} alt="" height='150px' />
                    </div>
                </div>
            </div>


        )
    }
}

export default Content;
