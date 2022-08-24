# INIT PARCEL

## INSTALL

```js
npm install --save-dev parcel
```

- Поместить все файлы в папку "src"
- сайт будет запускаться с файла index.html
- для запуска нужно ввести следующую команду

```js
npx parcel src/index.html
```

---

## Изменения в файле package.json

- проверьте файл package.json, там должны быть такие зависимости

```js
"devDependencies": {
    "@parcel/transformer-sass": "^2.6.0",
    "parcel": "^2.6.0",
    "parcel-plugin-handlebars-precompile": "^1.0.2",
    "parcel-plugin-nuke-dist": "^1.0.1",
    "parcel-reporter-clean-dist": "^1.0.4",
    "posthtml-include": "^1.7.4"
  }
```

- Редактируем скрипт build в файле "package.json" и добавляем:

```js
--public-url /имя_репозитория/
```

- Редактрируем в package.json поле
  `"homepage": "https://ваше_имя.github.io/имя_репозитория"`
- Устанавливаем пакет
  [`npm install gh-pages`](https://www.npmjs.com/package/gh-pages)
- Добавляем npm-скрипты

  1.  `"deploy": "gh-pages -d dist"`
  2.  `"predeploy": "npm run build"`

- после всех операций в файле package.json должны быть следующие поля:

```json
{
  "name": "....",
  "version": "2.0.0",
  "description": "",
  "homepage": "https://your-name.github.io/your-repo",
  "scripts": {
    "start": "parcel src/*.html",
    "build": "parcel build src/*.html --public-url /your-repo/",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-name/your-repo.git"
  },
  "keywords": [],
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/gyour-name/your-repo/issues"
  },
  "dependencies": {
    "modern-normalize": "^1.1.0"
  },
  "devDependencies": {
    "@parcel/transformer-sass": "^2.6.0",
    "parcel": "^2.6.0",
    "parcel-reporter-clean-dist": "^1.0.4",
    "posthtml-include": "^1.7.4"
  },
  "browserslist": "> 0.5%, last 2 versions, not dead"
}
```

---

## Дополнительный файлы конфигурации для Parcel

- Добавляем файл ".posthtmlrc" и в него записываем:

```json
{
  "plugins": {
    "posthtml-include": {
      "root": "./src"
    }
  }
}
```

- Добавляем файл ".parcelrc" и в него записываем:

```json
{
  "extends": ["@parcel/config-default"],
  "reporters": ["...", "parcel-reporter-clean-dist"]
}
```

- Добавляем файл ".browserslistrc" и в него записываем:

```
last 3 and_chr versions
last 3 chrome versions
last 3 opera versions
last 3 ios_saf versions
last 3 safari versions
```

---

## Ссылки на проекты в GitHub

- [Parcel project template](https://github.com/goitacademy/parcel-project-template)
- [Parcel deploy tutorial](https://github.com/luxplanjay/parcel-deploy-tutorial)
