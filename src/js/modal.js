// 1. Mở modal: gỡ bỏ class 'hidden'
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
    // Khóa cuộn trang khi mở modal (tuỳ chọn)
    document.body.classList.add("overflow-hidden");
  }
}

// 2. Đóng modal: thêm lại class 'hidden'
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
    // Mở lại cuộn trang
    document.body.classList.remove("overflow-hidden");
  }
}

// 3. Xử lý đóng modal khi click ra ngoài nền mờ (loại bỏ window.addEventListener)
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal-overlay");

  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      // Chỉ đóng khi click đích danh vào phần nền đen (e.target === modal)
      // Không đóng nếu click vào khung trắng của form bên trong
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });
});
