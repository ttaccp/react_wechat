import React from 'react';
import { Link, IndexLink } from 'react-router';

import '../css/footer.css';


let Footer = React.createClass({
    clickHandle: function (e) {
        let type = e.target.getAttribute('data-type');
        this.props.changeContent(type);
    },
    render: function () {
        return (
            <div className="footer top_line">
                <ul className="ul" ref="ul">
                    <li className={`li ${this.props.contentName == "Wehcat" ? "cur" : ""}`} data-type="Wehcat" onTouchTap={this.clickHandle}>微信</li>
                    <li className={`li ${this.props.contentName == "AddressBook" ? "cur" : ""}`} data-type="AddressBook" onTouchTap={this.clickHandle}>通讯录</li>
                    <li className={`li ${this.props.contentName == "More" ? "cur" : ""}`} data-type="More" onTouchTap={this.clickHandle}>发现</li>
                    <li className={`li ${this.props.contentName == "User" ? "cur" : ""}`} data-type="User" onTouchTap={this.clickHandle}>我</li>
                </ul>
            </div>
        );
    }
});


export default Footer;