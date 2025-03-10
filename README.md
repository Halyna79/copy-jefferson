# copy-jefferson
Цей проект було створено командою copy-jefferson

## Встановлення
1. Клонуйте репозиторій:
     git clone https://github.com/username/repository.git
   2. Встановіть залежності:
     npm install
   3. Запустіть локальний сервер:
     npm run dev
   
## Гілки
- main — основна гілка (лише готовий код).
- develop — гілка для розробки.
- Кожна задача виконується в окремій гілці (наприклад, `feature/header`).

## Стандарт роботи з гілками
- Створюйте гілку:
   git checkout -b feature/назва-секції
  - Пуште зміни:
   git push --set-upstream origin feature/назва-секції
  - Робіть Pull Request у develop.

## Чекліст перед мерджем
- [ ] Перевірено, що код працює.
- [ ] Жодних помилок у консолі.
- [ ] Вирішено конфлікти (якщо є).
- [ ] Код пройшов рев'ю.


## Приклад структури
├── src/                # Вихідний код
├── public/             # Публічні файли
├── README.md           # Опис проєкту
├── CONTRIBUTING.md     # Правила роботи з репозиторієм
├── .github/            # Шаблони Pull Requests та Issues
├── package.json        # Залежності
├── .gitignore          # Ігноровані файли