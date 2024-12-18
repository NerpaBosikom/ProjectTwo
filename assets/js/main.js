function openDrawer() {
  let checked = document.querySelector("input[type=checkbox]").checked;
  let drawer = document.getElementById("menu-drawer");
  drawer.setAttribute("opened", checked);
}

// document
//   .querySelector(".contact-form")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault(); // Предотвращаем стандартное поведение формы

//     const form = event.target; // Ссылка на текущую форму
//     const formData = new FormData(form); // Собираем данные из формы

//     try {
//       const response = await fetch(form.action, {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const result = await response.text(); // Получаем текстовый ответ от сервера
//         alert("Сообщение успешно отправлено!"); // Сообщение об успехе
//         form.reset(); // Очищаем форму после успешной отправки
//       } else {
//         alert("Произошла ошибка при отправке. Попробуйте ещё раз.");
//       }
//     } catch (error) {
//       alert("Ошибка соединения. Проверьте интернет-соединение.");
//       console.error(error); // Выводим ошибку в консоль для отладки
//     }
//   });

document
  .querySelector(".contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const form = event.target; // Ссылка на текущую форму
    const formData = new FormData(form); // Собираем данные из формы

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Сообщение успешно отправлено!"); // Сообщение об успехе
        form.reset(); // Очищаем форму после успешной отправки
        submitButton.disabled = true; // Деактивируем кнопку
      } else {
        alert("Произошла ошибка при отправке. Попробуйте ещё раз.");
      }
    } catch (error) {
      alert("Ошибка соединения. Проверьте интернет-соединение.");
      console.error(error); // Выводим ошибку в консоль для отладки
    }
  });

// Управление состоянием кнопки
const checkbox = document.getElementById("consent");
const submitButton = document.querySelector(".contact-form button");

checkbox.addEventListener("change", () => {
  submitButton.disabled = !checkbox.checked;
});
