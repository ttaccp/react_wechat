import React from 'react';

import '../css/user.css'

let User = React.createClass({
    render: function () {
        return (
            <div className="user">
                <div className="cells_title"></div>
                <div className="common_cells">
                    <div className="cell">
                        <div className="cell_hd">
                            <img src={require("../images/header/h10.jpg")} className="header" />
                        </div>
                        <div className="cell_bd">
                            <div className="name">天道酬勤</div>
                            <div className="account">微信号: ttaccp</div>
                        </div>
                        <div className="cell_ft cell_r">
                            <img src={require("../images/qr.png")} className="qr" />
                        </div>
                    </div>
                </div>
                <div className="cells_title"></div>
                <div className="common_cells">
                    <div className="cell">
                        <div className="cell_hd">
                            <i className="icon_xc"></i>
                        </div>
                        <div className="cell_bd">相册</div>
                        <div className="cell_ft cell_r"></div>
                    </div>
                    <div className="cell">
                        <div className="cell_hd">
                            <i className="icon_sc"></i>
                        </div>
                        <div className="cell_bd">收藏</div>
                        <div className="cell_ft cell_r"></div>
                    </div>
                    <div className="cell">
                        <div className="cell_hd">
                            <i className="icon_qb"></i>
                        </div>
                        <div className="cell_bd">钱包</div>
                        <div className="cell_ft cell_r"></div>
                    </div>
                    <div className="cell">
                        <div className="cell_hd">
                            <i className="icon_kb"></i>
                        </div>
                        <div className="cell_bd">卡包</div>
                        <div className="cell_ft cell_r"></div>
                    </div>
                </div>
                <div className="cells_title"></div>
                <div className="common_cells">
                    <div className="cell">
                        <div className="cell_hd">
                            <i className="icon_bq"></i>
                        </div>
                        <div className="cell_bd">表情</div>
                        <div className="cell_ft cell_r"></div>
                    </div>
                </div>
                <div className="cells_title"></div>
                <div className="common_cells">
                    <div className="cell">
                        <div className="cell_hd">
                            <i className="icon_sz"></i>
                        </div>
                        <div className="cell_bd">设置</div>
                        <div className="cell_ft cell_r"></div>
                    </div>
                </div>
                <div className="cells_title"></div>
            </div>
        );
    }
});


export default User;