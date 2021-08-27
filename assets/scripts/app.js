(function () {
  const buildUrl = "Build";
  const loaderUrl = buildUrl + "/Build/Build.loader.js";
  const config = {
    dataUrl: buildUrl + "/Build/Build.data",
    frameworkUrl: buildUrl + "/Build/Build.framework.js",
    codeUrl: buildUrl + "/Build/Build.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "Unity-Sammanslaget-2021",
    productVersion: "1.0",
  };
  setTimeout(function () {
    document.querySelector(".sorrybro").remove();
  }, 5000);
  const container = document.querySelector("#unity-container");
  const canvas = document.querySelector("#unity-canvas");
  const loadingBar = document.querySelector("#unity-loading-bar");
  const progressBarFull = document.querySelector("#unity-progress-bar-full");
  const fullscreenButton = document.querySelector("#unity-fullscreen-button");

  canvas.style.width = "900px";
  canvas.style.height = "500px";

  loadingBar.style.display = "block";

  const script = document.createElement("script");
  script.src = loaderUrl;
  script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
      progressBarFull.style.width = 100 * progress + "%";
    })
      .then((unityInstance) => {
        loadingBar.style.display = "none";
        fullscreenButton.onclick = () => {
          unityInstance.SetFullscreen(1);
        };
      })
      .catch((message) => {
        alert(message);
      });
  };
  document.body.appendChild(script);
})();
