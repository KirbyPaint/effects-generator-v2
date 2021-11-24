import { fumbleMagicText, fumbleMagicTitle } from "./fumbleMagic";
import { fumbleMeleeText, fumbleMeleeTitle } from "./fumbleMelee";
import { fumbleNaturalText, fumbleNaturalTitle } from "./fumbleNatural";
import { fumbleRangedText, fumbleRangedTitle } from "./fumbleRanged";

describe("fumbleMagic", () => {
  it("fumbleMagicTitle array should reflect correct titles", () => {
    expect(fumbleMagicTitle[0]).toBe("Cursed");
    expect(fumbleMagicTitle[1]).toBe("Weak-Minded Fool");
    expect(fumbleMagicTitle[2]).toBe("Power Transfer");
    expect(fumbleMagicTitle[3]).toBe("Mental Slip");
    expect(fumbleMagicTitle[4]).toBe("Not Me, You Fool!");
    expect(fumbleMagicTitle[5]).toBe("Cold Snap");
    expect(fumbleMagicTitle[6]).toBe("Jumbled Components");
    expect(fumbleMagicTitle[7]).toBe("Left Reeling");
    expect(fumbleMagicTitle[8]).toBe("Fragmented Magic");
    expect(fumbleMagicTitle[9]).toBe("Blastoff");
    expect(fumbleMagicTitle[10]).toBe("Caster's Block");
    expect(fumbleMagicTitle[11]).toBe("Unexpected Blast");
    expect(fumbleMagicTitle[12]).toBe("Weakened");
    expect(fumbleMagicTitle[13]).toBe("Backblast");
    expect(fumbleMagicTitle[14]).toBe("Spell Shield");
    expect(fumbleMagicTitle[15]).toBe("Bleeding Eyes");
    expect(fumbleMagicTitle[16]).toBe("Power Down");
    expect(fumbleMagicTitle[17]).toBe("Energy Transfer");
    expect(fumbleMagicTitle[18]).toBe("Mind Drain");
    expect(fumbleMagicTitle[19]).toBe("Nose Bleed");
    expect(fumbleMagicTitle[20]).toBe("Magic Fatigue");
    expect(fumbleMagicTitle[21]).toBe("Tiring Spell");
    expect(fumbleMagicTitle[22]).toBe("Reflection");
    expect(fumbleMagicTitle[23]).toBe("Power Drain");
    expect(fumbleMagicTitle[24]).toBe("Electrical Feedback");
    expect(fumbleMagicTitle[25]).toBe("Acidic Backlash");
    expect(fumbleMagicTitle[26]).toBe("Poor Trade");
    expect(fumbleMagicTitle[27]).toBe("Glimpse Of Terror");
    expect(fumbleMagicTitle[28]).toBe("This Is Hard");
    expect(fumbleMagicTitle[29]).toBe("Side Effect");
    expect(fumbleMagicTitle[30]).toBe("Why Me");
    expect(fumbleMagicTitle[31]).toBe("How Did This Happen?");
    expect(fumbleMagicTitle[32]).toBe("Vertigo");
    expect(fumbleMagicTitle[33]).toBe("Monster Rift");
    expect(fumbleMagicTitle[34]).toBe("Arcane Fire");
    expect(fumbleMagicTitle[35]).toBe("Can You Hear Me Now?");
    expect(fumbleMagicTitle[36]).toBe("Now I See You...");
    expect(fumbleMagicTitle[37]).toBe("You Made Him Bigger");
    expect(fumbleMagicTitle[38]).toBe("The Magic Is Slipping");
    expect(fumbleMagicTitle[39]).toBe("Magical Vacuum");
    expect(fumbleMagicTitle[40]).toBe("Tangled");
    expect(fumbleMagicTitle[41]).toBe("You Made Him Tougher");
    expect(fumbleMagicTitle[42]).toBe("Magical Smackdown");
    expect(fumbleMagicTitle[43]).toBe("Hit By The Ugly Stick");
    expect(fumbleMagicTitle[44]).toBe("You Made Him Stronger");
    expect(fumbleMagicTitle[45]).toBe("You Made Him Faster");
    expect(fumbleMagicTitle[46]).toBe("Distance Rift");
    expect(fumbleMagicTitle[47]).toBe("Klaatu Barada Necktie");
    expect(fumbleMagicTitle[48]).toBe("It's Sparkly");
    expect(fumbleMagicTitle[49]).toBe("Wild Magic");
  });

  it("fumbleMagicText array should reflect correct text bodies", () => {
    expect(fumbleMagicText[0]).toBe(
      `Your spell fails and you suffer a -4 penalty on attack rolls, saves, skill checks, and ability checks. 
Save: Resolve DC 20 negates.
Heal: This effect can only be cured with remove curse.`
    );
    expect(fumbleMagicText[1])
      .toBe(`Your spell fails and you suffer 1 point of Wisdom bleed damage.
Save: Resolve DC 20 negates.
Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.
Heal: A DC 20 Skill check ends the ability bleed, but rest or restorative magic is needed to heal ability damage.`);
    expect(fumbleMagicText[2])
      .toBe(`Your spell fails and the highest level spell effect on you is transferred to your target for the remainder of its duration.
Save: Charisma DC 20 negates.
Special: If you have no spell effect on you, you suffer bonus damage instead.`);
    expect(fumbleMagicText[3])
      .toBe(`Your spell fails and you suffer Disadvantage on all spell casting rolls until the end of your next turn.
Save: Intelligence DC 20 negates.`);
    expect(fumbleMagicText[4])
      .toBe(`Your spell succeeds but targets your ally closest to the target instead.
Save: Resolve DC 20 negates.
Special: If there is no ally within the spell's range, you target yourself instead.`);
    expect(fumbleMagicText[5])
      .toBe(`Your spell fails and you suffer bonus damage as cold damage.
Save: Resolve DC 20 negates.
Special: If the spell would have dealt cold damage, DC 20 Constitution save or you suffer 1d4 Dexterity damage.
Heal: Rest or restorative magic is needed to heal ability damage.`);
    expect(fumbleMagicText[6])
      .toBe(`Your spell fails and you are staggered until the end of your next turn.
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check negates the staggered condition.`);
    expect(fumbleMagicText[7])
      .toBe(`Your spell fails and you are stunned for 1 round
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check negates the stunned condition.`);
    expect(fumbleMagicText[8])
      .toBe(`Your spell fails and 1d4+2 mirror images of your target spring up around the target as the spell mirror image. These images last for 1 minute or until destroyed.
Save: Intelligence DC 20 negates.`);
    expect(fumbleMagicText[9])
      .toBe(`Your spell fails and you are thrown 1d6*10 feet in a random direction
Save: Resolve DC 20 negates.`);
    expect(fumbleMagicText[10])
      .toBe(`Your spell fails and you cannot cast this spell again for 24 hours.
Save: Wisdom DC 20 negates.
Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.
Heal: A DC 20 Skill check restores your ability to cast this spell.`);
    expect(fumbleMagicText[11])
      .toBe(`Your spell succeeds but you suffer bonus damage and the spell affects all other creatures within 30 ft of you.
Save: Resolve DC 20 negates.`);
    expect(fumbleMagicText[12])
      .toBe(`Your spell fails and the DC to resist your spells and abilities are reduced by 2.
Save: Constitution DC 20 negates.
Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.
Heal: A DC 20 Skill check negates the penalty.`);
    expect(fumbleMagicText[13])
      .toBe(`Your spell succeeds but targets you instead and is considered a critical threat. Determine the severity of the critical hit as normal.
Save: Resolve DC 20 negates.
Special: You do not defend against this attack (if you have SR) and may not negate the spell (such as a counter spell).`);
    expect(fumbleMagicText[14])
      .toBe(`Your spell fails and the target gains SR equal to your proficiency bonus + their Resolve modifier for 1d6 rounds.
Save: Resolve DC 20 negates.`);
    expect(fumbleMagicText[15])
      .toBe(`Your spell fails and you suffer 1d6 points of bleed damage. You are considered blinded while bleeding.
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check negates the bleed.`);
    expect(fumbleMagicText[16])
      .toBe(`Your spell fails and you suffer 1 point of Intelligence bleed.
Save: Resolve DC 20 negates.
Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.
Heal: A DC 20 Skill check ends the ability bleed, but rest or restorative magic is needed to heal ability damage.`);
    expect(fumbleMagicText[17])
      .toBe(`Your spell fails and you transfer the knowledge of that spell to the nearest opponent until the end of their next turn. That opponent may invoke the spell on their turn as if it were a spell-like ability.
Save: Resolve DC 20 negates.`);
    expect(fumbleMagicText[18])
      .toBe(`You suffer 1d4 points of ability damage to Int, Wis, Res, or Charisma determined randomly.
Save: Resolve DC 20 negates.

D4 - Ability Type Damage
1 - Int
2 - Wis
3 - Res
4 - Cha

Heal: Rest or restorative magic is needed to heal ability damage.`);
    expect(fumbleMagicText[19])
      .toBe(`Your spell fails and you suffer a number of bleed damage equal to 1/2 bonus damage.
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check negates the bleed.`);
    expect(fumbleMagicText[20])
      .toBe(`Your spell fails and you become fatigued. Additionally you cannot cast any spells for 1 round.
Save: Constitution DC 20 negates.
Heal: Rest or a DC 20 Heal check negates the fatigued condition.`);
    expect(fumbleMagicText[21])
      .toBe(`Your spell succeeds but you become Exhausted
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check Reduces the exhausted condition to fatigued.`);
    expect(fumbleMagicText[22])
      .toBe(`Re-roll the spell cast with yourself as the target; it is possible to critically cast upon yourself in this manner.
Save: Resolve DC 20 negates.
Special: You may defend against this attack as normal but may not negate the attack (such as a counter spell) if it is successful.`);
    expect(fumbleMagicText[23])
      .toBe(`Your spell fails and you the cool down time of the spell is increased by 2 rounds.
Save: Resolve DC 20 negates.
Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.
Heal: A DC 20 Skill check reduces the increased cool down time by 1 round.`);
    expect(fumbleMagicText[24])
      .toBe(`Your spell fails and you suffer bonus damage as electricity damage.
Save: Resolve DC 20 negates.
Special: If the spell would have dealt electricity damage, DC 20 Constitution save or become stunned for 1 round.`);
    expect(fumbleMagicText[25])
      .toBe(`Your spell fails and you suffer bonus damage as acid damage.
Save: Resolve DC 20 negates.
Special: If the spell would have dealt acid damage, DC 20 Dexterity save or bonus damage is also dealt to your armor. If you wear no armor it is dealt to shield or deal additional bonus damage again to yourself.`);
    expect(fumbleMagicText[26])
      .toBe(`Your spell succeeds but you must spend double the spell's mana cost. 
Save: Resolve DC 20 negates.
Special: If you do not have enough mana for the spell, your mana is reduced to 0 and you suffer bonus damage.`);
    expect(fumbleMagicText[27])
      .toBe(`Your spell fails and you are shaken for 2d4 rounds
Save: Resolve DC 20 negates.`);
    expect(fumbleMagicText[28])
      .toBe(`Your spell fails and you suffer 1 point of con damage
Save: Resolve DC 20 negates.
Heal: Rest or restorative magic is needed to heal ability damage.`);
    expect(fumbleMagicText[29])
      .toBe(`Your spell fails and one of your items gains a random drawback as per a cursed object.
Save: Resolve DC 20 negates.
Heal: This effect can only be cured with remove curse.`);
    expect(fumbleMagicText[30])
      .toBe(`Your spell fails and you provoke an attack of opportunity from all threatening foes.
Save: Resolve DC 20 negates.`);
    expect(fumbleMagicText[31])
      .toBe(`Your spell fails and a stinking cloud appears centered on you as per the stinking cloud spell.
Save: Resolve DC 20 negates.`);
    expect(fumbleMagicText[32])
      .toBe(`Your spell fails and you become nauseated for 1d4 rounds
Save: Resolve DC 20 negates.
Heal: A DC 20 Heal check Reduces the nauseated condition to sickened.`);
    expect(fumbleMagicText[33])
      .toBe(`Your spell fails and is converted into a summon monster spell of the same spell level. The monster(s) summoned are determined at random and are hostile to you.
Save: Resolve DC 20 negates.`);
    expect(fumbleMagicText[34])
      .toBe(`Your spell fails and you suffer bonus damage as fire damage.
Save: Resolve DC 20 negates.
Special: If the spell would have dealt fire damage, DC 20 Resolve save or catch fire dealing bonus damage again at the beginning of your turn each round for 1d4 rounds.`);
    expect(fumbleMagicText[35]).toBe(`Your spell fails and you are deafened. 
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check negates the deafened`);
    expect(fumbleMagicText[36])
      .toBe(`Your spell fails and a target opponent within the spell's range becomes invisible for 1d4 rounds
Save: Resolve DC 20 negates.
Special: If there are no opponents within the spell's range, you become blind for 1d4 rounds instead.`);
    expect(fumbleMagicText[37])
      .toBe(`Your spell fails and a target opponent within the spell's range is enlarged, increasing its size by one size category for 1d4 rounds.
Save: Resolve DC 20 negates.
Special: If there are no opponents within the spell's range, your size is reduced by one size category for 1d4 rounds instead.`);
    expect(fumbleMagicText[38])
      .toBe(`Your spell fails and you suffer a -1 penalty on spell casting rolls until you score a critical hit
Save: Resolve DC 20 negates.
Recover: You must succeed at a Resolve save or score a critical hit to end this effect. You may re-roll the save each round.
Special: Each spell cast you fail increases the penalty by -1.`);
    expect(fumbleMagicText[39])
      .toBe(`Your spell fails and 1d4 spell effects active on you are dispelled (Determined randomly)
Save: Resolve DC 20 negates.
Special: If you have no spell effects that can be dispelled, you suffer bonus damage instead.`);
    expect(fumbleMagicText[40])
      .toBe(`Your spell fails and you become entangled in your gear.
Save: Dexterity DC 20 negates.
Recover: You must spend a standard action to free yourself.`);
    expect(fumbleMagicText[41])
      .toBe(`Your spell fails and a target opponent within the spell's range gains 5 Natural Armor for 1d4 rounds.
Save: Resolve DC 20 negates.
Special: If there are no opponents within the spell's range, you suffer bonus damage instead.`);
    expect(fumbleMagicText[42])
      .toBe(`Your spell fails and you suffer Disadvantage on all saving throws for 1d4 rounds.
Save: Resolve DC 20 negates.
Special: The type of magic determines what type of skill check is needed to heal this effect. Arcana for Arcane, Religion for Divine, and Nature for Primal magic.
Heal: A DC 20 Skill check negates this effect.`);
    expect(fumbleMagicText[43])
      .toBe(`Your spell fails and you suffer 1 point of Charisma bleed damage
Save: Resolve DC 20 negates.
Heal: A DC 20 Heal check ends the ability bleed, but rest or restorative magic is needed to heal ability damage.`);
    expect(fumbleMagicText[44])
      .toBe(`Your spell fails and a target opponent within the spell's range gains a +8 enhancement bonus to Strength for 1d4 rounds.
Save: Resolve DC 20 negates.
Special: If there are no opponents within the spell's range, you suffer a -8 enhancement penalty to Strength for 1d4 rounds instead (to a minimum of 1 Strength).`);
    expect(fumbleMagicText[45])
      .toBe(`Your spell fails and a target opponent within the spell's range gains the spell haste for 1d4 rounds.
Save: Resolve DC 20 negates.
Special: If there are no opponents within the spell's range, you suffer the spell slow for 1d4 rounds instead`);
    expect(fumbleMagicText[46])
      .toBe(`Your spell fails and you are teleported to the nearest square adjacent to the target of the spell.
Save: Resolve DC 20 negates.`);
    expect(fumbleMagicText[47])
      .toBe(`Your spell succeeds but targets the nearest ally instead and is considered a critical threat. Determine the severity of the critical hit as normal.
Save: Resolve DC 20 negates.
Special: If there is no ally, you target yourself instead. If you target yourself, you do not defend against this attack (if you have SR) and may not negate the spell (such as a counter spell).`);
    expect(fumbleMagicText[48])
      .toBe(`Your spell fails and all creatures within 30 feet including yourself are blinded for 1 round.
Save: Resolve DC 20 negates.`);
    expect(fumbleMagicText[49]).toBe(
      `Re-roll your spell cast roll but you gain a +9 critical range and critical fumble range for the spell cast. (Critical Threat 11-20, Critical Fumble 1-10)`
    );
  });
});

