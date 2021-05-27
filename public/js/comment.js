const newComment = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector('#comment-content').value;
    const post_id = event.target.dataset.id;

    response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({ 
          content, 
          post_id 
        }),
        headers: {
          "Content-Type": "application/json",
        },
    });
      if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("please try again later");
    }
};

const commentBtnEl = document.querySelector("#commentBtn");

if (commentBtnEl) {
  commentBtnEl.addEventListener("click", newComment);
}
  