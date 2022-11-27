import React from 'react'

// Styles
import {
  SCSkeletonAuthor,
  SCSkeletonButton,
  SCSkeletonButtons,
  SCSkeletonContainer,
  SCSkeletonTitle,
  SCSkeletonContent,
} from './styles'

export const PostSkeleton = () => {
  return (
    <SCSkeletonContainer>
      <SCSkeletonAuthor />
      <SCSkeletonTitle />
      <SCSkeletonContent />
      <SCSkeletonButtons>
        <SCSkeletonButton />
        <SCSkeletonButton />
      </SCSkeletonButtons>
    </SCSkeletonContainer>
  )
}
