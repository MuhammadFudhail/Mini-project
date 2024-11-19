import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';

const ChatAi = () => {
    const navigate = useNavigate();
    const [inputUser, setInputUser] = useState('');
    const [response, setResponse] = useState('');

    const apiKey = import.meta.env.VITE_API_KEY;
    const model = import.meta.env.VITE_MODEL;
    const maxOutputTokens = import.meta.env.VITE_MAX_OUTPUT_TOKENS;
    const temperature = import.meta.env.VITE_TEMPERATURE;

    const genAI = new GoogleGenerativeAI(apiKey);

    const generativeConfig = {
        maxOutputTokens: parseInt(maxOutputTokens),
        temperature: parseFloat(temperature),
    };

    const handleChange = (e) => {
        setInputUser(e.target.value);
    };

    const handlePromptSubmit = async () => {
        try {
            const chatSession = genAI.getGenerativeModel({
                model: model,
            }).startChat({
                generativeConfig,
                history: [],
            });

            const promptDefault = `
                Berikan edukasi tentang jenis sampah yang bisa didaur ulang.
                Jawab dengan singkat dan teratur dalam format poin seperti ini:
                [Jenis Sampah] - [Penjelasan secara jelas]
                [Jenis Sampah] - [Penjelasan secara jelas]
                [Jenis Sampah] - [Penjelasan secara jelas]
                [Jenis Sampah] - [Penjelasan secara jelas]
                [Jenis Sampah] - [Penjelasan secara jelas]
            
                Pastikan jawaban:
                - Tidak lebih dari 5 poin.
                - Hanya fokus pada sampah yang bisa didaur ulang.
                - Teks bersih tanpa format tambahan yang tidak perlu.
                - Gunakan bahasa yang jelas, sederhana, dan terstruktur.
            
                Jika format tidak terpenuhi, coba perbaiki sendiri sebelum menjawab.
            `;

            const result = await chatSession.sendMessage(promptDefault);
            setResponse(result.response.text);
        } catch (error) {
            console.error(error);
            setResponse(`Error: ${error.message}`);
        }
    };

    return (
        <div className="mx-4 sm:mx-8 md:mx-20">
            <div className="relative w-full h-[729px] p-6 rounded-lg">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    TANYA <span className="text-green-500">AI</span> YUK!
                </h1>
                <div className="flex justify-between mb-4">
                    <button
                        onClick={() => navigate('/')}
                        className="h-10 px-4 py-2 font-semibold text-white bg-gray-700 rounded hover:bg-gray-600"
                    >
                        Beranda
                    </button>
                </div>

                <div className="mt-6 p-4 bg-gray-100 rounded h-[400px] overflow-y-auto">
                    <ul className="list-decimal pl-5 text-gray-700">
                        {response
                            .split("\n")
                            .map((line, index) => 
                                line.trim() ? <li key={index}>{line.trim()}</li> : null
                            )}
                    </ul>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 border-t border-gray-300">
                <div className="flex flex-col sm:flex-row items-center w-full mx-auto">
                    <input
                        className="flex-grow p-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2 sm:mb-0 sm:w-3/4"
                        type="text"
                        value={inputUser}
                        onChange={handleChange}
                        placeholder="Ada yang bisa kami bantu?"
                    />
                    <button
                        onClick={handlePromptSubmit}
                        className="h-12 px-4 py-2 font-semibold text-white bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 sm:ml-2"
                    >
                        Cari tahu yuk!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatAi;
