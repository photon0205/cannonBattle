
const firebaseConfig = {
  apiKey: "AIzaSyD7ne0LD3U8RCE97zndPXSwmWnNjYcYrpw",
  authDomain: "cannonbattle-85205.firebaseapp.com",
  projectId: "cannonbattle-85205",
  storageBucket: "cannonbattle-85205.appspot.com",
  messagingSenderId: "142236860159",
  appId: "1:142236860159:web:922e4b0296db52934456ca",
  measurementId: "G-3PVBRG86YD"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
database.settings({ timestampsInSnapshots: true }); 


function getHighScore(doc) {
   highscore=doc.data().highscore
   console.log(highscore);
   document.getElementById("highscore").innerHTML=highscore
}



const us1 = document.getElementById("user1")
us1.addEventListener("click",f1)

const us2 = document.getElementById("user2")
us2.addEventListener("click",f2)

function f1(){
    database.collection('highscore').orderBy('highscore').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            getHighScore(doc);
        });
    });
    document.getElementById('user1').hidden = true;
    document.getElementById('user2').hidden = true;
    user =1;
    sock.emit("strt1",1)
    if(strt2==1){
            
            var timeleft=30;
            var Timer = setInterval(function () {
            if (timeleft <= 0) {
                console.log(score1)
                if(score1 > highscore && score1>score2) {
                    database.collection('highscore')
                    .add({
                        highscore : score1
                    })
                    .then(()=>{
                        console.log('Data Submitted');
                    })
                    
                }
                if(score1 > score2){
                    alert("Player 1 ki chapo !!")
                }else if(score2 > score1){
                    alert("Player 2 ki chapo !!")
                }else{
                    alert("Mubarkaan bai, draw hogya match, chalo dono ek dusre ko chapo dedo")
                }
                clearInterval(Timer);
            }else{
                document.getElementById("timeleft").innerHTML = timeleft + " seconds remaining";
            }
            
            
            timeleft -= 1;
        }, 1000);
    }else{
        document.getElementById("wait").innerHTML ="Waiting for the other player...."
    }

}
function f2(){
    database.collection('highscore').orderBy('highscore').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            getHighScore(doc);
        });
    });
    document.getElementById('user1').hidden = true;
    document.getElementById('user2').hidden = true;
    sock.emit("strt2",1)
    user =2;
    if(strt1==1){
        
        var timeleft=30;
        var Timer = setInterval(function () {
        if (timeleft <= 0) {
            console.log(score2)
            if(score2 > highscore && score1<score2) {
                database.collection('highscore')
                .add({
                    highscore : score2
                })
                .then(()=>{
                    console.log('Data Submitted');
                })
            }
            if(score1 > score2){
                alert("Player 1 ki chapo !!")
            }else if(score2 > score1){
                alert("Player 2 ki chapo !!")
            }else{
                alert("Mubarkaan bai, draw hogya match, chalo dono ek dusre ko chapo dedo")
            }
            clearInterval(Timer);
        }else{
                document.getElementById("timeleft").innerHTML = timeleft + " seconds remaining";
            }
            
        
        timeleft -= 1;
    }, 1000);
    }else{
        document.getElementById("wait").innerHTML ="Waiting for the other player...."
    }
   
}

var canvas = document.getElementById('canvas');
var user, highscore=0;
var u1 = canvas.getContext('2d');
var v1 = canvas.getContext('2d');
var y1=0,x1=0,t;
var v2 = canvas.getContext('2d');
var u2 = canvas.getContext('2d');
var ball1 = canvas.getContext('2d');
var ball2 = canvas.getContext('2d');
var y2=0,x2=0;
var angle1=0,angle2=0,score1=0,score2=0;
u1.fillRect(0,y1, 10, 100)
v1.fillRect(5,(50+y1),50,10)
u2.fillRect(1000-10, y2, 10, 100)
v2.fillRect(1000-50,(50+y2),50,10)
var now,then,ball1x,ball1y,ball2x,ball2y, strt1,strt2;