// describe("fumbleMelee", () => {
//   it("fumbleMeleeTitle array should reflect correct titles", () => {
//     expect(fumbleMeleeTitle[0]).toBe("");
//     expect(fumbleMeleeTitle[1]).toBe("");
//     expect(fumbleMeleeTitle[2]).toBe("");
//     expect(fumbleMeleeTitle[3]).toBe("");
//     expect(fumbleMeleeTitle[4]).toBe("");
//     expect(fumbleMeleeTitle[5]).toBe("");
//     expect(fumbleMeleeTitle[6]).toBe("");
//     expect(fumbleMeleeTitle[7]).toBe("");
//     expect(fumbleMeleeTitle[8]).toBe("");
//     expect(fumbleMeleeTitle[9]).toBe("");
//     expect(fumbleMeleeTitle[10]).toBe("");
//     expect(fumbleMeleeTitle[11]).toBe("");
//     expect(fumbleMeleeTitle[12]).toBe("");
//     expect(fumbleMeleeTitle[13]).toBe("");
//     expect(fumbleMeleeTitle[14]).toBe("");
//     expect(fumbleMeleeTitle[15]).toBe("");
//     expect(fumbleMeleeTitle[16]).toBe("");
//     expect(fumbleMeleeTitle[17]).toBe("");
//     expect(fumbleMeleeTitle[18]).toBe("");
//     expect(fumbleMeleeTitle[19]).toBe("");
//     expect(fumbleMeleeTitle[20]).toBe("");
//     expect(fumbleMeleeTitle[21]).toBe("");
//     expect(fumbleMeleeTitle[22]).toBe("");
//     expect(fumbleMeleeTitle[23]).toBe("");
//     expect(fumbleMeleeTitle[24]).toBe("");
//     expect(fumbleMeleeTitle[25]).toBe("");
//     expect(fumbleMeleeTitle[26]).toBe("");
//     expect(fumbleMeleeTitle[27]).toBe("");
//     expect(fumbleMeleeTitle[28]).toBe("");
//     expect(fumbleMeleeTitle[29]).toBe("");
//     expect(fumbleMeleeTitle[30]).toBe("");
//     expect(fumbleMeleeTitle[31]).toBe("");
//     expect(fumbleMeleeTitle[32]).toBe("");
//     expect(fumbleMeleeTitle[33]).toBe("");
//     expect(fumbleMeleeTitle[34]).toBe("");
//     expect(fumbleMeleeTitle[35]).toBe("");
//     expect(fumbleMeleeTitle[36]).toBe("");
//     expect(fumbleMeleeTitle[37]).toBe("");
//     expect(fumbleMeleeTitle[38]).toBe("");
//     expect(fumbleMeleeTitle[39]).toBe("");
//     expect(fumbleMeleeTitle[40]).toBe("");
//     expect(fumbleMeleeTitle[41]).toBe("");
//     expect(fumbleMeleeTitle[42]).toBe("");
//     expect(fumbleMeleeTitle[43]).toBe("");
//     expect(fumbleMeleeTitle[44]).toBe("");
//     expect(fumbleMeleeTitle[45]).toBe("");
//     expect(fumbleMeleeTitle[46]).toBe("");
//     expect(fumbleMeleeTitle[47]).toBe("");
//     expect(fumbleMeleeTitle[48]).toBe("");
//     expect(fumbleMeleeTitle[49]).toBe("");
//   });

