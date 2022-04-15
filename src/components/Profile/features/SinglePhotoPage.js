import React from 'react'
import { useSelector } from 'react-redux'
import { selectedPostById } from '../../../store/features/Profile/PostSlice'
import { useParams } from 'react-router-dom'

export default function SinglePhotoPage() {
    const params = useParams()
    // const post = useSelector((state) => selectedPostById(state, Number(postId)))

    

  return (
    <div></div>
  )
}
