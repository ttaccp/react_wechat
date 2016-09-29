import React from 'react';

import '../css/wechat.css';
import Xhr from '../utils/xhr';

let Wechat = React.createClass({
    componentDidMount: function () {
        this.getMsgList();
    },
    getInitialState: function () {
        return {
            msgList: []
        }
    },
    getMsgList: function () {
        Xhr.getJSON('../root/data/msgList.json')
            .then((data) => {
                this.setState({
                    msgList: data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    buildDom: function (msgList = []) {
        let list = [];

        if (msgList.length > 0) {
            list.push(<div className="cells_title" key="title">最近聊天</div>);
            list.push(<div className="common_cells" key="cells">{_build(msgList) }</div>);
        } else {
            list.push(<div className="defaultTip" key="tip">微信不仅仅是一种聊天工具</div>)
        }

        function _build(msgList) {
            let list = [];
            msgList.map(function (msg, index) {
                list.push(
                    <div className="cell" key={index}>
                        <div className="cell_hd">
                            <img src={require("../images/header/" + msg.cover) } className="cover" />
                        </div>
                        <div className="cell_bd">
                            <div className="name cell_singleline">{msg.name}</div>
                            <div className="summary cell_singleline">{msg.summary}</div>
                        </div>
                        <div className="cell_ft time">{msg.time}</div>
                    </div>
                );
            })
            return list;
        }

        return list;
    },
    render: function () {
        return (
            <div className="wechat">{this.buildDom(this.state.msgList) }</div>
        );
    }
});


export default Wechat;