export function openModal(modalId: string) {
  const modalOverlay = document.getElementById(modalId)!;

  modalOverlay.style.right = "0";
}

export function closeModal(modalId: string) {
  const modalOverlay = document.getElementById(modalId)!;

  modalOverlay.style.right = "-360px";
}
