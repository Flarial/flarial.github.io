//fonts
for (i = 0; i < info.fonts.length; i++) {
  document.querySelector("head").innerHTML += info.fonts[i];
}

//navBar
displayNav = () => {
  nav = `
      <a href="/home">
          <img src="${info.navData.leftPart.logo}" />
          <span>
            <span id="nvtxt1">${info.navData.leftPart.text1}</span>
            <span>${info.navData.leftPart.text2}</span>
          </span>
      </a>
      <div id="nav2">
  `;
  navContent = info.navData.rightPart;
  navContentKeys = Object.keys(navContent);
  wL = window.location.pathname;
  for (i = 0; i < navContentKeys.length; i++) {
    inlineStyle = "";
    redirect = navContent[navContentKeys[i]];
    rd1 = redirect.slice(0, -5);
    if (redirect == wL || rd1 == wL || (redirect == navContent.Home && wL == "/")) {
      if (window.innerWidth < navContentKeys.length * 160) {
        inlineStyle = `style="background:#873BFC; padding:10px; width: 80%; text-align: center; border-radius: 10px;"`;
      } else inlineStyle = `style="color:white; font-weight:700;"`;
    }
    nav += `<a ${inlineStyle} href="${redirect}">${navContentKeys[i]}</a>`;
  }
  nav += `</div>`;
  document.getElementById("nav").innerHTML = nav;
};
displayNav();

//responsive nav (a mess)
nav2 = document.getElementById("nav2").innerHTML;
if (window.innerWidth < navContentKeys.length * 160) {
  document.getElementById("nav2").innerHTML = `<img src="/assets/bar.svg" onclick="navdisplay()">`;
}
window.addEventListener("resize", () => {
  displayNav();
  nav2 = document.getElementById("nav2").innerHTML;
  if (document.querySelector("#rNav")) document.getElementById("rNav").parentNode.removeChild(document.getElementById("rNav"));
  if (window.innerWidth < navContentKeys.length * 160) {
    document.getElementById("nav2").innerHTML = `<img src="/assets/bar.svg" onclick="navdisplay()">`;
  } else {
    document.getElementById("nav2").innerHTML = nav2;
  }
});
navdisplay = () => {
  if (!document.querySelector("#rNav")) {
    B = document.body;
    H = document.documentElement;
    document.querySelector("body").innerHTML += `<div id='rNav'>${nav2}</div>`;
    document.querySelector("#rNav").style.height = `${Math.max(B.scrollHeight, B.offsetHeight, H.clientHeight, H.scrollHeight, H.offsetHeight) - 90}px`;
  } else document.getElementById("rNav").parentNode.removeChild(document.getElementById("rNav"));
};

//footer
footer = `
    <div id="mainFooter">
      <img src="${info.footerData.main.logo}" />
      <span id="fHead">${info.footerData.main.text}</span>
      <span id="copyright">${info.footerData.main.copyright}</span>
    </div>
    <div id="links">
    
    <span id="fHead1">Links</span>
    <div>
    <div id="leftPart">
`;
leftF = info.footerData.linksLeft;
leftFKeys = Object.keys(leftF);
for (i = 0; i < leftFKeys.length; i++) {
  footer += `<a href="${leftF[leftFKeys[i]]}">${leftFKeys[i]}</a>`;
}
footer += `
    </div>
    <div id="rightPart">
`;
rightF = info.footerData.linksRight;
rightFKeys = Object.keys(rightF);
for (i = 0; i < rightFKeys.length; i++) {
  footer += `<a href="${rightF[rightFKeys[i]]}">${rightFKeys[i]}</a>`;
}
footer += `
      </div>
    </div>
    </div>
`;
document.getElementById("footer").innerHTML = footer;

//main data
document.getElementById("r111").innerText = info.homeData.main.texts.txt1;
document.getElementById("r112").innerText = info.homeData.main.texts.txt2;
document.getElementById("r113").innerText = info.homeData.main.texts.txt3;
for (i = 0; i < info.homeData.main.keypoints.length; i++) {
  document.getElementById("r114").innerHTML += `<div><img src="${info.homeData.main.keypointsImg}"><span>${info.homeData.main.keypoints[i]}</span></div>`;
}
