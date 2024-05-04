import { TwitterApi } from "twitter-api-v2"
const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET_KEY,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
})

export async function makeTweet(tweet: string): Promise<void> {
    // Just a placeholder for now
    console.log(tweet)
}