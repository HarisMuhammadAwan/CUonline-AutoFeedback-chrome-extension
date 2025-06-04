// Developed by Muhammad Haris to assist students in filling feedback forms on CUOnline.
(function () {
  console.log("Auto Feedback Extension Running...");

  // Random star rating between 3 to 5
  const randomStar = () => Math.floor(Math.random() * 3) + 3;

  // Fill all star groups
  const starGroups = document.querySelectorAll(".rating");

  starGroups.forEach((group) => {
    const stars = group.querySelectorAll("input[type='radio']");
    const rating = randomStar();
    const star = Array.from(stars).find(r => r.value == rating);
    if (star) star.checked = true;
  });

  // Fill comment
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.value = "The course was insightful and well delivered.";
  }

  console.log("Feedback filled.");
})();
