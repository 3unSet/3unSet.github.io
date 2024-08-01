var posts=["2024/07/04/hello-world/","2024/07/28/HJM/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };