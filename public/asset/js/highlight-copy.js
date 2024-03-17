document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll("pre");

  codeBlocks.forEach((block) => {
    block.style.position = "relative";
    const btn = document.createElement("button");
    btn.textContent = "Copy";
    btn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        width: 50px;
        background-color: #3945C6;
        color: white;
        border: none;
        border-radius: 3px;
        font-size: 12px;
      `;
      
    btn.addEventListener("click", function () {
      navigator.clipboard
        .writeText(block.querySelector("code").textContent)
        .then(() => {
          btn.textContent = "Copied!";
          btn.style.width = "70px";
          setTimeout(() => {
            btn.textContent = "Copy";
            btn.style.width = "50px";
          }, 1000);
        })
        .catch((err) => console.error("Error copying text: ", err));
    });

    block.appendChild(btn);
  });
});
