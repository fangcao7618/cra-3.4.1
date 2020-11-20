import { observable, action, configure } from "mobx";
configure({ enforceActions: "always" }); //严格模式开启
export default class CountStore {
    @observable count = 0;

    @action handleInc = () => {
        this.count++;
    };
    @action handleDec = () => {
        this.count--;
    };
    @action clearCount = () => {
        this.count = 0;
    };
}
