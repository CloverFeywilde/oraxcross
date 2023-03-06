/* 
 *   OraxCross - Digital Trading Card Game
 *   ~Main Logic goes here~
 *
 *   Written By: Clover & Nox
*/

//I just copied YTTD's aspect ratio. Will fix later
//Nox's Notes! will be marked with an -N 
let app = new PIXI.Application({ width: 816, height: 800, backgroundColor: 0x90a8c3});
document.body.appendChild(app.view);

//separates the field into two. i will refer to the top field as OF (opponent's field) and PF (player field) -N
let graphicsFieldLine = new PIXI.Graphics();
app.stage.addChild(graphicsFieldLine);
graphicsFieldLine.position.set(0,0);
graphicsFieldLine.lineStyle(15, 0xFFFFFF)
.moveTo(0,400)
.lineTo(816,400);

//reflection cards. in order: PFmain, OFmain, PFdeck, OFdeck -N
let graphicsReflection = new PIXI.Graphics();
app.stage.addChild(graphicsReflection);
graphicsReflection.beginFill(0xf4cae0);
graphicsReflection.lineStyle(3, 0xFFFFFF);
graphicsReflection.drawRect(358, 525, 100, 150);
graphicsReflection.drawRect(358, 125, 100, 150);
graphicsReflection.drawRect(20, 225, 100, 150);
graphicsReflection.drawRect(696, 425, 100, 150);

//facet cards. ordered by left column, right column, PFdeck, OFdeck -N
let graphicsFacet = new PIXI.Graphics();
app.stage.addChild(graphicsFacet);
graphicsFacet.beginFill(0xfcf6bd);
graphicsFacet.lineStyle(2, 0xFFFFFF);
graphicsFacet.drawRect(160, 40, 150, 100);
graphicsFacet.drawRect(160, 255, 150, 100);
graphicsFacet.drawRect(160, 445, 150, 100);
graphicsFacet.drawRect(160, 660, 150, 100);
graphicsFacet.drawRect(495, 40, 150, 100);
graphicsFacet.drawRect(495, 255, 150, 100);
graphicsFacet.drawRect(495, 445, 150, 100);
graphicsFacet.drawRect(495, 660, 150, 100);
graphicsFacet.drawRect(20, 20, 100, 150);
graphicsFacet.drawRect(696, 630, 100, 150);

let graphicsDiscard = new PIXI.Graphics();
app.stage.addChild(graphicsDiscard);
graphicsDiscard.beginFill(0xFF6887);
graphicsDiscard.lineStyle(2, 0xFFFFFF);
graphicsDiscard.drawRect(696, 122.5, 100, 150);
graphicsDiscard.drawRect(20, 522.5, 100, 150);


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