/**
 * Created by Administrator on 2017/1/4.
 */
(function(){
  window.Land=function(){
    this.image = game.RObj['land'];
    this.x=0;
    this.y=game.canvas.height-112;
    game.actors.push(this);
  }
  Land.prototype.update=function(){
    this.x-=2
    if(this.x<-game.canvas.width){
      this.x=0;
    }
  }
  Land.prototype.render=function(){
    //drawImage的参数 --图片、x坐标、y坐标、拉伸的宽度、拉伸的高度；完整的参数 图片后添加切片的x、y坐标；切片的宽高；
    game.ctx.drawImage(this.image,this.x,this.y);
    game.ctx.drawImage(this.image,this.x+game.canvas.width,this.y);
  }
})()

