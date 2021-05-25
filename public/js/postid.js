const goPost = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    document.location.replace(`/post/${id}`);
  }
};

document.querySelector(".posts").addEventListener("click", goToPost);