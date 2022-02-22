var canvas = document.querySelector('canvas')

var ctx = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

window.addEventListener('resize',function(){
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
})

var radiusLimit = 50
function Circle(x,y,radius,color,dx,dy){
    this.x = x;
    this.y = y
    this.radius = radius
    this.color = color

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2)
        // ctx.stroke()
        ctx.fillStyle = this.color
        ctx.fill()

    }
    this.update = function(){
        
        if(this.x > innerWidth || this.x < 0){
            dx = -dx
        }
        if(this.y > innerHeight || this.y < 0){
            dy = -dy
        }
        if(mouse.x - this.x <50 && mouse.x - this.x >-50 && mouse.y - this.y <50 && mouse.y - this.y >-50){
            this.radius +=4;
        }else if(this.radius > 5){
            this.radius-=3;
        }
        if(this.radius>=50){
            this.radius = radiusLimit
        }
        this.x += dx
        this.y += dy
        this.draw()
    }
}
// var circle = new Circle(0,0,15,'#24fac2',3,5)
circleArray = []
colors = ['#54BE07','#DC9113','#8DF8F3','#1F7D7F','#CC14DD','#B63A36','#EDC86C','#3D5AB8','#C568B0']
for(i=0;i<400;i++){
    var radius = 15
    var x = Math.random()*(innerWidth - radius*2)+ radius
    var y = Math.random()*(innerHeight - radius*2)+ radius
    var dx = Math.random()- 0.5
    var dy = Math.random()- 0.5
    var color =Math.floor(Math.random()*colors.length)
    circleArray.push(new Circle(x,y,radius,colors[color],dx,dy))
    // console.log(color)
}

function animation(){
    requestAnimationFrame(animation)
    ctx.clearRect(0,0,innerWidth,innerHeight)
    for(i=0;i<circleArray.length;i++){
        circleArray[i].update()
        // circleArray[i].draw()
    }
}
    var mouse={
        x:undefined,
        y:undefined
    }
window.addEventListener('mousemove',function(e){
    mouse.x = e.x
    mouse.y = e.y
})
animation()
