// Array containing comment data

const commentData = [
  {
    id: 1,
    name: "Connor Walton",
    timestamp: "02/17/2021",
    comment:
      "This is art. This is This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains",
  },
  {
    id: 2,
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were ust perfection. If there was one day of my life I could relive, this would be it. What an incredible day",
  },
  {
    id: 3,
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// Get the comments container and the form element from the HTML

const commentsContainer = document.getElementById("comments-container");
const form = document.querySelector("form");

// Function to create and display a comment element


function displayComment(comment) {
  // Create the main comment element and its sub-elements

  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  const leftElement = document.createElement("div");
  leftElement.classList.add("comment__left");

  const ImgElement = document.createElement("div");
  ImgElement.classList.add("comment__image");

  const rightElement = document.createElement("div");
  rightElement.classList.add("comment__right");

  const rightHeader = document.createElement("div");
  rightHeader.classList.add("comment__right__header");

  const nameElement = document.createElement("h4");
  nameElement.classList.add("comment__name");
  nameElement.textContent = comment.name;

  const timestampElement = document.createElement("p");
  timestampElement.classList.add("comment__timestamp");
  timestampElement.textContent = comment.timestamp;

  const commentTextElement = document.createElement("p");
  commentTextElement.classList.add("comment__text");
  commentTextElement.textContent = comment.comment;

  //Add the elements to their respective containers

  leftElement.appendChild(ImgElement);
  rightHeader.appendChild(nameElement);
  rightHeader.appendChild(timestampElement);
  rightElement.appendChild(rightHeader);
  rightElement.appendChild(commentTextElement);

  commentElement.appendChild(leftElement);
  commentElement.appendChild(rightElement);
  // Insert the comment at the top of the comments container

  // commentsContainer.appendChild(commentElement);
  commentsContainer.prepend(commentElement);

}

// Function to add a new comment


function addComment(event) {
  // Prevent the default form submission behavior

  event.preventDefault();
  // Get the input elements for the name and the comment text

  const nameInput = document.querySelector(".comments__form-input");
  const commentInput = document.querySelector(".comments__form-textarea");
  // Create a new comment object

  const newComment = {
    id: commentData.length + 1,
    name: nameInput.value,
    timestamp: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    comment: commentInput.value,
  };
  // Add the new comment to the commentData array

  commentData.unshift(newComment);
  // Display the new comment and clear the input fields

  displayComment(newComment);
  nameInput.value = "";
  commentInput.value = "";
}
// Display existing comments

commentData.forEach(displayComment);
// Add an event listener to handle the form submission

form.addEventListener("submit", addComment);
