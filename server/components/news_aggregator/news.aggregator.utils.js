var _ = require('lodash');
// Utility Functions for the news aggregator
module.exports = {

  getLocation : function(str) {
    // TODO: Handle different names for countries:
    // Russian Federation/Russia and Viet Nam/Vietnam, for example
    var news = str;
    var countries = module.exports.countriesList;
    var countryMatchesArray = news.match(countries);

    // Return country names with capitalized first letters
    var formatted = countryMatchesArray.map(function(country){
      // Log country for debugging purposes
      // console.log(country, "COUNTRY");
      if (country) {
        if (country.indexOf(" ") > -1) {
          var split = country.split(" ");
          var fullyCapitalized = '';
          _.forEach(split, function(countryWord, index){
            var formattedWord = countryWord.slice(0,1).toUpperCase() + countryWord.slice(1).toLowerCase(); 
            fullyCapitalized += (index === 0) ? formattedWord : " " + formattedWord;
          });
          return fullyCapitalized;
        } else {
          return country.slice(0,1).toUpperCase() + country.slice(1).toLowerCase();
        }
      }
    }); 

    // Ensure that the array has no duplicates
    countryMatchesArray = _.uniq(formatted);
    return countryMatchesArray; 
  },

  isValidUrl : function(str){
    // The Angular version of URL Sanitize was borrowed for this REGEX. 
    var pattern = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/;  
    // Check to see if the input is valid.
    if(!pattern.test(str)) {
      return false;
    } else {
      return true;
    }
  },
countriesList: /Afghanistan|Albania|Algeria|American Samoa|Andorra|Angola|Anguilla|Antigua and Barbuda|Argentina|Armenia|Aruba|Australia|Austria|Azerbaijan|Bahamas|Bahrain|Bangladesh|Barbados|Belarus|Belgium|Belize|Benin|Bermuda|Bhutan|Bolivia|Bosnia-Herzegovina|Botswana|Bouvet Island|Brazil|Brunei|Bulgaria|Burkina Faso|Burundi|Cambodia|Cameroon|Canada|Cape Verde|Cayman Islands|Central African Republic|Chad|Chile|China|Christmas Island|Cocos (Keeling) Islands|Colombia|Comoros|Congo, Democratic Republic of the (Zaire)|Congo, Republic of|Cook Islands| Costa Rica|Croatia|Cuba|Cyprus|Czech Republic|Denmark|Djibouti|Dominica|Dominican Republic|Ecuador|Egypt|El Salvador|Equatorial Guinea|Eritrea|Estonia|Ethiopia|Falkland Islands|Faroe Islands|Fiji|Finland|France|French Guiana|Gabon|Gambia|Georgia|Germany|Ghana|Gibraltar|Greece|Greenland|Grenada|Guadeloupe (French)|Guam (USA)|Guatemala|Guinea|Guinea Bissau|Guyana|Haiti|Holy See|Honduras|Hungary|Iceland|India|Indonesia|Iran|Iraq|Ireland|Israel|Italy|Ivory Coast (Cote D`Ivoire)|Jamaica|Japan|Jordan|Kazakhstan|Kenya|Kiribati|Kuwait|Kyrgyzstan|Laos|Latvia|Lebanon|Lesotho|Liberia|Libya|Liechtenstein|Lithuania|Luxembourg|Macau|Macedonia|Madagascar|Malawi|Malaysia|Maldives|Mali|Malta|Marshall Islands|Martinique (French)|Mauritania|Mauritius|Mayotte|Mexico|Micronesia|Moldova|Monaco|Mongolia|Montenegro|Montserrat|Morocco|Mozambique|Myanmar|Namibia|Nauru|Nepal|Netherlands|Netherlands Antilles|New Caledonia (French)|New Zealand|Nicaragua|Niger|Nigeria|Niue|Norfolk Island|North Korea|Northern Mariana Islands|Norway|Oman|Pakistan|Palau|Panama|Papua New Guinea|Paraguay|Peru|Philippines|Pitcairn Island|Poland|Polynesia (French)|Portugal|Puerto Rico|Qatar|Reunion|Romania|Russia|Rwanda|Saint Helena|Saint Kitts and Nevis|Saint Lucia|Saint Pierre and Miquelon|Saint Vincent and Grenadines|Samoa|San Marino|Sao Tome and Principe|Saudi Arabia|Senegal|Serbia|Seychelles|Sierra Leone|Singapore|Slovakia|Slovenia|Solomon Islands|Somalia|South Africa|South Georgia and South Sandwich Islands|South Korea|South Sudan|Spain|Sri Lanka|Sudan|Suriname|Svalbard and Jan Mayen Islands|Swaziland|Sweden|Switzerland|Syria|Taiwan|Tajikistan|Tanzania|Thailand|Timor-Leste (East Timor)|Togo|Tokelau|Tonga|Trinidad and Tobago|Tunisia|Turkey|Turkmenistan|Turks and Caicos Islands|Tuvalu|Uganda|Ukraine|United Arab Emirates|United Kingdom|United States|Uruguay|Uzbekistan|Vanuatu|Venezuela|Vietnam|Virgin Islands|Wallis and Futuna Islands|Yemen|Zambia|Zimbabwe/gi

};
