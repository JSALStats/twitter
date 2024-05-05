// Using the official YouTube API
import { getChannelIds } from "../db/database"

let channels: string[] = await getChannelIds(false)
let channelsJoined: string = channels.join(',')

export async function getSubsTask(): Promise<void> {
    await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelsJoined}&key=${process.env.YT_API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            return response.json() as any;
        })
        .then(data => {
            const subscriberCountMap: { [channelId: string]: number } = {};
            data.items.forEach((item: { id: string; statistics: { subscriberCount: string } }) => {
                subscriberCountMap[item.id] = parseInt(item.statistics.subscriberCount);
            });
            const subscriberCounts = channels.map(channelId => subscriberCountMap[channelId]);
            console.log(subscriberCounts);
        })
        .catch(error => {
            console.error('Error whilst fetching or parsing the data:', error)
        })
}