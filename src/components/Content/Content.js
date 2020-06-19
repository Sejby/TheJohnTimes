import React, { Component } from 'react';
import './Content.scss';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';


export class Content extends Component {

    state = {
        posts: [],
        isLoaded: false
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2e9c41a7f1ee46f09d700a555d77e80d`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ posts: data.articles, isLoaded: true });
    }

    render() {
        var gridElements = [];
        var rowElements = [];
        for (var i = 0; i < 9; i++) {
            gridElements.push(
                <div className="container" key={i}>
                    <Link to={`/article/${i}`}>
                        <h3>{this.state.isLoaded ? this.state.posts[i].title : ''}</h3>
                        <p>{this.state.isLoaded ? this.state.posts[i].publishedAt : ''}</p>
                        <div className='imageDiv'>
                            <img src={this.state.isLoaded ? this.state.posts[i].urlToImage : ''} alt="" />
                        </div>
                    </Link>
                </div>
            );
        }

        for (i = 10; i < 15; i++) {
            rowElements.push(
                <div className="rowDiv" key={i}>
                    <Link to={`/article/${i}`}>
                        <h3>{this.state.isLoaded ? this.state.posts[i].title : ''}</h3>
                        <img src={this.state.isLoaded ? this.state.posts[i].urlToImage : ''} alt="" />
                    </Link>
                </div>
            );
        }

        return (
            <div>

                <div id="gridContent">
                    {gridElements}
                </div>

                <div id='rowContent'>
                    {rowElements}
                </div>

                <Footer />

            </div>


        )
    }
}

export default Content;
