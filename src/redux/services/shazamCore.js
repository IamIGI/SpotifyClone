import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// country_code = PL
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'x-rapidapi-key',
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );
      headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (countryCode = 'PL') =>
        `v1/charts/world?country_code=${countryCode}`,
    }),
  }),
});

//  use +  getTopCharts + Query
export const { useGetTopChartsQuery } = shazamCoreApi;
