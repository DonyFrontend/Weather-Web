export function addHistoryItem(location: string) {
    const history: Array<string> = JSON.parse(localStorage.getItem('history') || '[]')
    history.push(location)
    localStorage.setItem('history', JSON.stringify(history))
}