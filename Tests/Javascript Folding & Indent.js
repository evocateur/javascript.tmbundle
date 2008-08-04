// -*- Mode: Embedded JavaScript; tab-width: 4; indent-tabs-mode: nil; -*-

// Select everything and hit Text > Indent Line
// Then run a Diff > Document with Saved Copy
// If there are any differences then the indent rules are broken

/*
Block Comment
*/
/*
Block Comment
*/ // Comment

/**
Documentation Comment (idiom)
**/ // Comment

/* Documentation Comment (idiom)
 * 
 * Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
 * eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
 * ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
 * aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
 * in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 * Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
 * officia deserunt mollit anim id est laborum.
 */


[1,2,3]
[
    1,
    2,
    3
]
myArray[
    0
]
(statement)
(
    statement
)
myFunction(
    statement
)
{
    label:'value'
}
var myObj = {
    label:'value'
}

function (){
    statement;
}

// With ;
[1,2,3];
[
    1,
    2,
    3
];
myArray[
    0
];
(statement)
(
    statement
);
myFunction(
    statement
);
{
    label:'value'
};
function(){
    statement;
};



// With ()
[1,2,3]()
[
    1,
    2,
    3
]()
myArray[
    0
]()
(statement)
(
    statement
)()
myFunction(
    statement
)()
{
    label:'value'
}()
function(){
    statement()
}()



// Object
var myObj = {
    label: [1,2,3],
    label: [
        1,
        2,
        3
    ],
    label: myArray[
        0
    ],
    label: (statement),
    label: (
        statement
    ),
    label: myFunction(
        statement
    ),
    label: {
        label:'value'
    },
    label: function(){
        statement;
    },
    label: 0
};


// ========================
// = With inline comments =
// ========================
[1,2,3]                 // Comment
[                       // Comment
    1,                  // Comment
    2,                  // Comment
    3                   // Comment
]                       // Comment
myArray[                // Comment
    0                   // Comment
]                       // Comment
(statement)             // Comment
(                       // Comment
    statement           // Comment
)                       // Comment
myFunction(             // Comment
    statement           // Comment
)                       // Comment
{                       // Comment
    label:'value'       // Comment
}                       // Comment
function(){             // Comment
    statement;          // Comment
}                       // Comment


[1,2,3];                // Comment
[                       // Comment
    1,                  // Comment
    2,                  // Comment
    3                   // Comment
];                      // Comment
myArray[                // Comment
    0                   // Comment
];                      // Comment
(statement)             // Comment
(                       // Comment
    statement           // Comment
);                      // Comment
myFunction(             // Comment
    statement           // Comment
);                      // Comment
{                       // Comment
    label:'value'       // Comment
};                      // Comment
function(){             // Comment
    statement;          // Comment
};                      // Comment


var myObj = {           // Comment
    label: [1,2,3],     // Comment
    label: [            // Comment
        1,              // Comment
        2,              // Comment
        3               // Comment
    ],                  // Comment
    label: myArray[     // Comment
        0               // Comment
    ],                  // Comment
    label: (statement), // Comment
    label: (            // Comment
        statement       // Comment
    ),                  // Comment
    label: myFunction(  // Comment
        statement       // Comment
    ),                  // Comment
    label: {            // Comment
        label:'value'   // Comment
    },                  // Comment
    label: function(){  // Comment
        statement;      // Comment
    },                  // Comment
    label: 0            // Comment
};                      // Comment


// =================
// = With Comments =
// =================
[1,2,3]                 /* Comment */
[                       /* Comment */
    1,                  /* Comment */
    2,                  /* Comment */
    3                   /* Comment */
]                       /* Comment */
myArray[                /* Comment */
    0                   /* Comment */
]                       /* Comment */
(statement)             /* Comment */
(                       /* Comment */
    statement           /* Comment */
)                       /* Comment */
myFunction(             /* Comment */
    statement           /* Comment */
)                       /* Comment */
{                       /* Comment */
    label:'value'       /* Comment */
}                       /* Comment */
function(){             /* Comment */
    statement;          /* Comment */
}                       /* Comment */

// With ;               /* Comment */
[1,2,3];                /* Comment */
[                       /* Comment */
    1,                  /* Comment */
    2,                  /* Comment */
    3                   /* Comment */
];                      /* Comment */
myArray[                /* Comment */
    1,                  /* Comment */
    2,                  /* Comment */
    3                   /* Comment */
];                      /* Comment */
(statement)             /* Comment */
(                       /* Comment */
    statement           /* Comment */
);                      /* Comment */
myFunction(             /* Comment */
    statement           /* Comment */
);                      /* Comment */
{                       /* Comment */
    label:'value'       /* Comment */
};                      /* Comment */
function(){             /* Comment */
    statement;          /* Comment */
};                      /* Comment */


// Object               /* Comment */
var myObj = {           /* Comment */
    label: [1,2,3],     /* Comment */
    label: [            /* Comment */
        1,              /* Comment */
        2,              /* Comment */
        3               /* Comment */
    ],                  /* Comment */
    label: myArray[     /* Comment */
        0               /* Comment */
    ],                  /* Comment */
    label: (statement), /* Comment */
    label: (            /* Comment */
        statement       /* Comment */
    ),                  /* Comment */
    label: myFunction(  /* Comment */
        statement       /* Comment */
    ),                  /* Comment */
    label: {            /* Comment */
        label:'value'   /* Comment */
    },                  /* Comment */
    label: function(){  /* Comment */
        statement;      /* Comment */
    },                  /* Comment */
    label: 0            /* Comment */
};                      /* Comment */


// ==============
// = Mixed line =
// ==============

[   [1,2,3],[1,2,3],
    [1,2,3],[1,2,3],
][0]
myArray[ myArray[0] + myArray[0] +
    0
][  0
]
(  (statement) +
    statement
)
myFunction( myFunction() + myFunction()
)
var myObj = { label:{ label:'value' }, label:{ label:'value' },
    label:'value'
}
function(){ function(){ statement }; function(){ statement };
    statement;
}


// ========
// = Bugs =
// ========

myFunction()

myFunction(
)myFunction

myFunction(()
)myFunction

myFunction(()()
{()()()())()()}

myFunction(something()
)

myFunction(()something
)

myFunction((something)
)

    myFunction(something(something)something
    something(something)something)



myFunction(something()()
)

myFunction(()something()
)

myFunction((something)()
)

myFunction(()something()(something)()something()
)


