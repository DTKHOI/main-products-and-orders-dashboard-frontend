// 1. Điều khiển đóng/mở Modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  // Hiển thị và cho phép click chuột
  modal.classList.remove("invisible");
  modal.classList.add("visible");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  // Ẩn đi và tắt hoàn toàn khả năng bắt sự kiện chuột
  modal.classList.remove("visible");
  modal.classList.add("invisible");
}

// Đóng khi click vào vùng nền mờ bên ngoài hộp thoại
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-overlay")) {
    closeModal(e.target.id);
  }
});
