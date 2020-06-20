import React, { Component } from 'react';
import Header from '../Header/Header';
import './Article.scss';
import Footer from '../Footer/Footer';

export class Article extends Component {
    state = {
        posts: [],
        isLoaded: false
    }

    async componentDidMount() {
        const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=TGUIYM3nq6dbWb6IkeQUDl8g4EM44NLA`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ posts: data.results, isLoaded: true });
    }

    render() {
        let i = this.props.match.params.id;
        return (
            <div>

                <Header />

                <div className="articleContainer">
                    <div className='textWrapper'>
                        <a href={this.state.isLoaded ? this.state.posts[i].url : ''} target='_blank' without rel="noopener noreferrer">
                            <h1>{this.state.isLoaded ? this.state.posts[i].title : ''}</h1>
                            <p>{this.state.isLoaded ? this.state.posts[i].published_date : ''}</p>
                            <div className='imageWrapper'><img src={this.state.isLoaded ? this.state.posts[i].multimedia[0].url : ''} alt="" /></div>
                            <h2>{this.state.isLoaded ? this.state.posts[i].abstract : ''}</h2>
                        </a>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default Article;
