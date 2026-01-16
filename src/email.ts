export function isValidEmail(email: string): boolean {
  if (!email) return false
  if (email.includes(' ')) return false

  const parts = email.split('@')
  if (parts.length !== 2) return false

  const [local, domain] = parts
  if (!local || !domain) return false

  const localRegex = /^[A-Za-z0-9._+-]+$/
  if (!localRegex.test(local)) return false
  if (local.startsWith('.') || local.endsWith('.')) return false
  if (local.includes('..')) return false

  if (!domain.includes('.')) return false
  if (domain.startsWith('.') || domain.endsWith('.')) return false
  if (domain.includes('..')) return false

  return true
}
