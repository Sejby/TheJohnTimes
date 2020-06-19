import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './Article.scss';
import Footer from '../Footer/Footer';

export class Article extends Component {
    state = {
        posts: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=2e9c41a7f1ee46f09d700a555d77e80d`)
            .then(res => this.setState({ posts: res.data.articles, isLoaded: true }));
    }

    render() {
        let i = this.props.match.params.id;
        return (
            <div>

                <Header />

                <div className="articleContainer">
                    <div className='textWrapper'>
                        <h1>{this.state.isLoaded ? this.state.posts[i].title : ''}</h1>
                        <p>{this.state.isLoaded ? this.state.posts[i].publishedAt : ''}</p>
                        <div className='imageWrapper'><img src={this.state.isLoaded ? this.state.posts[i].urlToImage : ''} alt="" /></div>
                        <h2>{this.state.isLoaded ? this.state.posts[i].description : ''}</h2>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default Article;
