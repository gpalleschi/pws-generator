export const PWSDefault = {
	password       : '',
	lenPWS         : 8,
	bUpper         : false,
	bLower         : false,
	bNumbers       : false,
	bSpecialChars  : false,
	SpecialChars   : ['#','?','!','%','&'],
	bCharToExclude : false,
	CharToExclude  : []
}

export const VERSION = '1.0 Beta 21/05/2022'

export const UpperCase='UpperCase';
export const LowerCase='LowerCase';
export const Numbers='Numbers';
export const SpecialChars='Special Chars';
export const CharToExclude='Chars to Exclude';

export const getBoolean = (type, pwsData) => {
	switch(type) {
                  case UpperCase:
			  return pwsData.bUpper;
                  case LowerCase:
			  return pwsData.bLower;
                  case Numbers:
			  return pwsData.bNumbers;
                  case SpecialChars:
			  return pwsData.bSpecialChars;
                  case CharToExclude:
			  return pwsData.bCharToExclude;
                  default:
			  return false
        }
}

export const setBoolean = (type, value, pwsData) => {
	switch(type) {
                  case UpperCase:
			  pwsData.bUpper = value;
			  break;
                  case LowerCase:
			  pwsData.bLower = value;
			  break;
                  case Numbers:
			  pwsData.bNumbers = value;
			  break;
                  case SpecialChars:
			  pwsData.bSpecialChars = value;
			  break;
                  case CharToExclude:
			  pwsData.bCharToExclude = value;
			  break;
                  default:
			  return pwsData;
        }
	return pwsData;
}

