import { useState } from "react";
import "./App.css";

export default function Page() {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "¿Estás segura?",
            "¿Realmente segura?",
            "¡Piénsalo de nuevo!",
            "¡Última oportunidad!",
            "¿Segura que no?",
            "¡Podrías arrepentirte de esto!",
            "¡Piénsalo una vez más!",
            "¿Estás absolutamente segura?",
            "¡Esto podría ser un error!",
            "¡Ten corazón!",
            "¡No seas tan fría!",
            "¿Cambio de opinión?",
            "¿No lo reconsiderarías?",
            "¿Es esa tu respuesta final?",
            "Me estás rompiendo el corazón ;(",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="
        flex items-center justify-center min-h-screen
        "
        >
            <div
                className="flex flex-col items-center justify-center max-w-md p-8 text-center bg-white rounded-lg shadow-lg sm:max-w-full
            "
            >
                {yesPressed ? (
                    <>
                        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
                        <div className="flex items-center justify-center mt-4 space-x-4 ">
                            <h1 className="text-container">
                                ¡Genial! ¡Te estaré esperando con ansias! ❤
                            </h1>
                        </div>
                    </>
                ) : (
                    <>
                        <img
                            className="flex items-center justify-center mt-4 space-x-4 "
                            style={{ width: "400x", height: "240px" }}
                            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                        />
                        <h1 className="text-container">
                            Te gustaría pasar el día de San Valentín conmigo? ❤
                        </h1>
                        <div className="flex flex-wrap gap-4 items-center justify-center mt-4 space-x-4">
                            <button
                                className="px-5 py-2 font-bold text-white bg-green-500 rounded-md"
                                style={{ fontSize: yesButtonSize }}
                                onClick={() => setYesPressed(true)}
                            >
                                Si
                            </button>

                            <button
                                onClick={handleNoClick}
                                className="px-5 py-2 font-bold text-white bg-red-500 rounded-md"
                            >
                                {noCount === 0 ? "No" : getNoButtonText()}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
