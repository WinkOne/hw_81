const express = require('express');
const nanoid = require('nanoid');

const Link = require('../model/Link');


const router = express.Router();


router.get('/:shortUrl', async (req, res) => {
    try {
        const item = await Link.findOne({shortUrl: req.params.shortUrl});

        // console.log();

        if (!item) {
            return req.status(404).send({message: "Not found"})
        }

        res.status(301).redirect(item.originalUrl);

    } catch (e) {
        res.status(404).send({message: "Not found"})
    }
});

router.post('/', async (req, res) => {
    const linkData = req.body;

    linkData.shortUrl = nanoid(6);

    const link = new Link(linkData);

    await link.save();

    res.send(link)
});

module.exports = router;