import {BasePayload, getPayload} from 'payload'
import path from "node:path";
import * as fs from "node:fs";

const uploadImageFile = async (payload: BasePayload, filename: string, alt: string) => {
    const filePath = path.join(process.cwd(), 'media/seedImages', filename)

    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`)
        return null
    }

    const fileBuffer = fs.readFileSync(filePath)
    const stats = fs.statSync(filePath)

    const mimeType = filename.endsWith('.svg') ? 'image/svg+xml' :
        filename.endsWith('.webp') ? 'image/webp' :
            filename.endsWith('.png') ? 'image/png' :
                filename.endsWith('.jpg') || filename.endsWith('.jpeg') ? 'image/jpeg' : 'image/png'

    return await payload.create({
        collection: 'media',
        data: {
            alt: alt,
            filename: filename,
        },
        file: {
            data: fileBuffer,
            mimetype: mimeType,
            name: filename,
            size: stats.size,
        }
    })
}

const seed = async () => {
    const {default: config} = await import("./payload.config")
    const payload = await getPayload({config})

    try {
        await payload.updateGlobal({
            slug: 'landingPage',
            data: {
                hero: {
                    title: "ready to go big?",
                    subtitle: "Empowering brands through creativity",
                    sessions: "24B+",
                    players: "1B+"
                },
                portfolio: {
                    title: "We've helped scale",
                    items: []
                },
                hits: {
                    title: 'Our top hits'
                },
                cases: {
                    title: 'Case studies'
                },
                buyout: {
                    title: 'STRATEGIC GAME BUYOUT',
                    items: []
                },
                blog: {
                    title: 'Blog & News',
                    items: []
                },
                ticker: {
                    items: []
                },
                contacts: {
                    title: 'connect with us',
                    email: 'info@dobigstudios.com',
                    text: 'or write your message here',
                    buttonText: 'Message Us'
                }
            },
        })

        const games = await payload.find({
            collection: 'games',
            limit: 1000,
        })
        for (const game of games.docs) {
            await payload.delete({
                collection: 'games',
                id: game.id,
            })
        }

        const media = await payload.find({
            collection: 'media',
            limit: 1000,
        })
        for (const item of media.docs) {
            await payload.delete({
                collection: 'media',
                id: item.id,
            })
        }

        const portfolioData = [
            {filename: 'portfolio (1).png', alt: 'Portfolio'},
            {filename: 'portfolio (2).png', alt: 'Portfolio'},
            {filename: 'portfolio (3).png', alt: 'Portfolio'},
            {filename: 'portfolio (4).png', alt: 'Portfolio'},
            {filename: 'portfolio (5).png', alt: 'Portfolio'},
            {filename: 'portfolio (6).png', alt: 'Portfolio'},
            {filename: 'portfolio (7).png', alt: 'Portfolio'},
            {filename: 'portfolio (8).png', alt: 'Portfolio'},
        ]
        const portfolioMedia = []
        for (const media of portfolioData) {
            const created = await uploadImageFile(payload, media.filename, media.alt)
            if (created) {
                portfolioMedia.push(created)
            }
        }

        const gamesImages = [
            {filename: 'grow_a_garden.png', alt: 'Grow a Garden'},
            {filename: 'steal_a_brainrot.png', alt: 'Steal a Brainrot'},
            {filename: 'upd_build_a_plane.png', alt: 'Build A Plane'},
            {filename: 'blade_ball.png', alt: 'Blade Ball'},
            {filename: 'fisch_fischfest.png', alt: 'Fisch FISCHFEST'},
            {filename: 'a_dusty_trip_car_quest.png', alt: 'a dusty trip CAR QUEST'},
            {filename: 'color_or_die.png', alt: 'Color or Die'},
            {filename: 'steal_a_fish.png', alt: 'Steal A Fish'},
            {filename: 'baddies.png', alt: 'Baddies'},
            {filename: 'upd_gym_league.png', alt: 'Gym League'},
            {filename: 'my_singing_brainrot.png', alt: 'My Singing Brainrot'},
            {filename: 'build_an_island.png', alt: 'Build An Island'},
            {filename: 'go_fishing.png', alt: 'GO FISHING'},
            {filename: 'race_clicker.png', alt: 'Race Clicker'},
            {filename: 'dragon_training.png', alt: 'Dragon Training'},
            {filename: 'whos_lying.png', alt: "Who's Lying?"},
            {filename: 'secret_killer.png', alt: 'Secret Killer'},
            {filename: 'pull_a_friend_2_players.png', alt: 'Pull a Friend [2 Players]'},
            {filename: '2x_swim_league.png', alt: 'Swim League'},
            {filename: 'fashion_show.png', alt: 'Fashion Show'},
            {filename: 'card_battles.png', alt: 'Card Battles'},
            {filename: 'build_to_survive_the_disasters.png', alt: 'Build To Survive the Disasters'},
            {filename: 'w9_team_daycare_escape_teamwork_obby.png', alt: 'Team Daycare Escape (Teamwork Obby)'},
            {filename: 'drawing_quiz.png', alt: 'Drawing Quiz'},
            {filename: 'roller_skate_obby.png', alt: 'Roller Skate OBBY'},
            {filename: 'skinwalkers.png', alt: 'Skinwalkers'},
            {filename: 'grappler_swing.png', alt: 'Grappler Swing'},
            {filename: 'dynamic_ragdoll_engine.png', alt: 'Dynamic Ragdoll Engine'},
            {filename: 'merge_for_speed.png', alt: 'Merge for SPEED'},
            {filename: 'blade_league.png', alt: 'Blade League'},
            {filename: 'backrooms_race.png', alt: 'Backrooms Race'},
            {filename: 'duck_army.png', alt: 'Duck Army'},
            {filename: 'buddy_buddy.png', alt: 'Buddy Buddy'},
            {filename: 'creepy_crawlers.png', alt: 'Creepy Crawlers'},
            {filename: 'monster_evolution_new_world.png', alt: 'Monster Evolution [NEW WORLD]'},
            {filename: 'build_a_car_to_kill_zombies.png', alt: 'Build a Car to Kill Zombies'},
            {filename: 'car_mechanic_simulator.png', alt: 'Car Mechanic Simulator'},
            {filename: 'froggie_2_player_obby_new_levels.png', alt: 'Froggie [2 Player Obby] New Levels'},
            {filename: 'fixes_risky_haul.png', alt: 'Risky Haul'},
            {filename: 'dig_to_hell_simulator.png', alt: 'Dig to Hell Simulator'},
            {filename: 'upd_parkour_rush.png', alt: 'Parkour Rush'},
            {filename: 'upd4_steal_a_character.png', alt: 'Steal a Character'},
            {filename: 'detention_line.png', alt: 'Detention Line'},
            {filename: 'build_a_raft_or_die.png', alt: 'Build a Raft or Die'},
            {filename: 'admin_rng.png', alt: 'Admin RNG'},
            {filename: '2_player_monkey_obby.png', alt: '2 Player Monkey Obby'},
            {filename: 'murder_me.png', alt: 'Murder Me'},
            {filename: 'upd_troop_defense.png', alt: 'Troop Defense'},
            {filename: 'new_run_or_die.png', alt: 'Run or Die'},
            {filename: 'build_city.png', alt: 'Build City'},
            {filename: 'x2_prison_line.png', alt: 'Prison Line'},
            {filename: 'upd_pro_soccer_simulator.png', alt: 'Pro Soccer Simulator'},
            {filename: 'dream_house_rp.png', alt: 'Dream House RP'},
        ];


        const gamesMedia = []
        for (const media of gamesImages) {
            const created = await uploadImageFile(payload, media.filename, media.alt)
            if (created) {
                gamesMedia.push(created)
            }
        }

        const buyoutData = [
            {filename: 'buyout (1).svg', alt: 'Buyout'},
            {filename: 'buyout (2).svg', alt: 'Buyout'},
            {filename: 'buyout (3).svg', alt: 'Buyout'},
            {filename: 'buyout (4).svg', alt: 'Buyout'},
        ]
        const buyoutMedia = []
        for (const media of buyoutData) {
            const created = await uploadImageFile(payload, media.filename, media.alt)
            if (created) {
                buyoutMedia.push(created)
            }
        }

        const starsData = [
            {filename: 'stars (1).svg', alt: 'Star'},
            {filename: 'stars (2).svg', alt: 'Star'},
            {filename: 'stars (3).svg', alt: 'Star'},
            {filename: 'stars (4).svg', alt: 'Star'},
            {filename: 'stars (5).svg', alt: 'Star'},
        ]
        const starsMedia = []
        for (const media of starsData) {
            const created = await uploadImageFile(payload, media.filename, media.alt)
            if (created) {
                starsMedia.push(created)
            }
        }

        const gamesData = [
            {
                title: '[🌱] Grow a Garden 🌶️',
                description: '',
                visits: 28_400_000_000,
                players: 1_500_000,
                href: 'https://www.roblox.com/games/126884695634066/Grow-a-Garden',
                image: gamesMedia[0].id,
            },
            {
                title: '[🌌] Steal a Brainrot',
                description: '',
                visits: 17_600_000_000,
                players: 678_500,
                href: 'https://www.roblox.com/games/109983668079237/Steal-a-Brainrot',
                image: gamesMedia[1].id,
            },
            {
                title: '[UPD] Build A Plane',
                description: '',
                visits: 299_000_000,
                players: 27_600,
                href: 'https://www.roblox.com/games/137925884276740/UPD-Build-A-Plane',
                image: gamesMedia[2].id,
            },
            {
                title: 'Blade Ball',
                description: 'https://www.roblox.com/games/13772394625/Blade-Ball',
                visits: 5_500_000_000,
                players: 18_200,
                href: 'https://www.roblox.com/games/13772394625/Blade-Ball',
                image: gamesMedia[3].id,
            },
            {
                title: 'Fisch🦈 [FISCHFEST]',
                description: 'https://www.roblox.com/games/16732694052/Fisch-FISCHFEST',
                visits: 3_100_000_000,
                players: 15_600,
                href: 'https://www.roblox.com/games/16732694052/Fisch-FISCHFEST',
                image: gamesMedia[4].id,
            },
            {
                title: 'a dusty trip [🚗CAR QUEST]',
                description: '',
                visits: 1_800_000_000,
                players: 12_300,
                href: 'https://www.roblox.com/games/16389395869/a-dusty-trip-CAR-QUEST',
                image: gamesMedia[5].id,
            },
            {
                title: 'Color or Die 🎨',
                description: '',
                visits: 1_000_000_000,
                players: 9_300,
                href: 'https://www.roblox.com/games/12931609417/Color-or-Die',
                image: gamesMedia[6].id,
            },
            {
                title: '[🦑] Steal A Fish!',
                description: '',
                visits: 257_800_000,
                players: 7_000,
                href: 'https://www.roblox.com/games/95840199176465/Steal-a-Fish',
                image: gamesMedia[7].id,
            },
            {
                title: 'Baddies 💅',
                description: '',
                visits: 1_300_000_000,
                players: 6_700,
                href: 'https://www.roblox.com/games/11158043705/Baddies',
                image: gamesMedia[8].id,
            },
            {
                title: '[UPD⚡] Gym League',
                description: '',
                visits: 666_400_000,
                players: 6_600,
                href: 'https://www.roblox.com/games/17450551531/UPD-Gym-League',
                image: gamesMedia[9].id,
            },
            {
                title: '🎤My Singing Brainrot',
                description: '',
                visits: 253_000_000,
                players: 6_600,
                href: 'https://www.roblox.com/games/89343390950953/My-Singing-Brainrot',
                image: gamesMedia[10].id,
            },
            {
                title: '[🌺]Build An Island! 🏝️',
                description: '',
                visits: 114_800_000,
                players: 5_900,
                href: 'https://www.roblox.com/games/101949297449238/Build-An-Island',
                image: gamesMedia[11].id,
            },
            {
                title: '[🏝️] GO FISHING 🐟',
                description: '',
                visits: 204_300_000,
                players: 2_500,
                href: 'https://www.roblox.com/games/116605585218149/GO-FISHING',
                image: gamesMedia[12].id,
            },
            {
                title: '⚡Race Clicker',
                description: '',
                visits: 920_400_000,
                players: 1_900,
                href: 'https://www.roblox.com/games/9285238704/Race-Clicker',
                image: gamesMedia[13].id,
            },
            {
                title: 'Dragon Training🐉',
                description: '',
                visits: 42_200_000,
                players: 1_800,
                href: 'https://www.roblox.com/games/122576696342824/Dragon-Training',
                image: gamesMedia[14].id,
            },
            {
                title: "Who's Lying?",
                description: '',
                visits: 105_300_000,
                players: 1_700,
                href: 'https://www.roblox.com/games/16666497786/Whos-Lying',
                image: gamesMedia[15].id,
            },
            {
                title: 'Secret Killer',
                description: '',
                visits: 150_500_000,
                players: 1_500,
                href: 'https://www.roblox.com/games/16039690331/Secret-Killer',
                image: gamesMedia[16].id,
            },
            {
                title: 'Pull a Friend [2 Players]',
                description: '',
                visits: 326_500_000,
                players: 1_300,
                href: 'https://www.roblox.com/games/16590754220/Pull-a-Friend-2-Players',
                image: gamesMedia[17].id,
            },
            {
                title: '[2X] Swim League',
                description: '',
                visits: 119_900_000,
                players: 1_300,
                href: 'https://www.roblox.com/games/132495346586140/2X-Swim-League',
                image: gamesMedia[18].id,
            },
            {
                title: '🛍️ Fashion Show',
                description: '',
                visits: 154_400_000,
                players: 1_200,
                href: 'https://www.roblox.com/games/5245765823/Fashion-Show',
                image: gamesMedia[19].id,
            },
            {
                title: 'Card Battles',
                description: '',
                visits: 125_700_000,
                players: 955,
                href: 'https://www.roblox.com/games/12512492069/Card-Battles',
                image: gamesMedia[20].id,
            },
            {
                title: 'Build To Survive the Disasters',
                description: '',
                visits: 53_900_000,
                players: 708,
                href: 'https://www.roblox.com/games/17098183580/Build-To-Survive-The-Disasters',
                image: gamesMedia[21].id,
            },
            {
                title: '[W9] Team Daycare Escape! (TEAMWORK OBBY)',
                description: '',
                visits: 463_200_000,
                players: 581,
                href: 'https://www.roblox.com/games/13703839980',
                image: gamesMedia[22].id,
            },
            {
                title: 'Drawing Quiz 🎨',
                description: '',
                visits: 65_700_000,
                players: 554,
                href: 'https://www.roblox.com/games/15950261958/Drawing-Quiz',
                image: gamesMedia[23].id,
            },
            {
                title: 'Roller Skate OBBY',
                description: '',
                visits: 30_400_000,
                players: 504,
                href: 'https://www.roblox.com/games/88926796616786/Roller-Skate-OBBY',
                image: gamesMedia[24].id,
            },
            {
                title: 'Skinwalkers',
                description: '',
                visits: 120_800_000,
                players: 493,
                href: 'https://www.roblox.com/games/94725155944518/Skinwalkers',
                image: gamesMedia[25].id,
            },
            {
                title: 'Grappler Swing',
                description: '',
                visits: 129_100_000,
                players: 464,
                href: 'https://www.roblox.com/games/18777164149/Grappler-Swing',
                image: gamesMedia[26].id,
            },
            {
                title: 'Dynamic Ragdoll Engine',
                description: '',
                visits: 35_600_000,
                players: 422,
                href: 'https://www.roblox.com/games/17124373093/Dynamic-Ragdoll-Engine',
                image: gamesMedia[27].id,
            },
            {
                title: 'Merge for SPEED!',
                description: '',
                visits: 15_000_000,
                players: 411,
                href: 'https://www.roblox.com/games/118611268319028/Merge-for-SPEED',
                image: gamesMedia[28].id,
            },
            {
                title: '⚽ Blade League',
                description: '',
                visits: 88_200_000,
                players: 355,
                href: 'https://www.roblox.com/games/80316691895873/Blade-League',
                image: gamesMedia[29].id,
            },
            {
                title: '🏆 Backrooms Race',
                description: '',
                visits: 120_100_000,
                players: 348,
                href: 'https://www.roblox.com/games/9649680488/Backrooms-Race',
                image: gamesMedia[30].id,
            },
            {
                title: 'Duck Army!',
                description: '',
                visits: 34_500_000,
                players: 325,
                href: 'https://www.roblox.com/games/13926416231/Duck-Army',
                image: gamesMedia[31].id,
            },
            {
                title: 'Buddy Buddy',
                description: '',
                visits: 118_600_000,
                players: 277,
                href: 'https://www.roblox.com/games/17230784439/Buddy-Buddy',
                image: gamesMedia[32].id,
            },
            {
                title: 'Creepy Crawlers🕷️',
                description: '',
                visits: 23_600_000,
                players: 257,
                href: 'https://www.roblox.com/games/13251504936/Creepy-Crawlers',
                image: gamesMedia[33].id,
            },
            {
                title: 'Monster Evolution [NEW WORLD]',
                description: '',
                visits: 18_500_000,
                players: 234,
                href: 'https://www.roblox.com/games/82834596092411/Monster-Evolution-NEW-WORLD',
                image: gamesMedia[34].id,
            },
            {
                title: 'Build a Car to Kill Zombies',
                description: '',
                visits: 28_800_000,
                players: 226,
                href: 'https://www.roblox.com/games/117856377735280/Build-a-Car-to-Kill-Zombies',
                image: gamesMedia[35].id,
            },
            {
                title: 'Car Mechanic Simulator 🚗',
                description: '',
                visits: 27_500_000,
                players: 172,
                href: 'https://www.roblox.com/games/9265443535/Car-Mechanic-Simulator',
                image: gamesMedia[36].id,
            },
            {
                title: 'Froggie! [2 Player Obby] new levels! 🍭🐸',
                description: '',
                visits: 47_000_000,
                players: 157,
                href: 'https://www.roblox.com/games/83700583874900/Froggie-2-Player-Obby-new-levels',
                image: gamesMedia[37].id,
            },
            {
                title: '[⭐FIXES] Risky Haul',
                description: '',
                visits: 20_800_000,
                players: 146,
                href: 'https://www.roblox.com/games/18421734073/FIXES-Risky-Haul',
                image: gamesMedia[38].id,
            },
            {
                title: 'Dig to Hell Simulator',
                description: '',
                visits: 50_700_000,
                players: 105,
                href: 'https://www.roblox.com/games/11690385713/Dig-To-Hell-Simulator',
                image: gamesMedia[39].id,
            },
            {
                title: '[UPD] Parkour Rush',
                description: '',
                visits: 55_800_000,
                players: 89,
                href: 'https://www.roblox.com/games/75917364083659/UPD-Parkour-Rush',
                image: gamesMedia[40].id,
            },
            {
                title: '[UPD4] Steal a Character',
                description: '',
                visits: 46_500_000,
                players: 87,
                href: 'https://www.roblox.com/games/101354156600579/UPD4-Steal-a-Character',
                image: gamesMedia[41].id,
            },
            {
                title: 'Detention Line 😡',
                description: '',
                visits: 20_300_000,
                players: 76,
                href: 'https://www.roblox.com/games/125633329026080/Detention-Line',
                image: gamesMedia[42].id,
            },
            {
                title: 'Build a Raft or Die',
                description: '',
                visits: 46_600_000,
                players: 62,
                href: 'https://www.roblox.com/games/13501167264/Build-a-Raft-or-Die',
                image: gamesMedia[43].id,
            },
            {
                title: 'Admin RNG 🎲',
                description: '',
                visits: 23_900_000,
                players: 60,
                href: 'https://www.roblox.com/games/17461365630/Admin-RNG',
                image: gamesMedia[44].id,
            },
            {
                title: '2 Player Monkey Obby',
                description: '',
                visits: 59_900_000,
                players: 54,
                href: 'https://www.roblox.com/games/17521736603/2-Player-Monkey-Obby',
                image: gamesMedia[45].id,
            },
            {
                title: 'Murder Me 🔪',
                description: '',
                visits: 20_800_000,
                players: 44,
                href: 'https://www.roblox.com/games/17680842612/Murder-Me',
                image: gamesMedia[46].id,
            },
            {
                title: '[UPD] ⚔️ Troop Defense',
                description: '',
                visits: 8_200_000,
                players: 38,
                href: 'https://www.roblox.com/games/18383654634/UPD-Troop-Defense',
                image: gamesMedia[47].id,
            },
            {
                title: '[NEW] Run or Die',
                description: '',
                visits: 10_800_000,
                players: 20,
                href: 'https://www.roblox.com/games/14659349306/NEW-Run-or-Die',
                image: gamesMedia[48].id,
            },
            {
                title: 'Build City 🏙️',
                description: '',
                visits: 2_500_000,
                players: 17,
                href: 'https://www.roblox.com/games/14182040324/Build-City',
                image: gamesMedia[49].id,
            },
            {
                title: '[💰X2] Prison Line 💀',
                description: '',
                visits: 25_800_000,
                players: 15,
                href: 'https://www.roblox.com/games/86584030422286/X2-Prison-Line',
                image: gamesMedia[50].id,
            },
            {
                title: '[🚀UPD] Pro Soccer Simulator',
                description: '',
                visits: 18_100_000,
                players: 13,
                href: 'https://www.roblox.com/games/17426134305/UPD-Pro-Soccer-Simulator',
                image: gamesMedia[51].id,
            },
            {
                title: 'Dream House 🏡 RP',
                description: '',
                visits: 51_000_000,
                players: 11,
                href: 'https://www.roblox.com/games/15368913195/ALFA-Casa-de-Fede-Vigevani',
                image: gamesMedia[52].id,
            },
        ];


        for (const gameData of gamesData) {
            console.log('Creating game:', gameData.title)
            await payload.create({
                collection: 'games',
                data: gameData,
            })
        }

        await payload.updateGlobal({
            slug: 'landingPage',
            data: {
                portfolio: {
                    items: [
                        {href: 'https://www.google.com', image: portfolioMedia[0].id},
                        {href: 'https://www.google.com', image: portfolioMedia[1].id},
                        {href: 'https://www.google.com', image: portfolioMedia[2].id},
                        {href: 'https://www.google.com', image: portfolioMedia[3].id},
                        {href: 'https://www.google.com', image: portfolioMedia[4].id},
                        {href: 'https://www.google.com', image: portfolioMedia[5].id},
                        {href: 'https://www.google.com', image: portfolioMedia[6].id},
                        {href: 'https://www.google.com', image: portfolioMedia[7].id},
                    ]
                },
                buyout: {
                    items: [
                        {
                            name: 'Full Game Acquisition',
                            description: 'We purchase your Roblox game outright, offering a competitive upfront payment.',
                            icon: buyoutMedia[0].id
                        },
                        {
                            name: 'Expert Development & Marketing',
                            description: 'Our experienced team takes over development, marketing, and ongoing optimization.',
                            icon: buyoutMedia[1].id
                        },
                        {
                            name: 'Revenue Sharing',
                            description: 'You will benefit from continued revenue generated by your game.',
                            icon: buyoutMedia[2].id
                        },
                        {
                            name: 'Hassle-Free Transition',
                            description: 'Sit back and relax! We handle everything from the sale to future management, allowing you to focus on your next big idea.',
                            icon: buyoutMedia[3].id
                        }
                    ]
                },
                blog: {
                    items: [
                        {
                            name: 'From Placeholder Art to Player Obsession',
                            description: "DoBig's iterative design philosophy and how ruthlessly cutting features that don't serve the core gameplay vision ultimately leads to stronger, more focused games. DoBig's iterative design philosophy and how ruthlessly cutting features that don't serve the core gameplay vision ultimately leads to stronger, more focused games.",
                            href: 'https://blog.dobigstudios.com/post-1',
                            image: gamesMedia[0].id
                        },
                        {
                            name: 'From Placeholder Art to Player Obsession: How Our \'Ugly\' Prototypes Became Our Best Marketing Tool',
                            description: 'DoBig\'s iterative design philosophy and how ruthlessly cutting features that don\'t serve the core gameplay vision ultimately leads to stronger, more focused games. DoBig\'s iterative design philosophy and how ruthlessly cutting features that don\'t serve the core gameplay vision ultimately leads to stronger, more focused games.',
                            href: 'https://blog.dobigstudios.com/post-2',
                            image: gamesMedia[1].id
                        },
                        {
                            name: 'The 2 AM Bug That Accidentally Created Our Most Popular Game Mode',
                            description: 'DoBig\'s iterative design philosophy and how ruthlessly cutting features that don\'t serve the core gameplay vision ultimately leads to stronger, more focused games. DoBig\'s iterative design philosophy and how ruthlessly cutting features that don\'t serve the core gameplay vision ultimately leads to stronger, more focused games.',
                            href: 'https://blog.dobigstudios.com/post-3',
                            image: gamesMedia[2].id
                        }
                    ]
                },
                ticker: {
                    items: [
                        {text: "Let's talk", icon: starsMedia[0].id},
                        {text: 'We bring your ideas to success', icon: starsMedia[1].id},
                        {text: 'Exit strategy', icon: starsMedia[2].id}
                    ]
                },
            },
        })
    } catch (error) {
        console.error(error)
        throw error
    }
}

const run = async () => {
    await seed()
    process.exit(0)
}

run()