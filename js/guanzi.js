/**
 * Created by Administrator on 2017/1/4.
 */
(function(){
  window.Pipe=function(){
    this.image1 = game.RObj['pipe_down'];
    this.image2 = game.RObj['pipe_up'];
    this.x=300;
    this.high= _.random(30,300);
    this.w=52;
    this.h=320;

  };
  Pipe.prototype.update=function(){
    this.x-=3;
    if(this.x<-52){
      _.without(game.actors,this);
    }
  };
  Pipe.prototype.render=function(){
    //drawImage�Ĳ��� --ͼƬ��x���ꡢy���ꡢ����Ŀ�ȡ�����ĸ߶ȣ������Ĳ��� ͼƬ�������Ƭ��x��y���ꣻ��Ƭ�Ŀ�ߣ�
     game.ctx.drawImage(this.image1,this.x,-this.high,this.w,this.h);
     game.ctx.drawImage(this.image2,0,0,this.w,this.high-20,this.x,400-this.high,this.w,this.high);
  }
})();

