export function parse(input) {
    if (!window.Parser) {
        throw new Error("Parser no cargado");
    }
    return window.Parser.parse(input);
}