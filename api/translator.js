export default async function handler(req, res) {
    if (req.method !== "POST") {
        // FIXED: Combined return and res onto the same line, fixed .json syntax
        return res.status(405).json({ message: "Method is not allowed" });
    }

    const { text, lang } = req.body;

    try {
        const response = await fetch("https://google-translator9.p.rapidapi.com/v2", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-rapidapi-key": process.env.RAPIDAPI_KEY,
                "x-rapidapi-host": "google-translator9.p.rapidapi.com",
            },
            body: JSON.stringify({
                q: `${text}`,
                source: 'en',
                target: `${lang}`,
                format: 'text'
            }),
        });
        
        const data = await response.json();
        
        // FIXED: Combined return and res onto the same line
        return res.status(200).json(data);
    } catch (error) {
        // FIXED: Combined return and res onto the same line
        return res.status(500).json({
            error: "Translation did not occur"
        });
    }
}