var id;
function play(id){
  if(id == Harmony){
    var audio = document.getElementById("HarmonyAudio");
  }else if (id == NewbieMelody) {
    var audio = document.getElementById("NewbieMelodyAudio");
  }else if (id == CityOfTheDead) {
    var audio = document.getElementById("CityOfTheDeadAudio");
  }else if (id == Sphinx) {
    var audio = document.getElementById("SphinxAudio");
  }else if (id == PharaohsTomb) {
    var audio = document.getElementById("PharaohsTombAudio");
  }else if (id == OverToNardah) {
    var audio = document.getElementById("OverToNardahAudio");
  }else if(id == Scarab){
    var audio = document.getElementById("ScarabAudio");
  }else if (id == SunburnOne) {
    var audio = document.getElementById("SunburnOneAudio");
  }else if (id == SunburnTwo) {
    var audio = document.getElementById("SunburnTwoAudio");
  }else if (id == Dynasty) {
    var audio = document.getElementById("DynastyAudio");
  }else if (id == DesertHeat) {
    var audio = document.getElementById("DesertHeatAudio");
  }else if (id == DesertVoyage) {
    var audio = document.getElementById("DesertVoyageAudio");
  }else if (id == TheDesert) {
    var audio = document.getElementById("TheDesertAudio");
  }else if (id == TheGolem) {
    var audio = document.getElementById("TheGolemAudio");
  }else if (id == Egypt) {
    var audio = document.getElementById("EgyptAudio");
  }else if (id == ArabianThree) {
    var audio = document.getElementById("ArabianThreeAudio");
  }else if (id == ArabianOneOne) {
    var audio = document.getElementById("ArabianOneOneAudio");
  }else if (id == AlKharid) {
    var audio = document.getElementById("AlKharidAudio");
  }else if (id == DuelArena) {
    var audio = document.getElementById("DuelArenaAudio");
  }else if (id == ArabianOneTwo) {
    var audio = document.getElementById("ArabianOneTwoAudio");
  }else if (id == ArabianTwo) {
    var audio = document.getElementById("ArabianTwoAudio");
  }else if (id == Shine) {
    var audio = document.getElementById("ShineAudio");
  }else if (id == BanditCamp) {
    var audio = document.getElementById("BanditCampAudio");
  }
  if(audio.paused){
    audio.load();
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}

// Check if the mouse is draggin



// Don't use window.onLoad like this in production, because it can only listen to one function.
window.onload = function() {
  svgPanZoom('#RunescapeMap', {
    zoomEnabled: true,
    dblClickZoomEnabled: false,
    controlIconsEnabled: true

  });
};
/*
//This is the beginning of the section about fixing play after drag problem
  var element = document.getElementById('canvas');
  var flag = 0;

  element.addEventListener("mousedown", function() {
      flag = 0;
  }, false);

  element.addEventListener("mousemove", function() {
      flag = 1;
  }, false);

  element.addEventListener("mouseup", function() {
      if (flag === 0) {
          console.log( "Click" )
      } else if (flag === 1) {
          console.log( "Drag" );
      }
  }, false);
};
//This is the end of the section about fixing play after drag problem
*/
document.addEventListener('play', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
      }
  }
}, true);
