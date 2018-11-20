client.on("ready", () => {
  function lol() {
    client.guilds.get('504700317686824960').roles.find("name", "!Mc Community RainBow").setColor("RANDOM");
  };
  setInterval(lol, 1600);
});
