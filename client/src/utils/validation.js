import * as yup from 'yup'

export const loginSchema = yup.object({
    username: yup.string().required('Enter a username'),
    password: yup.string().required('Enter a password'),
}) 

export const addNewsSchema = yup.object({
    title: yup.string().required('Enter a title'),
    description: yup.string().required('Enter a description'),
    category: yup.string().required('Enter a category'),
    urlToImage: yup.string().required('Enter a urlToImage'),
    publishedAt: yup.string().required('Enter a publishedAt'),
    content: yup.string().required('Enter a content'),
    author: yup.string().required('Enter a author'),
})