//   it("fumbleMeleeText array should reflect correct text bodies", () => {
//     expect(fumbleMeleeText[0]).toBe(``);
//     expect(fumbleMeleeText[1]).toBe(``);
//     expect(fumbleMeleeText[2]).toBe(``);
//     expect(fumbleMeleeText[3]).toBe(``);
//     expect(fumbleMeleeText[4]).toBe(``);
//     expect(fumbleMeleeText[5]).toBe(``);
//     expect(fumbleMeleeText[6]).toBe(``);
//     expect(fumbleMeleeText[7]).toBe(``);
//     expect(fumbleMeleeText[8]).toBe(``);
//     expect(fumbleMeleeText[9]).toBe(``);
//     expect(fumbleMeleeText[10]).toBe(``);
//     expect(fumbleMeleeText[11]).toBe(``);
//     expect(fumbleMeleeText[12]).toBe(``);
//     expect(fumbleMeleeText[13]).toBe(``);
//     expect(fumbleMeleeText[14]).toBe(``);
//     expect(fumbleMeleeText[15]).toBe(``);
//     expect(fumbleMeleeText[16]).toBe(``);
//     expect(fumbleMeleeText[17]).toBe(``);
//     expect(fumbleMeleeText[18]).toBe(``);
//     expect(fumbleMeleeText[19]).toBe(``);
//     expect(fumbleMeleeText[20]).toBe(``);
//     expect(fumbleMeleeText[21]).toBe(``);
//     expect(fumbleMeleeText[22]).toBe(``);
//     expect(fumbleMeleeText[23]).toBe(``);
//     expect(fumbleMeleeText[24]).toBe(``);
//     expect(fumbleMeleeText[25]).toBe(``);
//     expect(fumbleMeleeText[26]).toBe(``);
//     expect(fumbleMeleeText[27]).toBe(``);
//     expect(fumbleMeleeText[28]).toBe(``);
//     expect(fumbleMeleeText[29]).toBe(``);
//     expect(fumbleMeleeText[30]).toBe(``);
//     expect(fumbleMeleeText[31]).toBe(``);
//     expect(fumbleMeleeText[32]).toBe(``);
//     expect(fumbleMeleeText[33]).toBe(``);
//     expect(fumbleMeleeText[34]).toBe(``);
//     expect(fumbleMeleeText[35]).toBe(``);
//     expect(fumbleMeleeText[36]).toBe(``);
//     expect(fumbleMeleeText[37]).toBe(``);
//     expect(fumbleMeleeText[38]).toBe(``);
//     expect(fumbleMeleeText[39]).toBe(``);
//     expect(fumbleMeleeText[40]).toBe(``);
//     expect(fumbleMeleeText[41]).toBe(``);
//     expect(fumbleMeleeText[42]).toBe(``);
//     expect(fumbleMeleeText[43]).toBe(``);
//     expect(fumbleMeleeText[44]).toBe(``);
//     expect(fumbleMeleeText[45]).toBe(``);
//     expect(fumbleMeleeText[46]).toBe(``);
//     expect(fumbleMeleeText[47]).toBe(``);
//     expect(fumbleMeleeText[48]).toBe(``);
//     expect(fumbleMeleeText[49]).toBe(``);
//   });
// });

