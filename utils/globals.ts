import { unescape } from 'lodash'
import DOMPurify from 'dompurify'
import fetch from 'unfetch'

// Constants
import { GREENHOUSE_PATH } from 'utils/constants'

export const safeEscape = (htmlString: string): string => {
  const unescapedString = unescape(htmlString)
  return DOMPurify.sanitize(unescapedString)
}

export const getGreenHouseData = async (url: string) => {
  return fetch(GREENHOUSE_PATH + url).then((data) => data.json())
}
