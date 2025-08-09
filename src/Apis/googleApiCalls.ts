import { arrayToJson } from '../utils/csv'
import { API_URLS } from './apiUrls'

// local home api database
const SHEET_ID = '1bdak5oMe4X5eoFiROM0MA5sAJmRyw6_kjmD1w7zuOAo'

// MAP API KEY in google console of abhishekmicosoft
const API_KEY = 'AIzaSyAMRfigkZLcs5qTEHrwHqCP7vfieyAQSHw'

export async function getDbSheetData() {
  try {
    const r = await fetch(`${API_URLS.GOOGLE_SHEETS_HOST}/v4/spreadsheets/${SHEET_ID}?key=${API_KEY}`)
    const sheetDetails = await r.json()
    const sheetNames = sheetDetails.sheets.map((sheet: any) => sheet.properties.title)
    const fetches = sheetNames.map((name: string) =>
      fetch(`${API_URLS.GOOGLE_SHEETS_HOST}/v4/spreadsheets/${SHEET_ID}/values/${name}?key=${API_KEY}`)
        .then((res) => res.json())
    )
    const sheetTabDetails = await Promise.all(fetches)
    const allTabData: any = {}
    sheetNames.forEach((name: string, i: number) => { 
      allTabData[name] = arrayToJson(sheetTabDetails[i].values)
    })
    return ({ sheetDetails, sheetTabDetails, allTabData })
  } catch (e: any) {
    console.error('')
  }
}
