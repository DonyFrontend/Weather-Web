type historyItem = {
    location: string,
    time: string,
    temperature: number,
}

export function setHistoryItem(location: historyItem): void {
    const history: Array<historyItem> = JSON.parse(localStorage.getItem('history') || '[]');
    if (history[0] == undefined) {
        history.push(location);
        console.log(history);
        localStorage.setItem('history', JSON.stringify(history));
    } else {
        console.log(location.location, history[history.length - 1].location);
        
        if (history[history.length - 1].location != location.location) {
            console.log("Hola");

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