// describe("fumbleNatural", () => {
//   it("fumbleNaturalTitle array should reflect correct titles", () => {
//     expect(fumbleNaturalTitle[0]).toBe("");
//     expect(fumbleNaturalTitle[1]).toBe("");
//     expect(fumbleNaturalTitle[2]).toBe("");
//     expect(fumbleNaturalTitle[3]).toBe("");
//     expect(fumbleNaturalTitle[4]).toBe("");
//     expect(fumbleNaturalTitle[5]).toBe("");
//     expect(fumbleNaturalTitle[6]).toBe("");
//     expect(fumbleNaturalTitle[7]).toBe("");
//     expect(fumbleNaturalTitle[8]).toBe("");
//     expect(fumbleNaturalTitle[9]).toBe("");
//     expect(fumbleNaturalTitle[10]).toBe("");
//     expect(fumbleNaturalTitle[11]).toBe("");
//     expect(fumbleNaturalTitle[12]).toBe("");
//     expect(fumbleNaturalTitle[13]).toBe("");
//     expect(fumbleNaturalTitle[14]).toBe("");
//     expect(fumbleNaturalTitle[15]).toBe("");
//     expect(fumbleNaturalTitle[16]).toBe("");
//     expect(fumbleNaturalTitle[17]).toBe("");
//     expect(fumbleNaturalTitle[18]).toBe("");
//     expect(fumbleNaturalTitle[19]).toBe("");
//     expect(fumbleNaturalTitle[20]).toBe("");
//     expect(fumbleNaturalTitle[21]).toBe("");
//     expect(fumbleNaturalTitle[22]).toBe("");
//     expect(fumbleNaturalTitle[23]).toBe("");
//     expect(fumbleNaturalTitle[24]).toBe("");
//     expect(fumbleNaturalTitle[25]).toBe("");
//     expect(fumbleNaturalTitle[26]).toBe("");
//     expect(fumbleNaturalTitle[27]).toBe("");
//     expect(fumbleNaturalTitle[28]).toBe("");
//     expect(fumbleNaturalTitle[29]).toBe("");
//     expect(fumbleNaturalTitle[30]).toBe("");
//     expect(fumbleNaturalTitle[31]).toBe("");
//     expect(fumbleNaturalTitle[32]).toBe("");
//     expect(fumbleNaturalTitle[33]).toBe("");
//     expect(fumbleNaturalTitle[34]).toBe("");
//     expect(fumbleNaturalTitle[35]).toBe("");
//     expect(fumbleNaturalTitle[36]).toBe("");
//     expect(fumbleNaturalTitle[37]).toBe("");
//     expect(fumbleNaturalTitle[38]).toBe("");
//     expect(fumbleNaturalTitle[39]).toBe("");
//     expect(fumbleNaturalTitle[40]).toBe("");
//     expect(fumbleNaturalTitle[41]).toBe("");
//     expect(fumbleNaturalTitle[42]).toBe("");
//     expect(fumbleNaturalTitle[43]).toBe("");
//     expect(fumbleNaturalTitle[44]).toBe("");
//     expect(fumbleNaturalTitle[45]).toBe("");
//     expect(fumbleNaturalTitle[46]).toBe("");
//     expect(fumbleNaturalTitle[47]).toBe("");
//     expect(fumbleNaturalTitle[48]).toBe("");
//     expect(fumbleNaturalTitle[49]).toBe("");
//   });

