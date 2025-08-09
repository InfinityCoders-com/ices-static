export const getAllContactsSortedAndGroupedByFirstLetter = (contacts: any[]) => {
  try {
    const result: any = {}
    contacts.forEach((contact: any) => {
      result[`${(contact.firstName || contact.lastName).charAt(0)}`] = [
        ...(result[`${contact.firstName.charAt(0)}`] || []),
        contact
      ]
    })
    return Object.keys(result)
      .sort()
      .reduce((acc: any, key: string) => {
        acc[key] = result[key].sort((contact: any) => contact.firstName)
        return acc
      }, {})
  } catch(e: any) {
    console.error('Error in getAllContactsSortedAndGroupedByFirstLetter', e)
    return contacts
  }
}
