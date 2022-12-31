document.getElementById("r115").innerHTML = `
<button onclick="window.location.href = '${info.homeData.main.button.link}'">${info.homeData.main.button.text}</button>
<button id="bt1" onclick="window.location.href = '${info.homeData.main.button1.link}'">${info.homeData.main.button1.text}</button>
`;
for (i = 0; i < info.homeData.features.length; i++) {
  document.getElementById("r2").innerHTML += `
  <div>
    <img src="${info.homeData.features[i].image}">
    <div class="ftHed">${info.homeData.features[i].title}</div>
    <div id="hr"></div>
    <div class="ftDesc">${info.homeData.features[i].description}</div>
  </div>
  `;
}