//   it("fumbleNaturalText array should reflect correct text bodies", () => {
//     expect(fumbleNaturalText[0]).toBe(``);
//     expect(fumbleNaturalText[1]).toBe(``);
//     expect(fumbleNaturalText[2]).toBe(``);
//     expect(fumbleNaturalText[3]).toBe(``);
//     expect(fumbleNaturalText[4]).toBe(``);
//     expect(fumbleNaturalText[5]).toBe(``);
//     expect(fumbleNaturalText[6]).toBe(``);
//     expect(fumbleNaturalText[7]).toBe(``);
//     expect(fumbleNaturalText[8]).toBe(``);
//     expect(fumbleNaturalText[9]).toBe(``);
//     expect(fumbleNaturalText[10]).toBe(``);
//     expect(fumbleNaturalText[11]).toBe(``);
//     expect(fumbleNaturalText[12]).toBe(``);
//     expect(fumbleNaturalText[13]).toBe(``);
//     expect(fumbleNaturalText[14]).toBe(``);
//     expect(fumbleNaturalText[15]).toBe(``);
//     expect(fumbleNaturalText[16]).toBe(``);
//     expect(fumbleNaturalText[17]).toBe(``);
//     expect(fumbleNaturalText[18]).toBe(``);
//     expect(fumbleNaturalText[19]).toBe(``);
//     expect(fumbleNaturalText[20]).toBe(``);
//     expect(fumbleNaturalText[21]).toBe(``);
//     expect(fumbleNaturalText[22]).toBe(``);
//     expect(fumbleNaturalText[23]).toBe(``);
//     expect(fumbleNaturalText[24]).toBe(``);
//     expect(fumbleNaturalText[25]).toBe(``);
//     expect(fumbleNaturalText[26]).toBe(``);
//     expect(fumbleNaturalText[27]).toBe(``);
//     expect(fumbleNaturalText[28]).toBe(``);
//     expect(fumbleNaturalText[29]).toBe(``);
//     expect(fumbleNaturalText[30]).toBe(``);
//     expect(fumbleNaturalText[31]).toBe(``);
//     expect(fumbleNaturalText[32]).toBe(``);
//     expect(fumbleNaturalText[33]).toBe(``);
//     expect(fumbleNaturalText[34]).toBe(``);
//     expect(fumbleNaturalText[35]).toBe(``);
//     expect(fumbleNaturalText[36]).toBe(``);
//     expect(fumbleNaturalText[37]).toBe(``);
//     expect(fumbleNaturalText[38]).toBe(``);
//     expect(fumbleNaturalText[39]).toBe(``);
//     expect(fumbleNaturalText[40]).toBe(``);
//     expect(fumbleNaturalText[41]).toBe(``);
//     expect(fumbleNaturalText[42]).toBe(``);
//     expect(fumbleNaturalText[43]).toBe(``);
//     expect(fumbleNaturalText[44]).toBe(``);
//     expect(fumbleNaturalText[45]).toBe(``);
//     expect(fumbleNaturalText[46]).toBe(``);
//     expect(fumbleNaturalText[47]).toBe(``);
//     expect(fumbleNaturalText[48]).toBe(``);
//     expect(fumbleNaturalText[49]).toBe(``);
//   });
// });

