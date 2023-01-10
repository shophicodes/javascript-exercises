const findTheOldest = function(persons) {
    for(let p of persons) {
        if(!("yearOfDeath" in p)) {
            p.yearsLived = new Date().getFullYear() - p.yearOfBirth;
        }
        else {
        		p.yearsLived = p.yearOfDeath - p.yearOfBirth;
        }  
    }
    let sortedByYearsLived = persons.sort((a, b) => b.yearsLived - a.yearsLived);
    return sortedByYearsLived[0];
};

// Do not edit below this line
module.exports = findTheOldest;
