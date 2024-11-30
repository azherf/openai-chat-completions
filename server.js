const PORT = 8000
const express = require("express")
const cors = require("cors")
const app = express()
const OpenAI = require("openai")
app.use(cors())
app.use(express.json())
require("dotenv").config()

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

app.post("/completion", async (req, res) => {
    const text = req.body.text
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: text,
            },
        ],
    })
    res.send(completion.choices[0].message)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))