// describe("fumbleRanged", () => {
//   it("fumbleRangedTitle array should reflect correct titles", () => {
//     expect(fumbleRangedTitle[0]).toBe("");
//     expect(fumbleRangedTitle[1]).toBe("");
//     expect(fumbleRangedTitle[2]).toBe("");
//     expect(fumbleRangedTitle[3]).toBe("");
//     expect(fumbleRangedTitle[4]).toBe("");
//     expect(fumbleRangedTitle[5]).toBe("");
//     expect(fumbleRangedTitle[6]).toBe("");
//     expect(fumbleRangedTitle[7]).toBe("");
//     expect(fumbleRangedTitle[8]).toBe("");
//     expect(fumbleRangedTitle[9]).toBe("");
//     expect(fumbleRangedTitle[10]).toBe("");
//     expect(fumbleRangedTitle[11]).toBe("");
//     expect(fumbleRangedTitle[12]).toBe("");
//     expect(fumbleRangedTitle[13]).toBe("");
//     expect(fumbleRangedTitle[14]).toBe("");
//     expect(fumbleRangedTitle[15]).toBe("");
//     expect(fumbleRangedTitle[16]).toBe("");
//     expect(fumbleRangedTitle[17]).toBe("");
//     expect(fumbleRangedTitle[18]).toBe("");
//     expect(fumbleRangedTitle[19]).toBe("");
//     expect(fumbleRangedTitle[20]).toBe("");
//     expect(fumbleRangedTitle[21]).toBe("");
//     expect(fumbleRangedTitle[22]).toBe("");
//     expect(fumbleRangedTitle[23]).toBe("");
//     expect(fumbleRangedTitle[24]).toBe("");
//     expect(fumbleRangedTitle[25]).toBe("");
//     expect(fumbleRangedTitle[26]).toBe("");
//     expect(fumbleRangedTitle[27]).toBe("");
//     expect(fumbleRangedTitle[28]).toBe("");
//     expect(fumbleRangedTitle[29]).toBe("");
//     expect(fumbleRangedTitle[30]).toBe("");
//     expect(fumbleRangedTitle[31]).toBe("");
//     expect(fumbleRangedTitle[32]).toBe("");
//     expect(fumbleRangedTitle[33]).toBe("");
//     expect(fumbleRangedTitle[34]).toBe("");
//     expect(fumbleRangedTitle[35]).toBe("");
//     expect(fumbleRangedTitle[36]).toBe("");
//     expect(fumbleRangedTitle[37]).toBe("");
//     expect(fumbleRangedTitle[38]).toBe("");
//     expect(fumbleRangedTitle[39]).toBe("");
//     expect(fumbleRangedTitle[40]).toBe("");
//     expect(fumbleRangedTitle[41]).toBe("");
//     expect(fumbleRangedTitle[42]).toBe("");
//     expect(fumbleRangedTitle[43]).toBe("");
//     expect(fumbleRangedTitle[44]).toBe("");
//     expect(fumbleRangedTitle[45]).toBe("");
//     expect(fumbleRangedTitle[46]).toBe("");
//     expect(fumbleRangedTitle[47]).toBe("");
//     expect(fumbleRangedTitle[48]).toBe("");
//     expect(fumbleRangedTitle[49]).toBe("");
//   });

