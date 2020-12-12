var player, playerNormal, playerAttack, playerDead, playerJump, playerFalling, playerBow, playerAttackS;

var lockIMG, keyIMG, lock, key, gamearrow, gaIMG;

var background1, bg1;

var guard1, guard2, gIMG, gIMG2;

function preload() {
  playerNormal = loadAnimation(
    "images/player/playerIdle1.png",
    "images/player/playerIdle2.png",
    "images/player/playerIdle3.png",
    "images/player/playerIdle4.png",
    "images/player/playerIdle5.png")

  playerAttack = loadAnimation(
    "images/player/playerAttack1.png",
    "images/player/playerAttack2.png",
    "images/player/playerAttack3.png")


  playerFalling = loadImage("images/player/playerFalling.png")

  playerJump = loadImage("images/player/playerJump.png")

  //Utilites
  lockIMG = loadImage("images/utilities/lock.png")
  keyIMG = loadImage("images/utilities/key.png")
  gaIMG = loadImage("images/utilities/gameArrow.png")


  //Guards
  gIMG = loadImage("images/npcs/guardLeft.png")
  gIMG2 = loadImage("images/npcs/guardRight.png")


  //Background for stage 1
  background1 = loadImage("images/backgrounds/bg1.png")



}



function setup() {
  createCanvas(800, 800);

  bg1 = createSprite(400, 400, 800, 800)
  bg1.addImage('background', background1)
  bg1.scale = 1.5


  gamearrow = createSprite(470, -560, 50, 50)
  gamearrow.addImage(gaIMG)
  gamearrow.scale = 0.3

  guard1 = createSprite(520, -560, 50, 50)
  guard1.addImage(gIMG)
  guard1.scale = 0.2;
  guard1.velocityX = -3

  guard2 = createSprite(420, -560, 50, 50)
  guard2.addImage(gIMG2)
  guard2.scale = 0.2;
  guard2.velocityX = 3


  lock = createSprite(-340, 300, 50, 50)
  lock.addImage(lockIMG)
  lock.scale = 0.3

  player = createSprite(400, 400, 100, 100)
  player.addAnimation("idling", playerNormal)
  player.scale = 1.5;

  playerAttackS = createSprite(player.x, player.y, 100, 100)
  playerAttackS.visible = false
  playerAttackS.scale = 1.5;
  playerAttackS.addAnimation("attacking", playerAttack)










}

function draw() {
  background(0);


  console.log(player.x)

  //Player Movement
  if (keyDown("w")) {
    player.y = player.y - 5
  }
  if (keyDown("s")) {
    player.y = player.y + 5
  }
  if (keyDown("a")) {
    player.x = player.x - 5
  }
  if (keyDown("d")) {
    player.x = player.x + 5
  }


  //Attacking
  if (keyDown("h")) {

    playerAttackS.visible = true
    player.visible = false;
    playerAttackS.x = player.x
    playerAttackS.y = player.y

  } else {
    player.visible = true;
    playerAttackS.visible = false;
  }


  //Camera borders
  if (player.y <= -190) {
    camera.position.x = player.x
  } else if (player.y >= 980) {
    camera.position.x = player.x
  } else if (player.x <= 0) {
    camera.position.y = player.y
  } else if (player.x >= 795) {
    camera.position.y = player.y
  } else {
    camera.position.x = player.x
    camera.position.y = player.y
  }


  console.log(guard1.x)

  //Guard Random Movement

  if (guard2.x < 235 && guard2.x > 520) {
    guard2.velocityX = 3
  } 


  // if (guard2.x = 705) {
  //   guard2.velocityX = -3
  // } 


  drawSprites();


  // if ()
}

function getRandomDirection() {
  var moves = (direction === LEFT || direction === RIGHT) ? [UP, DOWN] : [LEFT, RIGHT]; return moves[Math.floor(Math.random() * 2)];
};