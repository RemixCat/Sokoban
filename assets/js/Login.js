cc.Class({
    extends: cc.Component,

    properties: {
        button: {
            default:null,
            type:cc.Button
        }
    },

    // use this for initialization
    onLoad: function () {
       this.button.node.on('click', this.callback, this);
    },
    
    //切换场景
    toScene: function(){
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
            cc.director.loadScene("IndexUI")
       })));
    },


    callback: function (event) {
       //这里的 event 是一个 EventCustom 对象，你可以通过 event.detail 获取 Button 组件
       var button = event.detail;
       //do whatever you want with button
       //另外，注意这种方式注册的事件，也无法传递 customEventData
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
