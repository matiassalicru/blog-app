export const isValidFormat = (title: string, description: string, lastPostId: number) => {
  return title.length > 1 && description.length > 2 && lastPostId > 0
}
