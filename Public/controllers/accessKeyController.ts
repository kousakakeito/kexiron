import { Router } from 'express';
const router: Router = Router();

router.post('/verify-key', (req, res) => {
    const { key } = req.body;
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, "0")}${currentDate.getDate().toString().padStart(2, "0")}${currentDate.getHours().toString().padStart(2, "0")}${currentDate.getMinutes().toString().padStart(2, "0")}`;
    
    console.log(key)
    console.log(formattedDate)

    if (key === formattedDate) {
        res.json({ redirect: 'main/index.html' });
    } else {
        res.status(400).send('Invalid access key');
    }
});

export default router;