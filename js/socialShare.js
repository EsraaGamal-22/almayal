var shareItems = document.querySelectorAll(".social_share")
for (var i = 0; i < shareItems.length; i += 1) {
  shareItems[i].addEventListener("click", function share(e) {
    return JSShare.go(this)
  })
}
