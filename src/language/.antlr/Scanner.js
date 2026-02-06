// Generated from c:/Users/Jefferson/Desktop/USAC/Tesis/prueba-antlr/src/language/Scanner.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,3,29,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,1,0,4,0,13,8,0,11,0,12,0,14,1,1,4,1,18,8,1,11,1,12,1,19,1,2,1,2,1,3,
1,3,1,4,1,4,1,4,1,4,0,0,5,1,0,3,0,5,1,7,2,9,3,1,0,2,3,0,9,9,13,13,32,32,
1,0,48,57,28,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,12,1,0,0,0,3,17,1,0,0,
0,5,21,1,0,0,0,7,23,1,0,0,0,9,25,1,0,0,0,11,13,7,0,0,0,12,11,1,0,0,0,13,
14,1,0,0,0,14,12,1,0,0,0,14,15,1,0,0,0,15,2,1,0,0,0,16,18,7,1,0,0,17,16,
1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,4,1,0,0,0,21,22,5,43,
0,0,22,6,1,0,0,0,23,24,3,3,1,0,24,8,1,0,0,0,25,26,3,1,0,0,26,27,1,0,0,0,
27,28,6,4,0,0,28,10,1,0,0,0,3,0,14,19,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class Scanner extends antlr4.Lexer {

    static grammarFileName = "Scanner.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'+'" ];
	static symbolicNames = [ null, "TK_add", "TK_number", "UNUSED_" ];
	static ruleNames = [ "UNUSED", "INTEGER", "TK_add", "TK_number", "UNUSED_" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

Scanner.EOF = antlr4.Token.EOF;
Scanner.TK_add = 1;
Scanner.TK_number = 2;
Scanner.UNUSED_ = 3;



