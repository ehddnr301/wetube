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
const decreaseNumber = () => {
  commentNumber.innerHTML = (
    parseInt(commentNumber.innerHTML, 10) - 1
  ).toString();
};

const deleteCo = (e: any) => {
  const targetComment = e.target.parentNode;
  if (targetComment) {
    targetComment.remove();
    decreaseNumber();
  }
};

const handleDelete = async (event: any) => {
  const commentId = event.target.id;
  const response = await axios({
    url: `/api/${commentId}`,
    method: "delete"
  });
  if (response.status === 200) {
    deleteCo(event);
  }
};

const addComment = (comment: string) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
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
  for (let i: number = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", handleDelete);
  }
}

if (addCommentForm && deleteBtn) {
  init();
}
