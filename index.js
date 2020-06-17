let intervalId;

function addButtons() {
  const menuElement = document.getElementsByClassName("css-11sh1n2")[0];

  if (menuElement) {
    clearInterval(intervalId);
  } else {
    return;
  }

  let div = document.createElement("div");
  const url = window.location.href.split("/");
  const currentWidget = url[url.length - 1].split("--")[0];
  div.innerHTML = `<button id='btn-docs'>DHX ${
    currentWidget[0].toUpperCase() + currentWidget.slice(1)
  } documentation</button><button id='btn-trial'><span>Free trial</span></button>`;
  menuElement.after(div);

  const btnDocs = document.getElementById("btn-docs");
  btnDocs.addEventListener("click", function () {
    const url = window.location.href.split("/");
    const currentWidget = url[url.length - 1].split("--")[0];
    if (currentWidget === "combobox") {
      window.open("https://docs.dhtmlx.com/suite/combo__index.html", "_blank");
    } else if (currentWidget === "color-picker") {
      window.open("https://docs.dhtmlx.com/suite/colorpicker__index.html", "_blank");
    } else if (currentWidget === "time-picker") {
      window.open("https://docs.dhtmlx.com/suite/timepicker__index.html", "_blank");
    } else {
      window.open(`https://docs.dhtmlx.com/suite/${currentWidget}__index.html`, "_blank");
    }
  });

  const btnTrial = document.getElementById("btn-trial");
  btnTrial.addEventListener("click", function () {
    window.open("https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml", "_blank");
  });

  window.addEventListener("locationchange", function () {
    const url = window.location.href.split("/");
    const currentWidget = url[url.length - 1].split("--")[0];
    btnDocs.innerText = `DHX ${currentWidget[0].toUpperCase() + currentWidget.slice(1)} documentation`;
  });

  history.pushState = (f =>
    function pushState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("pushstate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    })(history.pushState);

  history.replaceState = (f =>
    function replaceState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("replacestate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    })(history.replaceState);

  window.addEventListener("popstate", () => {
    window.dispatchEvent(new Event("locationchange"));
  });
}

window.addEventListener("load", function () {
  intervalId = setInterval(addButtons, 100);
});
