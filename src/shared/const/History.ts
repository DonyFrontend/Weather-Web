export type historyItem = {
    location: string,
    time: string,
    temperature: number,
}

export function setHistoryItem(location: historyItem): void {
    const history: Array<historyItem> = JSON.parse(localStorage.getItem('history') || '[]');
    if (history[0] == undefined) {
        history.push(location);
        localStorage.setItem('history', JSON.stringify(history));
    } else {
        if (history[history.length - 1].location != location.location) {
            if (history.length > 50) {
                const stack = history.length - 50;
                history.splice(0, stack);
            }
            history.push(location);
            localStorage.setItem('history', JSON.stringify(history));
        }
    }
}

export function getHistory(): Array<historyItem> | null {
    return JSON.parse(localStorage.getItem('history') || "null");
}