const dicebtn = document.querySelector(".dice");
const advice = document.querySelector("#advice");
const adviceID = document.querySelector("#advice-id span");

async function getAdvice() {
  const baseUrl = "https://api.adviceslip.com/advice";
  const result = await fetch(baseUrl, { mode: "cors" });
  const response = await result.json();
  advice.innerText = `"${response.slip.advice}"`;
  adviceID.innerText = response.slip.id;
}

getAdvice();
dicebtn.addEventListener("click", getAdvice);
