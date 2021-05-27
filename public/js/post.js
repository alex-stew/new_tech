const newPostHandler= async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;
  
    console.log(title, content);

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
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


const createPostEl = document.querySelector("#create-post-form");

    if (createPostEl) {
      createPostEl.addEventListener("submit", newPostHandler);
    }
  