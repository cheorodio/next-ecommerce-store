<h1 align="center"> Next.js ecommerce store </h1>

## About the project 📚

> This is an [upleveled](https://github.com/upleveled) project where I'm challenged to design and create a full stack ecommerce website using next.js. Main features are:
>
> - a products page: where all products are listed
> - a single product page: so when a product is clicked it goes to this page, the quantity can be edited and the item can be added to the cart
> - a cart page: that shows all products added to the cart including their quantity (which can be edited), price, a delete button to delete an item from the cart and the total price of all the products in the cart
> - a checkout page: that shows the total and asks for shipping and payment information
> - a thank you page: so when the confirm button from the checkout page is clicked, the user gets directed to the thank you page.

## Technologies ⚛️

<img height="25" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript logo"/> <img height="25" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="next js logo"/> <img height="25" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react logo"/> <img height="25" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript logo"/> <img height="25" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="sass logo"/> <img height="25" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgres logo"/> <img height="25" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" alt="jest logo"/> <img height="25" src="https://img.shields.io/badge/Playwright-2EAD33.svg?style=for-the-badge&logo=Playwright&logoColor=white" alt="Playwright logo"/>

## Screenshots 📷

#### Final look

<img width="1500" src="https://github.com/cheorodio/next-ecommerce-store/assets/121162907/795e28db-5002-4636-98ee-10350a381cf6" alt="screenshots" />

#### Wireframe and prototype on Figma

<img width="385" alt="Screenshot 2023-06-08 at 17 47 08" src="https://github.com/cheorodio/next-ecommerce-store/assets/121162907/3b9e0cb1-38cd-4450-80d9-668217422f90"> <img width="430" alt="Screenshot 2023-06-08 at 17 48 21" src="https://github.com/cheorodio/next-ecommerce-store/assets/121162907/37287e82-c6dd-4b38-8781-fd57b9c7731b">

## Setup 💻

1. Clone the repository
   ```
   git clone https://github.com/cheorodio/next-ecommerce-store.git
   cd next-ecommerce-store
   ```
2. Install dependencies using 
   ```
   pnpm install
   ````
4. Setup postgres database
5. Create a file called .env in the project root directory and paste the following, changing to your own username, password and database:
   ```
   PGHOST=localhost
   PGUSERNAME=<your username>
   PGPASSWORD=<your password>
   PGDATABASE=<your database>
   ```
5. Connect to postgres database and run either:
   - `psql -U <user name> <database name>` on windows and macOS
   - `sudo -u <user name> psql -U <user name> <database name>` on Linux

6. Run application
   ```
   pnpm dev
   ```
   Open http://localhost:3000 on browser.

## Deployment 🚀

This project is deployed using vercel, in order to do so:

1. Create an account on [vercel](https://vercel.com/dashboard)
2. Create a postgres storage in vercel and select frankfurt
3. Create a project in vercel and import your version of this repository
4. Overwrite the install command (found in project general setting) with `pnpm install && pnpm migrate up`
5. Connect storage with project in Project > Storage > Connect
