/**
 * Created by Administrator on 2017/1/4.
 */
(function(){
  window.Background=function(){
    this.image = game.RObj['bj'];
    this.x=0;
    game.actors.push(this);
  }
  Background.prototype.update=function(){
     this.x--
     if(this.x<-game.canvas.width){
       this.x=0;
     }
  }
  Background.prototype.render=function(){
    game.ctx.drawImage(this.image,this.x,0,game.canvas.width,game.canvas.height);
    game.ctx.drawImage(this.image,this.x+game.canvas.width,0,game.canvas.width,game.canvas.height);
  }
})()
