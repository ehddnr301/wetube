import axios from "axios";
const addCommentForm = document.getElementById(
  "jsAddComment"
) as HTMLFormElement;
const commentList = document.getElementById("jsCommentList") as HTMLSpanElement;
const commentNumber = document.getElementById(
  "jsCommentNumber"
) as HTMLUListElement;
const deleteBtn = document.getElementsByClassName("jsDeleteBtn");

const increaseNumber = () => {
  commentNumber.innerHTML = (
    parseInt(commentNumber.innerHTML, 10) + 1
  ).toString();
};

const handleDelete = (event: any) => {
  const commentId = window.location.href;
  console.log("hi", commentId);
};

const addComment = (comment: string) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("span");
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", handleDelete);
  span.innerHTML = comment;
  li.appendChild(span);
  li.appendChild(delBtn);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment: string) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = (event: any) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  for (let i: number; i < deleteBtn.length; i++) {
    console.log(deleteBtn[i]);
  }
}

if (addCommentForm && deleteBtn) {
  init();
}
