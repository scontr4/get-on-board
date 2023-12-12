import { DiaryEntry, newDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    if (entry !== null) {
        return entry
    }
    return undefined
}

// Manualmente se deben recuperar todos los campos excepto el comment
// porque typescript solo controla lo estático, no la info del lado del cliente
export const getEntriesWithoutSensitiveInfo = (): Array<DiaryEntry> => {
    return diaries.map(({ id, date, weather, visibility, comment }) => ({
        id,
        date,
        weather,
        visibility,
        comment
    }));
};

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    };

    diaries.push(newDiary);
    return newDiary;
};

export const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()

export const updateDiary = (newDiaryEntry: DiaryEntry): DiaryEntry => {
    const index = diaries.findIndex(d => d.id === newDiaryEntry.id)
    if (index !== -1) {
        diaries[index] = newDiaryEntry
        return newDiaryEntry
    }
    return diaries[index]
}

// export const deleteDiary = (id: number): void => {
//     const index = diaries.findIndex(d => d.id === id)
//     if (index !== -1) {
//         diaries.splice(index, 1)
//     }
// }
