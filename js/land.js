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
    //drawImage�Ĳ��� --ͼƬ��x���ꡢy���ꡢ����Ŀ�ȡ�����ĸ߶ȣ������Ĳ��� ͼƬ�������Ƭ��x��y���ꣻ��Ƭ�Ŀ�ߣ�
    game.ctx.drawImage(this.image,this.x,this.y);
    game.ctx.drawImage(this.image,this.x+game.canvas.width,this.y);
  }
})()

