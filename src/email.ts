export function isValidEmail(email: string): boolean {
  if (email.includes(" ")) {
    return false;
  }

  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    return false;
  }

  const beforeAt = email.substring(0, atIndex);
  const afterAt = email.substring(atIndex + 1);

  if (beforeAt.length === 0 || afterAt.length === 0) {
    return false;
  }

  const dotIndex = afterAt.indexOf(".");
  if (dotIndex === -1) {
    return false;
  }

  if (dotIndex === afterAt.length - 1) {
    return false;
  }

  return true;
}
