lexer grammar Scanner;

options {
    language = JavaScript;
}

fragment UNUSED  : [ \r\t]+;
fragment INTEGER : [0-9]+;

TK_add    : '+';
TK_number : INTEGER;
UNUSED_   : UNUSED -> skip ;