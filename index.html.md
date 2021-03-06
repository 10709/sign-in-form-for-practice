<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div
      id="container"
      class="flex h-screen w-screen items-center justify-center bg-gradient-to-bl from-purple-300 to-sky-200 px-2"
    >
      <form
        id="sign-in-form"
        class="flex w-full max-w-sm flex-col justify-center gap-10 rounded-lg bg-white py-6 px-10"
      >
        <h1 id="sign-in-form-title" class="text-center text-5xl">登入</h1>
        <div id="sign-in-input" class="flex w-full flex-col items-center gap-5">
          <label for="account" class="relative w-full py-1">
            <input
              type="text"
              id="account"
              class="peer w-full border-b-2 border-sky-300 py-1 outline-none"
            />
            <p
              id="addr-hint-text"
              class="absolute top-2 left-0 w-24 cursor-text select-none duration-200 peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-sky-500"
            >
              帳號
            </p>
          </label>
          <label for="password" class="relative w-full py-1">
            <input
              type="password"
              id="password"
              class="peer w-full border-b-2 border-sky-300 py-1 outline-none"
            />
            <p
              id="password-hint-text"
              class="absolute top-2 left-0 w-24 cursor-text select-none duration-200 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-sky-500"
            >
              密碼
            </p>
          </label>
        </div>
        <div>
          <a
            href=""
            id="forget-password-link"
            class="hover:font-bold-b-2 text-sky-400 hover:border-sky-400 hover:font-bold"
            >忘記密碼</a
          >
        </div>
        <button
          type="submit"
          id="submit-button"
          class="active-y-1 rounded-md bg-sky-500 py-2 text-white active:translate-x-1"
        >
          登入
        </button>
      </form>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="module" src="./src/main.js"></script>
  </body>
</html>
