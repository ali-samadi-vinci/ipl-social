import { isValidEmail } from "../src/email";

describe("Email validation", () => {

  test("email valide classique", () => {
    const email = "ali.samadi@example.com";
    expect(isValidEmail(email)).toBe(true);
  });

  test("email sans @", () => {
    const email = "ali.samadiexample.com";
    expect(isValidEmail(email)).toBe(false);
  });

  test("email avec espace", () => {
    const email = "ali samadi@example.com";
    expect(isValidEmail(email)).toBe(false);
  });

  test("email sans texte avant le @", () => {
    const email = "@example.com";
    expect(isValidEmail(email)).toBe(false);
  });

  test("email sans texte après le @", () => {
    const email = "ali.samadi@";
    expect(isValidEmail(email)).toBe(false);
  });

  test("email sans point dans le domaine", () => {
    const email = "ali.samadi@example";
    expect(isValidEmail(email)).toBe(false);
  });

  test("email avec point en dernier caractère", () => {
    const email = "ali.samadi@example.";
    expect(isValidEmail(email)).toBe(false);
  });

});
