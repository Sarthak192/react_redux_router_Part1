import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './Streams/StreamList';
import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import StreamShow from './Streams/StreamShow';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" component={StreamCreate} />
                        <Route path="/streams/edit" exact component={StreamEdit} />
                        <Route path="/streams/delete" exact component={StreamDelete} />
                        <Route path="/streams/show" exact component={StreamShow} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;