var id;
function play(id){
  if(id == HyruleField){
    var audio = document.getElementById("HyruleFieldAudio");
  }else if (id == Market) {
    var audio = document.getElementById("MarketAudio");
  }else if (id == TempleOfTime) {
    var audio = document.getElementById("TempleofTimeAudio");
  }else if (id == HyruleCastle) {
    var audio = document.getElementById("HyruleCastleAudio");
  }else if (id == GerudoValley) {
    var audio = document.getElementById("GerudoValleyAudio");
  }else if (id == DekuTree) {
    var audio = document.getElementById("DekuTreeAudio");
  }else if(id == LonLonRanch){
    var audio = document.getElementById("LonLonRanchAudio");
  }else if (id == KokiriForest) {
    var audio = document.getElementById("KokiriForestAudio");
  }else if (id == KakarikoVillage) {
    var audio = document.getElementById("KakarikoVillageAudio");
  }else if (id == WindmillHut) {
    var audio = document.getElementById("WindmillHutAudio");
  }else if (id == ZorasDomain) {
    var audio = document.getElementById("ZorasDomainAudio");
  }else if (id == GoronCity) {
    var audio = document.getElementById("GoronCityAudio");
  }else if (id == LostWoods) {
    var audio = document.getElementById("LostWoodsAudio");
  }else if (id == TitleTheme) {
    var audio = document.getElementById("TitleThemeAudio");
  }
  if(audio.paused){
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}

    // Don't use window.onLoad like this in production, because it can only listen to one function.
    window.onload = function() {
      svgPanZoom('#OOTMap', {
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
