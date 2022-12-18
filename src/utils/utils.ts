export const isValidFormat = (title: string, description: string, lastPostId: number) => {
  return title.length > 1 && description.length > 2 && lastPostId > 0
}

export const rgba2hex = (rgba: any) =>
  `#${rgba
    .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)
    .slice(1)
    .map((n: string, i: number) =>
      (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')
    )
    .join('')}`
