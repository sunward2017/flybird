/**
 * Created by Administrator on 2017/1/3.
 */
(function () {
  window.Game = function () {
    this.canvas = document.getElementById("can");
    this.ctx = this.canvas.getContext('2d');
    this.frameNumber = 0;
    this.R = {
      'bj': 'img/bg_day.png',
      'bird0': 'img/bird0_0.png',
      'bird1': 'img/bird0_1.png',
      'bird2': 'img/bird0_2.png',
      'land': 'img/land.png',
      'pipe_down':'img/pipe_down.png',
      'pipe_up':'img/pipe_up.png',
    };
    this.amount = _.keys(this.R).length;
    this.RObj = {};
    this.actors = [];
    this.loadResource();
  }
  Game.prototype.loadResource = function () {
    var already = 0, self = this;
    for (var k in this.R) {
      this.RObj[k] = new Image()
      this.RObj[k].src = this.R[k];
      this.RObj[k].onload = function () {
        already++
        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        self.ctx.font = '20px 微软雅黑';
        self.ctx.fillText('准备好了' + already + '/' + self.amount, 10, 40);
        if (already === self.amount) {
          self.start();
          self.bindEvent();
        }
      }
    }
  };
  Game.prototype.start = function () {
    var self = this;
    this.bg = new Background();
    this.land = new Land();
    this.bird =new Bird();
    this.continue= 0;
    setInterval(function () {
      self.mainLoop()
    }, 20)
  };

  Game.prototype.mainLoop = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.continue++
    if(this.continue%70===0){
      this.pipe=new Pipe();
      game.actors.push(this.pipe);
    }
    //绘制所有的贞
    _.each(this.actors, function (actor) {
      actor.update();
      actor.render();
    });

    this.frameNumber++
    this.ctx.fillText('FNO:' + this.frameNumber, 10, 20);
  }
  Game.prototype.bindEvent=function(){
     var _this= this;
    this.canvas.onmousedown=function(){
      _this.bird.controler()
    }
  }
})();