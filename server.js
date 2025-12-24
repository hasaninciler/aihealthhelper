const express = require('express');
const PORT = 3000;

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    next();
});

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok',
        message: 'server başarılı bir şekilde çalışıyor',
        timestamp: new Date().toISOString()
    });
});

app.post('/api/chat', async (req, res) => {
    console.log('istek alındı', new Date().toISOString());
    
    try {
        const { message, apiKey } = req.body;
        
        if (!message || !apiKey) {
            return res.status(400).json({ 
                error: 'api key ve message hatası' 
            });
        }
        
        const requestBody = {
            model: "deepseek-chat",
            messages: [
                {
                    role: "system",
                    content: `Sen "AI Health Helper" adında yardımsever bir sağlık asistanısın. 
                    Kullanıcılarla nazik, empatik ve net bir dille konuş. 
                    Semptomları hakkında bilgi verirken her zaman bunun bir tıbbi tavsiye olmadığını, 
                    kesin teşhis için doktora gitmeleri gerektiğini hatırlat. 
                    Cevapların kısa, eğitici ve maddeler halinde okunabilir olsun.`
                },
                {
                    role: "user",
                    content: message
                }
            ],
            stream: false
        };
        
        console.log('apiye istek gönderiliyor');
        
        const apiResponse = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!apiResponse.ok) {
            const errorText = await apiResponse.text();
            console.error('istek gönderilemedi:', errorText);
            return res.status(apiResponse.status).json({ 
                error: `API Hatası: ${apiResponse.status}`,
                details: errorText 
            });
        }
        
        const data = await apiResponse.json();
        console.log('api istek gönderildi');
        
        res.json(data);
        
    } catch (error) {
        console.error('Proxy sunucu hatası:', error);
        res.status(500).json({ 
            error: 'Sunucu hatası', 
            details: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`server çalışıyor port ${PORT}`);

});