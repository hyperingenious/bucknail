setTimeout(() => {
  console.log("hey I am working");
  const videos = document.querySelectorAll("ytd-rich-item-renderer");
  console.log(videos);

  videos.forEach((e) => {
    const img = e.querySelector("img");
    const imgParent = img.parentElement;

    // Create an h1 element
    const h1 = document.createElement("h1");

    // Adding the class
    h1.classList.add("iamTheVideoTitle");

    h1.textContent = "This is the image title";

    // Append the h1 element to the parent
    imgParent.appendChild(h1);

    // Adding text to title
    h1.innerText = "This is the video title";

    // Remove the img element
    img.remove();
  });
}, 5000);
