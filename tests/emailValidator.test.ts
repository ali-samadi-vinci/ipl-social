import { isValidEmail } from "../src/email";

describe("Email validation exhaustive", () => {

  test("email classique valide", () => {
    expect(isValidEmail("ali.samadi@example.com")).toBe(true);
  });

  test("email avec sous-domaine", () => {
    expect(isValidEmail("ali@example.co.uk")).toBe(true);
  });

  test("email avec + et _", () => {
    expect(isValidEmail("ali+test_samadi@example.com")).toBe(true);
  });

  test("email avec chiffres dans nom et domaine", () => {
    expect(isValidEmail("user123@test123.com")).toBe(true);
  });

  test("email avec majuscules", () => {
    expect(isValidEmail("Ali.Samadi@Example.Com")).toBe(true);
  });

  test("email avec plusieurs points dans le domaine", () => {
    expect(isValidEmail("ali@example.co.uk")).toBe(true);
  });

  test("email sans @", () => {
    expect(isValidEmail("alisamadiexample.com")).toBe(false);
  });

  test("email avec plusieurs @", () => {
    expect(isValidEmail("ali@samadi@example.com")).toBe(false);
  });

  test("email avec espace", () => {
    expect(isValidEmail("ali samadi@example.com")).toBe(false);
  });

  test("email sans texte avant @", () => {
    expect(isValidEmail("@example.com")).toBe(false);
  });

  test("email sans texte après @", () => {
    expect(isValidEmail("ali@")).toBe(false);
  });

  test("email sans point dans le domaine", () => {
    expect(isValidEmail("ali@examplecom")).toBe(false);
  });

  test("email avec point en dernier caractère du domaine", () => {
    expect(isValidEmail("ali@example.com.")).toBe(false);
  });

  test("email avec point au début du domaine", () => {
    expect(isValidEmail("ali@.example.com")).toBe(false);
  });

  test("email avec point juste avant @", () => {
    expect(isValidEmail("ali.@example.com")).toBe(false);
  });

  test("email avec point juste après @", () => {
    expect(isValidEmail("ali@.example.com")).toBe(false);
  });

  test("email avec points consécutifs dans le nom", () => {
    expect(isValidEmail("ali..samadi@example.com")).toBe(false);
  });

  test("email avec points consécutifs dans le domaine", () => {
    expect(isValidEmail("ali@example..com")).toBe(false);
  });

  test("email avec caractères non autorisés", () => {
    expect(isValidEmail("ali!samadi@example.com")).toBe(false);
    expect(isValidEmail("ali#samadi@example.com")).toBe(false);
    expect(isValidEmail("ali$samadi@example.com")).toBe(false);
  });

  test("email vide", () => {
    expect(isValidEmail("")).toBe(false);
  });

});
