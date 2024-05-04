// Using the official YouTube API
import { getChannelIds } from "../db/database"

let channels
let channelsJoined

export async function initGetSubs(): Promise<void> {
    channels = await getChannelIds(false)
    channelsJoined = channels.join(',')
    console.log('All channels using the YouTube API v3:', channelsJoined)
}