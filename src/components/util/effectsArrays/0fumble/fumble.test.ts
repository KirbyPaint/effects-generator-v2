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

describe("fumbleMelee", () => {
  it("fumbleMeleeTitle array should reflect correct titles", () => {
    expect(fumbleMeleeTitle[0]).toBe("All Or Nothing");
    expect(fumbleMeleeTitle[1]).toBe("Armor Smash");
    expect(fumbleMeleeTitle[2]).toBe("Attack The Darkness");
    expect(fumbleMeleeTitle[3]).toBe("Awkward Attack");
    expect(fumbleMeleeTitle[4]).toBe("Backswing");
    expect(fumbleMeleeTitle[5]).toBe("Bad Grip");
    expect(fumbleMeleeTitle[6]).toBe("Bent");
    expect(fumbleMeleeTitle[7]).toBe("Better To Give");
    expect(fumbleMeleeTitle[8]).toBe("Bohemian Earspoon");
    expect(fumbleMeleeTitle[9]).toBe("Bonk");
    expect(fumbleMeleeTitle[10]).toBe("Broken Blade");
    expect(fumbleMeleeTitle[11]).toBe("Broken Haft");
    expect(fumbleMeleeTitle[12]).toBe("Butterfingers");
    expect(fumbleMeleeTitle[13]).toBe("Catastrophic Failure");
    expect(fumbleMeleeTitle[14]).toBe("Catch Your Breath");
    expect(fumbleMeleeTitle[15]).toBe("Critical Mistake");
    expect(fumbleMeleeTitle[16]).toBe("Cutter");
    expect(fumbleMeleeTitle[17]).toBe("Eat Dirt");
    expect(fumbleMeleeTitle[18]).toBe("Fling");
    expect(fumbleMeleeTitle[19]).toBe("Fog Of War");
    expect(fumbleMeleeTitle[20]).toBe("Funny Bone");
    expect(fumbleMeleeTitle[21]).toBe("Go For The Eyes");
    expect(fumbleMeleeTitle[22]).toBe("Hand It Over");
    expect(fumbleMeleeTitle[23]).toBe("I Told You It Was Sharp");
    expect(fumbleMeleeTitle[24]).toBe("Notched");
    expect(fumbleMeleeTitle[25]).toBe("Off Balance");
    expect(fumbleMeleeTitle[26]).toBe("Overextended");
    expect(fumbleMeleeTitle[27]).toBe("Parry! Dodge! Spin! Thrust!");
    expect(fumbleMeleeTitle[28]).toBe("Pin Prick");
    expect(fumbleMeleeTitle[29]).toBe("Pointy End Goes There");
    expect(fumbleMeleeTitle[30]).toBe("Pulled Muscle");
    expect(fumbleMeleeTitle[31]).toBe("Punt");
    expect(fumbleMeleeTitle[32]).toBe("Second Thoughts");
    expect(fumbleMeleeTitle[33]).toBe("Slipped");
    expect(fumbleMeleeTitle[34]).toBe("Sorry!");
    expect(fumbleMeleeTitle[35]).toBe("Spinning Swing");
    expect(fumbleMeleeTitle[36]).toBe("Strain");
    expect(fumbleMeleeTitle[37]).toBe("Stuck");
    expect(fumbleMeleeTitle[38]).toBe("Surrounded By Foes");
    expect(fumbleMeleeTitle[39]).toBe("This Is Bad");
    expect(fumbleMeleeTitle[40]).toBe("This Sword Is Heavy");
    expect(fumbleMeleeTitle[41]).toBe("Too Much Stuff");
    expect(fumbleMeleeTitle[42]).toBe("Vibration");
    expect(fumbleMeleeTitle[43]).toBe("Wait! What?");
    expect(fumbleMeleeTitle[44]).toBe("Who Was That?");
    expect(fumbleMeleeTitle[45]).toBe("Wide Open");
    expect(fumbleMeleeTitle[46]).toBe("Winded");
    expect(fumbleMeleeTitle[47]).toBe("Wrong End");
    expect(fumbleMeleeTitle[48]).toBe("You Meant To Do That");
    expect(fumbleMeleeTitle[49]).toBe("How In The World?");
  });

  it("fumbleMeleeText array should reflect correct text bodies", () => {
    expect(fumbleMeleeText[0])
      .toBe(`Your attack fails and you suffer a -1 penalty on attack rolls until you score a critical hit.
Save: Resolve DC 20 negates.
Recover: You must succeed at a Resolve save or score a critical hit to end this effect. You may re-roll the save each round.
Special: Each attack you miss your target increases the penalty by -1.`);
    expect(fumbleMeleeText[1])
      .toBe(`Your attack hits and deals damage to your armor instead of your target.
Save: Dexterity DC 20 negates.
Recover: A Craft DC 20 check is needed to repair the damage.
Special: If you do not wear armor, damage is dealt to shield or to yourself instead.`);
    expect(fumbleMeleeText[2])
      .toBe(`Your attack fails and all of your enemies are considered to have concealment from you (20% miss chance) for 1d4 rounds.
Save: Resolve DC 20 negates.
Recover: You may continue to make a Resolve save each round you are affected to end the duration.`);
    expect(fumbleMeleeText[3])
      .toBe(`Your attack fails and you take a -2 penalty to defense rolls for 1d4 rounds.
Save: Dexterity DC 20 negates.
Recover: You must expend a greater action to recover.
Special: If using a two-handed weapon, add +1 round to the duration of the penalty.`);
    expect(fumbleMeleeText[4])
      .toBe(`Re-roll the attack with yourself as the target; it is possible to critically hit yourself in this manner.
Save: Dexterity DC 20 negates.
Special: You may defend against this attack as normal but may not negate the attack (such as a counter, block, or parry) if it is successful.`);
    expect(fumbleMeleeText[5])
      .toBe(`Your attack fails and you weapon deals nonlethal damage for the next 3 rounds.
Save: Dexterity DC 20 negates.
Recover: Expend a standard action to fix your grip and end the nonlethal damage.`);
    expect(fumbleMeleeText[6])
      .toBe(`Your attack fails and you weapon deals nonlethal damage for the next 3 rounds.
Save: Dexterity DC 20 negates.
Recover: Expend a standard action to fix your grip and end the nonlethal damage.`);
    expect(fumbleMeleeText[7])
      .toBe(`Your attack hits and damages you instead. Use your target’s Strength modifier when calculating the damage.
Save: Dexterity DC 20 negates.
Special: Re-roll attack to determine if you critically hit yourself. This re-roll cannot miss or fumble.`);
    expect(fumbleMeleeText[8])
      .toBe(`Your attack fails and you are deafened until healed.
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check ends the deafened condition.`);
    expect(fumbleMeleeText[9])
      .toBe(`Your attack fails and you are stunned until the end of your next turn.
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check removes the stun effect.
Special: If wielding a bludgeoning weapon, you are stunned for 1d4 rounds instead.`);
    expect(fumbleMeleeText[10])
      .toBe(`Your attack hits and deals damage to your weapon instead of your target.
Save: Dexterity DC 20 negates.
Recover: A Craft DC 20 check is needed to repair the damage.
Special: If you do not wield a weapon, damage is dealt to yourself instead.`);
    expect(fumbleMeleeText[11])
      .toBe(`Your attack fails and your weapon suffers bonus damage. The weapon suffers a -2 penalty on attack rolls and loses the reach property until repaired.
Save: Dexterity DC 20 negates.
Recover: A DC 20 Craft Weapons check repairs the weapon.
Special: If you are not wielding a reach weapon, your attack hits and deals damage to your weapon instead.`);
    expect(fumbleMeleeText[12])
      .toBe(`Your attack fails and you drop your weapon.
Save: Dexterity DC 20 negates.
Recover: You must expend a standard action to pick up your weapon. This provokes an attack of opportunity from threatening foes.
Special: If using a light weapon, it is flung 1d6 squares away instead.`);
    expect(fumbleMeleeText[13])
      .toBe(`Your attack fails and you fall unconscious for 1d6 rounds.
Save: Resolve DC 20 negates.
Recover: You may make a new saving throw each round.
Special: If wielding a bludgeoning weapon, add 2 rounds to the duration.`);
    expect(fumbleMeleeText[14])
      .toBe(`Your attack fails and you become staggered until the end of your next turn.
Save: Constitution DC 20 negates.
Special: If wielding a two-handed weapon or wearing heavy armor, add one round to the duration.`);
    expect(fumbleMeleeText[15])
      .toBe(`The attack hits and deals damage to you instead and is considered a critical threat. Determine the severity of the critical hit as normal.
Save: Dexterity DC 20 negates.
Special: You do not defend against this attack and may not negate the attack (such as a counter, block, or parry).`);
    expect(fumbleMeleeText[16])
      .toBe(`Your attack fails and you take 1 point of Strength bleed.
Save: Dexterity DC 20 negates.
Heal: A DC 20 Heal check ends the Strength bleed. Rest or restorative magic is needed to heal the ability damage.
Special: If you are wielding a slashing weapon, this increases the Strength bleed to 2.`);
    expect(fumbleMeleeText[17])
      .toBe(`Your attack fails and you fall prone and are blinded for 1d3 rounds.
Save: Dexterity DC 20 negates.
Recover: Expend a standard action to stand up from being prone, and a standard action to wipe the debris from your eyes.`);
    expect(fumbleMeleeText[18])
      .toBe(`Your attack fails and you throw your weapon where it lands 1d6 squares away in a random direction.
Save: Dexterity DC 20 negates.
Recover: Expend a standard action to retrieve your weapon after you move to its location.
Special: If wielding a light weapon, add +1 square to the distance traveled.`);
    expect(fumbleMeleeText[19])
      .toBe(`Your attack fails and you threaten no squares for 1d6 rounds.
Save: Resolve DC 20 negates.
Recover: Expend a greater action to regain your senses and composure.
Special: If you are below half hit points, you suffer disadvantage on this saving throw.`);
    expect(fumbleMeleeText[20])
      .toBe(`Your attack fails and you drop whatever is in your off hand.
Save: Dexterity DC 20 negates.
Recover: Expend a standard action to retrieve your item.
Special: If that item is a light weapon, it is flung 1d6 squares away instead.`);
    expect(fumbleMeleeText[21])
      .toBe(`Your attack fails and you are blinded until the end of your next turn.
Save: Dexterity DC 20
Heal: A Heal check DC 20 removes the blinded condition.
Special: If you are using a piercing weapon, add 1d3 rounds of blindness.`);
    expect(fumbleMeleeText[22])
      .toBe(`Your attack fails and your target gains possession of your weapon.
Save: Dexterity DC 20 negates.
Special: If wielding a two-handed weapon, you gain advantage on your saving throw.`);
    expect(fumbleMeleeText[23])
      .toBe(`Your attack fails and you suffer 1d6 points of bleed damage.
Save: Dexterity DC 20
Heal: Curative magic or a DC 20 Heal check heals.
Special: If you are using a slashing or piercing weapon, add +2 points of bleed.`);
    expect(fumbleMeleeText[24])
      .toBe(`Your attack fails and your weapon suffers bonus damage.
Save: Dexterity DC 20 negates.
Repair: A Craft skill check of DC 20 is required to repair the damage inflicted.
Special: If wielding a two-handed weapon, it suffers bonus damage again.`);
    expect(fumbleMeleeText[25])
      .toBe(`Your attack fails and you suffer disadvantage on all attack rolls until the end of your next turn.
Save: Dexterity DC 20 negates.
Recover: Expend a greater action to gather your balance and composure.
Special: If wielding a two-handed weapon, add one round to the duration.`);
    expect(fumbleMeleeText[26])
      .toBe(`Your attack fails and you provoke an attack of opportunity from all opponents who threaten you.
Save: Dexterity DC 20 negates.`);
    expect(fumbleMeleeText[27])
      .toBe(`Your attack fails and you are dazed until the end of your next turn.
Save: Resolve DC 20 negates.
Recover: Expend a greater action to gather your balance and composure.`);

    expect(fumbleMeleeText[28])
      .toBe(`Your attack fails and you take 1d4 points of Bleed damage.
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check ends the bleed effect.
Special: If wielding a piercing weapon, add +2 additional points of bleed.`);
    expect(fumbleMeleeText[29])
      .toBe(`Your attack fails and you take 1 point of Constitution damage.
Save: Dexterity DC 20 negates.
Heal: Rest or restorative magic.
Special: If wielding a piercing weapon, add 1 point of additional Constitution damage.`);
    expect(fumbleMeleeText[30])
      .toBe(`Your attack fails and you take 1d4 points of Strength damage.
Save: Constitution DC 20 negates.
Heal: Rest or restorative magic.`);
    expect(fumbleMeleeText[31])
      .toBe(`Your attack fails and your weapon flies 2d6 squares in a random direction.
Save: Dexterity DC 20 negates.
Recover: Expend a standard action to retrieve your weapon from its location.
Special: If wielding a light weapon, add +1 square to the distance traveled.`);
    expect(fumbleMeleeText[32])
      .toBe(`Your attack fails and you are sickened for 1d6 rounds.
Save: Resolve DC 20 negates.
Recover: You may continue to make a save each round to end the effect.
Special: If you are shaken or frightened, you suffer disadvantage on your saving throw.`);
    expect(fumbleMeleeText[33])
      .toBe(`Your attack fails and you are knocked prone.
Save: Dexterity DC 20 negates.
Recover: Expend a standard action to stand up from prone (this provokes attacks of opportunity from all threatening foes).`);
    expect(fumbleMeleeText[34])
      .toBe(`Re-roll the attack targeting an ally adjacent to you or the original target; it is possible to critically hit yourself or your ally in this manner. If there are no adjacent allies, you target yourself.
Save: Dexterity DC 20 negates.
Special: If targeting yourself, you may defend against this attack as normal but may not negate the attack (such as a counter, block, or parry) if it is successful.`);
    expect(fumbleMeleeText[35])
      .toBe(`Your attack fails and you are sickened for 1d4 rounds.
Save: Resolve DC 20 negates.
Recover: Expend a greater action to gather your balance and composure.
Special: If wielding a two-handed weapon, add +1 round to the duration.`);
    expect(fumbleMeleeText[36])
      .toBe(`Your attack fails and you take 1d4 points of Dexterity damage.
Save: Constitution DC 20 negates.
Heal: Rest or restorative magic.
Special: If using a light weapon, reduce the Dexterity damage to 1d3.`);
    expect(fumbleMeleeText[37])
      .toBe(`Your attack fails and your weapon becomes stuck in a nearby surface in your square.
Save: Dexterity DC 20 negates.
Recover: As a standard action, you must make a successful DC 20 Strength check to retrieve your weapon.`);
    expect(fumbleMeleeText[38])
      .toBe(`The attack hits and deals damage to an ally within reach instead and is considered a critical threat. Determine the severity of the critical hit as normal.
Save: Dexterity DC 20 negates.
Special: If there are no allies within reach, the attack hits yourself instead. You do not defend against this attack and may not negate the attack (such as a counter, block, or parry).`);
    expect(fumbleMeleeText[39])
      .toBe(`Your attack fails and you take bonus damage as bleed damage.
Save: Constitution DC 20 negates.
Recover: A Heal check DC 20 removes the bleed condition.`);
    expect(fumbleMeleeText[40]).toBe(`Your attack fails and you become fatigued.
Save: Constitution DC 20 negates.
Recover: A Heal DC 20 check removes the fatigued condition, as does rest.`);
    expect(fumbleMeleeText[41])
      .toBe(`Your attack fails and you become entangled in your gear.
Save: Dexterity DC 20
Recover: You must spend a standard action to free yourself.
Special: If wielding a prehensile weapon (chain, whip, etc.), you suffer disadvantage on your Dexterity save.`);
    expect(fumbleMeleeText[42])
      .toBe(`Your attack fails and you strike something solid, suffering 1d3 points of Strength damage, and drop your weapon.
Save: Constitution DC 20
Heal: Rest or restorative magic.
Special: If wielding a prehensile weapon (chain, whip, etc.), the Strength damage drops to 1.`);
    expect(fumbleMeleeText[43])
      .toBe(`Your attack fails and you become confused for one round.
Save: Resolve DC 20 negates. 
Special: If wielding a bludgeoning weapon, add +1 round to the duration.`);
    expect(fumbleMeleeText[44])
      .toBe(`Your attack fails and you are grazed by your own weapon becoming dazed for 1d3 rounds.
Save: Resolve DC 20
Recover: You may make a Resolve save each round to end the effect. A DC 20 Heal check will also remove the effect.
Special: If wielding a bludgeoning weapon, add +1 round to the duration.`);
    expect(fumbleMeleeText[45])
      .toBe(`Your attack fails and you become flat-footed until the end of your next turn.
Save: Dexterity DC 20 negates`);
    expect(fumbleMeleeText[46])
      .toBe(`Your attack fails and you become exhausted.
Save: Constitution DC 20 negates.
Heal: Expend a greater action to regain your wind, removing the exhausted condition.
Special: If wearing heavy armor, you must expend a greater action and make a successful DC 20 Constitution save to remove the exhausted condition.`);
    expect(fumbleMeleeText[47])
      .toBe(`Your attack fails and you take bonus damage.
Save: Constitution DC 20 negates.
Heal: A Heal check DC 20 removes the bleed effect.
Special: If using a slashing weapon, you take bonus damage again.`);
    expect(fumbleMeleeText[48])
      .toBe(`Your attack fails and you move 10 feet in a random direction and provoke attacks of opportunity as normal.
Save: Dexterity DC 20 negates.
Special: If wearing heavy armor, you must suffer disadvantage on your Dexterity save and fall prone on a failed save.`);
    expect(fumbleMeleeText[49]).toBe(
      `The attack hits and deals damage to the original target and the opponent may not negate the attack (such as a counter, block, or parry). This attack may not critically hit or cause any special effects (such as from a Strike maneuver)`
    );
  });
});

