import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const puppyApi = createApi({
  reducerPath: "puppyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-PT-SF"
  }),
  endpoints: (builder) => {
    return {
      getPuppies: builder.query({
        query: () => "/players"
      }),
      deletePuppy: builder.query ({
        
      })
    }
  }
})

export default puppyApi