import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: 'https://api-us-east-1.hygraph.com/v2/clcbccrrt38la01ume8rhcggn/master',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange]
})

export { client, ssrCache };