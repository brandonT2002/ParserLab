import { useState, type JSX } from "react";
import Editor from "@monaco-editor/react";
import { parse } from "./service_/parserWrapper";

type Tab = "lexer" | "parser";

function App(): JSX.Element {
    const [activeTab, setActiveTab] = useState<Tab>("lexer");

    const [lexerCode, setLexerCode] = useState<string>("// Lexer aquí");
    const [parserCode, setParserCode] = useState<string>("// Parser aquí");

    return (
        <div className="bg-gray-900 h-screen text-white p-4">
            <div className="grid grid-cols-2 gap-4 h-full">

                <div className="h-full flex flex-col">
                    <div className="flex mb-2">
                        <button
                            className={`px-4 py-2 text-sm cursor-pointer ${
                                activeTab === "lexer"
                                    ? "bg-gray-800 text-white border-b-2 border-blue-500"
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => setActiveTab("lexer")}
                        >
                            Lexer
                        </button>

                        <button
                            className={`px-4 py-2 text-sm cursor-pointer ${
                                activeTab === "parser"
                                    ? "bg-gray-800 text-white border-b-2 border-blue-500"
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => setActiveTab("parser")}
                        >
                            Parser
                        </button>

                        <button 
                            className=" cursor-pointer"
                            onClick={() => {
                                try {
                                    console.log(lexerCode)
                                    const result = parse(lexerCode);
                                    console.log(result);
                                } catch (err) {
                                    console.error("Error en la expresión");
                                }
                            }}
                        >
                            Ejecutar
                        </button>
                    </div>

                    {/* Editor */}
                    <div className="flex-1">
                        <Editor
                            theme="vs-dark"
                            language="java"
                            height="100%"
                            value={activeTab === "lexer" ? lexerCode : parserCode}
                            onChange={(value) => {
                                if (activeTab === "lexer") {
                                    setLexerCode(value ?? "");
                                } else {
                                    setParserCode(value ?? "");
                                }
                            }}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                automaticLayout: true,
                            }}
                        />
                    </div>
                </div>

                {/* ===== PANEL DERECHO ===== */}
                <div className="h-full grid grid-rows-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded">
                        input
                    </div>

                    <div className="bg-gray-800 p-4 rounded">
                        Output
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
