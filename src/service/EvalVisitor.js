import ParserVisitor from "../language/ParserVisitor.js";

export default class EvalVisitor extends ParserVisitor {

    visitInit(ctx) {
        if (ctx.instruction()) {
            return this.visit(ctx.instruction());
        }
        return null;
    }

    visitInstruction(ctx) {
        const left  = Number(ctx.TK_number(0).getText());
        const right = Number(ctx.TK_number(1).getText());
        return left + right;
    }
}
