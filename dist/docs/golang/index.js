"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var documentationGo = {
    basic: {
        title: 'Basic Syntax',
        content: "\n    Hello World\n\n    File hello.go\n\n    package main\n\n    import \"fmt\"\n\n    func main () {\n      fmt.Println(\"Hello Go\")\n    }\n\n    $ go run hello.go\n    ",
    },
    operators: {
        title: 'Operators',
        content: "\n=> Arithmetic\n    |Operator |Description        |\n    |---------|-------------------|\n    |   '+ '  |addition           |\n    |   '- '  |subtraction        |\n    |   '* '  |multiplication     |\n    |   '/ '  |quotient           |\n    |   '% '  |remainder          |\n    |   '& '  |bitwise and        |\n    |   '| '  |bitwise or         |\n    |   '^ '  |bitwise xor        |\n    |   '&^ ' |bit clear (and not)|\n    |   '<< ' |left shift         |\n    |   '>> ' |right shift        |\n\n=> Comparison\n    |Operator |Description          |\n    |---------|---------------------|\n    |  '== '  |equal                |\n    |  '!= '  |not equal            |\n    |  '< '   |less than            |\n    |  '<= '  |less than or equal   |\n    |  '> '   |greater than         |\n    |  '>= '  |greater than or equal|\n\n=> Logical\n    |Operator |Description|\n    |---------|-----------|\n    |  '&& '  |logical and|\n    |  '|| '  |logical or |\n    |  '! '   |logical not|\n\n=> Other\n    |Operator |Description                                   |\n    |---------|----------------------------------------------|\n    |   '& '  |address of / create pointer                   |\n    |   '* '  |dereference pointer                           |\n    |   '< -' |send / receive operator (see 'Channels' below)|\n    ",
    },
};
exports.default = documentationGo;
