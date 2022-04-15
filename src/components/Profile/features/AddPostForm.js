import { useState } from "react";
import React from 'react'
import { useDispatch } from "react-redux";
import { postAdded } from "../../../store/features/Profile/PostSlice";




export default function AddPostForm() {
    const [content, setContent] = useState('')
    const [imageURL, setimageURL] = useState('')
     // const {register } = useForm()
    
    const dispatch = useDispatch()

    const onContentChanged = (e) => setContent(e.target.value) 
    const onImageChanged = (e) => setimageURL(e.target.value)

    const onSavedPostClicked = () => {
        if(imageURL) {
            dispatch(postAdded(content, imageURL))
        }
        setContent('')
    }
    const canSave = [content, imageURL].every(Boolean)

  return (
    <div className="addingPost__container">
    
        <form className="addPost__form">
            <label htmlFor="postImage">Type Image URL: </label>
            <input
            type="text"
            id="postImage"
            className="inputCont"
            name="postImage"
            value={imageURL}
            onChange={onImageChanged}
            >
            </input>
            <label htmlFor="postContent">Caption: </label>
            <textarea
            type="text"
            id="postContent"
            name="postContent"
            className="inputCont"
            value={content}
            onChange={onContentChanged}
            ></textarea>
            <button disabled={!canSave} onClick={onSavedPostClicked} type="button" className="uploadPost__Btn">Add</button>
        </form>
    </div>
  )
}
