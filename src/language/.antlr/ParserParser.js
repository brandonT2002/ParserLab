// Generated from c:/Users/Jefferson/Desktop/USAC/Tesis/prueba-antlr/src/language/Parser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
const serializedATN = [4,1,3,15,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,0,3,0,9,8,
0,1,1,1,1,1,1,1,1,1,1,0,0,2,0,2,0,0,13,0,8,1,0,0,0,2,10,1,0,0,0,4,5,3,2,
1,0,5,6,5,0,0,1,6,9,1,0,0,0,7,9,5,0,0,1,8,4,1,0,0,0,8,7,1,0,0,0,9,1,1,0,
0,0,10,11,5,2,0,0,11,12,5,1,0,0,12,13,5,2,0,0,13,3,1,0,0,0,1,8];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ParserParser extends antlr4.Parser {

    static grammarFileName = "Parser.g4";
    static literalNames = [ null, "'+'" ];
    static symbolicNames = [ null, "TK_add", "TK_number", "UNUSED_" ];
    static ruleNames = [ "init", "instruction" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ParserParser.ruleNames;
        this.literalNames = ParserParser.literalNames;
        this.symbolicNames = ParserParser.symbolicNames;
    }



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ParserParser.RULE_init);
	    try {
	        this.state = 8;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 4;
	            this.instruction();
	            this.state = 5;
	            this.match(ParserParser.EOF);
	            break;
	        case -1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 7;
	            this.match(ParserParser.EOF);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ParserParser.RULE_instruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(ParserParser.TK_number);
	        this.state = 11;
	        this.match(ParserParser.TK_add);
	        this.state = 12;
	        this.match(ParserParser.TK_number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ParserParser.EOF = antlr4.Token.EOF;
ParserParser.TK_add = 1;
ParserParser.TK_number = 2;
ParserParser.UNUSED_ = 3;

ParserParser.RULE_init = 0;
ParserParser.RULE_instruction = 1;

class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ParserParser.RULE_init;
    }

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	EOF() {
	    return this.getToken(ParserParser.EOF, 0);
	};


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ParserParser.RULE_instruction;
    }

	TK_number = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ParserParser.TK_number);
	    } else {
	        return this.getToken(ParserParser.TK_number, i);
	    }
	};


	TK_add() {
	    return this.getToken(ParserParser.TK_add, 0);
	};


}




ParserParser.InitContext = InitContext; 
ParserParser.InstructionContext = InstructionContext; 
