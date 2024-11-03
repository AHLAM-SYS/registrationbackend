const express = require('express');
const Student = require('../models/Student');

const router = express.Router();

// Register a new student
router.post('/', async (req, res) => {
    const { name, age, email, grade, password } = req.body;
    const student = new Student({ name, age, email, grade, password });

    try {
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
