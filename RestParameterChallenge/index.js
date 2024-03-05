function getLabelsHtml(text, sender, ...workerNames) {
  const names = workerNames
    .map(
      (workerName) =>
        `
<div class="label-card">
     <p>Dear ${workerName.name} </p>
     <p>${text}</p>
     <p>Best wishes,</p>
     <p>${sender}</p>
 </div>

`
    )
    .join("");
  return names;
}

const text = "Thank you for all your hard work throughout the year! 🙏🎁";
const sender = "Tom";

document.getElementById("labels-container").innerHTML = getLabelsHtml(
  text,
  sender,
  { name: "Sally" },
  { name: "Mike" },
  { name: "Rob" },
  { name: "Harriet" }
);
