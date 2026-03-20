const express = require('express')
const musicController = require('../controllers/music.controllers')
const multer = require('multer')
const authMiddelware = require('../middlewares/auth.middleware')

const router = express.Router()
const upload = multer({
    storage : multer.memoryStorage()
})

router.post('/upload',authMiddelware.authArtist, upload.single('music'), musicController.createMusic)
router.post('/album',authMiddelware.authArtist, musicController.createAlbum)
router.get('/',authMiddelware.authUser, musicController.getAllMusic)
router.get('/albums', authMiddelware.authUser, musicController.getAllAlbums)
router.get('/albums/:albumId', authMiddelware.authUser, musicController.getAlbumById)

module.exports = router