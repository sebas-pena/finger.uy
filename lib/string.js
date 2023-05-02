export const normalizeString = (str) => {
  return str
    .replace(/[áäà]/g, 'a')
    .replace(/[éëè]/g, 'e')
    .replace(/[íïì]/g, 'i')
    .replace(/[óöò]/g, 'o')
    .replace(/[úüù]/g, 'u')
    .toLowerCase()
    .trim()
}

export const removeExtension = (str) => {
  return str.replace(/\.[^/.]+$/, '')
}
