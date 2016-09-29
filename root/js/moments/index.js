import React from 'react';

import '../../css/moments/index.css'


let Moments = React.createClass({
    render: function () {
        return (
            <div className="moments">
                <div className="cover_box">
                    <img className="cover" src={require("../../images/moments/cover.jpg")} />
                    <div className="name_box">
                        <span className="name">天道酬勤</span>
                        <img className="header" src={require("../../images/header/h10.jpg")} />
                    </div>
                </div>
                <div className="dynamic_list">
                    <div className="dynamic bottom_line">
                        <img className="header" src={require("../../images/header/h4.jpg")} />
                        <div className="content_box">
                            <div className="name">胜男</div>
                            <div className="text">朋友买了点葡萄，让我给他留一半，可是他怎么看起来有点不高兴呢，这是咋了，不是说好了留一半么，我也没多吃啊</div>
                            <div className="pic_list">
                                <img className="pic" src={require("../../images/moments/p1.jpg")} />
                            </div>
                            <div className="time">2小时前</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Moments;