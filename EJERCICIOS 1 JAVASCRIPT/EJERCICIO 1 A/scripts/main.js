var leapYearInterval = 4;
var startingYear = 2017;
var targetYear = 2050;
var yearBeforeTargetYear = targetYear - 1;

var yearInterval = yearBeforeTargetYear - startingYear;
var remainingYears = yearInterval % leapYearInterval;
var result = (yearInterval - remainingYears) / leapYearInterval;

console.log(result);
