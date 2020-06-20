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
        const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=TGUIYM3nq6dbWb6IkeQUDl8g4EM44NLA`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ posts: data.results, isLoaded: true });
    }

    render() {
        var gridElements = [];
        var rowElements = [];
        var backgroundImage;
        for (var i = 0; i < 9; i++) {
            backgroundImage = this.state.isLoaded ? this.state.posts[i].multimedia[0].url : '';
            gridElements.push(
                <div className="container" key={i} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                    <div className='textWrapper'>
                        <Link to={`/article/${i}`}>
                            <h3>{this.state.isLoaded ? this.state.posts[i].title : ''}</h3>
                        </Link>

                        <p>{this.state.isLoaded ? this.state.posts[i].published_date.slice(0, 10).split('-').reverse().join('/') + ' ' + this.state.posts[i].published_date.slice(12, 16) + ' UTC' : ''}</p>
                    </div>
                </ div>
            );
        }

        for (i = 10; i < 15; i++) {
            backgroundImage = this.state.isLoaded ? this.state.posts[i].multimedia[0].url : '';
            rowElements.push(
                <div className="rowDiv" key={i} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                    <Link to={`/article/${i}`}>
                        <div className='textRowWrapper'>
                            <h3>{this.state.isLoaded ? this.state.posts[i].title : ''}</h3>
                        </div>
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
