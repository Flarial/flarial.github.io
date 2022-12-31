for (i = 0; i < info.faqData.faqs.length; i++) {
  document.getElementById("r2").innerHTML += `
    <div id="r2${i + 1}">
        <div id="r2${i + 1}1" class="faqhead">
            <div id="r2${i + 1}11">${info.faqData.faqs[i].header}</div>
            <img class="r2${i + 1}" src="${info.faqData.imgs.open}" onclick="faqExp(this)">
        </div>
        <div id="r2${i + 1}2" class="faqdesc">${info.faqData.faqs[i].desc}</div>
    </div>
  `;
}

faqExp = (e) => {
  console.log();
  if (e.getAttribute("src") == `${info.faqData.imgs.open}`) {
    document.getElementById(`${e.className}2`).style.display = "block";
    document.getElementById(`${e.className}1`).style.borderBottomLeftRadius = 0;
    document.getElementById(`${e.className}1`).style.borderBottomRightRadius = 0;
    e.src = `${info.faqData.imgs.close}`;
  } else {
    document.getElementById(`${e.className}2`).style.display = "none";
    document.getElementById(`${e.className}1`).style.borderRadius = "8px";
    e.src = `${info.faqData.imgs.open}`;
  }
};
