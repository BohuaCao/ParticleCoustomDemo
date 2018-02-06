
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        //Background
        var bg = new cc.Sprite(res.background1_png);
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        this.addChild(bg);

        var particleSystem = new cc.ParticleSystem(res.snow_plist);
        particleSystem.x = size.width / 2;
        particleSystem.y = size.height - 50;
        this.addChild(particleSystem);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

