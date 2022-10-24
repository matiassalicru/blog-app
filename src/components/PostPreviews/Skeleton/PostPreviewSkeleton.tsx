import React from 'react'

// Styles
import { SCSkeletonContainer, SCSkeletonTitle, SCSkeletonContent } from './styles';

export const PostPreviewSkeleton = () => {
  return (
    <SCSkeletonContainer>
      <SCSkeletonTitle />
      <SCSkeletonContent />
    </SCSkeletonContainer>
  )
}
