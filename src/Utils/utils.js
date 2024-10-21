export function loadMainJS() {
    const script = document.createElement("script");
  
      script.src = "assets/js/main.js";
      script.async = true;
  
      document.body.appendChild(script);
}