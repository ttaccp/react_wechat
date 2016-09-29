import React from 'react';

import '../css/addressbook.css';

import Xhr from '../utils/xhr';

let AddressBook = React.createClass({
    getInitialState: function () {
        return {
            friends: []
        }
    },
    componentDidMount: function () {
        this.getFriends();
    },
    componentDidUpdate: function () {
        this.calcLetterTop();
    },
    calcLetterTop: function () {

        let letter = this.refs.letter;
        letter.style.marginTop = `-${letter.clientHeight / 2 + 44}px`;
    },
    getFriends: function () {
        Xhr.getJSON('../root/data/Friends.json')
            .then((data) => {
                this.setState({
                    friends: data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    buildCells: function (friends) {

        let list = [];
        for (let p in friends) {
            list.push(<div className="cells_title" key={p + "_title"}>{p}</div>);
            list.push(<div className="common_cells" key={p + "_cells"}>{_buildCell(friends[p], p) }</div>);
        }
        list.push(<div className="split top_line" key="split"><span className="s">我是有底线的</span></div>)

        function _buildCell(friends, p) {
            let list = [];
            friends.map((item, index) => {
                list.push(
                    <div className="cell" key={p + index}>
                        <div className="cell_hd">
                            <img src={require("../images/header/" + item.header)} className="header" />
                        </div>
                        <div className="cell_bd">
                            <div className="name cell_singleline">{item.name}</div>
                        </div>
                    </div>
                );
            });
            return list;
        }

        function _buildLetter(friends) {
            let list = [];
            for (let p in friends) {
                list.push(<span className="s" key={p + '_letter'}>{p}</span>);
            }
            return list;
        }

        return list;
    },
    buildLetter: function (friends) {

        let list = [];
        list.push(<div className="letter" key="letter" ref="letter">{_buildLetter(friends) }</div>);
        function _buildLetter(friends) {
            let list = [];
            for (let p in friends) {
                list.push(<span className="s" key={p + '_letter'}>{p}</span>);
            }
            return list;
        }

        return list;
    },
    render: function () {

        let cells = this.buildCells(this.state.friends);
        let letter = this.buildLetter(this.state.friends);
        return (
            <div className="address_book">
                <div className="list">{ cells }</div>
                { letter }
            </div>
        );
    }
});


export default AddressBook;