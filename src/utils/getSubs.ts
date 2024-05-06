// Using the official YouTube API
import { getChannelIds } from "../db/database"
import { updateSubsTask } from "./updateSubsTask"
import { getChannelSubs } from "../db/database"

let channels: string[] = await getChannelIds()
let channelsJoined: string = channels.join(',')

export async function getSubsTask(): Promise<void> {
    console.log('\nUpdating subscriber counts!')
    await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelsJoined}&key=${process.env.YT_API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            return response.json() as any;
        })
        .then(async (data) => {
            const subscriberCountMap: { [channelId: string]: number } = {};
            data.items.forEach((item: { id: string; statistics: { subscriberCount: string } }) => {
                subscriberCountMap[item.id] = parseInt(item.statistics.subscriberCount);
            });
            const subscriberCounts = channels.map(channelId => subscriberCountMap[channelId]);
            
            for (let i = 0; i < subscriberCounts.length; i++) {
                const subsciberCount = subscriberCounts[i];
                const channelId = channels[i];
                console.log('\n', channelId, subsciberCount)
                const currentSubCount = await getChannelSubs(channelId) as any
                console.log(currentSubCount)
                if (currentSubCount[0] != subsciberCount) {
                    console.log('An update has been detected from', currentSubCount[0], '->', subsciberCount)
                    await updateSubsTask(channelId, subsciberCount)
                }
            }
        })
        .catch(error => {
            console.error('Error whilst fetching or parsing the data:', error)
        })
}