export function createLabelWithEmptyValues(label: string[] | string) {
  if (typeof label === 'string') {
    return label?.trim() || ''
  } else if (Array.isArray(label)) {
    return label.map(i => i?.trim() || '').filter(i => i).join(' ')
  }
}