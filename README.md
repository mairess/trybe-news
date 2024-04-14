# Transforming Data into News 🚀

<div align="center">
  
| Statements                  | Branches                | Functions                 | Lines                |
| --------------------------- | ----------------------- | ------------------------- | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-95.95%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-93.05%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-89.18%25-yellow.svg) | ![Lines](https://img.shields.io/badge/Coverage-95.95%25-brightgreen.svg)    |

</div>

## About the Project 📄

This is a React project that aims to transform data into news. It uses the IBGE news API to create a page that displays the most recent news in an organized and intuitive manner.

## Features 💡

- **Recent News**: Displays the most recent news from IBGE.
- **Access to Full News**: Each news item in the list can be clicked to access the complete news article.
- **Favorites**: Users can mark their favorite news for easy access in the future.
- **Filters**: Users can filter news by type, favorites, and title.

## Technologies Used 🛠️

This project was developed using the following technologies:

- **React**

- **TypeScript**

- **Context API**

- **Custom Hooks**

- **React testing library**

- **Vitest**

- **Styled components**

- **Docker**

## How to Run the Project 🚀

<details>

<summary><strong>Run project locally</strong></summary><br>

> ⚠️ You must have [Node](https://nodejs.org/en) installed on your machine.
>
<!-- > ⚠️ É preciso criar um arquivo `.env` na raiz do projeto, siga o exemplo do arquivo [`env.example`](./env.example). -->
>

1. Clone the repository:

```BASH
git clone git@github.com:mairess/trybe-news.git
```

2. Install dependencies:

```BASH
npm install
```

3. Start the server:

```BASH
npm run dev
```

4. The server will be available on port `3000`

</details>

<details>

<summary><strong>Run project with docker</strong></summary><br>

> ⚠️ You must have [Docker](https://www.docker.com/get-started/) installed on your machine.

1. Clone the repository:

```BASH
git clone git@github.com:mairess/trybe-news.git
```

2. Up the container:

```BASH
docker compose up -d
```

4. The server will be available on port `3000`

</details>


<details>

<summary><strong>Run tests</strong></summary><br>

Run all tests

```SHELL
npm run test
```

Run coverage

```SHELL
npm run coverage
```

</details>

## Contributions 💡

Contributions are always welcome! Feel free to open an issue or submit a pull request.

## License 📝

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You can read the file [here](https://github.com/mairess/trybe-news/blob/main/LICENSE.txt).
