import { historyItem } from "src/shared/const/History";

export interface ICondition {
    history: historyItem[],
    handler: (param: string) => void,
}