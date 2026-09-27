document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("staff-form");
  if (!form) return;

  // Regex kiểm tra mật khẩu: >=8 ký tự, ít nhất 1 hoa, 1 thường, 1 số, 1 ký tự đặc biệt
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  // Regex kiểm tra email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Regex kiểm tra số điện thoại (10 số bắt đầu bằng 0)
  const phoneRegex = /^0\d{9}$/;

  const fields = [
    {
      input: document.getElementById("staff_name"),
      validate: (val) => val.trim().length > 0,
    },
    {
      input: document.getElementById("staff_id"),
      validate: (val) => val.trim().length > 0,
    },
    {
      input: document.getElementById("staff_email"),
      validate: (val) => emailRegex.test(val.trim()),
    },
    {
      input: document.getElementById("staff_phone"),
      validate: (val) => phoneRegex.test(val.trim()),
    },
    {
      input: document.getElementById("staff_password"),
      validate: (val) => passwordRegex.test(val),
    },
  ];

  function toggleError(item, hasError) {
    const wrapper = item.input.closest("div.border");
    const errorMsg = item.input
      .closest(".flex-col")
      .querySelector(".error-msg");

    if (hasError) {
      if (wrapper) {
        wrapper.classList.remove("border-gray-200");
        wrapper.classList.add("border-rose-500", "ring-2", "ring-rose-100");
      }
      if (errorMsg) errorMsg.classList.remove("hidden");
    } else {
      if (wrapper) {
        wrapper.classList.remove("border-rose-500", "ring-2", "ring-rose-100");
        wrapper.classList.add("border-gray-200");
      }
      if (errorMsg) errorMsg.classList.add("hidden");
    }
  }

  // Chặn submit nếu có trường sai quy cách
  form.addEventListener("submit", (e) => {
    let isValid = true;

    fields.forEach((item) => {
      if (!item.input) return;
      const valid = item.validate(item.input.value);
      toggleError(item, !valid);
      if (!valid) {
        isValid = false;
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });

  // Tự động xóa viền đỏ và thông báo lỗi khi người dùng nhập lại
  fields.forEach((item) => {
    if (!item.input) return;
    item.input.addEventListener("input", () => {
      if (item.validate(item.input.value)) {
        toggleError(item, false);
      }
    });
  });
});
