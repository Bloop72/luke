const verses = [
    "In the beginning, when God created the heavens and the earth, the earth was a formless void and darkness covered the face of the deep, while a wind from God swept over the face of the waters. Then God said, “Let there be light”; and there was light.\n– Genesis 1:1-3",
    "Just as you do not know how the breath comes to the bones in the mother’s womb, so you do not know the work of God, who makes everything. In the morning sow your seed, and at evening do not let your hands be idle; for you do not know which will prosper, this or that, or whether both alike will be good.\n– Ecclesiastes 11:5-7",
    "And the Lord God planted a garden in Eden, in the east; and there he put the man whom he had formed. Out of the ground the Lord God made to grow every tree that is pleasant to the sight and good for food, the tree of life also in the midst of the garden, and the tree of the knowledge of good and evil.\n– Genesis 2:8-10",
    "While he was making this defense, Festus exclaimed, “You are out of your mind, Paul! Too much learning is driving you insane!” But Paul said, “I am not out of my mind, most excellent Festus, but I am speaking the sober truth.\n– Acts 26:23-25",
    "Sing aloud to God our strength;\nshout for joy to the God of Jacob.\nRaise a song, sound the tambourine,\nthe sweet lyre with the harp.\nBlow the trumpet at the new moon,\nat the full moon, on our festal day.\n– Psalm 81:1-3",
    "You have made us for yourself, Lord, and our hearts are restless until they rest in you.\n– St. Augustine’s Confessions",
    "Do not say, “It was the Lord’s doing that I fell away”;\nfor he does not do what he hates.\nDo not say, “It was he who led me astray”;\nfor he has no need of the sinful.\nThe Lord hates all abominations;\nsuch things are not loved by those who fear him.\nIt was he who created humankind in the beginning,\nand he left them in the power of their own free choice.\nIf you choose, you can keep the commandments,\nand to act faithfully is a matter of your own choice.\nHe has placed before you fire and water;\nstretch out your hand for whichever you choose.\nBefore each person are life and death,\nand whichever one chooses will be given.\nFor great is the wisdom of the Lord;\nhe is mighty in power and sees everything;\nHis eyes are on those who fear him,\nand he knows every human action.\nHe has not commanded anyone to be wicked,\nand he has not given anyone permission to sin.\n– Sirach 15:11-20",
    "He is your praise; he is your God, who has done for you these great and awesome things that your own eyes have seen. Your ancestors went down to Egypt seventy persons; and now the Lord your God has made you as numerous as the stars in heaven.\n– Deuteronomy 10:20-22",
    "There you will serve other gods made by human hands, objects of wood and stone that neither see, nor hear, nor eat, nor smell. From there you will seek the Lord your God, and you will find him if you search after him with all your heart and soul. In your distress, when all these things have happened to you in time to come, you will return to the Lord your God and heed him. Because the Lord your God is a merciful God, he will neither abandon you nor destroy you; he will not forget the covenant with your ancestors that he swore to them.\n– Deuteronomy 4:28-30",
    "God came from Teman,\nthe Holy One from Mount Paran.Selah\nHis glory covered the heavens,\nand the earth was full of his praise.\nThe brightness was like the sun;\nrays came forth from his hand,\nwhere his power lay hidden.\nBefore him went pestilence,\nand plague followed close behind.\n– Habakkuk 3:3-5",
    "Three times I appealed to the Lord about this, that it would leave me, but he said to me, “My grace is sufficient for you, for power is made perfect in weakness.” So, I will boast all the more gladly of my weaknesses, so that the power of Christ may dwell in me. Therefore I am content with weaknesses, insults, hardships, persecutions, and calamities for the sake of Christ; for whenever I am weak, then I am strong.\n– 2 Corinthians 12:8-10",
    "“No good tree bears bad fruit, nor again does a bad tree bear good fruit; for each tree is known by its own fruit. Figs are not gathered from thorns, nor are grapes picked from a bramble bush. The good person out of the good treasure of the heart produces good, and the evil person out of evil treasure produces evil; for it is out of the abundance of the heart that the mouth speaks.\n– Luke 6:43-45",
    "Little children, let us not love in word or talk but in deed and in truth.\n– 1 John 3:18",
    "For it is in giving that we receive,\nit is in pardoning that we are pardoned,\nand it is in dying that we are born to eternal life.\n– Prayer of St. Francis of Assisi",
    "As iron sharpens iron,\nso one person sharpens another.\nThe one who guards a fig tree will eat its fruit,\nand whoever protects their master will be honored.\nAs water reflects the face,\nso one’s life reflects the heart.\n– Proverbs 27:17-19",
    "If I speak in the tongues of mortals and of angels, but do not have love, I am a noisy gong or a clanging cymbal. And if I have prophetic powers, and understand all mysteries and all knowledge, and if I have all faith, so as to remove mountains, but do not have love, I am nothing. If I give away all my possessions, and if I hand over my body so that I may boast, but do not have love, I gain nothing.\n– 1 Corinthians 13:1-3",
    "“So do not worry about tomorrow, for tomorrow will bring worries of its own. Today’s trouble is enough for today.\n– Matthew 6:34",
    "“I know that you can do all things,\nand that no purpose of yours can be thwarted.\n‘Who is this that hides counsel without knowledge?’\nTherefore I have uttered what I did not understand,\nthings too wonderful for me, which I did not know\n‘Hear, and I will speak;\nI will question you, and you declare to me.’\nI had heard of you by the hearing of the ear,\nbut now my eye sees you;\ntherefore I despise myself,\nand repent in dust and ashes.”\n– Job 42:1-6",
    "One who pricks the eye brings tears,\nand one who pricks the heart makes clear its feelings.\n– Sirah 22:19",
    "If you remove the yoke from among you,\nthe pointing of the finger, the speaking of evil,\nif you offer your food to the hungry\nand satisfy the needs of the afflicted,\nthen your light shall rise in the darkness\nand your gloom be like the noonday.\nThe Lord will guide you continually,\nand satisfy your needs in parched places,\nand make your bones strong;\nand you shall be like a watered garden,\nlike a spring of water,\nwhose waters never fail.\n– Isaiah 58:9-11",
    "Finally, all of you, have unity of spirit, sympathy, love for one another, a tender heart, and a humble mind. Do not repay evil for evil or abuse for abuse; but, on the contrary, repay with a blessing. It is for this that you were called—that you might inherit a blessing.\n– 1 Peter 3:7-9",
    "Whoever pursues righteousness and kindness\nwill find life and honor.\nOne wise person went up against a city of warriors\nand brought down the stronghold in which they trusted.\n– Proverbs 21:20-22",
    "But whoever is joined with all the living has hope, for a living dog is better than a dead lion. The living know that they will die, but the dead know nothing; they have no more reward, and even the memory of them is lost. Their love and their hate and their envy have already perished; never again will they have any share in all that happens under the sun.\n– Ecclesiastes 9:4-6",
    "When I was a child, I spoke and thought and reasoned as a child. But when I grew up, I put away childish things. Now we see things imperfectly, like puzzling reflections in a mirror, but then we will see everything with perfect clarity. All that I know now is partial and incomplete, but then I will know everything completely, just as God now knows me completely.\n\nThree things will last forever—faith, hope, and love—and the greatest of these is love.\n\n– 1 Corinthians 13:11-13",
    "Merry Christmas!!!"
];

let verseBox = document.getElementById('verse-box');
let verseText = document.getElementById('verse-text');
let closeBtn = document.getElementById('close-verse');

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', function() {
        const day = this.getAttribute('data-day');
        const verse = verses[day - 1];
        verseText.textContent = verse;
        verseBox.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    verseBox.style.display = 'none';
});