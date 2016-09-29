import React from 'react';

import '../css/index.css';

import Footer from './footer';
import Wehcat from './wechat';
import AddressBook from './addressbook';
import More from './more';
import User from './user';

let Index = React.createClass({
    getInitialState: function () {
        return {
            content: "Wehcat"
        }
    },
    changeContent: function (type = "Wehcat") {
        this.setState({
            content: type
        });
    },
    buildContent: function () {

        let type = this.state.content;

        if (type === "AddressBook") {
            return (<AddressBook />);
        } else if (type === "More") {
            return (<More />);
        } else if (type === "User") {
            return (<User />);
        } else {
            return (<Wehcat />);
        }
    },
    render: function () {
        return (
            <div className="app">
                <div className="content">{this.buildContent() }</div>
                <Footer contentName={this.state.content} changeContent={this.changeContent} />
            </div>
        );
    }
});


export default Index;