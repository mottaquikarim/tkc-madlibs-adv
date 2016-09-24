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

$( ".js-clear" ).click(function() {
	$('.js-input').val('');
});

$( ".js-submit" ).click(function() {
	var userAdjective = $( ".js-adj").val();
	console.log( 'user adjective is...', userAdjective );

	if ( userAdjective === '' ) {
		$( ".js-adj").css({'border': '1px solid red'})
		alert('You did not fill out the adjective!');
		return;
	}
	else {
		$( ".js-adj").css({'border': '1px solid rgba(34,36,38,.15)'})
	}

	var userNoun = $( '.js-noun' ).val();
	console.log( 'user noun is...', userNoun );

	if ( userNoun === '' ) {
		alert('You did not set the noun!');
		return;
	}

	var userVerbPastTense = $(".js-verb-past-tense").val();
	console.log( 'user verbPastTense is...', userVerbPastTense );

	var userAdverb = $('.js-adverb').val();
	console.log( 'user userAdverb is...', userAdverb );

	var userNoun2 = $('.js-noun2').val();
	console.log( 'user userNoun2 is...', userNoun2 );

	var userAdjective2 = $('.js-adj2').val();
	console.log( 'user userAdjective2 is...', userAdjective2 );	

	var userMadLib = generateMadLib(userAdjective, userNoun, userVerbPastTense, userAdverb, userAdjective2, userNoun2) ;
	console.log( userMadLib  );

	$('.js-madlibs-content').html( 
		"<div class='ui segment'>" +
			"<h1 class='ui header'>" +
				userMadLib +
			"</h1>" +
		"</div>"
	);

	// $( ".js-adj").val('');
	// $( '.js-noun' ).val('');
	// $(".js-verb-past-tense").val('');
	// $('.js-adverb').val('');
	// $('.js-noun2').val('');
	// $('.js-adj2').val('');
	$('.js-input').val('')

});














