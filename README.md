создание проекта

план проекта:

- npx creat-react-app nameProject or . - текущая папка
- удаляю все лишние файлы

react-roter-dom - используется для маршрутизации внутри проекта
sass - расширяет файлы css
eslint - статически анализирует код, чтобы быстро найти проблемы

необходимые модули:

npm eslint
npm eslint-plugin-import
npm eslint-prettier
npm eslint-plugin-react
npm eslint-plugin-react-hooks

В корне проекта создем файл конфигурации

.eslintrc

Настройки:

{
"env": {
"browser": boolean - глобальные переменные браузера
"es2021": boolean - добавляет глобальные переменные ECMAScript2023
},
"extends": []
}
