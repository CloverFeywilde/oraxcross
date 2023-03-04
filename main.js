/* 
 *   OraxCross - Digital Trading Card Game
 *   ~Main Logic goes here~
 *
 *   Written By: Clover & Nox
*/

//I just copied YTTD's aspect ratio. Will fix later
let app = new PIXI.Application({ width: 816, height: 624 });
document.body.appendChild(app.view);

let text = new PIXI.Text('Hello World',{
    fontFamily:'Arial',
    fontSize: 24,
    fill : 0xff1010,
    align : 'center',
});


var graphics = new PIXI.Graphics();
graphics.beginFill(0xFFFF00);
// set the line style to have a width of 5 and set the color to red
graphics.lineStyle(5, 0xFF0000);
// draw a rectangle
graphics.drawRect(0, 0, 300, 200);

app.stage.addChild(text);
app.stage.addChild(graphics);

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
