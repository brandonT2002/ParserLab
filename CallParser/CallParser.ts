import { CharStreams, CommonTokenStream } from "antlr4ts";
import { Scanner } from "../language/Scanner";
import { ParserParser  } from "../language/ParserParser";
import { EvalVisitor } from "./EvalVisitor";

const input = "2 + 5";
const inputStream = CharStreams.fromString(input);

// Lexer
const lexer = new Scanner(inputStream);
const tokenStream = new CommonTokenStream(lexer);

// Parser
const parser = new ParserParser(tokenStream);

// Regla inicial
const tree = parser.init();
const visitor = new EvalVisitor();
const result = visitor.visit(tree);
console.log(result);