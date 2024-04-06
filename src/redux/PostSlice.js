import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    'getPosts' ,
    async function (info, {dispatch}) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        dispatch(postsInfo(data))
    }
)


const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        title: 'old title',
        posts: []
    },
    reducers: {
        changeTitle: (state, action) => {
            state.title = 'new title'
        },
        changeTitleParams: (state, action) => {
            state.title = action.payload
        },
        postsInfo: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const {changeTitle, changeTitleParams, getPosts, postsInfo} = postsSlice.actions

export default postsSlice.reducer