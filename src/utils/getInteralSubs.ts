// No Context JSAL and JackSucksAtClips sub counts are provided by the studio API
// So updates can be done quicker

export function getInternalSubs(): Promise<[number, number] | null> {
    return fetch('http://192.168.0.54:15320/subcount')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json() as any;
        })
        .then(data => {
            const subs1 = data.UCrZKnWgOaYTTc7sc1KsVXZw;
            const subs2 = data.UCUXNOmIdsoyd5fh5TZHHO5Q;

            if (typeof subs1 !== 'number' || typeof subs2 !== 'number') {
                throw new Error('Invalid subscriber count data');
            }

            return [subs1, subs2] as [number, number];
        })
        .catch(error => {
            console.error('Error fetching internal subscriber counts:', error);
            return null;
        });
}
