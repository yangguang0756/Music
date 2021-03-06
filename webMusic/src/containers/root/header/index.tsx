import * as React from 'react'
import './style.css'
// import { Icon } from 'antd';
import Icon from 'antd/lib/icon';

import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Search from "./search"
import { HeaderUserComponent } from "../../user"
@inject('windowsStore', 'playStore')
// @observer
export default class extends React.Component<any, any>{
    componentDidMount() {
    }
    onBack() {
        // console.log(this.props);
        // 简易界面全屏状态下关闭全屏，不回退
        if (this.props.playStore.playParam.patternSimpleStyle == "normal") {
            this.props.history.goBack();
        } else {
            this.props.playStore.updatePatternSimpleStyle();
        }
    }
    onForward() {
        // console.log(this.props);
        this.props.history.goForward();
    }
    onMinus() {
        this.props.windowsStore.onMinus();
    }
    onAlt() {
        this.props.windowsStore.onAlt();
    }
    onClose() {
        this.props.windowsStore.onClose();
    }
    onMini() {
        this.props.windowsStore.onMini();
        // this.props.playStore.updatePatternMiniStyle("mini");
    }
    render() {
        return (
            <div className="root-header-body" >
                <div className="root-header-logo">
                    <Link to="/">
                        <img alt="" src={globalMusic.defaultImg} />
                        <strong>Music</strong>
                    </Link>
                </div>
                <div className="root-header-btns">
                    <a onClick={this.onBack.bind(this)} title="后退"><Icon type="left" /></a>
                    <a onClick={this.onForward.bind(this)} title="前进" ><Icon type="right" /></a>
                </div>
                <div className="root-header-search">
                    <Search />
                </div>
                <div className="root-header-user">
                    <HeaderUserComponent />
                </div>
                <div className="root-header-operation">
                    <a onClick={this.onMini.bind(this)} title="MINI"><Icon type="appstore-o" /></a>
                    <a onClick={this.onMinus.bind(this)} title="最小化"><Icon type="minus" /></a>
                    <a onClick={this.onAlt.bind(this)} title="最大化" ><Icon type="arrows-alt" /></a>
                    <a onClick={this.onClose.bind(this)} title="关闭" ><Icon type="close" /></a>
                </div>
            </div>
        );
    }
}