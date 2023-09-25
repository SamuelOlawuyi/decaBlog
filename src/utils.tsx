
export function readingTime(text: string) {
  const words = text.split(' ')
  const wordsCount = words.length
  const time = wordsCount / 50
  return Math.ceil(time)
}

export function formatDate(inputDate: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }

  const date = new Date(inputDate)
  return date.toLocaleDateString('en-US', options)
}

export function previewTextTo50Words(text: string): string {
  const words = text.split(' ')
  if (words.length <= 50) {
    return text
  }
  const previewWords = words.slice(0, 50)
  const previewText = previewWords.join(' ')
  return previewText + '...'
}

export interface StoryType {
  _id: string
  title: string
  author: { username: string }
  content: string
  createdAt: string
}

export function delete_cookie(name: string, path = '/', domain = 'localhost') {
  if (get_cookie(name)) {
    document.cookie = `${name}=${
      path + domain
    };expires=Thu, 01 Jan 1970 00:00:01 GMT}`
  }
}

function get_cookie(name: string) {
  return document.cookie.split(';').some((c) => {
    return c.trim().startsWith(name + '=')
  })
}