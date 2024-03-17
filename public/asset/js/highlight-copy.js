document.addEventListener("DOMContentLoaded", function () {
  // add <pre> in each <code>
  const codeElements = document.querySelectorAll("code:not(pre > code)");
  codeElements.forEach((code) => {
    const pre = document.createElement("pre");
    code.parentNode.insertBefore(pre, code);
    pre.appendChild(code);
    // clear early whitespace
    code.textContent = code.textContent.replace(/^\s+/, "");
  });
  // add copy button
  const preCode = document.querySelectorAll("pre > code");
  preCode.forEach((codeBlock) => {
    const preElement = codeBlock.parentNode;
    preElement.style.position = "relative";
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
        .writeText(codeBlock.textContent)
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

    preElement.appendChild(btn);
  });
});
