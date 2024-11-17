import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';

const ChatAi = () => {
    const navigate = useNavigate();
    const [inputUser, setInputUser] = useState('');
    const [response, setResponse] = useState('');

    const apiKey = 'AIzaSyCcAhGotzZi9w8HBvVoinvL_UlB5tiUbdo';
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash-latest',
    });

    const generativeConfig = {
        maxOutputTokens: 100,
        temperature: 0.7,
    };

    const handleChange = (e) => {
        setInputUser(e.target.value);
    };

    const handlePromptSubmit = async () => {
        try {
            const chatSession = model.startChat({
                generativeConfig,
                history: [],
            });

            const promptDefault = `
            Berikan edukasi tentang jenis sampah yang bisa didaur ulang. 
                Jawab dengan singkat dan teratur dalam format poin seperti ini:
                1. [Jenis Sampah] - [Penjelasan Singkat]
                2. [Jenis Sampah] - [Penjelasan Singkat]
                3. [Jenis Sampah] - [Penjelasan Singkat]
                4. [Jenis Sampah] - [Penjelasan Singkat]
                5. [Jenis Sampah] - [Penjelasan Singkat]

                Hanya berikan 5 jenis sampah yang bisa didaur ulang, jangan lebih dari itu. Dan juga hanya seputaran sampah saja yang kamu jawab
                tapi, jawab apa yang ditanyakan dan harus relevan jawabnnya.
        `;
            const result = await chatSession.sendMessage(promptDefault);
            setResponse(result.response.text);
        } catch (error) {
            console.error(error);
            setResponse(`Error: ${error.message}`);
        }
    };

    return (
        <div className="mx-20">
        <div className="relative w-full h-[729px] p-6 rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
                TANYA <span className="text-green-500">AI</span> YUK!
            </h1>
            <div className="flex justify-between">
                <button
                    onClick={() => navigate('/')}
                    className="h-10 px-4 py-2 font-semibold text-white bg-gray-700 rounded hover:bg-gray-600"
                >
                    Beranda
                </button>
            </div>
    
            {/* Bagian Jawaban dengan Scroll */}
            <div className="mt-6 p-4 bg-gray-100 rounded h-[400px] overflow-y-auto">
                <p className="text-gray-700">{response}</p>
            </div>
        </div>
    
        {/* Input Tetap di Posisi */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 border-t border-gray-300">
            <div className="flex items-center w-[95%] mx-auto">
                <input
                    className="flex-grow p-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="text"
                    value={inputUser}
                    onChange={handleChange}
                    placeholder="Ada yang bisa kami bantu?"
                />
                <button
                    onClick={handlePromptSubmit}
                    className="h-12 ml-2 px-4 py-2 font-semibold text-white bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Cari tahu yuk!
                </button>
            </div>
        </div>
    </div>
    
    );
};

export default ChatAi;
