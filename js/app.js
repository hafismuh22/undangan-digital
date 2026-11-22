const params = new URLSearchParams(window.location.search);
const guestCode = (params.get("to") || "").trim().toLowerCase();
const guestName = window.GUESTS[guestCode] || "Tamu Undangan";
document.getElementById("guestName").textContent = guestName;

document.getElementById("openInvitation").addEventListener("click", () => {
  const content = document.getElementById("details");
  content.classList.add("show");
  content.scrollIntoView({ behavior: "smooth" });
});
