const deletePostHandler = async (event) => {
    event.preventDefault();
  
    let post_id = event.target.dataset.id;
  
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
  };

const deletePostBtnEl = document.querySelector("#deletePostBtn");

    if (deletePostBtnEl) {
        deletePostBtnEl.addEventListener("click", deletePostHandler);
    }
  