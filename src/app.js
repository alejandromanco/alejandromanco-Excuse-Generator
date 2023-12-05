/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["figther", "raccon", "dog", "driver", "comedian", "monster"];
  let action = ["took my", "threw my", "stole my", "bit my", "punched my"];
  let possetion = ["homework", "toe", "car", "shoe", "cellphone"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let posIndex = Math.floor(Math.random() * possetion.length);
  let wheIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    "" +
    subject[subIndex] +
    "" +
    action[actIndex] +
    "" +
    possetion[posIndex] +
    "" +
    where[wheIndex]
  );
};
