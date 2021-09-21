var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d02ae611-46a5-480a-a503-ee6473774cb3","162b4a29-8997-41c6-b8da-f99d4403ed07","e2021cc5-6b8b-4a34-bb4f-9968946e7c89","21b83fe3-ae56-47ce-8260-1aae168cbf2f","206da760-356a-4498-bb85-a2f18afc97cf","49b5c734-1fd0-417d-9e82-b36f2f8bdd5a","da5e826f-e061-4381-bf38-503f99bcd2c2","349cd3e4-40b8-4b5d-bc6d-e37bbdbbe2c0","7673557d-7adf-4b7e-b8ce-d7a10072029c","b296cb72-17c5-421a-8550-291376908471","1d088526-a0f2-42aa-830a-25524b7fdf97","39168069-98ae-4f88-8079-c280a649378d","aee36ced-c018-4a8a-b79a-97067fa1613b","3c2b3ad5-605c-4527-8c47-12b50f85a6a3"],"propsByKey":{"d02ae611-46a5-480a-a503-ee6473774cb3":{"name":"biteRight","sourceUrl":null,"frameSize":{"x":90,"y":26},"frameCount":2,"looping":true,"frameDelay":12,"version":"AL_aJ5Y7Ypa6YYhrNrtv2ls_Cun6_nl2","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":52},"rootRelativePath":"assets/d02ae611-46a5-480a-a503-ee6473774cb3.png"},"162b4a29-8997-41c6-b8da-f99d4403ed07":{"name":"biteLeft","sourceUrl":null,"frameSize":{"x":90,"y":26},"frameCount":2,"looping":true,"frameDelay":12,"version":"sEdIplQOAtlsWPGPz54oeCbSwQWoJ0jv","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":52},"rootRelativePath":"assets/162b4a29-8997-41c6-b8da-f99d4403ed07.png"},"e2021cc5-6b8b-4a34-bb4f-9968946e7c89":{"name":"back","sourceUrl":null,"frameSize":{"x":90,"y":26},"frameCount":2,"looping":true,"frameDelay":12,"version":"E4kOskg8NljTe7K1PtVarliPghreeAfR","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":52},"rootRelativePath":"assets/e2021cc5-6b8b-4a34-bb4f-9968946e7c89.png"},"21b83fe3-ae56-47ce-8260-1aae168cbf2f":{"name":"forward","sourceUrl":null,"frameSize":{"x":90,"y":26},"frameCount":2,"looping":true,"frameDelay":12,"version":"t0iB1.4WQ5zur2icLQqyOSI0OifBjy.0","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":52},"rootRelativePath":"assets/21b83fe3-ae56-47ce-8260-1aae168cbf2f.png"},"206da760-356a-4498-bb85-a2f18afc97cf":{"name":"dedDino","sourceUrl":null,"frameSize":{"x":90,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"ehVi3Z0Q51qB.gH9TqsXx00bpF2rReD8","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":26},"rootRelativePath":"assets/206da760-356a-4498-bb85-a2f18afc97cf.png"},"49b5c734-1fd0-417d-9e82-b36f2f8bdd5a":{"name":"background","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":2,"looping":true,"frameDelay":12,"version":"bXm98EBlD7GwrmTAMLcamsd.LZSB3g.g","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/49b5c734-1fd0-417d-9e82-b36f2f8bdd5a.png"},"da5e826f-e061-4381-bf38-503f99bcd2c2":{"name":"fish1","sourceUrl":null,"frameSize":{"x":43,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"EZXhQX6PxLeBqF5d_U2minxxAzuMXhcL","loadedFromSource":true,"saved":true,"sourceSize":{"x":43,"y":32},"rootRelativePath":"assets/da5e826f-e061-4381-bf38-503f99bcd2c2.png"},"349cd3e4-40b8-4b5d-bc6d-e37bbdbbe2c0":{"name":"fish2","sourceUrl":null,"frameSize":{"x":43,"y":16},"frameCount":2,"looping":true,"frameDelay":12,"version":"7RqpZLo20NrzRzDZMZLWxWBK4pJ1L6Ob","loadedFromSource":true,"saved":true,"sourceSize":{"x":43,"y":32},"rootRelativePath":"assets/349cd3e4-40b8-4b5d-bc6d-e37bbdbbe2c0.png"},"7673557d-7adf-4b7e-b8ce-d7a10072029c":{"name":"missle","sourceUrl":null,"frameSize":{"x":71,"y":34},"frameCount":2,"looping":true,"frameDelay":12,"version":"NpNQn7m1j919wYpEhNxWOxtzQJTTjslc","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":68},"rootRelativePath":"assets/7673557d-7adf-4b7e-b8ce-d7a10072029c.png"},"b296cb72-17c5-421a-8550-291376908471":{"name":"healthBar3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"uSWDoA8ZLmUnLzr370SSlDv751Y_WRLM","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b296cb72-17c5-421a-8550-291376908471.png"},"1d088526-a0f2-42aa-830a-25524b7fdf97":{"name":"healthBar2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"PS5T_i8n5Ti4wgDcmA3421FUMqrNH8Ax","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1d088526-a0f2-42aa-830a-25524b7fdf97.png"},"39168069-98ae-4f88-8079-c280a649378d":{"name":"healthBar1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"1re_Mh20wchltlV1_DKbAhGXRHpUtE6H","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/39168069-98ae-4f88-8079-c280a649378d.png"},"aee36ced-c018-4a8a-b79a-97067fa1613b":{"name":"dead","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ELAU1KnDCfPbuPboWtoeoMk_4xIsSrnY","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/aee36ced-c018-4a8a-b79a-97067fa1613b.png"},"3c2b3ad5-605c-4527-8c47-12b50f85a6a3":{"name":"puffFish","sourceUrl":null,"frameSize":{"x":32,"y":29},"frameCount":2,"looping":true,"frameDelay":12,"version":"utoRMoHrlaFM71A0SJqYM5ckw_YafdbD","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":58},"rootRelativePath":"assets/3c2b3ad5-605c-4527-8c47-12b50f85a6a3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Score which changes when dinosaur touches fish
var score = 0;
// Sprites used in program
var ocean = createSprite(200, 200);
ocean.setAnimation("background");
var healthBar = createSprite(40, 15);
healthBar.setAnimation("healthBar3");
var hp = 3;
var fishB = createSprite(400, randomNumber(0, 400));
fishB.setAnimation("fish1");
var fishO = createSprite(400, randomNumber(0, 400));
fishO.setAnimation("fish2");
var pufferFish = createSprite(400, randomNumber(0, 400));
pufferFish.setAnimation("puffFish");
var badMissle = createSprite(400, randomNumber(0, 400));
badMissle.setAnimation("missle");
var dinosaur = createSprite(200, 200);
dinosaur.setAnimation("forward");
//The sprite creation and set animations at first
function draw() {
  background(rgb(0,167,255,1));
  textSize(20);
  stroke("black");
  text("Score:" + score, 320, 30);
  //How hearts of health bar changes and how it affects game
  if (hp == 3) {
    dinosaurMovement();
    healthBar.setAnimation("healthBar3");
  }
  if (hp == 2) {
    dinosaurMovement();
    healthBar.setAnimation("healthBar2");
  }
  if (hp == 1) {
    dinosaurMovement();
    healthBar.setAnimation("healthBar1");
  }
  if (hp <= 0) {
    healthBar.setAnimation("dead");
    var deadDinosaur = createSprite(200, 200);
    deadDinosaur.x = dinosaur.x;
    deadDinosaur.y = dinosaur.y;
    deadDinosaur.setAnimation("dedDino");
    dinosaur.destroy();
  }
  //Other spirte movement and interactions
  fishB.x = fishB.x - 5;
  fishO.x = fishO.x - 5;
  pufferFish.x = pufferFish.x - 5;
  badMissle.x = badMissle.x - 8;
  if (pufferFish.isTouching(dinosaur)) {
    hp = hp - 1;
    pufferFish.x = 400;
    pufferFish.y = randomNumber(0, 400);
  } else {
    if (pufferFish.x === 0) {
      pufferFish.x = 400;
      pufferFish.y = randomNumber(0, 400);
    }
  }
  if (fishO.isTouching(dinosaur)) {
    score = score + 1;
    fishO.x = 400;
    fishO.y = randomNumber(0, 400);
  } else {
    if (fishO.x === 0) {
      fishO.x = 400;
      fishO.y = randomNumber(0, 400);
    }
  }
  if (fishB.isTouching(dinosaur)) {
    score = score + 1;
    fishB.x = 400;
    fishB.y = randomNumber(0, 400);
  } else {
    if (fishB.x === 0) {
      fishB.x = 400;
      fishB.y = randomNumber(0, 400);
    }
  }
  if (badMissle.isTouching(dinosaur)) {
    hp = hp - 2;
  } else {
    if (badMissle.x === 0) {
      badMissle.x = 400;
      badMissle.y = randomNumber(0, 400);
    }
  }
  drawSprites();
}
if (hp <= 0) {
  console.log("Game Over");
  console.log("Your Score:" + score);
}
function dinosaurMovement() {
  //dinosaur movement controls
  if (keyDown("d")) {
    dinosaur.x = dinosaur.x + 6;
    dinosaur.setAnimation("forward");
  }
  if (keyDown("e")) {
    dinosaur.setAnimation("biteRight");
  }
  if (keyDown("a")) {
    dinosaur.x = dinosaur.x - 6;
    dinosaur.setAnimation("back");
  }
  if (keyDown("q")) {
    dinosaur.setAnimation("biteLeft");
  }
  if (keyDown("s")) {
    dinosaur.y = dinosaur.y + 6;
  }
  if (keyDown("w")) {
    dinosaur.y = dinosaur.y - 6;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
