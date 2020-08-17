var calcEffectivePhys = function(hp, armor) {
  return hp * (1 + (0.01 * armor));
};

var calcEffectiveMag = function(hp, mr) {
  return hp * (1 + (0.01 * mr));
}

var calcEffectiveMixed = function(hp, armor, mr, tDmg, pDmg, mDmg) {
  return hp * (pDmg + tDmg + mDmg) / ((pDmg/(1 + 0.01*armor)) + tDmg + (mDmg/(1 + 0.01 * mr)));
}

var calcBonusArmor = function(baseArmor, totalArmor) { //take the totalArmor - champBaseStats, calculation to get current baseStats due to level
  return totalArmor - baseArmor;
}

var calcEffectiveArm = function(armor, flat, reduct, perc, percBonus, letha, char, level) { //reduct & perc in decimal values, might wanna add a section for BONUS armor penetration
  //order of bonusarmor doesnt matter- do need to keep track of bonus armor though
  let bonusArmor = calcBonusArmor(calcCurrBaseArmor());
  let baseArmor = armor - bonusArmor;
  let calculatedArmor = armor;
  calculatedArmor = baseArmor + bonusArmor - flat;
  let baseArmor = armor - bonusArmor;
  baseArmor = (calculatedArmor > 0 && baseArmor > 0) ? (baseArmor * reduct)
  calculatedArmor = (calculatedArmor > 0) ? (calculatedArmor * reduct):calculatedArmor;
  calculatedArmor = (calculatedArmor > 0) ? (calculatedArmor * perc):calculatedArmor;
  calculatedArmor = (calculatedArmor > 0) ? ()
}

var calcEffectiveArm = function(armor, reduc, perc, letha) {

}

var calcEffectiveArm = function(armor, perc, letha) {

}
