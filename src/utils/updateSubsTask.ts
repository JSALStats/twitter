import { updateSubscriberCount } from "../db/database";
import { sendDiscordMessage } from "./sendDiscordMessage";
import { sendTweet } from "./twitterClient";

export async function updateSubsTask(channelId: string, subsciberCount: number): Promise<void> {
    // Update the subscriber count in the database
    await updateSubscriberCount(channelId, subsciberCount)

    // Get the channel name
    let channelName;
    await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.YT_API_KEY}`)
        .then(res => {
            return res.json() as any
        })
        .then(data => {
            channelName = data.items[0].snippet.title

            // I hate that I have to implement this
            if (channelName.length > 200) {
                channelName = channelName.substring(0, 200) + '...'
            }
        })
        .catch(error => {
            console.error(error)
            sendDiscordMessage(error)
        })

    await sendTweet(`At ${new Date().toLocaleString()}, ${channelName} has hit ${subsciberCount.toLocaleString()} subscribers!`)
}