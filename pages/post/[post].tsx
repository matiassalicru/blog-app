import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

// Types
import { PostTypes } from '../../components/PostPreviews/types'

// Component
import { Button } from '../../components/Button/Button'

// Styles
import { SCPostContent, SCPostTitle, SCPostText } from '../../styles/post/styles'
import clientPromise from 'lib/mongodb'
import { FindOptions } from 'mongodb'

interface PostType {
  posts: PostTypes[]
}

const Post: NextPage<PostType> = ({ posts }) => {
  const [post, setPost] = useState<PostTypes>()
  const { query, back } = useRouter()
  const { post: postId } = query

  const onBackButtonClick = () => {
    back()
  }

  useEffect(() => {
    const thisPost = posts?.find((post) => post.id.toString() === postId)
    setPost(thisPost)
  }, [postId, posts])

  return (
    <>
      <SCPostContent>
        <Button onClick={onBackButtonClick} text='Back' />
        <SCPostTitle>{post?.title}</SCPostTitle>
        <SCPostText>{post?.text}</SCPostText>
      </SCPostContent>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { post: '1' } },
    ],
    fallback: true,
  }
}

export const getStaticProps = async () => {
  const client = await clientPromise
  const db = client.db('blogDB')
  const data = db.collection('posts')

  // Options to sort documents from newer to older
  const options: FindOptions = {
    sort: { date: -1 },
  };
  const cursor = data.find({}, options);

  if ((await cursor.count()) === 0) {
    console.log("No documents found!");
  }

  const formattedData = await cursor.toArray();
  const parsedData = JSON.parse(JSON.stringify(formattedData))
  return {
    props: {
      posts: parsedData,
    },
  }

}


export default Post
