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
    <SCSkeletonContainer data-testid="post-skeleton">
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
