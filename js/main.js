function generateMadLib( adjective, noun, verbPastTense, adverb, adjective2, noun2 ) {
    var madlib = 'Today I went to the zoo. ' + 
        'I saw a ' + 
        adjective + 
        ' ' + 
        noun + 
        ' jumping up and down in its tree. ' + 
		'He ' +
		verbPastTense + 
		' ' +
		adverb +
		' ' +
		'through the large tunnel that led to its ' +
		adjective2 +
		' ' +
		noun2 +
		'.';
    
    return madlib;
}

var firstMadLib = generateMadLib('fuzzy', 'panda', 'flocked', 'vigorously', 'tiny', 'hands');
console.log( firstMadLib  );