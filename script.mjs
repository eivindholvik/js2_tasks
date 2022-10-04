// Fasit

// Oppgave 1

import { url } from "./parameters.mjs";

(async () => {
  try {
    const response = await fetch(url + "/social/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: "testingsa@noroff.no",
        password: "asdf1234",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const { name, accessToken } = await response.json();
    localStorage.setItem("userName", name);
    localStorage.setItem("accessToken", accessToken);
  } catch (e) {
    console.log(e);
  }
})();

// Oppgave 2