describe("fumbleNatural", () => {
  it("fumbleNaturalTitle array should reflect correct titles", () => {
    expect(fumbleNaturalTitle[0]).toBe("Awkward Attack");
    expect(fumbleNaturalTitle[1]).toBe("Bad Headbutt");
    expect(fumbleNaturalTitle[2]).toBe("Battered");
    expect(fumbleNaturalTitle[3]).toBe("Bleeding Fist");
    expect(fumbleNaturalTitle[4]).toBe("Bone Bruise");
    expect(fumbleNaturalTitle[5]).toBe("Broke A Nail");
    expect(fumbleNaturalTitle[6]).toBe("Broken Tooth");
    expect(fumbleNaturalTitle[7]).toBe("Bruised Ego");
    expect(fumbleNaturalTitle[8]).toBe("Brutal Collision");
    expect(fumbleNaturalTitle[9]).toBe("Caught Your Attack");
    expect(fumbleNaturalTitle[10]).toBe("Don’t Pick At It");
    expect(fumbleNaturalTitle[11]).toBe("Eye Strain");
    expect(fumbleNaturalTitle[12]).toBe("Ferocious Fumble");
    expect(fumbleNaturalTitle[13]).toBe("Fist Meets Face");
    expect(fumbleNaturalTitle[14]).toBe("Frustration");
    expect(fumbleNaturalTitle[15]).toBe("Got Too Close");
    expect(fumbleNaturalTitle[16]).toBe("Great Roar");
    expect(fumbleNaturalTitle[17]).toBe("Hangnail");
    expect(fumbleNaturalTitle[18]).toBe("He Bit Me");
    expect(fumbleNaturalTitle[19]).toBe("He’s Sharp");
    expect(fumbleNaturalTitle[20]).toBe("Head, Meet Wall");
    expect(fumbleNaturalTitle[21]).toBe("Ingrown Nail");
    expect(fumbleNaturalTitle[22]).toBe("Jam A Finger");
    expect(fumbleNaturalTitle[23]).toBe("Muscle Tear");
    expect(fumbleNaturalTitle[24]).toBe("Not The Weak Point");
    expect(fumbleNaturalTitle[25]).toBe("Off Balance");
    expect(fumbleNaturalTitle[26]).toBe("Out Of Position");
    expect(fumbleNaturalTitle[27]).toBe("Overexertion");
    expect(fumbleNaturalTitle[28]).toBe("Overextend");
    expect(fumbleNaturalTitle[29]).toBe("Overthink It");
    expect(fumbleNaturalTitle[30]).toBe("Pinched Nerve");
    expect(fumbleNaturalTitle[31]).toBe("Pins And Needles");
    expect(fumbleNaturalTitle[32]).toBe("Punctured Foot");
    expect(fumbleNaturalTitle[33]).toBe("Smash The Floor");
    expect(fumbleNaturalTitle[34]).toBe("Sneeze!");
    expect(fumbleNaturalTitle[35]).toBe("Sprain");
    expect(fumbleNaturalTitle[36]).toBe("Stinging Failure");
    expect(fumbleNaturalTitle[37]).toBe("Stop Hitting Yourself");
    expect(fumbleNaturalTitle[38]).toBe("That’s Disgusting");
    expect(fumbleNaturalTitle[39]).toBe("Tiring Attack");
    expect(fumbleNaturalTitle[40]).toBe("Torn Muscle");
    expect(fumbleNaturalTitle[41]).toBe("Tripped");
    expect(fumbleNaturalTitle[42]).toBe("Twisted");
    expect(fumbleNaturalTitle[43]).toBe("Unintentional Move");
    expect(fumbleNaturalTitle[44]).toBe("Upset Tummy");
    expect(fumbleNaturalTitle[45]).toBe("We Have A Wiener");
    expect(fumbleNaturalTitle[46]).toBe("Whirlwind Of Shame");
    expect(fumbleNaturalTitle[47]).toBe("Wide Open");
    expect(fumbleNaturalTitle[48]).toBe("Winds Of Change");
    expect(fumbleNaturalTitle[49]).toBe("How In The World?");
  });

  it("fumbleNaturalText array should reflect correct text bodies", () => {
    expect(fumbleNaturalText[0])
      .toBe(`Your attack fails and you suffer a -2 penalty to defense rolls for 1d4 rounds.
Save: Dexterity DC 20 negates.
Heal: A DC 20 Acrobatics check removes the attack penalties.`);
    expect(fumbleNaturalText[1])
      .toBe(`Your attack fails and you are stunned for 1 round.
Save: Constitution DC 20 negates.`);
    expect(fumbleNaturalText[2])
      .toBe(`Your attack fails and you suffer a -2 penalty on saves and skill checks for 1d4 hours.
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check removes the penalties.`);
    expect(fumbleNaturalText[3])
      .toBe(`Your attack fails and you take 1d6 points of bleed damage.
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check ends the bleed effect.`);
    expect(fumbleNaturalText[4])
      .toBe(`Your attack fails and you take 1d2 points of Constitution damage.
Save: Constitution DC 20 negates.
Heal: Rest or restorative magic.`);
    expect(fumbleNaturalText[5])
      .toBe(`Your attack fails and you take bonus damage and you cannot use this attack until healed.
Save: Constitution DC 20 negates.`);
    expect(fumbleNaturalText[6])
      .toBe(`Your attack fails and you suffer a -2 penalty on attack rolls for 1d6 minutes.
Save: Constitution DC 20 negates.
Heal: A DC 20 Heal check removes the attack penalties.`);
    expect(fumbleNaturalText[7])
      .toBe(`Your attack fails and you suffer Disadvantage to attack any other target for 1d4 rounds (or until the target is dead).
Save: Resolve DC 20 negates.`);
    expect(fumbleNaturalText[8])
      .toBe(`Your attack fails but deals bonus damage to the original target and you are stunned for 2 rounds.
Save: Constitution DC 20 negates (2 saves).
Heal: A DC 20 Heal check removes the stunned condition.
Special: Each saving throw reduces the duration of this fumble by 1 round.`);
    expect(fumbleNaturalText[9])
      .toBe(`Your attack fails and the target may attempt to trip, bull rush, or overrun you (target’s choice) as a free action without causing an attack of opportunity.
Save: Dexterity DC 20 negates.`);
    expect(fumbleNaturalText[10])
      .toBe(`Your attack fails and you take 1 point of Constitution damage.
Save: Constitution DC 20 negates.
Heal: Rest or restorative magic.`);
    expect(fumbleNaturalText[11]).toBe(``);
    expect(fumbleNaturalText[12]).toBe(``);
    expect(fumbleNaturalText[13]).toBe(``);
    expect(fumbleNaturalText[14]).toBe(``);
    expect(fumbleNaturalText[15]).toBe(``);
    expect(fumbleNaturalText[16]).toBe(``);
    expect(fumbleNaturalText[17]).toBe(``);
    expect(fumbleNaturalText[18]).toBe(``);
    expect(fumbleNaturalText[19]).toBe(``);
    expect(fumbleNaturalText[20]).toBe(``);
    expect(fumbleNaturalText[21]).toBe(``);
    expect(fumbleNaturalText[22]).toBe(``);
    expect(fumbleNaturalText[23]).toBe(``);
    expect(fumbleNaturalText[24]).toBe(``);
    expect(fumbleNaturalText[25]).toBe(``);
    expect(fumbleNaturalText[26]).toBe(``);
    expect(fumbleNaturalText[27]).toBe(``);
    expect(fumbleNaturalText[28]).toBe(``);
    expect(fumbleNaturalText[29]).toBe(``);
    expect(fumbleNaturalText[30]).toBe(``);
    expect(fumbleNaturalText[31]).toBe(``);
    expect(fumbleNaturalText[32]).toBe(``);
    expect(fumbleNaturalText[33]).toBe(``);
    expect(fumbleNaturalText[34]).toBe(``);
    expect(fumbleNaturalText[35]).toBe(``);
    expect(fumbleNaturalText[36]).toBe(``);
    expect(fumbleNaturalText[37]).toBe(``);
    expect(fumbleNaturalText[38]).toBe(``);
    expect(fumbleNaturalText[39]).toBe(``);
    expect(fumbleNaturalText[40]).toBe(``);
    expect(fumbleNaturalText[41]).toBe(``);
    expect(fumbleNaturalText[42]).toBe(``);
    expect(fumbleNaturalText[43]).toBe(``);
    expect(fumbleNaturalText[44]).toBe(``);
    expect(fumbleNaturalText[45]).toBe(``);
    expect(fumbleNaturalText[46]).toBe(``);
    expect(fumbleNaturalText[47]).toBe(``);
    expect(fumbleNaturalText[48]).toBe(``);
    expect(fumbleNaturalText[49]).toBe(``);
  });
});

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
