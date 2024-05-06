import { TwitterApi } from "twitter-api-v2"
const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY as string,
    appSecret: process.env.TWITTER_API_SECRET_KEY as string,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

export async function sendTweet(tweet: string): Promise<void> {
    twitterClient.v2.tweet(tweet)
    console.log('Made a tweet!')
}