//   it("fumbleRangedText array should reflect correct text bodies", () => {
//     expect(fumbleRangedText[0]).toBe(``);
//     expect(fumbleRangedText[1]).toBe(``);
//     expect(fumbleRangedText[2]).toBe(``);
//     expect(fumbleRangedText[3]).toBe(``);
//     expect(fumbleRangedText[4]).toBe(``);
//     expect(fumbleRangedText[5]).toBe(``);
//     expect(fumbleRangedText[6]).toBe(``);
//     expect(fumbleRangedText[7]).toBe(``);
//     expect(fumbleRangedText[8]).toBe(``);
//     expect(fumbleRangedText[9]).toBe(``);
//     expect(fumbleRangedText[10]).toBe(``);
//     expect(fumbleRangedText[11]).toBe(``);
//     expect(fumbleRangedText[12]).toBe(``);
//     expect(fumbleRangedText[13]).toBe(``);
//     expect(fumbleRangedText[14]).toBe(``);
//     expect(fumbleRangedText[15]).toBe(``);
//     expect(fumbleRangedText[16]).toBe(``);
//     expect(fumbleRangedText[17]).toBe(``);
//     expect(fumbleRangedText[18]).toBe(``);
//     expect(fumbleRangedText[19]).toBe(``);
//     expect(fumbleRangedText[20]).toBe(``);
//     expect(fumbleRangedText[21]).toBe(``);
//     expect(fumbleRangedText[22]).toBe(``);
//     expect(fumbleRangedText[23]).toBe(``);
//     expect(fumbleRangedText[24]).toBe(``);
//     expect(fumbleRangedText[25]).toBe(``);
//     expect(fumbleRangedText[26]).toBe(``);
//     expect(fumbleRangedText[27]).toBe(``);
//     expect(fumbleRangedText[28]).toBe(``);
//     expect(fumbleRangedText[29]).toBe(``);
//     expect(fumbleRangedText[30]).toBe(``);
//     expect(fumbleRangedText[31]).toBe(``);
//     expect(fumbleRangedText[32]).toBe(``);
//     expect(fumbleRangedText[33]).toBe(``);
//     expect(fumbleRangedText[34]).toBe(``);
//     expect(fumbleRangedText[35]).toBe(``);
//     expect(fumbleRangedText[36]).toBe(``);
//     expect(fumbleRangedText[37]).toBe(``);
//     expect(fumbleRangedText[38]).toBe(``);
//     expect(fumbleRangedText[39]).toBe(``);
//     expect(fumbleRangedText[40]).toBe(``);
//     expect(fumbleRangedText[41]).toBe(``);
//     expect(fumbleRangedText[42]).toBe(``);
//     expect(fumbleRangedText[43]).toBe(``);
//     expect(fumbleRangedText[44]).toBe(``);
//     expect(fumbleRangedText[45]).toBe(``);
//     expect(fumbleRangedText[46]).toBe(``);
//     expect(fumbleRangedText[47]).toBe(``);
//     expect(fumbleRangedText[48]).toBe(``);
//     expect(fumbleRangedText[49]).toBe(``);
//   });
// });
