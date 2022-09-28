export const createPost = async (title: string, description: string, lastPostId: number) => {
  fetch('/api/create-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: {
          title: title,
          text: description,
          topic: 'Test',
          user_id: 123,
          date: new Date(),
          id: lastPostId + 1,
        },
      }),
    })
}

export const getLastPostId = async () => {
  const res = await fetch('../api/get-last-post')
  return await res.json()
}