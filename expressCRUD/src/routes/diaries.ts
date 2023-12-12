import express from "express"
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

// Read
router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})
// Read one
router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id)
    return (diary !== null)
      ? res.send(diary)
      : res.sendStatus(404)
})

// Create
router.post('/', (req, res) => {
    const { date, weather, visibility, comment } = req.body

    const newDiaryEntry = diaryServices.addDiary({
      date,
      weather,
      visibility,
      comment
    })

    res.json(newDiaryEntry)
})

// Update
router.put('/:id', (req, res) => {
    const { date, weather, visibility, comment } = req.body

    const updatedDiary = diaryServices.updateDiary({
      id: +req.params.id,
      date,
      weather,
      visibility,
      comment
    })

    if (updatedDiary) {
        res.json(updatedDiary);
    } else {
        res.sendStatus(404);
    }
})

export default router


// Delete
router.delete('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id)
    if (diary) {
        diaryServices.deleteDiary(+req.params.id)
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})
