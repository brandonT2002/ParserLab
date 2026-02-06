import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { ParserVisitor } from "../language/ParserVisitor";
import { InitContext, InstructionContext } from "../language/ParserParser";

export class EvalVisitor
    extends AbstractParseTreeVisitor<number>
    implements ParserVisitor<number>
{
    protected defaultResult(): number {
        return 0;
    }

    visitInit(ctx: InitContext): number {
        if (ctx.instruction()) {
            return this.visit(ctx.instruction()!);
        }
        return 0;
    }

    visitInstruction(ctx: InstructionContext): number {
        const left = Number(ctx.TK_number(0).text);
        const right = Number(ctx.TK_number(1).text);
        return left + right;
    }
}
