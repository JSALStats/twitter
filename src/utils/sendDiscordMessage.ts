// Send a message to a discord webhook so that errors can be identified when not looking at the console
export async function sendDiscordMessage(message: string): Promise<void> {
    if (!process.env.DISCORD_WEBHOOK_URL) return
    fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: process.env.DISCORD_WEBHOOK_NAME,
            avatar_url: process.env.DISCORD_WEBHOOK_AVATAR,
            content: `<@${process.env.DISCORD_WEBHOOK_NOTIFY_USER}>`,
            embeds:[{
                title: 'Whoops!',
                description: message,
                color: 16711680,
                footer: {
                    text: 'JSALStats Bot'
                }
            }]
        })
    }).catch(error => {
        console.error('Well this is kinda ironic:', error)
    })
}