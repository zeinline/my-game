var Global_Menu = {
  name: "name",
  version: "v 0",
  size: "0 mb"
};

var All_Game = {
  name: "All Game",
  version: "v 1.0",
  size: "13.1 mb"
};

var Zodiacs = {
  name: "Zodiacs",
  version: "v 1.0",
  size: "12.3 mb"
};

window.onload = function() {
  //bt_win_l(0);
}

function bt_win_l (indexGame) {
  document.getElementById("nameGame").innerHTML = (All_Game.name);
  document.getElementById("versionGame").innerHTML = (All_Game.version);
  document.getElementById("sizeGame").innerHTML = (All_Game.size);
}
