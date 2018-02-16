var imageNames = [
  "corey-chewie",
  "corey-george",
  "corey-soccer2",
  "corey-hawaii",
  "corey-snowboard3",
  "corey-snowboard2",
  "corey-soccer1",
  "corey-painting",
  "corey-puppies",
  "corey-snowboard1",
  "corey-soccer-goal",
  "corey-team",
  "corey-timbers",
  "corey-windsurf",
  "corey-snowboard4",
  "psu-soccer-coach",
  "psu-soccer1",
  "psu-soccer2"
]

module.exports = imageNames.map((name) => {
  return "https://s3-us-west-2.amazonaws.com/cslwebsite/carousel/" + name + ".jpg"
});




