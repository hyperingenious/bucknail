function modifyThumbnails() {
  // Removing the first and foremost ad-slot
  // const firstAdSlot = document
  //   .querySelector(".ytd-in-feed-ad-layout-renderer")
  //   .querySelector("ytd-display-ad-renderer");
  // firstAdSlot?.remove();

  const videoPreviewScreen = document.querySelectorAll(
    "ytd-rich-item-renderer"
  );
  const videoTitles = document.querySelectorAll("#video-title");

  // console.log(videoPreviewScreen.length, videoTitles.length);

  videoPreviewScreen.forEach((e, i) => {
    let theIndex;

    // conditioning for the ad that comes in the first grid of the videos
    if (videoPreviewScreen.length > videoTitles.length && i === 0) return;
    if (videoPreviewScreen.length > videoTitles.length && i > 0)
      theIndex = i - 1;
    if (videoPreviewScreen.length === videoTitles.length) theIndex = i;

    const thumbnail = e.querySelector("img");

    if (!thumbnail) return "no image found!";

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
    h1.textContent = videoTitles[theIndex].innerText;

    // Adding the class
    h1.classList.add("iamTheVideoTitle");

    // Append the h1 element to the parent
    thumbnailParent.appendChild(h1);

    // Remove the thumbnail element
    thumbnail.remove();
  });
}
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollPosition / totalHeight) * 100;

  console.log(scrollPercentage)
  if (scrollPercentage > 75) {
    modifyThumbnails();
  }
  return;
});

window.addEventListener("load", () => {
  setTimeout(() => {
    modifyThumbnails();
  }, 3000);
});
