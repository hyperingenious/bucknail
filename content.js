function modifyThumbnails() {
  // Removing the first and foremost ad-slot
  const firstAdSlot = document.querySelector(
    ".ytd-in-feed-ad-layout-renderer"
  );
  firstAdSlot && firstAdSlot.remove();

  const videoPreviewScreen = document.querySelectorAll(
    "ytd-rich-item-renderer"
  );
  const videoTitles = document.querySelectorAll("#video-title");

  videoPreviewScreen.forEach((e, i) => {
    const thumbnail = e.querySelector("img");
    const thumbnailParent = thumbnail.parentElement;

    // making title center
    thumbnailParent.style.display = "flex";
    thumbnailParent.style.height = "100%";
    thumbnailParent.style.justifyContent = "center";
    thumbnailParent.style.alignItems = "center";

    // Create an h1 element
    const h1 = document.createElement("h1");
    h1.style.textAlign = "center";

    // adding the title to h1
    h1.textContent = videoTitles[i].innerText;

    // Adding the class
    h1.classList.add("iamTheVideoTitle");

    // Append the h1 element to the parent
    thumbnailParent.appendChild(h1);

    // Remove the thumbnail element
    thumbnail.remove();
  });
}
// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;
//   const totalHeight =
//     document.documentElement.scrollHeight - window.innerHeight;
//   const scrollPercentage = (scrollPosition / totalHeight) * 100;

//   if (scrollPercentage > 80) {
//   }
//   return;
// });

window.addEventListener("load", () => {
  setTimeout(() => {
    modifyThumbnails();
  }, 5000);
});
