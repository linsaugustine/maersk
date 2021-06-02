import { isTemplateExpression } from "typescript"
import item from "./types"
export const shuffleArray = (array: item[]) => [...array].sort(() => Math.random() - 0.5)
export const sortArray = (array: item[]) => [...array].sort((a, b) => a.value > b.value ? 1 : -1)