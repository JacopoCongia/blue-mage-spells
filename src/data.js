const data = [
  {
    id: 3,
    name: "Water Cannon",
    description: "Deals water damage with a potency of 200.",
    tooltip:
      "This spell, easily mastered via defeat of a kraken, fires a concentrated burst of water at one's opponent. As the liquid itself is conjured by manipulating aether to condense moisture in the air, the technique remains effective regardless of whether or not its caster has access to a body of water.",
    order: 1,
    rank: 1,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/3.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 3,
      name: "Water"
    },
    sources: [
      {
        type: "Other",
        text: "Learned First",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 20,
    name: "Flame Thrower",
    description:
      "Deals fire damage to all enemies in a cone before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.",
    tooltip:
      "As with thaumaturgical fire spells, the jet of flame produced by this technique manifests from a burst of fire-aspected aether. Certain weapons produce similar effects; however, this is not through aetherial manipulation, but rather the copious use of highly flammable liquid.",
    order: 2,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/20.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 7,
      name: "Fire"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Gobmachine G-VI / Brayflox's Longstop (Hard)",
        related_type: null,
        related_id: null
      },
      {
        type: "Dungeon",
        text: "Magitek Gunship / The Keeper of the Lake",
        related_type: null,
        related_id: null
      },
      {
        type: "Raid",
        text: "Omega / Alphascape V3.0",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 8,
    name: "Aqua Breath",
    description:
      "Deals water damage to all enemies in a cone before you with a potency of 140 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Inflicts **Dropsy**, dealing water damage over time\n**Potency: **20\n**Duration: **12s",
    tooltip:
      "The most quintessential of water-aspected blue magicks. A competent mage will not only use its bubbles to smother nearby enemies, but also incorporate poisons, sealing the fates of any survivors.",
    order: 3,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/8.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 3,
      name: "Water"
    },
    sources: [
      {
        type: "Trial",
        text: "Ultros / The Dragon’s Neck",
        related_type: null,
        related_id: null
      },
      {
        type: "Trial",
        text: "Leviathan / The Whorleater",
        related_type: null,
        related_id: null
      },
      {
        type: "The Masked Carnivale",
        text: "Ultros / The Masked Carnivale #20",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 7,
    name: "Flying Frenzy",
    description:
      "Delivers a jumping physical attack to target and all enemies nearby it with a potency of 150 for the first enemy, and 50% less for all remaining enemies.\nCannot be executed while bound.",
    tooltip:
      "Replicating this technique requires magically altering one's own state of mind to mimic that of a zu. The flying strike that results surpasses normal physical limitations, but requires dispensing with caution in favor of an all-consuming rage─the sensible mage will shield herself with aether first.",
    order: 4,
    rank: 3,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/7.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 2,
      name: "Blunt"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Zu / Pharos Sirius",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 16,
    name: "Drill Cannons",
    description:
      "Deals physical damage to all enemies in a straight line before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Potency is increased to 600 when target is afflicted with **Petrification**. The **Petrification** effect is also removed.",
    tooltip:
      "This technique mimics the Drill Cannons of machina by winding aetherial currents until they resemble rapidly spinning projectiles. Like the physical drills upon which they are patterned, these projectiles excel at penetrating stone.",
    order: 5,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/16.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 8,
      name: "Piercing"
    },
    sources: [
      {
        type: "Other",
        text: "Magitek Vanguard H-2 / Northern Thanalan (16, 15)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 5,
    name: "High Voltage",
    description:
      "Deals lightning damage to all nearby enemies with a potency of 180 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: ****Paralysis**\n**Duration: **15s\n**Additional Effect: **Potency increased to 220 when target is afflicted with **Dropsy**\n**Additional Effect: **Duration of **Paralysis** is increased to 30 seconds when target is afflicted with **Dropsy**",
    tooltip:
      "An industrial form of machina-based aetherial manipulation developed and adapted by the Allagan Empire. Through the compression of ambient lightning-aspected aether, the caster (or casting machina) floods the vicinity with highly charged arcs of electricity.",
    order: 6,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/5.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 5,
      name: "Lightning"
    },
    sources: [
      {
        type: "Raid",
        text: "ADS / The Binding Coil of Bahamut T1",
        related_type: null,
        related_id: null
      },
      {
        type: "The Masked Carnivale",
        text: "Bestial Node / The Masked Carnivale #15",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 19,
    name: "Loom",
    description:
      "Move quickly to the specified location.\nCannot be executed while bound.",
    tooltip:
      "To utilize this simple teleportation spell, casters must create an aetherial current upon which to travel between their location and the desired position. Though this is only effective over short distances, it is nevertheless an invaluable tool in the event that one needs to beat a hasty retreat.",
    order: 7,
    rank: 1,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/19.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Baalzephon / The Lost City of Amdapor",
        related_type: null,
        related_id: null
      },
      {
        type: "Dungeon",
        text: "Dantalion / The Tam-Tara Deepcroft (Hard)",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Flame Sergeant Dalvag (B Rank) / Northern Thanalan",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 25,
    name: "Final Sting",
    description:
      "Deals physical damage with a potency of 2,000 while incapacitating self.\n**Additional Effect: **Inflicts **Brush with Death** on self\n**Duration: **600s\nEffect will not be removed upon revival or further incapacitation.\nCannot be executed while under the effect of **Brush with Death**.",
    tooltip:
      "A desperate mage's last resort, this technique converts all of the user's life force to an aetherial poison that is then injected into a single adversary. Suffice it to say that, as with the physical sting of the wespe, it should not be relied upon in but the most dire of circumstances.",
    order: 8,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/25.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 8,
      name: "Piercing"
    },
    sources: [
      {
        type: "Other",
        text: "Killer Wespe / Middle La Noscea (15, 15)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 4,
    name: "Song Of Torment",
    description:
      "Deals unaspected damage with a potency of 50.\n**Additional Effect: **Unaspected damage over time\n**Potency: **50\n**Duration: **30s",
    tooltip:
      "Favored by sirens, the Song of Torment carries in its melody a malicious enchantment. It ensnares the listener's spirit, inducing phantom pain that soon becomes physical as the body struggles to process the mind's trauma.",
    order: 9,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/4.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Siren / Pharos Sirius",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 22,
    name: "Glower",
    description:
      "Deals lightning damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: ****Paralysis**\n**Duration: **6s",
    tooltip:
      "Perhaps best known as the unsettling hallmark of the cyclops, Glower involves funneling aether through the eyes as if they were arcane circles─much like its sister spell, The Look. Its highly concentrated aether strikes foes like a levinbolt, leaving their skin singed and muscles seizing.",
    order: 10,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/22.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 5,
      name: "Lightning"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Coincounter / The Aurum Vale",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 9,
    name: "Plaincracker",
    description:
      "Deals earth damage to all nearby enemies with a potency of 220 for the first enemy, and 50% less for all remaining enemies.",
    tooltip:
      "Just like that all-too-well-known fixture in the arsenals of many earthy soulkin, this technique creates a localized quake around the caster. According to legend, the earth itself will appear to shatter under a true master of the spell.",
    order: 11,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/9.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 6,
      name: "Earth"
    },
    sources: [
      {
        type: "Other",
        text: "Basalt Golem / Outer La Noscea (14, 16)",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Sandstone Golem / Southern Thanalan (22, 12)",
        related_type: null,
        related_id: null
      },
      {
        type: "The Masked Carnivale",
        text: "Azulmagia / The Masked Carnivale #25",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 11,
    name: "Bristle",
    description:
      "Increases the potency of the next spell cast by 50%.\n**Duration: **30s\nEffect cannot be stacked with **Harmonized**.",
    tooltip:
      "Instinctive to beastkin, Bristle channels sheer animalistic rage into heightened spiritual and physical power. The blue mage will find that she can adapt this technique to increase her spells' potency.",
    order: 12,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/11.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Wild Boar / East Shroud (18, 24)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 24,
    name: "White Wind",
    description:
      "Restores own HP and the HP of all nearby party members by an amount equal to your current HP.",
    tooltip:
      "White Wind imbues a localized current of air with purified aether, distributing its curative effects throughout the vicinity. Though powerful for such a simple spell, the purification of sufficient aether requires significant magical exertion on the part of the caster, and thus should be used sparingly.",
    order: 13,
    rank: 3,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/24.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Learn 10 spells.",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 32,
    name: "Level 5 Petrify",
    description:
      "Petrifies all enemies in a cone before you.\n**Duration: **20s\nChance of successful attack is low.\nEnemy level must be a multiple of 5. Has no effect on enemies whose level is higher than your own.",
    tooltip:
      "This curse, commonly used by ahrimans and similar voidsent, takes advantage of the hubris that living creatures tend to fall prey to upon reaching certain malmstones in development, targeting mental weaknesses to give foes a paralyzing reminder of their own fallibility.",
    order: 14,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/32.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Manor Sentry / Haukke Manor",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 18,
    name: "Sharpened Knife",
    description:
      "Deals physical damage with a potency of 220.\n**Additional Effect: **Potency is increased to 450 when target is stunned",
    tooltip:
      "At this point, tonberries' predilection for sharpened knives is well known. By manipulating aether to harness feelings of resentment, one hones a keener blade for driving into the heart of the enemy. Naturally, being beset by this attack while unable to move is a uniquely harrowing experience.",
    order: 15,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/18.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 9,
      name: "Slashing"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Tonberry King / The Wanderer’s Palace",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 36,
    name: "Ice Spikes",
    description:
      "Counters enemies with ice damage every time you suffer physical damage.\n**Counter Potency: **40\n**Duration: **15s\n**Additional Effect: **50% chance that when you are struck, the striker will be afflicted with **Slow** +20%\n**Duration: **15s",
    tooltip:
      "Favored by certain types of voidsent, this spell─technically a curse, cast upon oneself─converts the malice of attackers into aetherial spikes of ice, impaling them each time they strike. The more furious their flurries, the more pain they cause themselves─poetic justice, one might say.",
    order: 16,
    rank: 1,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/36.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 11,
      name: "Ice"
    },
    sources: [
      {
        type: "Other",
        text: "Trickster Imp / Central Shroud (27, 24)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 13,
    name: "Blood Drain",
    description:
      "Deals unaspected damage with a potency of 50.\n**Additional Effect: **Restores MP",
    tooltip:
      "Through the draining of blood, this spell saps a foe's aether, a portion of which is then absorbed by the caster. In nature, such habits first appeared in creatures such as bats and chigoes, who naturalists theorize developed the ability to absorb nutrients via blood over the course of centuries.",
    order: 17,
    rank: 1,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/13.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Cave Bat / Lower La Noscea (27, 16)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 10,
    name: "Acorn Bomb",
    description:
      "Puts target and all enemies nearby it to sleep.\n**Duration: **30s\nCancels auto-attack upon execution.",
    tooltip:
      "This technique pelts foes with seedlike aetherial orbs, which then explode to release the soporific within. Scholars believe that similar defense mechanisms were originally developed by treants and other species vulnerable to vilekin in order to prevent their boring of holes and leeching of sap.",
    order: 18,
    rank: 1,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/10.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Treant Sapling / North Shroud (24, 28)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 14,
    name: "Bomb Toss",
    description:
      "Deals fire damage at a designated location with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: ****Stun**\n**Duration: **3s",
    tooltip:
      "This spell creates an aetherial replica of the sort of bomb preferred by goblins. Of course, goblin bombs acquire their combustive force through the use of magically enhanced gunpowder, so mimicking this effect with aether alone requires no small amount of effort, but the results are...explosive.",
    order: 19,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/14.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 7,
      name: "Fire"
    },
    sources: [
      {
        type: "Other",
        text: "Goblin Fisher / Middle La Noscea (23, 21)",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Goblin Gambler / Middle La Noscea (23, 21)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 29,
    name: "Off-guard",
    description:
      "Increases target's damage taken by 5%.\n**Duration: **15s\nRecast timer cannot be affected by other spells. However, this action shares a recast timer with **Peculiar Light**.",
    tooltip:
      "A primitive type of curse cast by giants in the New World, this spell sunders opponents' defenses by breaking their spirits. Pairing it with strong offensive magic allows the blue mage to weaken and strike down foe after foe without cease.",
    order: 20,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/29.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Learn 5 spells.",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 26,
    name: "Self-destruct",
    description:
      "Deals fire damage with a potency of 1,500 to all nearby enemies while incapacitating self.\n**Additional Effect: **Potency is increased to 1,800 when you are under the effect of **Toad Oil**\n**Additional Effect: **Inflicts **Brush with Death** on self\n**Duration: **600s\nEffect will not be removed upon revival or further incapacitation.\nCannot be executed while under the effect of **Brush with Death**.",
    tooltip:
      "Credited as the source of the “bomb” voidsent family's name, Self-destruct, when used by blue mages, converts the entirety of its caster's energy into fire-aspected aether to cause an explosion. The application of oil has been observed to make it more effective─though likely also more painful.",
    order: 21,
    rank: 1,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/26.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 7,
      name: "Fire"
    },
    sources: [
      {
        type: "Other",
        text: "Glide Bomb / Western Thanalan (27, 16)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 27,
    name: "Transfusion",
    description:
      "Restores all HP and MP of a single party member while incapacitating self.\n**Additional Effect: **Inflicts **Brush with Death** on self\n**Duration: **600s\nEffect will not be removed upon revival or further incapacitation.\nCannot be executed while under the effect of **Brush with Death**.",
    tooltip:
      "At times used by self-sacrificing spirits of the dead roaming the New World, this technique consumes the entirety of one's being to fully restore both the body and mind of another. Though the sacrifice required is great, the use of this spell is a deed not soon forgotten.",
    order: 22,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/27.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Learn 20 spells.",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 21,
    name: "Faze",
    description: "Stuns all enemies in a cone before you.\n**Duration: **6s",
    tooltip:
      "Originally developed as a means of defense from flesh-eating beasts, this favorite of the Qiqirn tribes produces a shockwave as its user strikes together palms filled with concentrated aether, leaving foes witless.",
    order: 23,
    rank: 3,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/21.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Qiqirn Shellsweeper / Central Thanalan (16, 19)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 41,
    name: "Flying Sardine",
    description:
      "Deals physical damage with a potency of 10.\n**Additional Effect: **Interrupts target",
    tooltip:
      "The apkallu, in the wild, violently regurgitates its latest pescatarian meal at predators as a defense mechanism. In blue magic trials, Flying Sardine has proven to be an equally effective deterrent even when the sardine in question is not entirely physical, reliably shocking adversaries into silence.",
    order: 24,
    rank: 1,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/41.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 8,
      name: "Piercing"
    },
    sources: [
      {
        type: "Other",
        text: "Apkallu / Eastern La Noscea (27, 35)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 1,
    name: "Snort",
    description:
      "Deals a 20-yalm knockback to all enemies in a cone before you.",
    tooltip:
      "Typhon's signature technique produces gale-force winds by propelling concentrated air through the nostrils─though mages recreate the gust externally, for the sake of nasal integrity. In addition to buffeting foes backward, it appears to have a detrimental effect on its target's mental state.",
    order: 25,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/1.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 1,
      name: "Wind"
    },
    sources: [
      {
        type: "Trial",
        text: "Typhon / The Dragon’s Neck",
        related_type: null,
        related_id: null
      },
      {
        type: "The Masked Carnivale",
        text: "Typhon / The Masked Carnivale #20 & #27",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 2,
    name: "4-tonze Weight",
    description:
      "Drops a 4-tonze weight dealing physical damage at a designated location with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: ****Heavy** +40%\n**Duration: **30s",
    tooltip:
      "Employed to great effect by Ultros, this technique crushes adversaries beneath a phantom weight. Due to reticence in the scholastic community regarding certain forms of testing, whether the weight applied feels like that of four full tonzes is a question that remains unanswered.",
    order: 26,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/2.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 2,
      name: "Blunt"
    },
    sources: [
      {
        type: "Trial",
        text: "Ultros / The Dragon’s Neck",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 17,
    name: "The Look",
    description:
      "Deals unaspected damage to all enemies in a cone before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Increased enmity",
    tooltip:
      "Common amongst dahaks, this technique requires using the position of one's own eyes to anchor arcane geometries in which to concentrate aether. The user then expels the aether, propelled by ill will, in the direction of his gaze─though this tends to earn him a fair bit of ire in return.",
    order: 27,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/17.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Anantaboga / Amdapor Keep",
        related_type: null,
        related_id: null
      },
      {
        type: "Dungeon",
        text: "Bibliolater / The Great Gubal Library (Hard)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 6,
    name: "Bad Breath",
    description:
      "Blow noxious breath on all enemies in a cone before you, inflicting **Slow** +20%, **Heavy** +40%, **Blind**, and **Paralysis**.\n**Additional Effect: ****Poison**\n**Potency: **20\n**Additional Effect: **Damage dealt reduced 10%\n**Duration: **15s\n**Additional Effect: **Interrupts target",
    tooltip:
      "This spell manipulates wind- and earth-aspected aether to call forth the umbral, imbuing exhaled air with miasma. Attempts to replicate the morbol's Bad Breath sans its inherent horrific stench have been unsuccessful, thus it retains its title as the *foulest* of blue magicks.",
    order: 28,
    rank: 3,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/6.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Stroper / Central Shroud (12, 23)",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Morbol / Mor Dhona (15, 14)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 42,
    name: "Diamondback",
    description:
      "Reduces damage taken by 90% and nullifies most knockback and draw-in effects.\nUnable to move or take action for the duration of this effect.\n**Duration: **10s\nIf used when **Waxing Nocturne** is active, its effect will transition immediately to **Waning Nocturne**.\nThe effect of this action cannot be ended manually.",
    tooltip:
      "Diamondback weaves earth-aspected aether into a hard mineral shield, mimicking what many describe as the “maddening” effect of shelled dragons' carapaces. Alas, though its defensive properties are superlative, its weight makes it impossible for the caster to move while under its aegis.",
    order: 29,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/42.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Cuca Fera / The Stone Vigil (Hard)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 35,
    name: "Mighty Guard",
    description:
      "Reduces damage taken by 40% while reducing damage dealt by 40%, increasing enmity generation, and preventing casting interruptions via damage taken.\nEffect ends upon reuse.",
    tooltip:
      "Protected by only a dainty layer of scales, some Indigo Deep-dwellers' survival has come to depend on aetherial manipulation─this technique included. By reducing the amount of aether used for offense, more becomes available for the creation of a strong─if flashy─barrier.",
    order: 30,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/35.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Learn 10 spells.",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 30,
    name: "Sticky Tongue",
    description:
      "Draws target towards caster.\n**Additional Effect: ****Stun**\n**Duration:** 4s\n**Additional Effect:** Increased enmity",
    tooltip:
      "In nature, Sticky Tongue is employed by gigantoads, who extend said lengthy and unusually adhesive appendages to capture distant prey. The blue magic rendition utilizes a far more sanitary aetherial “tongue,” but the principle is the same.",
    order: 31,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/30.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 2,
      name: "Blunt"
    },
    sources: [
      {
        type: "Other",
        text: "Toxic Toad / Central Thanalan (26, 19)",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Laughing Toad / Western Thanalan (14, 6)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 28,
    name: "Toad Oil",
    description: "Increases evasion by 20%.\n**Duration: **180s",
    tooltip:
      "This technique covers the blue mage's body in oil, much like a gigantoad's slime would its own, allowing the caster to slip and slide away from foes' attacks. Though most consider it uncouth at best, make no mistake─its devotees are few, but ardent.",
    order: 32,
    rank: 3,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/28.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Giggling Gigantoad / Western Thanalan (15, 7)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 37,
    name: "The Ram's Voice",
    description:
      "Deals ice damage to all nearby enemies with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: ****Deep Freeze**\n**Duration: **12s",
    tooltip:
      "Scholars theorize that this particular spell was born of the variety of aetherial manipulation often performed by northern rams to survive the harsh climes of high elevations─but when ram became chimerical head, it began to favor offense over defense.",
    order: 33,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/37.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 11,
      name: "Ice"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Chimera / Cutter's Cry",
        related_type: null,
        related_id: null
      },
      {
        type: "Trial",
        text: "Dhorme Chimera / A Relic Reborn: The Chimera",
        related_type: null,
        related_id: null
      },
      {
        type: "The Masked Carnivale",
        text: "Azulmagia / The Masked Carnivale #25",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 38,
    name: "The Dragon's Voice",
    description:
      "Deals lightning damage to all nearby enemies with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\nEnemies within an 8-yalm radius will be unaffected.\n**Additional Effect: ****Paralysis**\n**Duration: **9s\n**Additional Effect: **Potency is increased to 400 against most enemies afflicted with **Deep Freeze**. The **Deep Freeze** effect is also removed.",
    tooltip:
      "The blue mage's ability to precisely direct volatile levin to form the smooth ring produced by this spell is owed to the chimera from which the technique was learned─and whose control of lightning aether was, in turn, owed to its draconic head.",
    order: 34,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/38.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 5,
      name: "Lightning"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Chimera / Cutter's Cry",
        related_type: null,
        related_id: null
      },
      {
        type: "Trial",
        text: "Dhorme Chimera / A Relic Reborn: The Chimera",
        related_type: null,
        related_id: null
      },
      {
        type: "The Masked Carnivale",
        text: "Azulmagia / The Masked Carnivale #25",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 23,
    name: "Missile",
    description:
      "Deals damage equal to 50% of target's current HP.\nChance of successful attack is low. Has no effect on enemies whose level is higher than your own.",
    tooltip:
      "A magical imitation of warmachina technology, this technique allows the user to fire a barrage of aetherial missiles. When efficacious─which, bear in mind, is not guaranteed─it sends a shock through the foe that appears to resonate more the greater their vitality.",
    order: 35,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/23.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Trial",
        text: "Enkidu / Battle in the Big Keep",
        related_type: null,
        related_id: null
      },
      {
        type: "Raid",
        text: "Guardian / Sigmascape V3.0",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 15,
    name: "1000 Needles",
    description:
      "Deals a fixed 1,000 points of physical damage which is shared by all enemies around you.",
    tooltip:
      "Highly famed─and feared─due to its frequent use by cactuars, 1000 Needles showers one's surroundings with a hail of slim projectiles. Despite their magical nature, the velocity at which the blue mage's pseudo-spines are propelled ensures that they are quite as painful as the real thing.",
    order: 36,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/15.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 8,
      name: "Piercing"
    },
    sources: [
      {
        type: "Other",
        text: "Sabotender Bailaor / Southern Thanalan (16, 15)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 40,
    name: "Ink Jet",
    description:
      "Deals unaspected damage to all enemies in a cone before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: ****Blind**\n**Duration: **30s",
    tooltip:
      "Ink Jet can be considered a more advanced form of Water Cannon─fitting, as both come courtesy of the kraken. The spell infuses aetherially concentrated water with whatever impure substances are most readily available to create and expel a synthetic “ink,” blinding opponents.",
    order: 37,
    rank: 3,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/40.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Kraken / Sastasha (Hard)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 43,
    name: "Fire Angon",
    description:
      "Deals physical fire damage to target and all enemies nearby it with a potency of 200 for the first enemy, and 50% less for all remaining enemies.",
    tooltip:
      "In imitation of a martial technique passed down for generations by Mamool Ja tribes in the New World, this spell imbues a long-headed spear called an “angon”─or rather, an aetherial replica of the same─with fire-aspected aether and propels it across the field at enemy combatants.",
    order: 38,
    rank: 3,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/43.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 12,
      name: "Piercing/Fire"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Fruminoius Koheel Ja / The Wanderer's Palace (Hard)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 33,
    name: "Moon Flute",
    description:
      "Grants the effect of **Waxing Nocturne**, increasing damage dealt by 50% and movement speed by 30%.\n**Duration: **15s\nWhen effect ends, the player is afflicted with **Waning Nocturne**, preventing the use of auto-attack, weaponskills, spells, or abilities.\n**Duration: **15s",
    tooltip:
      "This technique imitates a peculiar flute wrested from the grasp of a vanquished voidsent. Said creature was initially welcomed as a god by those New World peoples who worship the moon, but it soon became clear to them that the flute was the true source of its power and cruel authority.",
    order: 39,
    rank: 1,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/33.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Complete 10 stages in the Masked Carnivale.",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 31,
    name: "Tail Screw",
    description:
      "Reduces target's HP to a single digit.\nChance of successful attack is low. Has no effect on enemies whose level is higher than your own.",
    tooltip:
      "Karlabos performs Tail Screw by collecting turbulent aether in the tip of its tail, then unleashing it at once as a violent whorl that rips foes' lives from their bodies. This is notoriously difficult to imitate, due to the challenges inherent in attempting to control such a volatile aetherial vortex.",
    order: 40,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/31.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Karlabos / Sastasha (Hard)",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Crag Claw / The Peaks (25, 9)",
        related_type: null,
        related_id: null
      },
      {
        type: "Dungeon",
        text: "Reflection of Karlabos / Sirensong Sea",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 12,
    name: "Mind Blast",
    description:
      "Deals unaspected damage to all nearby enemies with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: ****Paralysis**\n**Duration: **30s",
    tooltip:
      "Primarily used by soulflayers, though reportedly also found in Blaster's arsenal, Mind Blast assaults nearby foes' perceptions, tormenting them with the sensation of manifold cuts. Senses overwhelmed, victims' bodies react as if perception were reality, leaving them wounded and paralyzed.",
    order: 41,
    rank: 1,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/12.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Galvanth the Dominator / The Tam-tara Deepcroft",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 34,
    name: "Doom",
    description:
      "Inflicts **Doom** on target.\n**Duration: **15s\nWhen effect expires, the target will be KO'd.\nChance of successful attack is low. Has no effect on enemies whose level is higher than your own.",
    tooltip:
      "Oft cast by voidsent in the New World, this mortal curse merely hints that one's time may be nigh. For particularly suggestible opponents, however, this is enough─the looming specter of death will send them leaping to their graves.",
    order: 42,
    rank: 4,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/34.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Complete 20 stages in the Masked Carnivale.",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 39,
    name: "Peculiar Light",
    description:
      "Increases magic damage taken by all nearby enemies by 5%.\n**Duration: **15s\nRecast timer cannot be affected by other spells. However, this action shares a recast timer with **Off-guard**.",
    tooltip:
      "A variant on a salamander specialty, Peculiar Light disperses radiance naturally emitted during spellcasting into a half-globe, clouding victims' vision. Thus unbeknownst to them, malignant aether lurking within the rapidly reflecting beams renders them more susceptible to further aetherial assaults.",
    order: 43,
    rank: 2,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/39.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Lentic Mudpuppy / Mor Dhona (13, 10)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 44,
    name: "Feather Rain",
    description:
      "Deals wind damage with a potency of 220 to all enemies at a designated location.\n**Additional Effect: **Wind damage over time\n**Potency: **40\n**Duration: **6s\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "Feather Rain, as swift and brutal as most of Garuda's skills, puts the force of a gale behind a storm of sharp plumes, afflicting foes with innumerable cuts and lashes that cause lingering agony.",
    order: 44,
    rank: 5,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/44.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 1,
      name: "Wind"
    },
    sources: [
      {
        type: "Trial",
        text: "Garuda / The Howling Eye (Extreme)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 45,
    name: "Eruption",
    description:
      "Deals fire damage with a potency of 300 to all enemies at a designated location.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "Necessitating the skill to manipulate currents beneath the earth as Ifrit does, Eruption drives the fire within the land above ground in a burst of explosive flame, creating an effect similar to that of a volcano.",
    order: 45,
    rank: 5,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/45.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 7,
      name: "Fire"
    },
    sources: [
      {
        type: "Trial",
        text: "Ifrit / The Bowl of Embers",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 46,
    name: "Mountain Buster",
    description:
      "Deals physical earth damage to all enemies in a cone before you with a potency of 400 for the first enemy, and 50% less for all remaining enemies.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "In a devastating recreation of one of Titan's most fearsome techniques, Mountain Buster strikes opponents with an upheaval of earth-aspected aether, as if the land itself were ripping free of its confines to pulverize its defilers─or any unfortunate bystanders, as it were.",
    order: 46,
    rank: 5,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/46.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 13,
      name: "Blunt/Earth"
    },
    sources: [
      {
        type: "Trial",
        text: "Titan / The Navel (Hard)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 47,
    name: "Shock Strike",
    description:
      "Deals lightning damage to target and all enemies nearby it with a potency of 400 for the first enemy, and 50% less for all remaining enemies.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "Shock Strike, never so imposing as when cast by Ramuh, calls down a bolt from the heavens. Though measurements are difficult to come by, its power is thought to far exceed that of levinbolts found in nature─indeed, it more closely resembles a warhammer crashing to the earth.",
    order: 47,
    rank: 5,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/47.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 5,
      name: "Lightning"
    },
    sources: [
      {
        type: "Trial",
        text: "Ramuh / The Striking Tree (Hard)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 48,
    name: "Glass Dance",
    description:
      "Deals ice damage to all enemies in a wide arc to your fore and flanks with a potency of 350 for the first enemy, and 50% less for all remaining enemies.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "To fully replicate this technique, beloved of Shiva, the blue mage calls forth a bow of aether from which she fires a hail of razor-sharp icicles. Those who knew the lady Ysayle believe that Glass Dance may have taken form from her memories of observing hunters in Tailfeather.",
    order: 48,
    rank: 5,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/48.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 11,
      name: "Ice"
    },
    sources: [
      {
        type: "Trial",
        text: "Shiva / Akh Afah Amphitheatre (Extreme)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 49,
    name: "Veil Of The Whorl",
    description:
      "Counters enemies with water damage every time you suffer damage.\n**Counter Potency: **50\n**Duration: **30s\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "This fearsome magic, inspired by Leviathan, creates an aqueous film of water collected from the atmosphere. Though a veil in the sense of offering protection from outside forces, it also functions as a mirror, reflecting foes' aether back upon them.",
    order: 49,
    rank: 5,
    patch: "4.5",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/49.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 3,
      name: "Water"
    },
    sources: [
      {
        type: "Trial",
        text: "Leviathan / The Whorleater (Hard)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 50,
    name: "Alpine Draft",
    description:
      "Deals wind damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.",
    tooltip:
      "So fierce as to match the gales that pierce Abalathia's Spine, the gusting wind produced by this spell is commonly put to use by wild griffins in driving trespassers from their jealously guarded territory.",
    order: 50,
    rank: 2,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/50.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 1,
      name: "Wind"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Opinicus / The Dusk Vigil",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Griffin / Sea of Clouds (36, 9)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 51,
    name: "Protean Wave",
    description:
      "Deals water damage to all enemies in a cone before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **15-yalm knockback",
    tooltip:
      "This technique originates with the living liquid, which coalesces about a hydrate core that allows it to dispense its own fluid in a violent flood. The magically reproduced version, correctly applied, is equally effective in sweeping away even the bulkiest of foes.",
    order: 51,
    rank: 3,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/51.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 3,
      name: "Water"
    },
    sources: [
      {
        type: "Raid",
        text: "Living Liquid / Alexander - The Arm of the Father",
        related_type: null,
        related_id: null
      },
      {
        type: "The Masked Carnivale",
        text: "Shikigami / The Masked Carnivale #29",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 52,
    name: "Northerlies",
    description:
      "Deals ice damage to all enemies in a cone before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Enemies affected by **Dropsy** are frozen. The **Dropsy** effect is also removed.\n**Duration: **20s",
    tooltip:
      "Owing to the unique refrigerant in its saliva, the yeti is able to chill its own breath to such great extent that said gust of air rapidly freezes ambient water-aspected aether. By magically generating a similar blizzard, the mage becomes particularly effective against foes afflicted with dropsy.",
    order: 52,
    rank: 4,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/52.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 11,
      name: "Ice"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Yeti / Snowcloak",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Lone Yeti / Coerthas Western Highlands (22, 27)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 53,
    name: "Electrogenesis",
    description:
      "Deals lightning damage to target and all enemies nearby it with a potency of 220 for the first enemy, and 50% less for all remaining enemies.",
    tooltip:
      "This efficacious technique is, in nature, employed by the voracious sea serpent, which will spit a bubble of water that takes on the electric charge of the serpent's own scales─giving the creature's prey a rather nasty shock upon impact.",
    order: 53,
    rank: 2,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/53.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 5,
      name: "Lightning"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Hikagiri / Shisui of the Violet Tides",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Conodont / Sea of Clouds (26, 33)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 54,
    name: "Kaltstrahl",
    description:
      "Deals physical damage to all enemies in a cone before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.",
    tooltip:
      "To employ this technique, it is first necessary to replicate the panzer doll's fearsome spear, which is then swung in an arc to cut foes down quicker than they can blink.",
    order: 54,
    rank: 2,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/54.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 18,
      name: "Slashing"
    },
    sources: [
      {
        type: "Raid",
        text: "Faust & Sturm Doll / Alexander - The Fist of the Father",
        related_type: null,
        related_id: null
      },
      {
        type: "Raid",
        text: "Jagd Doll / Alexander - The Cuff of the Father",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 55,
    name: "Abyssal Transfixion",
    description:
      "Deals physical damage with a potency of 220.\n**Additional Effect: ****Paralysis**\n**Duration: **30s",
    tooltip:
      "An arch demon specialty, Abyssal Transfixion weaves aether into a globe of blades that are then plunged inward to pierce a target in unison. This harrowing experience generally has the effect of paralyzing said target with a visceral terror, making it an invaluable addition to one's arsenal.",
    order: 55,
    rank: 4,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/55.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 19,
      name: "Piercing"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Ash / Haukke Manor (Hard)",
        related_type: null,
        related_id: null
      },
      {
        type: "Dungeon",
        text: "Biblioklept / The Great Gubal Library (Final Boss 3 Orb Spawn)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 56,
    name: "Chirp",
    description:
      "Puts all nearby enemies to sleep.\n**Duration: **40s\nCancels auto-attack upon execution.",
    tooltip:
      "This spell mimics the queer cry of the paissa, which is known to impart those who hear it with the answer to life, the universe, and everything─an experience to which the mind reacts by shutting down entirely, plunging its host into a deep slumber.",
    order: 56,
    rank: 1,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/56.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Paissa / Sea of Clouds (24, 33)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 57,
    name: "Eerie Soundwave",
    description: "Removes one beneficial effect from all nearby enemies.",
    tooltip:
      "The empuse generates its Eerie Soundwave by rapidly vibrating parts of its body, emitting an unsettling tone that can only be described as “gods-awful.” Said tone can, however, be harnessed by the mage to disrupt certain harmonious aetherial frequencies and nullify their beneficial effects.",
    order: 57,
    rank: 2,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/57.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Trial",
        text: "Enkidu / Battle in the Big Keep",
        related_type: null,
        related_id: null
      },
      {
        type: "Dungeon",
        text: "Arioch / The Lost City of Amdapor",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Empuse / Azys Lla (30, 12)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 58,
    name: "Pom Cure",
    description:
      "Restores target's HP.\n**Cure Potency: **100\nCure potency is increased to 500 when you are under the effect of **Aetheric Mimicry: Healer**.",
    tooltip:
      "This spell seems fundamentally no different from those used by the conjurers of Stillglade Fane, though upon inquiry as to its detailed workings, an anonymous moogle provided the following words of advice: “Stuff your pom with magic─you know, the sparkly kind─then go 'bwaaa'!”",
    order: 58,
    rank: 3,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/58.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Trial",
        text: "Furryfoot Kupli Kipp / Thornmarch (Hard)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 59,
    name: "Gobskin",
    description:
      "Creates a barrier around self and all nearby party members that absorbs damage equivalent to a heal of 100 potency.\n**Duration: **30s\nBarrier strength is increased to absorb damage equivalent to a heal of 250 potency when you are under the effect of **Aetheric Mimicry: Healer**.\nEffect cannot be stacked with those of scholar's **Galvanize** or sage's **Eukrasian Diagnosis** and **Eukrasian Prognosis**.",
    tooltip:
      "Only select goblins are privy to this technique, developed through unscrupulous scientific experimentation conducted by the Illuminati. It allows one to weave a thin, skintight veil of aether across their entire body, handily augmenting the usual defenses.",
    order: 59,
    rank: 4,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/59.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Raid",
        text: "Alexandrian Hider / Alexander - The Breath of the Creator",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Slipkinx Steeljoints (A Rank) / The Dravanian Hinterlands",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 60,
    name: "Magic Hammer",
    description:
      "Deals unaspected damage to target and all enemies nearby it with a potency of 250 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Lowers intelligence and mind attributes by 10%\n**Duration: **10s\n**Additional Effect: **Restores 10% of maximum MP\nThis action does not share a recast timer with any other actions.",
    tooltip:
      "Memorably employed by Byblos, this technique, simply put, drops a massive metal─or, in many cases, aetherial─hammer directly upon a foe's pate with resounding impact. Such foes understandably find their mental acuity somewhat reduced thereafter.",
    order: 60,
    rank: 2,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/60.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Apanda / The Great Gubal Library (Hard)",
        related_type: null,
        related_id: null
      },
      {
        type: "The Masked Carnivale",
        text: "Epilogi / The Masked Carnivale #24",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 61,
    name: "Avail",
    description:
      "Direct damage intended for you to another party member.\n**Duration: **12s\nCan only be executed when member is within 10 yalms. Does not activate with certain attacks.\nThis action does not share a recast timer with any other actions.",
    tooltip:
      "In nature, the queen hawk secretes a particular pheromone when threatened that encourages her adoring swarm to put itself in harm's way in her name. The astute caster may create a similar effect by magical means─acquiring herself a “meat shield,” as it were.",
    order: 61,
    rank: 1,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/61.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Queen Hawk / Saint Mocianne's Arboretum",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 62,
    name: "Frog Legs",
    description:
      "Provoke nearby enemies, placing yourself at the top of their enmity list.",
    tooltip:
      "This incantation-like song is evidently considered a toe-tapper by poroggos─and poroggos exclusively, for to all other creatures it sounds much like a frog being run over by a carriage. Brazenly chanting it without remorse, therefore, is an effective means of drawing ire when necessary.",
    order: 62,
    rank: 1,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/62.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Poroggo / The Dravanian Hinterlands (12, 35)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 63,
    name: "Sonic Boom",
    description: "Deals wind damage with a potency of 210.",
    tooltip:
      "A favored technique of the zu, who are able to perform it with a particularly vigorous flap of the wing, Sonic Boom produces a gust of wind-aspected aether so finely compressed that its lethality is oft likened unto that of a finely crafted blade.",
    order: 63,
    rank: 4,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/63.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 1,
      name: "Wind"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Zu / Pharos Sirius",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Anzu / Sea of Clouds (21, 6)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 64,
    name: "Whistle",
    description:
      "Increases the potency of the next physical damage spell cast by 80%.\n**Duration: **30s\nEffect cannot be stacked with **Boost**.",
    tooltip:
      "This technique is in fact one of psychological suggestion, albeit suggestion performed on the self. When the proper pitch is attained, the body will respond by producing adrenaline, which can be used to advantage in combat─or, if one happens to be a dhalmel, in attracting a mate.",
    order: 64,
    rank: 3,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/64.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Divine Dhalmel / Neverreap",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Dhalmel / Sea of Clouds (16, 30)",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Jhammel / The Peaks (26, 30)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 65,
    name: "White Knight's Tour",
    description:
      "Deals unaspected damage to all enemies in a straight line before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Potency is increased to 400 when enemies are bound. The **Bind** effect is also removed.\n**Additional Effect: ****Slow** +20%\n**Duration:** 20s",
    tooltip:
      "Developed as an efficient means for subduing heretics, this spell unleashes a concentrated wave of aether that sears and warps the flesh, leaving its target pained and stumbling─particularly if said target has already succumbed to mental torments.",
    order: 65,
    rank: 2,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/65.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "White Knight / The Vault",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 66,
    name: "Black Knight's Tour",
    description:
      "Deals unaspected damage to all enemies in a straight line before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Potency is increased to 400 when enemies are under the effect of **Slow**. The **Slow** effect is also removed.\n**Additional Effect: ****Bind**\n**Duration:** 20s",
    tooltip:
      "Never particularly concerned with mercy, the Holy See intended this spell to crush heretics' spirits with a mentally destabilizing beam of aether. If the target is already suffering from physical distress, all the better.",
    order: 66,
    rank: 2,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/66.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Black Knight / The Vault",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 67,
    name: "Level 5 Death",
    description:
      "KOs all nearby enemies.\nChance of successful attack is low.\nEnemy level must be a multiple of 5. Has no effect on enemies whose level is higher than your own.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "One of several voidsent curses that rely upon the hubris that living creatures fall prey to upon reaching certain growth malmstones, this spell twists its way into a victim's mind, causing such acute distress that the body's organs are forced to shut down.",
    order: 67,
    rank: 4,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/67.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Page 64 (No Tether) / The Great Gubal Library",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 68,
    name: "Launcher",
    description:
      "Delivers an attack to all nearby enemies randomly dealing 50%, 30%, 20%, or 10% of their HP.\nHas no effect on enemies whose level is higher than your own.",
    tooltip:
      "This spell─particularly effective on the gullible─conjures a volley of illusory missiles, fooling foes into feeling as if they have met the singularly unpleasant fate of being fired upon by Garlean magitek and causing their bodies to react accordingly.",
    order: 68,
    rank: 2,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/68.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Armored Weapon / Baelsar's Wall",
        related_type: null,
        related_id: null
      },
      {
        type: "Dungeon",
        text: "Doman Armored Weapon / Doma Castle",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 69,
    name: "Perpetual Ray",
    description:
      "Deals unaspected damage with a potency of 220.\n**Additional Effect: ****Stun**\n**Duration: **1s\nIgnores target's **Stun** resistance.",
    tooltip:
      "Employed to great effect by a certain godlike machine, the concentrated heat that comprises Perpetual Ray has the capacity to deaden nerve endings and sever links between mind and muscle. By directing the beam with particular finesse, the savvy mage can render a foe entirely immobile.",
    order: 69,
    rank: 4,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/69.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Raid",
        text: "The Manipulator / Alexander - The Burden of the Father",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 70,
    name: "Cactguard",
    description:
      "Reduces target party member's damage taken by 5%.\n**Duration: **6s\nIncreases damage reduction to 15% when you are under the effect of **Aetheric Mimicry: Tank**.",
    tooltip:
      "Wild sabotenders are believed to have developed this ability to channel their aether toward others as a means of protecting particularly fruitful members of their species─as survival in arid climes ever comes at a cost.",
    order: 70,
    rank: 1,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/70.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Sabotender Guardia / The Sunken Temple of Qarn (Hard)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 71,
    name: "Revenge Blast",
    description:
      "Deals physical damage with a potency of 50.\nPotency is increased to 500 when your HP is below 20%.",
    tooltip:
      "The Whalaqee are generally willing to pass on this close-quarter technique, which allows the mage to harness his own feelings of desperation at being driven closer to death and launch a last-ditch offensive. The name of the creature who originally possessed it, however, remains a closely guarded secret.",
    order: 71,
    rank: 2,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/71.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 20,
      name: "Blunt"
    },
    sources: [
      {
        type: "Other",
        text: "Learn 50 spells.",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 72,
    name: "Angel Whisper",
    description:
      "Resurrects target to a weakened state.\nThis action does not share a recast timer with any other actions.",
    tooltip:
      "The origin of this revitalizing spell is steeped in mystery, as it requires healing aether be amplified through a familiar that appears for all the world to be a messenger from the heavens─a concept soundly at odds with Whalaqee religious beliefs.",
    order: 72,
    rank: 4,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/72.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Complete 30 stages at the Masked Carnivale.",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 73,
    name: "Exuviation",
    description:
      "Restores own HP and the HP of all nearby party members.\n**Cure Potency: **50\n**Additional Effect: **Removes one detrimental effect from all nearby party members\nCure potency is increased to 300 when you are under the effect of **Aetheric Mimicry: Healer**.",
    tooltip:
      "This spell enhances the body's natural detoxification processes, stimulating organs and the growth of new tissue. Perhaps due to it having originated with wamourae, it feels much like shedding an old layer of scales.",
    order: 73,
    rank: 2,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/73.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Wamoura / The Lost City of Amdapor",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Abalathian Wamoura (Heals Allies) / Sea of Clouds (9, 16)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 74,
    name: "Reflux",
    description:
      "Deals lightning damage with a potency of 220.\n**Additional Effect: ****Heavy** +40%\n**Duration: **10s\nIgnores target's **Heavy** resistance.",
    tooltip:
      "This technique strikes a foe with a ball of concentrated electricity─accumulated by wild elder wyverns during their passage through the clouds, but eminently reproducible through magical means─the power of which causes its body to seize as if being crushed by monumental weight.",
    order: 74,
    rank: 3,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/74.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 5,
      name: "Lightning"
    },
    sources: [
      {
        type: "Other",
        text: "Cloud Wyvern / The Churning Mists (23, 29)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 75,
    name: "Devour",
    description:
      "Deals unaspected damage with a potency of 250.\n**Additional Effect: **Increases maximum HP by 20%\n**Duration: **15s\nIncreases duration to 70s when you are under the effect of **Aetheric Mimicry: Tank**.\n**Additional Effect: **Restores an amount of own HP equal to damage dealt\nThis action does not share a recast timer with any other actions.",
    tooltip:
      "No longer merely the domain of savage beasts, this technique, when reproduced by the blue mage, involves not the devouring of rent flesh, but rather heals and invigorates its caster through the absorption of aether.",
    order: 75,
    rank: 1,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/75.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Decaying Gourmand / The Lost City of Amdapor",
        related_type: null,
        related_id: null
      },
      {
        type: "Dungeon",
        text: "Nullchu / Saint Mocianne's Arboretum (Hard)",
        related_type: null,
        related_id: null
      },
      {
        type: "Raid",
        text: "Caduceus / The Binding Coil of Bahamut T1",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 76,
    name: "Condensed Libra",
    description:
      "Afflicts target with **Physical Attenuation**, **Astral Attenuation**, or **Umbral Attenuation**.\n**Duration: **30s\n**Physical Attenuation Effect: **Increases damage taken from physical attacks by 5%\n**Astral Attenuation Effect: **Increases damage taken from fire-, wind-, and lightning-aspected attacks by 5%\n**Umbral Attenuation Effect: **Increases damage taken from water-, earth-, and ice-aspected attacks by 5%\nOnly one of these statuses can be applied to a target at a time.",
    tooltip:
      "Invented by complete accident whilst a master mechanic attempted to manufacture an automaton that might monitor his lover's suspected illicit activities, and now a staple mechanism of mechanoscribes, Condensed Libra allows for the rapid analysis and amplification of a foe's weaknesses.",
    order: 76,
    rank: 3,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/76.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Mechanoscribe / The Great Gubal Library (Hard)",
        related_type: null,
        related_id: null
      },
      {
        type: "The Masked Carnivale",
        text: "Arena Scribe / The Masked Carnivale #24",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 77,
    name: "Aetheric Mimicry",
    description:
      "Mirror the aetheric properties of your target, granting yourself a beneficial effect corresponding with the target's role.\nIf target is a tank, grants **Aetheric Mimicry: Tank**, increasing your defense and augmenting certain blue magic spells.\nIf target is a DPS, grants **Aetheric Mimicry: DPS**, increasing critical hit rate and direct hit rate by 20%, as well as augmenting certain blue magic spells.\nIf target is a healer, grants **Aetheric Mimicry: Healer**, increasing healing magic potency by 20% and augmenting certain blue magic spells.\nCannot be cast on self. Effect ends upon reuse.",
    tooltip:
      "A useful little ability originating with the ghrah, Aetheric Mimicry allows the mage to match his aetherial wavelength to that of another person, granting the same benefits as their hard-won combat training.",
    order: 77,
    rank: 4,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/77.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Ghrah Luminary Adds / Pharos Sirius (Hard)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 78,
    name: "Surpanakha",
    description:
      "Deals earth damage to all enemies in a cone before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Grants **Surpanakha's Fury**, increasing potency of **Surpanakha** by 50%\n**Duration: **3s\nCan be stacked up to 3 times.\n**Maximum Charges: **4\nEffect is canceled upon execution of any action other than **Surpanakha**.",
    tooltip:
      "Favored by Ravana, this spell subtly manipulates earth-aspected aether to draw metallic particles from nearby mineral deposits, then propels them forward in an expansive wave to pierce foes' flesh like shrapnel.",
    order: 78,
    rank: 5,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/78.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 6,
      name: "Earth"
    },
    sources: [
      {
        type: "Trial",
        text: "Ravana / Thok Ast Thok",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 79,
    name: "Quasar",
    description:
      "Deals unaspected damage to all nearby enemies with a potency of 300 for the first enemy, and 50% less for all remaining enemies.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "Calling upon a rain of aetherial stars like that delivered unto those who upset Sophia's precious harmony, this spell leaves foes shaking from both the impact of a sky fallen and the thought of what fell fate it may portend.",
    order: 79,
    rank: 5,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/79.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Trial",
        text: "Sophia / Containment Bay P1T6",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 80,
    name: "J Kick",
    description:
      "Delivers a jumping physical attack to target and all enemies nearby it with a potency of 300 for the first enemy, and 50% less for all remaining enemies.\nCannot be executed while bound.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "The signature move of Brute Justice, this technique involves unleashing the full force of justice, delirium unsuspected, static tuned in to reason─before falling back right in with the system, falling back to the end.",
    order: 80,
    rank: 5,
    patch: "5.15",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/80.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 20,
      name: "Blunt"
    },
    sources: [
      {
        type: "Raid",
        text: "Brute Justice / Alexander - The Burden of the Son",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 81,
    name: "Triple Trident",
    description:
      "Delivers a threefold attack, each hit with a potency of 150.\nThis action does not share a recast timer with any other actions.",
    tooltip:
      "Originally developed by the Namazu as a spearfishing technique, this blindingly fast triple strike has proven just as effective against creatures more intent on devouring the fisher.",
    order: 81,
    rank: 1,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/81.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 19,
      name: "Piercing"
    },
    sources: [
      {
        type: "Other",
        text: "Ebisu Catfish / Yanxia (28, 6) ",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Gyorai Quickstrike (B Rank) / Yanxia",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 82,
    name: "Tingle",
    description:
      "Deals lightning damage to target and all enemies nearby it with a potency of 100 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Increases the potency of the next physical damage spell cast by 100\n**Duration: **15s",
    tooltip:
      "The Namazu likely named this ability more for the pleasantly tingling current that energizes the caster, rather than the shocking bolt of devastation that smites the distant target. Devised by idle hunters who prefer to stay in one comfortable spot on the river, and strike at whatever swims into range.",
    order: 82,
    rank: 2,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/82.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 5,
      name: "Lightning"
    },
    sources: [
      {
        type: "Other",
        text: "Ebisu Catfish / Yanxia (28, 6) ",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Gyorai Quickstrike (B Rank) / Yanxia",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 83,
    name: "Tatami-gaeshi",
    description:
      "Deals unaspected damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: ****Stun**\n**Duration: **3s",
    tooltip:
      "The dojun-maru employ this ability to weave a row of phantom tatami mats, which they then flip onto an enemy with stunning force. A true master of the technique can even imbue the creation with the faint scent of tatami straw.",
    order: 83,
    rank: 3,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/83.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Dojun-maru Adds (2nd Boss) / Kugane Castle",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 84,
    name: "Cold Fog",
    description:
      "Grants **Cold Fog** to self.\n**Duration: **5s\nEffect changes to **Touch of Frost** if damage is taken.\n**Touch of Frost Effect: **Action changes from **Cold Fog** to **White Death**\n**Duration: **15s\n\n**White Death**\nDeals ice damage with a potency of 400.\n**Additional Effect: ****Deep Freeze**\n**Duration: **10s\nCan only be executed while under the effect of **Touch of Frost**.",
    tooltip:
      "A mist dragon will instinctively cloak itself in a chilling fog, which allows it to freeze any aggressor foolish enough to test its defenses. Practitioners of this spell have discovered that the trick to not freezing oneself in the process is to surround the body with a pocket of warm air.",
    order: 84,
    rank: 4,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/84.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 11,
      name: "Ice"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Mist Dragon Heads / The Burn",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 85,
    name: "Stotram",
    description:
      "Deals unaspected damage with a potency of 140 to all nearby enemies.\nAction effect changes, restoring own HP and the HP of all nearby party members when you are under the effect of **Aetheric Mimicry: Healer**.\n**Cure Potency: **300",
    tooltip:
      "A paean to love favored by Lakshmi, this spell produces an explosion of light, the effect of which varies depending on the caster's mindset─a heart intent on harm will scorch foes caught in the blast, whilst a heart filled with mercy will mend the wounds of those held dear.",
    order: 85,
    rank: 2,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/85.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Trial",
        text: "Lakshmi / Emanation",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 86,
    name: "Saintly Beam",
    description:
      "Deals unaspected damage with a potency of 100 to target and all enemies nearby it.\nPotency increases to 500 when used against undead enemies.",
    tooltip:
      "Cast by, of all things, a phantom train, this purifying light burns away restless spirits and consumes tainted souls. In Garlemald, where travel by machina is commonplace, the tale is told of a spectral locomotive whose passengers are the spirits of the dead...",
    order: 86,
    rank: 2,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/86.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Raid",
        text: "Phantom Train / Sigmascape V1.0",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 87,
    name: "Feculent Flood",
    description:
      "Deals earth damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.",
    tooltip:
      "The signature technique of Tokkapchi, this ability draws on earth-aspected aether to generate a stinging geyser of mud. Widely believed to deal additional psychological damage against opponents dressed in white.",
    order: 87,
    rank: 1,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/87.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 6,
      name: "Earth"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Tokkapchi / Saint Mocianne's Arboretum (Hard)",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "The Mudman (A Rank) / Il Mheg",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 88,
    name: "Angel's Snack",
    description:
      "Restores own HP and the HP of all nearby party members.\n**Cure Potency: **400\n**Additional Effect: **Grants healing over time effect when you are under the effect of **Aetheric Mimicry: Healer**\n**Cure Potency: **200\n**Duration: **15s\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "A spell attributed to the guardian statues of the New World wherein the caster manifests a spread of aetherial treats with panacean properties. Those nourished by the feast find their wounds quickly closing─an effect which lingers when provided by a practitioner with knowledge of healing.",
    order: 88,
    rank: 3,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/88.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Level 70 - Whalaqee Totem",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 89,
    name: "Chelonian Gate",
    description:
      "Summons a chelonian gate, reducing damage taken by 20%.\n**Duration: **10s\n**Additional Effect: **Grants **Auspicious Trance** after taking damage equal to 30% of maximum HP\n**Auspicious Trance Effect: **Action changes from **Chelonian Gate** to **Divine Cataract**\n**Chelonian Gate** effect ends upon using another action or moving (including facing a different direction).\n**Auspicious Trance** ends upon losing the effect of **Chelonian Gate**.\nShares a recast timer with certain blue magic spells.\n\n**Divine Cataract**\nDeals water damage to all nearby enemies with a potency of 500 for the first enemy, and 50% less for all remaining enemies.\nPotency increases to 1,000 when you are under the effect of **Aetheric Mimicry: Tank**.\nCan only be executed when under the effect of **Auspicious Trance**.",
    tooltip:
      "A versatile technique utilized and perfected by Genbu, this magical barrier is formed of water-aspected aether. It works to soften incoming blows, storing energy that can later be unleashed in an explosive torrent.",
    order: 89,
    rank: 4,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/89.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 3,
      name: "Water"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Genbu / Hells' Lid",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 90,
    name: "The Rose Of Destruction",
    description:
      "Deals unaspected damage with a potency of 400.\n**Additional Effect:** 10-yalm knockback\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "This spell imitates the martial technique devised by Ivon Coeurlfist, which in turn mimics the “blaster” attack employed by wild coeurls. Upon casting, a ball of concentrated aether is propelled forward with sufficient force to knock back all but the most implacable opponents.",
    order: 90,
    rank: 2,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/90.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Ivon Coeurlfist / The Temple Of The Fist",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 91,
    name: "Basic Instinct",
    description:
      "Increases movement speed by 30%, and healing magic potency and damage dealt by 100%. Also ignores the damage penalty inflicted by **Mighty Guard**.\nCan only be used in duties intended for two or more players while playing alone, while no other party members are in the instance, or when all party members are incapacitated. Effect ends when joined by one or more party members.",
    tooltip:
      "A behavior learned from certain species of coeurl, the caster rises to the challenge of losing comrades by tapping into a feral survival instinct. When all seems lost, or when simply treading where a lone mage was not meant to tread, unrestrained ferocity is sometimes the only way to win through.",
    order: 91,
    rank: 2,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/91.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Master Coeurl / Upper La Noscea (8, 21) ",
        related_type: null,
        related_id: null
      },
      {
        type: "Dungeon",
        text: "Coeurl Sruti / Temple of the Fist",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 92,
    name: "Ultravibration",
    description:
      "KOs all nearby enemies afflicted with **Deep Freeze** or **Petrification**. Has no effect on enemies whose level is higher than your own, and certain others.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "By manipulating aether to imitate the minute wingbeats of a kongamato, a caster generates an ultrasonic wave which ripples visibly through the surrounding air. The vibrations are lethal to frozen or petrified targets, causing them to shatter with dramatic force.",
    order: 92,
    rank: 1,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/92.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Kongamato / The Peaks (11, 25)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 93,
    name: "Blaze",
    description:
      "Deals ice damage to target and all enemies nearby it with a potency of 220 for the first enemy, and 50% less for all remaining enemies.",
    tooltip:
      "Contrary to expectation, the Blaze attack employed by Alte Roite manifests a swirling storm of ice. Some dismiss the spell's name as an odd jest made by the author of the novel in which the winged serpent was first referenced, while others claim the freezing lesions it causes resemble terrible burns.",
    order: 93,
    rank: 2,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/93.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 11,
      name: "Ice"
    },
    sources: [
      {
        type: "Raid",
        text: "Alte Roite / Deltascape V1.0",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 94,
    name: "Mustard Bomb",
    description:
      "Deals fire damage to target and all enemies nearby it with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Enemies affected by **Lightheaded** suffer damage over time\n**Potency: **50\n**Duration: **15s",
    tooltip:
      "A recreation of the terrible chemical explosive employed by Omega, this spell fires a bomb on an arcing trajectory which detonates on impact with the target. The attack is known to leave behind a pungent odor, not unlike mustard.",
    order: 94,
    rank: 4,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/94.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 7,
      name: "Fire"
    },
    sources: [
      {
        type: "Raid",
        text: "Omega / Alphascape V3.0",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 95,
    name: "Dragon Force",
    description:
      "Reduces damage taken by 20%.\n**Duration: **15s\nIncreases damage reduction to 40% when you are under the effect of **Aetheric Mimicry: Tank**.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "A technique said to originate from the dragons of the New World, this ability cocoons the caster in a sphere of aetherial force which serves to blunt incoming attacks. There is some debate on whether the aforementioned “dragons” are truly of dragonkind, or merely a species of “dragon-like” scalekin.",
    order: 95,
    rank: 3,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/95.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Learn 100 spells.",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 96,
    name: "Aetherial Spark",
    description:
      "Deals unaspected damage with a potency of 50 to all enemies in a straight line before you.\n**Additional Effect: **Unaspected damage over time\n**Potency:** 50\n**Duration:** 15s",
    tooltip:
      "This spell, learned from the dhruva, summons forth a cluster of luminous projectiles which inflict multiple pinpoint wounds to all in their path. The jagged edges of these tiny lacerations bleed profusely, weakening the target and causing considerable pain.",
    order: 96,
    rank: 1,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/96.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Salt Dhruva / The Lochs (22, 22)",
        related_type: null,
        related_id: null
      },
      {
        type: "Other",
        text: "Luminare (A Rank) / The Lochs",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 97,
    name: "Hydro Pull",
    description:
      "Deals water damage to all nearby enemies with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Draw-in",
    tooltip:
      "Commonly used amongst Kelpies, this spell generates a powerful current of water which draws in surrounding targets, with even low-flying cloudkin falling victim to its inexorable pull.",
    order: 97,
    rank: 4,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/97.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 3,
      name: "Water"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Kelpie / The Drowned City Of Skalla",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 98,
    name: "Malediction Of Water",
    description:
      "Deals water damage to all enemies in a straight line before you with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **10-yalm knockback to all enemies and party members in range\nCannot be used outside of combat or when target is suffering from certain enfeeblements.",
    tooltip:
      "This example of sai taisui geomancy sends forth a surging wall of water which sweeps along all in its path─friend or foe. One cannot be too careful when toying with maledictions.",
    order: 98,
    rank: 2,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/98.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 3,
      name: "Water"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Sai Taisui / The Swallow's Compass",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 99,
    name: "Choco Meteor",
    description:
      "Deals unaspected damage to target and all enemies nearby it with a potency of 200 for the first enemy, and 50% less for all remaining enemies.\nPotency increases to 300 when partied with your personal chocobo.",
    tooltip:
      "A destructive ability employed by red chocobos wherein the dust and dirt in the area is drawn up into one solid mass, heated until it glows, then dropped on a target from on high. It is unsurprising, then, that these feathery fiends─also known as courser chocobos─are greeted with near-universal terror.",
    order: 99,
    rank: 1,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/99.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Courser Chocobo / The Dravanian Forelands (34, 28)",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 100,
    name: "Matra Magic",
    description:
      "Deals an unaspected eightfold attack, each hit with a potency of 50.\nPotency is increased to 100 when you are under the effect of **Aetheric Mimicry: DPS**.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "A variety of magic employed by New World voidsent, this spell pummels the target with a barrage of incandescent orbs. Its name, likely familiar to scholars of the arcane, is said to have once encompassed the Whalaqee arts of near-death curses and converting life force into mana.",
    order: 100,
    rank: 3,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/100.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Learn 100 spells.",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 101,
    name: "Peripheral Synthesis",
    description:
      "Deals physical damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\nPotency increased to 400 when target becomes afflicted with **Lightheaded**.\n**Additional Effect: **Inflicts **Lightheaded**\n**Duration: **5s\nRepeated use of this action in a short period will reduce the additional effect's duration, eventually rendering targets immune to **Lightheaded**.",
    tooltip:
      "Omega's power reigned supreme within the interdimensional rift, allowing it to access a store of collected data and synthesize all manner of entities and objects─including giant, rocket-propelled fists of unyielding metal.",
    order: 101,
    rank: 4,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/101.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 20,
      name: "Blunt"
    },
    sources: [
      {
        type: "Raid",
        text: "Omega / Alphascape V3.0",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 102,
    name: "Both Ends",
    description:
      "Deals physical damage with a potency of 600 to all nearby enemies.\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "This incantation seeks to emulate the supernatural might of the auspice Qitian Dasheng, with the caster leaping into the air, and spinning an elongated staff of pure aether in a whirlwind of brutal force.",
    order: 102,
    rank: 5,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/102.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 20,
      name: "Blunt"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Qitian Dasheng / The Swallow's Compass",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 103,
    name: "Phantom Flurry",
    description:
      "Deals physical damage over time with a potency of 200 to all enemies in a cone before you.\n**Duration: **5s\nExecuting **Phantom Flurry** again before its effect expires deals physical damage to all enemies in a cone before you with a potency of 600 for the first enemy, and 50% less for all remaining enemies.\nEffect ends upon using an action other than **Phantom Flurry** or moving (including facing a different direction).",
    tooltip:
      "A technique employed by Suzaku, wherein the auspice unleashes a swift series of blurring kicks. The “phantom” half of the name is a somewhat nebulous reference to a constellation in Far Eastern astrology, the sign of which is said to bring good fortune in all matters...except that of matrimony.",
    order: 103,
    rank: 5,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/103.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 20,
      name: "Blunt"
    },
    sources: [
      {
        type: "Trial",
        text: "Suzaku / Hells' Kier",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 104,
    name: "Nightbloom",
    description:
      "Deals unaspected damage to all nearby enemies with a potency of 400 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect: **Unaspected damage over time\n**Potency: **75\n**Duration: **60s\nShares a recast timer with certain blue magic spells.",
    tooltip:
      "This extravagant technique belongs to Tsukuyomi, Lady of the Moon, whose malignant ire manifests as a field of flowers which then burst apart in a hail of deadly petals. Accept the inevitability of the grave, and the power of the nightbloom is yours to wield...",
    order: 104,
    rank: 5,
    patch: "5.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/104.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 17,
      name: "None"
    },
    sources: [
      {
        type: "Trial",
        text: "Tsukuyomi / Castrum Fluminis",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 124,
    name: "Being Mortal",
    description:
      "Deals unaspected damage to all nearby enemies with a potency of 800 for the first enemy, and 50% less for all remaining enemies.\nShares a recast timer with **Apokalypsis**.",
    tooltip:
      "The faerie king Titania's signature move, this spell embodies the disdain, pity, and delight that men's fleeting lives inspire in the fae folk. By weaving layers upon layers of runes to create a deadly maelstrom of magic, you too can remind others of their mortality...until you inevitably meet your own demise.",
    order: 124,
    rank: 5,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/124.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Trial",
        text: "Titania / The Dancing Plague",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 123,
    name: "Apokalypsis",
    description:
      "Delivers damage over time with a potency of 140 to all enemies in a straight line before you.\n**Duration:** 10s\nEffect ends upon using another action or moving (including facing a different direction).\nShares a recast timer with **Being Mortal**.",
    tooltip:
      "While magic is ordinarily woven with words and symbols, this spell employed by the dread creation Therion harnesses the power of emotion to beget destruction. It is said that, if one can cling to the desire for oblivion, it is possible to sustain the ruinous effect indefinitely.",
    order: 123,
    rank: 5,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/123.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Therion / Amaurot",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 122,
    name: "Sea Shanty",
    description:
      "Deals water damage with a potency of 500 to all nearby enemies.\n**Additional Effect:** Potency increases to 1,000 during rain, showers, and thunderstorms",
    tooltip:
      "Part of the nixie's watery repertoire, this technique sends a swirling deluge crashing over enemies─rather too rough for its original purpose of delighting children, but it makes a fine addition to the blue mage's arsenal.",
    order: 122,
    rank: 5,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/122.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 3,
      name: "Water"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Nixie / Matoya's Relict",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 121,
    name: "Mortal Flame",
    description:
      "Deals fire damage over time with a potency of 40.\nOnly one effect inflicted by this action can be active at a time.\nHas no effect on targets outside of combat.\nEffect ends upon target leaving combat.",
    tooltip:
      "In battle, the familiar Lugus used this technique to create a veritable conflagration. That power is now yours to wield...albeit at a greatly diminished strength. Not wishing to be responsible for burning entire cities down, the Blue Mages' Guild opted to limit the flame's intensity to a gentle sear.",
    order: 121,
    rank: 3,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/121.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 7,
      name: "Fire"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Lugus / The Grand Cosmos",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 120,
    name: "Candy Cane",
    description:
      "Deals unaspected damage to target and all enemies nearby it with a potency of 250 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect:** Lowers strength and dexterity attributes of target by 10%\n**Duration:** 10s\n**Additional Effect:** Restores 10% of maximum MP\nShares a recast timer with **Magic Hammer**.",
    tooltip:
      "Loosely based upon Aenc Thon's technique, which saw him wallop foes with a candy cane, this spell sweetens any duel with a rain of confections. The Fuath leader, for one, would not be averse to mages thus spreading the love.",
    order: 120,
    rank: 2,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/120.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Aenc Thon / Dohn Mheg",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 119,
    name: "Laser Eye",
    description:
      "Deals unaspected damage to target and all enemies nearby it with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect:** 5-yalm knockback",
    tooltip:
      "Inspired by Eden's Promise, this spell uses the eyes as arcane circles through which aether is channeled─a principle also seen in techniques such as Glower. So concentrated in energy is the beam, it explodes upon contact. Chirurgeon's warning: excessive use may lead to chronic dry eyes.",
    order: 119,
    rank: 3,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/119.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Raid",
        text: "Eden's Promise / Eden's Promise: Eternity",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 118,
    name: "Winged Reprobation",
    description:
      "Deals physical damage to all enemies in a straight line before you with a potency of 300 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect:** Grants one stack of **Winged Reprobation** and resets this action's recast timer\n**Maximum Stacks:** 4\nExecution at 3 stacks increases potency to 400 and grants one stack of **Winged Reprobation**, but recast timer will not be reset.\nAt maximum stacks, **Winged Reprobation** changes to **Winged Redemption**.\n**Winged Redemption Effect:** Increases the potency of **Conviction Marcato**\n**Duration:** 10s\nThis action does not share a recast timer with any other actions.",
    tooltip:
      "This imitation of the Lightwarden Innocence's technique conjures up swords of Light that rain down from the heavens. Rumor has it Lord Vauthry used the technique to turn sin eaters into meol, which may explain why it appears to bring the caster closer to his perfection.",
    order: 118,
    rank: 3,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/118.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 8,
      name: "Piercing"
    },
    sources: [
      {
        type: "Trial",
        text: "Lightwarden Innocence / The Crown Of The Immaculate",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 117,
    name: "Force Field",
    description:
      "Grants either **Physical Vulnerability Down** or **Magic Vulnerability Down**.\n**Duration:** 10s\n**Physical Vulnerability Down Effect:** Reduces physical damage taken by 50%\n**Magic Vulnerability Down Effect:** Reduces magic damage taken by 50%\nThis action does not share a recast timer with any other actions.",
    tooltip:
      "Originally employed by Sephirot, the Fiend, to render foes vulnerable to attacks, this spell has been adapted for the mage's own protection. Due to the field's intrinsic instability, however, it cannot simultaneously grant physical and magical benefits, only one or the other.",
    order: 117,
    rank: 3,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/117.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Placeholder: Possibly Totems",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 116,
    name: "Conviction Marcato",
    description:
      "Deals unaspected damage to all enemies in a straight line before you with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\nPotency is increased to 440 when you are under the effect of **Winged Redemption**.",
    tooltip:
      "Learned from the forgiven obscenity, this technique unleashes a beam of Light-aligned aether at opponents. Lest the responsible mage worry, being a scaled-down recreation, the spell does not possess the potency to transform living beings into sin eaters.",
    order: 116,
    rank: 3,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/116.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Forgiven Obscenity / Mt. Gulg",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 115,
    name: "Dimensional Shift",
    description:
      "Delivers an attack to all nearby enemies dealing damage equal to 30% of their current HP.\nHas no effect on enemies whose level is higher than your own.",
    tooltip:
      "Employed by Eden Prime, this technique shifts the fabric of reality to trigger a powerful aetheric surge. While it inflicts considerable damage, it demands an extended casting period so as to allow mages to raise a protective barrier over themselves.",
    order: 115,
    rank: 4,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/115.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Raid",
        text: "Eden Prime / Eden's Gate: Resurrection",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 114,
    name: "Divination Rune",
    description:
      "Deals unaspected damage with a potency of 100 to all enemies in a cone before you.\n**Additional Effect:** Restores MP",
    tooltip:
      "The language of the fae folk is composed of runes, symbols that harbor magic, and the faerie king Titania was partial to this one. When invoked, it emits an aetheric wave that resonates with the target's magical energies, making them surpassingly easy to extract.",
    order: 114,
    rank: 4,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/114.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Trial",
        text: "Titania / The Dancing Plague",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 113,
    name: "Ruby Dynamics",
    description:
      "Deals physical damage with a potency of 220 to all enemies before you.\nShares a recast timer with **Chelonian Gate** and **The Rose of Destruction**.",
    tooltip:
      "In order to extend its claws for a near-inescapable strike, the Ruby Weapon transforms energy generated by its advanced dynamo unit. Albeit on a smaller scale, the mage recreates this technique by channeling aether into numerous razor-sharp aetherial blades.",
    order: 113,
    rank: 4,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/113.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 9,
      name: "Slashing"
    },
    sources: [
      {
        type: "Trial",
        text: "The Ruby Weapon / Cinder Drift",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 112,
    name: "Deep Clean",
    description:
      "Deals physical damage to all nearby enemies with a potency of 220 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect:** Grants one stack of **Spick-and-span** for each enemy afflicted with **Begrimed**. The **Begrimed** effect is also removed.\n**Maximum Stacks:** 6\n**Spick-and-span Effect:** **Regen**\n**Cure Potency:** 50\nCure potency increases up to 300 based on your accumulated stacks of **Spick-and-span**.\n**Duration:** 15s\nAdditional stacks of **Spick-and-span** accumulated while the effect is active will not affect duration.",
    tooltip:
      "Taking a spotless page from the Seeker of Solitude, this spell summons forth a magicked broom to sweep the area clean. Each mud stain it removes serves to affirm its self-worth, and it imparts that sense of well-being to the caster.",
    order: 112,
    rank: 3,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/112.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 2,
      name: "Blunt"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Seeker Of Solitude / The Grand Cosmos",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 111,
    name: "Peat Pelt",
    description:
      "Deals earth damage to target and all enemies nearby it with a potency of 100 for the first enemy, and 50% less for all remaining enemies.\n**Additional Effect:** Afflicts target with **Begrimed**\n**Begrimed Effect:** Earth damage over time\n**Potency:** 10\n**Duration:** 9s",
    tooltip:
      "Taking a filthy page from the mudman, this spell coalesces earth-aspected aether into a clump of mud, which is hurled at enemies. Those who are struck bear stubborn mud stains that diminish their self-worth, causing a lingering enervation.",
    order: 111,
    rank: 2,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/111.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 6,
      name: "Earth"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Mudman / Matoya's Relict",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 110,
    name: "Wild Rage",
    description:
      "Deals physical damage to all nearby enemies with a potency of 500 for the first enemy, and 50% less for all remaining enemies.\nConsumes 50% of your maximum HP when executed.",
    tooltip:
      "Embracing rage in the fashion of the spectral berserker allows one to unleash an unbridled wave of destruction. As many a parable will attest, however, anger is a double-edged sword; the spell consumes a great deal of energy, and the caster is advised to be wary of untimely exhaustion.",
    order: 110,
    rank: 4,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/110.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 2,
      name: "Blunt"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Spectral Berserker / The Heroes' Gauntlet",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 109,
    name: "Breath Of Magic",
    description:
      "Deals unaspected damage over time with a potency of 120 to all enemies in a cone before you.\n**Duration: **60s\nOnly one effect inflicted by this action can be active at a time.",
    tooltip:
      "Acquired from a species of crustacean native to the New World, this spell is executed by blending aether of multiple aspects and unleashing it in one fell blast. This has the effect of disrupting the target's aetheric balance, thereby gradually robbing them of vigor.",
    order: 109,
    rank: 3,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/109.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Placeholder: possibly totems?",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 108,
    name: "Rehydration",
    description: "Restores own HP.\n**Cure Potency:** 600",
    tooltip:
      "Particularly savvy armadillos are capable of healing themselves by drawing upon the moisture in the air, and by imitating this behavior, mages can enjoy the selfsame benefits─including flawless skin.",
    order: 108,
    rank: 1,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/108.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Placeholder: possibly armadillos in Amh Araeng / Amh Araeng",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 107,
    name: "Schiltron",
    description:
      "Counters enemies with unaspected damage every time you suffer physical damage.\n**Counter Potency:** 50\n**Duration:** 15s\nPotency is increased to 100 when you are under the effect of **Aetheric Mimicry: Tank**.\nEffect cannot be stacked with **Veil of the Whorl** or **Ice Spikes**.",
    tooltip:
      "Certain species of armadillo have learned to channel aether into their shells, thus granting them the hardness of metal. A similar stratagem allows the blue mage to reflect physical blows back upon an attacker─though unfortunately, both armadillo and man still feel the intial, teeth-rattling impact.",
    order: 107,
    rank: 1,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/107.png",
    type: {
      id: 1,
      name: "Magic"
    },
    aspect: {
      id: 4,
      name: "None"
    },
    sources: [
      {
        type: "Other",
        text: "Placeholder: possibly armadillos in Amh Araeng / Amh Araeng",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 106,
    name: "Right Round",
    description:
      "Deals physical damage with a potency of 110 to all nearby enemies.\n**Additional Effect:** 10-yalm knockback to all enemies and party members in range\nCannot be used outside of combat or when target is suffering from certain enfeeblements.",
    tooltip:
      "This spell recreates the devastating way in which the greater armadillo swings an enormous boulder in its clawed tail like a flail. A boulder is conjured from aether and similarly swung at great speed, sending all nearby flying.",
    order: 106,
    rank: 2,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/106.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 2,
      name: "Blunt"
    },
    sources: [
      {
        type: "Dungeon",
        text: "Greater Armadillo / Malikah's Well",
        related_type: null,
        related_id: null
      }
    ]
  },
  {
    id: 105,
    name: "Goblin Punch",
    description:
      "Deals physical damage with a potency of 120.\n220 when executed in front of a target.\nPotency is increased to 220 when you are under the effect of **Mighty Guard**.\n320 when executed in front of a target while you are under the effect of **Mighty Guard**.",
    tooltip:
      "Favored by hobgoblins, this time-honored technique operates on the premise of “beating 'em senseless.” Blue mages strengthen the attack by channeling magic into their fists, which come to harbor even greater pummeling potential when coupled with the stones to face one's foe head-on.",
    order: 105,
    rank: 1,
    patch: "6.45",
    owned: false,
    icon: "https://ffxivcollect.com/images/spells/105.png",
    type: {
      id: 2,
      name: "Physical"
    },
    aspect: {
      id: 2,
      name: "Blunt"
    },
    sources: [
      {
        type: "Other",
        text: "Hobgoblin / Kholusia (37.5, 29)",
        related_type: null,
        related_id: null
      }
    ]
  }
];

export default data;
