/* 
 *   OraxCross - Digital Trading Card Game
 *   ~Main Logic goes here~
 *
 *   Written By: Clover & Nox
*/

//I just copied YTTD's aspect ratio. Will fix later
let app = new PIXI.Application({ width: 816, height: 800, backgroundColor: 0x90a8c3});
document.body.appendChild(app.view);

let graphics = new PIXI.Graphics();
app.stage.addChild(graphics);
graphics.beginFill(0xf4cae0);
graphics.lineStyle(3, 0xFFFFFF);
graphics.drawRect(358, 525, 100, 150);
graphics.drawRect(358, 125, 100, 150);

let graphics2 = new PIXI.Graphics();
app.stage.addChild(graphics2);
graphics2.beginFill(0xfcf6bd);
graphics2.lineStyle(2, 0xFFFFFF);
graphics2.drawRect(160, 40, 150, 100);
graphics2.drawRect(160, 255, 150, 100);
graphics2.drawRect(160, 445, 150, 100);
graphics2.drawRect(160, 660, 150, 100);
graphics2.drawRect(495, 40, 150, 100);
graphics2.drawRect(495, 255, 150, 100);
graphics2.drawRect(495, 445, 150, 100);
graphics2.drawRect(495, 660, 150, 100);

let graphics3 = new PIXI.Graphics();
app.stage.addChild(graphics3);
graphics3.position.set(0,0);
graphics3.lineStyle(15, 0xFFFFFF)
.moveTo(0,400)
.lineTo(816,400);


//Asset Containers


//Globals
let state, tick;

//Init functions
function setup(){
    //setup goes here
    state=play;
    tick=0
}


//Game Loop
app.ticker.add(function(delta){
    state();
});


//Game States
function play(){
    //main method calls go here
    if(tick<=30){
        console.log('Snow: '+ tick);
        tick++;
    }

}
setup();

//Play Functions
