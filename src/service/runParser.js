import * as antlr4 from "antlr4";
import Scanner from "../language/Scanner.js";
import Parser from "../language/ParserParser.js";
import EvalVisitor from "./EvalVisitor.js";

export function runParser(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new Scanner(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new Parser(tokens);

    parser.buildParseTrees = true;

    const tree = parser.init();
    const visitor = new EvalVisitor();

    return visitor.visit(tree);
}
