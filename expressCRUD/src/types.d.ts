export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

// La diferencia entre tipos e interfaces es que estas últimas pueden ser extendidas
export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}

export type newDiaryEntry = Omit<DiaryEntry, 'id'>;

