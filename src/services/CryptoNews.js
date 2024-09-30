import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com',
    'x-rapidapi-key': 'b4827fb913msh54dffc9dd046549p1f5d94jsne16f68914c46'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';

const createRequest = (url) => ({
    url, headers: cryptoNewsHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: () => createRequest(`v1/cryptodaily`)
        })
    })
})

export const { useGetCryptosNewsQuery } = cryptoNewsApi;