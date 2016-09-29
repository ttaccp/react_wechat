import React from 'react';
import { Link, IndexLink } from 'react-router';

import '../css/more.css'

let More = React.createClass({
    render: function () {
        return (
            <div className="more">
                <div className="cells_title"></div>
                <div className="common_cells">
                    <IndexLink className="cell" to="/moments">
                        <div className="cell_hd">
                            <i className="icon_pyq"></i>
                        </div>
                        <div className="cell_bd">朋友圈</div>
                        <div className="cell_ft cell_r"></div>
                    </IndexLink>
                </div>
                <div className="cells_title"></div>
                <div className="common_cells">
                    <div className="cell">
                        <div className="cell_hd">
                            <i className="icon_sys"></i>
                        </div>
                        <div className="cell_bd">扫一扫</div>
                        <div className="cell_ft cell_r"></div>
                    </div>
                    <div className="cell">
                        <div className="cell_hd">
                            <i className="icon_yyy"></i>
                        </div>
                        <div className="cell_bd">摇一摇</div>
                        <div className="cell_ft cell_r"></div>
                    </div>
                </div>
                <div className="cells_title"></div>
                <div className="common_cells">
                    <div className="cell">
                        <div className="cell_hd">
                            <i className="icon_fjdr"></i>
                        </div>
                        <div className="cell_bd">附近的人</div>
                        <div className="cell_ft cell_r"></div>
                    </div>
                    <div className="cell">
                        <div className="cell_hd">
                            <i className="icon_plp"></i>
                        </div>
                        <div className="cell_bd">漂流瓶</div>
                        <div className="cell_ft cell_r"></div>
                    </div>
                </div>
            </div>
        );
    }
});


export default More;