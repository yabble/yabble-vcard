# Yet Another Yandex Vcard

Визитная карточка сотрудника Яндекса

![](https://yadi.sk/i/Yo1xpUv4aJiGt_XXL.jpg)

## Как сделать свою визитку

Заполнить файл `vcard.json` нужными данными

```json
{
    "title": "Виктор Карпов — vitkarpov@yandex-team.ru",
    "social": {
        "github": "vitkarpov",
        "vk": "vitkarpov",
        "skype": "viktor.s.karpov"
    },
    "ru": {
        "name": "Виктор Карпов",
        "position": "Разработчик интерфейсов группы интерфейсов персональных сервисов",
        "company": {
            "country": "Россия",
            "locality": "Москва"
    ...
```

Установить [npm](https://www.npmjs.org/doc/README.html) и [grunt](http://gruntjs.com/getting-started) глобально.

Собрать страничку, набрав в терминале:

```
$ npm start
```

Сначала `npm` установит все зависимости, а после `grunt` соберет статику.

В результате в директории появятся файлы:

* index.html
* yacard.min.css
* yacard.ie.min.css
* yacard.min.js

Нужно залить их, вместе с папкой `blocks`, на сервер.
