for (i = 0; i < info.downloadData.downloads.length; i++) {
  document.getElementById("r2").innerHTML += `
  <div>
    <div>${info.downloadData.downloads[i].text}</div>
    <img  onclick="window.location.href = '${info.downloadData.downloads[i].link}'" src="${info.downloadData.downloadButton}">
  </div>
  `;
}
document.getElementById("r3").innerHTML = `
<img src="${info.downloadData.tutorial.icon}">
<a href="${info.downloadData.tutorial.redirect}">${info.downloadData.tutorial.text}</a>
`;

//adbloker check
main = document.getElementById("main");
Ad = document.getElementById("main");
Ad.className = "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox";
width = Ad.offsetHeight;
if (!width) {
  main.className = "main";
  main.innerHTML =
    "Please remove adblocker.<br> If you do not disable adblocker,<br> we won't be able to continue our project<br> because that's the only way we can keep our services<br> like our website and discord bot running.<br>If you removed your adblocker please refresh the page";
  main.style.display = "flex";
  main.style.alignItems = "center";
  main.style.justifyContent = "center";
  main.style.textAlign = "center";
  main.style.fontSize = "20px";
}
// };
