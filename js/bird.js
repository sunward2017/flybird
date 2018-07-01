/**
 * Created by Administrator on 2017/1/4.
 */
/**
 * Created by Administrator on 2017/1/4.
 */
(function(){
  window.Bird=function(){
    this.imageArr = [game.RObj['bird0'],game.RObj['bird1'],game.RObj['bird2']];
     this.wing=0;
     this.x=game.canvas.width/3;
     this.y=100;
     this.v=0;
     this.flyState='down';
     game.actors.push(this);
  }
  Bird.prototype.update=function(){
    if(game.frameNumber%4===0){
        this.wing=++this.wing%3;//�л����
    }
    this.v++
    if(this.flyState=='down') {
      this.y += Math.pow(this.v, 2) / 20;
      this.angle = this.v / 18;
    }else{
       this.y-=Math.pow((25-this.v),2)/60;
      this.angle=-(25-this.v)/18;
      if(this.v>25){
        this.flyState='down';
        this.v=0;
      }
    }
  }
  Bird.prototype.render=function(){
    game.ctx.save();
    //drawImage�Ĳ��� --ͼƬ��x���ꡢy���ꡢ����Ŀ�ȡ�����ĸ߶ȣ������Ĳ��� ͼƬ�������Ƭ��x��y���ꣻ��Ƭ�Ŀ�ߣ�
    game.ctx.translate(this.x+24,this.y+24);
    game.ctx.rotate(this.angle);
    game.ctx.translate(-this.x-24,-this.y-24)
    game.ctx.drawImage(this.imageArr[this.wing],this.x,this.y);

    game.ctx.restore();
  }
  Bird.prototype.controler=function(){
    this.flyState='up';
  }
})()

