const lib = require("alib");

Events.on(SectorCaptureEvent, event => {
  // loads example.mp3
  const mySound = lib.loadSound("bcs");
  // engine will spawn this sound at this location (X,Y)
  mySound.at(1, 1);
});
