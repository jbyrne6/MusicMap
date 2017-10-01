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
  }else if (id == Scarab){
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
  }else if (id == InTheBrine) {
    var audio = document.getElementById("InTheBrineAudio");
  }else if (id == DistantLand) {
    var audio = document.getElementById("DistantLandAudio");
  }else if (id == ShadowlandOne) {
    var audio = document.getElementById("ShadowlandOneAudio");
  }else if (id == ShadowlandTwo) {
    var audio = document.getElementById("ShadowlandTwoAudio");
  }else if (id == DanceOfTheUndead) {
    var audio = document.getElementById("DanceOfTheUndeadAudio");
  }else if (id == BoneDance) {
    var audio = document.getElementById("BoneDanceAudio");
  }else if (id == Stagnant) {
    var audio = document.getElementById("StagnantAudio");
  }else if (id == Natural) {
    var audio = document.getElementById("NaturalAudio");
  }else if (id == Venture) {
    var audio = document.getElementById("VentureAudio");
  }else if (id == StillNight) {
    var audio = document.getElementById("StillNightAudio");
  }else if (id == Expanse) {
    var audio = document.getElementById("ExpanseAudio");
  }else if (id == AutumnVoyage) {
    var audio = document.getElementById("AutumnVoyageAudio");
  }else if (id == Yesteryear) {
    var audio = document.getElementById("YesteryearAudio");
  }else if (id == Waterlogged) {
    var audio = document.getElementById("WaterloggedAudio");
  }else if (id == Deadlands) {
    var audio = document.getElementById("DeadlandsAudio");
  }else if (id == TheOtherSide) {
    var audio = document.getElementById("TheOtherSideAudio");
  }else if (id == DragontoothIsland) {
    var audio = document.getElementById("DragontoothIslandAudio");
  }else if (id == Shipwrecked) {
    var audio = document.getElementById("ShipwreckedAudio");
  }else if (id == FenkenstrainsRefrain) {
    var audio = document.getElementById("FenkenstrainsRefrainAudio");
  }else if (id == Village) {
    var audio = document.getElementById("VillageAudio");
  }else if (id == TheTerribleTower) {
    var audio = document.getElementById("TheTerribleTowerAudio");
  }else if (id == Morytania) {
    var audio = document.getElementById("MorytaniaAudio");
  }else if (id == DeadQuiet) {
    var audio = document.getElementById("DeadQuietAudio");
  }else if (id == Forbidden) {
    var audio = document.getElementById("ForbiddenAudio");
  }else if (id == Parade) {
    var audio = document.getElementById("ParadeAudio");
  }else if (id == Lullaby) {
    var audio = document.getElementById("LullabyAudio");
  }else if (id == Medieval) {
    var audio = document.getElementById("MedievalAudio");
  }else if (id == Adventure) {
    var audio = document.getElementById("AdventureAudio");
  }else if (id == Garden) {
    var audio = document.getElementById("GardenAudio");
  }else if (id == CrystalSword) {
    var audio = document.getElementById("CrystalSwordAudio");
  }else if (id == Underground) {
    var audio = document.getElementById("UndergroundAudio");
  }else if (id == Dark) {
    var audio = document.getElementById("DarkAudio");
  }else if (id == Witching) {
    var audio = document.getElementById("WitchingAudio");
  }else if (id == Dangerous) {
    var audio = document.getElementById("DangerousAudio");
  }else if (id == ScapeSad) {
    var audio = document.getElementById("ScapeSadAudio");
  }else if (id == EverlastingFire) {
    var audio = document.getElementById("EverlastingFireAudio");
  }else if (id == Regal) {
    var audio = document.getElementById("RegalAudio");
  }else if (id == Faithless) {
    var audio = document.getElementById("FaithlessAudio");
  }

  if(audio.paused){
    audio.load();
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}

// Don't use window.onLoad like this in production, because it can only listen to one function.
window.onload = function() {
  svgPanZoom('#RunescapeMap', {
    zoomEnabled: true,
    dblClickZoomEnabled: false,
    controlIconsEnabled: true

  });
};

document.addEventListener('play', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
      }
  }
}, true);
