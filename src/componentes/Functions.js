String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

export const generatePassword = (pwsData) => {

	const numbers='0123456789';
	const letterUpper='QWERTYUIOPASDFGHJKLZXCVBNM';
	const letterLower=letterUpper.toLowerCase();
	let pwsToRet = '';

	let pwsString = '';

	if ( pwsData.bUpper ) {
		pwsString += letterUpper;
	}
	if ( pwsData.bLower ) {
		pwsString += letterLower;
	}
	if ( pwsData.bNumbers ) {
		pwsString += numbers;
	}
	if ( pwsData.bSpecialChars ) {
		pwsString += pwsData.SpecialChars.join('');
	}
	if ( pwsData.bCharToExclude ) {
		for(let i=0;i<pwsData.CharToExclude.length;i++) {
		   pwsString = pwsString.replace(pwsData.CharToExclude[i],'');
		}
	}

	if ( pwsString.length > 0 ) {

	   console.log(pwsString);
	
	   pwsToRet = pwsString.shuffle().substr(0,pwsData.lenPWS-1);

	} 
	console.log('Eccola <' + pwsToRet + '>');
	return pwsToRet;
}