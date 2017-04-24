cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        
        stagame:{
            default:null,
            type:cc.Sprite
        },
        
        ren:{
            default:null,
            type:cc.Sprite
        }
    },

    // use this for initialization
    onLoad: function () {
        
    },

    //切换场景
    toLevelScene: function(){
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
            cc.director.loadScene("level")
       })));
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
