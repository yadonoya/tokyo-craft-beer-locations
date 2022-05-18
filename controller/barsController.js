const express = require('express');
const router = express.Router();
const Bars = require('../models/Bars');

router.get('/all_bars', async (req, res) => {
    const allBars = await Bars.findAllBars();
    res.send(allBars).status(200);
})

router.get('/:bar_name', async (req, res) => {
    const { bar_name } = req.params;
    const bar = await Bars.findByName(bar_name);
    res.send(bar[0]).status(200);
})

router.get('/all_bars/smoking_allowed', async (req, res) => {
    const allSmokingBars = await Bars.findAllSmokingBars();
    res.send(allSmokingBars).status(200);
})

router.get('/all_bars/smoking_not_allowed', async (req, res) => {
    const allNonSmokingBars = await Bars.findAllNonSmokingBars();
    res.send(allNonSmokingBars).status(200);
})

router.get('/all_bars/:station', async (req, res) => {
    const { station } = req.params;
    const barsByStation = await Bars.findBarsByStation(station);
    res.send(barsByStation).status(200);
})

router.post('/all_bars', async (req, res) => {
    const { bar_name, station, smoking_allowed } = req.body;
    const toPost = await Bars.createBar(bar_name, station, smoking_allowed)
    res.send(toPost).status(201);
})

router.patch('/:bar_name', async (req, res) => {
    const { bar_name } = req.params;
    const edits = req.body;
    const patched = await Bars.updateBar(bar_name, edits)
    res.send(patched).status(204);
})

router.delete('/:bar_name', async (req, res) => {
    const { bar_name } = req.params;
    const toDelete = await Bars.deleteBar(bar_name);
    res.send(toDelete).status(204).end();
})

module.exports = router;