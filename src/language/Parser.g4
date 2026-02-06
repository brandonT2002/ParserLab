grammar Parser;

options {
    language = JavaScript;
    tokenVocab = Scanner;
}

init :
    instruction EOF |
    EOF ;

instruction :
    TK_number TK_add TK_number ;