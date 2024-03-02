var tl = new TimelineMax({
  paused: true
}),
  topTopp = $("#top"),
  midLeft = $("#middle-left"),
  midMidd = $("#middle-middle"),
  midRigh = $("#middle-right"),
  botLeft = $("#bottom-left"),
  botMidd = $("#bottom-center"),
  botRigh = $("#bottom-right"),
  box     = $("#box"),
  tie     = $("#tie"),
  lid     = $("#lid"),
  dl      = $("#reveal-gift");

tl
  .to(midLeft, 0.25, { x: -500 })
  .to(botRigh, 0.25, { x:  500 })
  .to(botLeft, 0.25, { x: -500 })
  .to(midRigh, 0.25, { x:  500 })
  .to(topTopp, 0.25, { x:  500, y: 50 })
  .to(botMidd, 0.25, { x: -500, y: -50 })
  .to(midMidd, 0.25, { scale: 2, transformOrigin: "50% 50%" })
  .to(tie, 0.25, { opacity: 0 })
  .to(lid, 0.25, { rotate: -5, transformOrigin: "0 0", onComplete: done })
  .to(lid, 1.25, { x: 500, opacity: 0 })
  .to(box, 0.5, { y: 100 }, "-=1.25")
  .to(dl, 1, { y: -200, opacity: 1, scale: 1 });

$("#gimme").on("click", function() {
  tl.play();
  $(this).remove();
});

function done() {
  $("h1").text("SEMOGAA SUKAAA YAA SAYANGGKUU BOX DARI AKUU");
}