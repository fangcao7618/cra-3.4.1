import React, { PureComponent } from "react";
import loadingModule from "./index.module.css";

export default class LoadingCom extends PureComponent {
    render() {
        return (
            <div className={loadingModule.loader}>
                <div className={loadingModule.pacman}>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        );
    }
}
