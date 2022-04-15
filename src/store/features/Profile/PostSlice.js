import { createSlice, nanoid } from "@reduxjs/toolkit"
import sub from "date-fns/sub"


const initialState = {
    posts: [ 
    {id:1, 
    content:"hi", 
    imageURL: "https://i.pinimg.com/564x/89/1f/2a/891f2afcaf23e3ac4080d0ff727badfa.jpg",
    date: sub(new Date(), {minutes: 20}).toISOString(),
    reactions: {
        likes:0
    }
},
    {id:2, content:"hi",  imageURL: "https://i.pinimg.com/564x/9e/2c/36/9e2c36463a4ced984dfac3fbf67476ca.jpg",
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
        likes:0
    }
},
    
    {id:3, content:"hi",  imageURL: "https://i.pinimg.com/564x/49/ac/0d/49ac0d6a84bddda9310b6ac6593e41e2.jpg",
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
        likes:0
    }
},
    {id:4, content:"hi", imageURL: "https://i.pinimg.com/564x/3a/87/27/3a8727577a6fe1a75bc2493b2390f2c4.jpg",
    date: sub(new Date(), {minutes: 3}).toISOString(),
    reactions: {
        likes:0
    }
},
   
]
}

const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded: {
          reducer(state, action){
            state.posts.push(action.payload)
        },
        prepare(content, imageURL) {
            return {
                payload: {
                    id: nanoid(),
                    content,
                    date: new Date().toISOString(),
                    imageURL,
                    reactions: {
                        likes:0
                    }
                }
            }
        }
    },
    reactionAdded(state, action) {
        const {postId, reaction} = action.payload
        const existingPost = state.find(post => post.id === postId)
        if(existingPost){
            existingPost.reactions[reaction]++
        }
    }

    }
})

export const AllPhotos = (state) => state.posts.posts
export const selectedPostById = (state, postId) => 
    state.posts.posts.find(post => post.id === postId)

export const { postAdded, reactionAdded } = PostSlice.actions
export default PostSlice.reducer