const writestrt1 = (text) =>{
    strt1=text;
    if(strt2==1){
        document.getElementById("wait").innerHTML =""
        var timeleft=30;
        var Timer = setInterval(function () {
        if (timeleft <= 0) {
            console.log(score1)
            if(score1 > highscore && score1>score2) {
                database.collection('highscore')
                .add({
                    highscore : score1
                })
                .then(()=>{
                    console.log('Data Submitted');
                })
            }
            if(score1 > score2){
                alert("Player 1 ki chapo !!")
            }else if(score2 > score1){
                alert("Player 2 ki chapo !!")
            }else{
                alert("Mubarkaan bai, draw hogya match, chalo dono ek dusre ko chapo dedo")
            }
            clearInterval(Timer);
        }else{
            document.getElementById("timeleft").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}
}
const writestrt2 = (text) =>{
    strt2=text;
    if(strt1==1){
        document.getElementById("wait").innerHTML = ""
        var timeleft=30;
        var Timer = setInterval(function () {
        if (timeleft <= 0) {
            console.log(score2)
            if(score2 > highscore && score1<score2) {
                database.collection('highscore')
                .add({
                    highscore : score2
                })
                .then(()=>{
                    console.log('Data Submitted');
                })
            }
            if(score1 > score2){
                alert("Player 1 ki chapo !!")
            }else if(score2 > score1){
                alert("Player 2 ki chapo !!")
            }else{
                alert("Mubarkaan bai, draw hogya match, chalo dono ek dusre ko chapo dedo")
            }
            clearInterval(Timer);
        }else{
                document.getElementById("timeleft").innerHTML = timeleft + " seconds remaining";
            }
        timeleft -= 1;
    }, 1000);
    }
}
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
const writeball1x = (text) =>{
    ball1x= text;
    update();
}
const writeball1y = (text) =>{
    ball1y= text;
    update();
}
const writeball2x = (text) =>{
    ball2x= text;
    update();
}
const writeball2y = (text) =>{
    ball2y= text;
    update();
}
const writescore1 = (text) =>{
    score1= text;
    update();
}
const writescore2 = (text) =>{
    score2= text;
    update();
}

const sock=io();
sock.on('strt1',writestrt1)
sock.on('strt2',writestrt2)
sock.on('rx1',writex1)
sock.on('ry1',writey1)
sock.on('rx2',writex2)
sock.on('ry2',writey2)
sock.on('angle1',writeangle1)
sock.on('angle2',writeangle2)
sock.on('ball2x',writeball2x)
sock.on('ball2y',writeball2y)
sock.on('ball1x',writeball1x)
sock.on('ball1y',writeball1y)
sock.on('score1',writescore1)
sock.on('score2',writescore2)

function update(){
    canvas.width = canvas.width
    u1.fillRect(0,y1, 10, 100)
    v1.translate(5,50+y1)
    v1.rotate(angle1*Math.PI/180)
    v1.fillRect(x1,0,50,10) 
    v1.rotate(-angle1*Math.PI/180)
    v1.setTransform(1, 0, 0, 1, 0, 0);
    u2.fillRect(1000-10,y2, 10, 100)
    v2.translate(1000,50+y2)
    v2.rotate(angle2*Math.PI/180)
    v2.fillRect(x2-50,0,50,10) 
    v2.rotate(-angle2*Math.PI/180)
    v2.setTransform(1, 0, 0, 1, 0, 0);
    ball1.arc(ball1x,ball1y, 5, 0 , 2 * Math.PI);
    ball1.fill();
    ball2.arc(ball2x,ball2y, 5, 0 , 2 * Math.PI);
    ball2.fill();
    document.getElementById('score1').innerHTML=score1;
    document.getElementById('score2').innerHTML=score2;

}

document.addEventListener('keydown', (e) => {
    console.log(user);
    if(e.key=='ArrowUp' && user == 1){
        y1-=20;
    }else if(e.key=='ArrowUp' && user == 2){
        y2-=20;
    }
    if(e.key=='ArrowDown' && user == 1){
        y1+=20;  
    }else if(e.key=='ArrowDown' && user == 2){
        y2+=20;    
    }
    if(e.key=='w' && user == 1){
        angle1-=10;
    }else if(e.key=='w' && user == 2){
        angle2+=10;
    }
    if(e.key=='s' && user == 1){
        angle1+=10;
    }else if(e.key=='s' && user == 2){
        angle2-=10;
    }
    if(e.key==' ' && user == 1){
        then = Date.now();
        t=0;
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
    update();
});
function animate2() {
    requestAnimationFrame(animate2);
        now = Date.now();
        var elapsed = now - then;
        if (elapsed > 10) {
            then = now;
            
            ball2x=1000-t*Math.cos(Math.PI*angle2/180);
            ball2y=50+y2-5-t*Math.sin(Math.PI*angle2/180);

            if(ball2y<0){
                ball2y=-ball2y;
            }
            if(ball2y> canvas.height){
                ball2y=canvas.height -(ball2y-canvas.height);
            }
            if(ball2y<0){
                ball2y=-ball2y;
            }
            if(ball2y> canvas.height){
                ball2y=canvas.height -(ball2y-canvas.height);
            }
            if(ball2y>y1 && ball2y<y1+100 && ball2x<10 && ball2x>-10){
                score2+=10;
            }
            update();
            sock.emit('score2',score2)
            sock.emit('ball2x',ball2x)
            sock.emit('ball2y',ball2y)
            t+=10;
            if(1000-t*Math.cos(Math.PI*angle2/180)>0){
                animate2();
            }
    }
}
function animate1() {
    requestAnimationFrame(animate1);
        now = Date.now();
        var elapsed = now - then;
        if (elapsed > 10) {
            then = now;
            ball1x=t*Math.cos(Math.PI*angle1/180);
            ball1y=y1+50+t*Math.sin(Math.PI*angle1/180);
            if(ball1y<0){
                ball1y=-ball1y;
            }
            if(ball1y> canvas.height){
                ball1y=canvas.height -(ball1y-canvas.height);
            }
            if(ball1y<0){
                ball1y=-ball1y;
            }
            if(ball1y> canvas.height){
                ball1y=canvas.height -(ball1y-canvas.height);
            }
            if(ball1y>y2 && ball1y<y2+100 && ball1x<canvas.width+10 && ball1x>canvas.width-10){
                score1+=10;
            }
            update();
            sock.emit('score1',score1)
            sock.emit('ball1x',ball1x)
            sock.emit('ball1y',ball1y)
            t+=10;
            if(7+t*Math.cos(Math.PI*angle1/180)<canvas.width){
                animate1();
            }
    }
}
