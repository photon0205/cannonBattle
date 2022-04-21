var canvas = document.getElementById('canvas');
var user;
var u1 = canvas.getContext('2d');
var v1 = canvas.getContext('2d');
var y1=0,x1=0,t;
var v2 = canvas.getContext('2d');
var u2 = canvas.getContext('2d');
var ball1 = canvas.getContext('2d');
var ball2 = canvas.getContext('2d');
var y2=0,x2=0;
var angle1=0,angle2=0;
var angle21=0,angle22=0;
u1.fillRect(0,y1, 10, 100)
v1.fillRect(5,(50+y1),50,10)
u2.fillRect(1000-10, y2, 10, 100)
v2.fillRect(1000-50,(50+y2),50,10)
var now,then;

const writex1 = (text) =>{
    x1=text;
    update();
}
const writex2 = (text) =>{
    x2=text;
    update();
}
const writey1 = (text) =>{
    y1=text;
    update();
}
const writey2 = (text) =>{
    y2=text;
    update();
}
const writeangle1 = (text) =>{
    angle1=text;
    update();
}
const writeangle2 = (text) =>{
    angle2=text;
    update();
}
const writeangle21 = (text) =>{
    angle21=text;
    update();
}
const writeangle22 = (text) =>{
    angle22=text;
    update();
}

const sock=io();
sock.on('rx1',writex1)
sock.on('ry1',writey1)
sock.on('rx2',writex2)
sock.on('ry2',writey2)
sock.on('angle1',writeangle1)
sock.on('angle2',writeangle2)
sock.on('angle21',writeangle21)
sock.on('angle22',writeangle22)

function update(){
    canvas.width = canvas.width
    u1.fillRect(0,y1, 10, 100)
    v1.translate(5,50+y1)
    v1.rotate(angle1*Math.PI/180)
    v1.fillRect(x1,0,50,10) 
    v1.rotate(-angle1*Math.PI/180)
    v1.translate(0,0)
    u2.fillRect(1000-10-5,y2, 10, 100)
    v2.translate(1000,50+y2)
    v2.rotate(angle21*Math.PI/180)
    v2.fillRect(x2-50,0,50,10) 
}

document.addEventListener('keydown', (e) => {
    console.log(user);
    if(e.key=='ArrowUp' && user == 1){
        y1-=20;
        y2+=20;
    }else if(e.key=='ArrowUp' && user == 2){
        y2-=20;
    }
    if(e.key=='ArrowDown' && user == 1){
        y1+=20;    
        y2-=20;
    }else if(e.key=='ArrowDown' && user == 2){
        y2+=20;    
    }
    if(e.key=='w' && user == 1){
        angle1-=10;
        angle2-=1;
    }else if(e.key=='w' && user == 2){
        angle21+=10;
        angle22+=1;
    }
    if(e.key=='s' && user == 1){
        angle1+=10;
        angle2+=1; 
    }else if(e.key=='s' && user == 2){
        angle21-=10;
        angle22-=1; 
    }
    if(e.key==' ' && user == 1){
        then = Date.now();
        t=0;
        console.log('t = '+t)
        animate1();
    }else if(e.key==' ' && user == 2){
        then = Date.now();
        t=0;
        animate2();
    }
    sock.emit('rx1',x1)
    sock.emit('ry1',y1) 
    sock.emit('rx2',x2)
    sock.emit('ry2',y2)
    sock.emit('angle1',angle1)
    sock.emit('angle2',angle2)
    sock.emit('angle21',angle21)
    sock.emit('angle22',angle22)
    update();
});

function animate1() {
    requestAnimationFrame(animate1);
        now = Date.now();
        elapsed = now - then;
        if (elapsed > 10) {
            console.log('t = '+t)
            then = now;
            update();
            ball1.arc(t*Math.cos(Math.PI*angle2/180),5+t*Math.sin(Math.PI*angle2/180), 5, 0 , 2 * Math.PI);
            ball1.fill();
            t+=10;
            if(7+t*Math.cos(Math.PI*angle2/180)<canvas.width){
                animate1();
                console.log('hulle')
            }
    }
}
function animate2() {
    requestAnimationFrame(animate2);
        now = Date.now();
        elapsed = now - then;
        if (elapsed > 10) {
            then = now;
            update();
            ball2.arc(-t*Math.cos(Math.PI*angle22/180),-5-t*Math.sin(Math.PI*angle22/180), 5, 0 , 2 * Math.PI);
            ball2.fill();
            t+=10;
            if(1000-t*Math.cos(Math.PI*angle22/180)>0){
                animate2();
            }
    }
}
function f1(){
    document.getElementById("user1").hidden = "true";
    document.getElementById("user2").hidden = "true";
    user = 1;
}
function f2(){
    document.getElementById("user1").hidden = "true";
    document.getElementById("user2").hidden = "true";
    user = 2;
}