import { fetchData } from "./utils.js";
const url = "https://api.adviceslip.com/advice";
const diceButton = document.querySelector("#dice");
const adviceText = document.querySelector("#advice");
const quoteText = document.querySelector("#quote");

const fetchQuote = async (url) => {
  //reset error styles
  adviceText.classList.remove("error");
  quoteText.classList.remove("error");
  diceButton.classList.add("load");
  //fetch data
  const data = await fetchData(url);

  if (typeof data === "string") {
    adviceText.classList.add("error");
    quoteText.classList.add("error");
    adviceText.innerHTML = `REQUEST FAILED`;
    quoteText.innerHTML = data;
    return;
  }

  //destructuring slip object from data
  const { id, advice } = data["slip"];
  //change text
  adviceText.innerHTML = `A D V I C E # ${id}`;
  quoteText.innerHTML = `“${advice}”`;
  const timeOut = setTimeout(() => {
    clearTimeout(timeOut);
    diceButton.classList.remove("load");
  }, 2000);
};

diceButton.addEventListener("click", () => fetchQuote(url));

fetchQuote(url);
