import { useDispatch } from "react-redux";
import { reactionAdded } from "../../../store/features/Profile/PostSlice";
import React from 'react'

const reactionEmojie = {
    likes: "❤️"
}


export default function ReactionButtons({post}) {
    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmojie.map((name, emojie) => {
        return (
            <button
            key={name}
            type="button"
            className="rectionButton"
            onClick={() => {
                dispatch(reactionAdded({postId: post.id, reaction: name}))
            }}>
                {emojie} {post.reactions[name]}
            </button>
        )
    }))
  return (
    <div>{reactionButtons}</div>
  )
}
