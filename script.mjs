// Code for BardAPI
import Bard, { askAI } from "bard-ai";

// var platform = document.getElementById("platform").value;
// var name = document.getElementById("name").value;
// var description = document.getElementById("desc").value;
// var role = document.getElementById("role").value;
// var price = document.getElementById("price").value;
// var experience = document.getElementById("experience").value;
// var pastwork = document.getElementById("pastwork").value;
// var link = document.getElementById("link").value;
// var goodfit = document.getElementById("goodfit").value;
// var words = document.getElementById("words").value;

var prompt =
  "${description} I am going to apply for this job. write me an attractive proposal for ${platform} in about ${words} with given details. 1) ${name} 2) Role ${role} 3)  price ${price} 4) I have ${experience} Years of experience in this field. 5) Attached Past works ${pastwork} 6) link for the portfolio ${portfolio}. I am good fit for this job because ${goodfit}. Write me an attactive proposal with this details. Write it about 150 words. End with strong CTA";

await Bard.init(
  "XQiIjGefHBGXO_fJH7_H9WpGimggRbpseEJOaQQugmoDjZLaUS2Tr1Dw_HKnrarPFCFInQ."
);

console.log(await askAI(prompt));
