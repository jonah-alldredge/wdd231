import "./shared.js";

const joinForm = document.querySelector("#join-form");
const summary = document.querySelector(".summary");

if (joinForm) {
  joinForm.addEventListener("submit", () => {
    const formData = new FormData(joinForm);
    const signup = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      likes: formData.getAll("likes")
    };
    try {
      localStorage.setItem("knectSignup", JSON.stringify(signup));
    } catch (error) {
      console.error("Could not save signup info:", error);
    }
  });
}

if (summary) {
  const params = new URLSearchParams(window.location.search);

  let info = {
    firstName: params.get("firstName"),
    lastName: params.get("lastName"),
    phone: params.get("phone"),
    email: params.get("email"),
    likes: params.getAll("likes")
  };

  if (!params.has("email")) {
    try {
      const saved = JSON.parse(localStorage.getItem("knectSignup"));
      if (saved) {
        info = saved;
      }
    } catch (error) {
      console.error("Could not read saved signup info:", error);
    }
  }

  let likesText = "None selected";
  if (info.likes.length > 0) {
    likesText = info.likes.join(", ");
  }

  const rows = [
    ["First name", info.firstName],
    ["Last name", info.lastName],
    ["Phone", info.phone],
    ["Email", info.email],
    ["Likes", likesText]
  ];

  rows.forEach(([label, value]) => {
    const term = document.createElement("dt");
    const detail = document.createElement("dd");
    term.textContent = label;
    detail.textContent = value || "Not provided";
    summary.append(term, detail);
  });
}