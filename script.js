const pageShell = [...document.querySelectorAll("[data-page-shell]")];

document.querySelectorAll("[data-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.dialog);
    if (!dialog) return;

    pageShell.forEach((element) => element.setAttribute("inert", ""));
    dialog.showModal();
    const firstAction = dialog.querySelector(".dialog-contact");
    firstAction?.focus({ preventScroll: true });
  });
});

document.querySelectorAll(".case-dialog").forEach((dialog) => {
  const closeButton = dialog.querySelector("[data-close-dialog]");
  closeButton?.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    pageShell.forEach((element) => element.removeAttribute("inert"));
    const opener = document.querySelector(`[data-dialog="${dialog.id}"]`);
    opener?.focus({ preventScroll: true });
  });
});
