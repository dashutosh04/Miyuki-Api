const t= `
If you could be invisible what’s the first thing you would do?,What’s a secret you kept from your parents?,What’s the most embarrassing music you listen to?,What’s one thing you wish you could change about yourself?,Who is your secret crush?,Who is the last person you creeped on social media?,When was the last time you wet the bed?,If a genie granted you three wishes what would you ask for?,What’s your biggest regret?,If you had to only ever watch rom coms or only watch scary movies for the rest of your life which would you choose?,Where is the weirdest place you've ever gone to the bathroom?,What’s the most food you've ever eaten in a single sitting?,Which player would survive a zombie apocalypse and which would be the first to go?
,Reveal all the details of your first kiss.
,What excuse have you used before to get out plans?
,What's the longest you've ever slept?
,Read the last thing you sent your best friend or significant other out loud.
,What's your biggest pet peeve?
,When was the last time you lied?
,What five things would you bring to a deserted island?
,Which is your favorite Hollywood Chris? Chris Evans Chris Pratt Chris Hemsworth or Chris Pine?
,What's the most embarrassing thing you ever did on a date?
,What is the craziest pickup line you've ever used?
,What animal do you think you most look like?
,How many selfies do you take a day?
,What is one thing you would stand in line an hour for?
,When was the last time you cried?
,What's the longest time you've ever gone without showering?
,What's the most embarrassing top-played song on your phone?
,What was your favorite childhood show?
,If you had to change your name what would your new first name be?
,If you could be a fictional character for a day who would you choose?
,What's your biggest fear?
,What's one silly thing you can't live without?
,What is the weirdest trend you've ever participated in?
,If you could only listen to one song for the rest of your life what would you choose?
,What person do you text the most?
,Have you ever been fired from a job?
,If you had to wear only flip flops or heels for the next 10 years which would you choose?
,What’s an instant deal breaker in a potential love interest?
,If you could only eat one thing for the rest of your life what would you choose?
,What is the biggest lie you ever told your parents?
,What's the worst physical pain you've ever experienced?
,Which player knows you the best?
,What's your favorite part of your body?
,If you could only accomplish three things in life what would they be?
,What's the weirdest thing you've ever eaten?
,Have you ever gone skinny dipping?
,Tell us about the worst date you've ever been on.
,Who was your first celebrity crush?
,What's the strangest dream you've ever had?
,What are the top three things you look for in a love interest?
,What is your worst habit?
,How many stuffed animals do you own?
,What is your biggest insecurity?
,Name one thing you’d do if you knew there’d be zero consequences.
,When’s the last time you said you were sorry? For what?
,Do you pee in the shower?
,Do you still have feelings for any of your exes?
,What’s the most embarrassing thing you’ve secretly done to get a crush’s attention?
,What’s the most random thing in your bag right now?
,Have you ever sent a sext?
,What’s the last movie that made you cry?
,What’s the last thing you Googled?
,When’s the last time you got caught in a lie?
,What gross smell do you actually enjoy?
,Who was the last person you said “I love you” to?
,Have you ever had a paranormal experience?
,If you were handed $1000 right now what would you spend it on?
,Who’s your celebrity “hall pass” if you were to meet that person while in a relationship?
,Have you ever cheated on an exam?
,What unexpected part of the body do you find attractive?
,What’s the most awkward thing you’ve ever been caught doing?
,Have you ever flirted with a close friend’s sibling?
,What was your first concert?
,If you had the choice to never have to sleep again would you take it?
,If you had to get a tattoo today what would it be?
,Even if you’d be paid $1 million for it what’s something you would never do?
,If you could travel to the past and meet one person who would it be?
,What popular music artist do you secretly hate?
,Where do you see yourself in 10 years?
,Name your go-to karaoke song.
,What’s the most adventurous thing you’ve ever done?
,When have you been in the most trouble in school?
,If you had to always be overdressed or underdressed which would you choose?
,Who would you cast as you in the movie version of your life?
,What’s the luckiest thing that’s ever happened to you?
,Do you have any phobias?
,Have you ever had your fortune told?
,If you had to move to a different country tomorrow where would you go?
,What do you want to be remembered for most in life?
,Do you believe in soul mates?
,Have you ever re-gifted a present? What was it?
,What’s something you only do when you’re alone?
,What movie (or franchise) are you most embarrassed to love?
,Have you ever had an imaginary friend? Describe them.
,What gross food combo do you secretly love?
,If you could become besties with a celebrity who would it be?
,What’s the most embarrassing nickname you’ve ever been given?,If you could trade lives with any person you know for a day who would it be?`.split(','),

dare_l1 = `Show the most embarrassing photo on your phone,Show the last five people you texted and what the messages said,Let the rest of the group DM someone from your Instagram account,Eat a raw piece of garlic,Do 100 squats,Show us your screen time report,Keep three ice cubes in your mouth until they melt,Say something dirty to the person on your left,Give a foot massage to the person on your right,Put 10 different available liquids into a cup and drink it,Yell out the first word that comes to your mind,Give a lap dance to someone of your choice,Remove four items of clothing,Like the first 15 posts on your Facebook newsfeed,Eat a spoonful of mustard,Keep your eyes closed until it's your go again,Send a sext to the last person in your phonebook,Show your orgasm face,Seductively eat a banana,Empty out your wallet/purse and show everyone what's inside,Do your best sexy crawl,Pretend to be the person to your right for 10 minutes,Eat a snack without using your hands,Say two honest things about everyone else in the group,Twerk for a minute,Try and make the group laugh as quickly as possible,Try to put your whole fist in your mouth,Tell everyone an embarrassing story about yourself,Try to lick your elbow,Post the oldest selfie on your phone on Instagram Stories,Tell the saddest story you know,Howl like a wolf for two minutes,Dance without music for two minutes,Pole dance with an imaginary pole,Let someone else tickle you and try not to laugh,Put as many snacks into your mouth at once as you can,Scroll through your phone book until someone says stop. You either have to call or delete that person.,Down your drink (responsibly),Try and make yourself cry in front of the group,Tell the group two truths and a lie and they have to guess which one the lie is,Show off your secret talent,Reply to the first five Instagram Stories on your timeline,Share the first celebrity on your timeline's Instagram to your Story,Put on as many layers as possible in 60 seconds,Fill your mouth with drink and gargle your answer to the next Truth,Smile as widely as you can and hold it for two minutes`.split(','),
dare_l2 = `Eat a piece of fruit in the most sensual way possible.,Play me a song you’d like to have sex to.,Using your fingers, find a way to give me goosebumps right now.,Demonstrate a move on me that you saw and liked while watching porn.,Give me a sensual massage. Start at my feet and work your way up.,For the next 60 seconds, touch yourself like you’d like to touch me.,Spell out a short, sultry message on my body…with your tongue.,Pretend I’m a stranger at a bar. Try to pick me up and convince me to come home with you.,I’m going to go into the other room and dab perfume or cologne somewhere on my body. You have to sniff everywhere until you figure out where I put it on.,Pop an ice cube in your mouth and go down on me for 15 seconds.,Put my cell on vibrate, then place it somewhere on my body. Now, call me.,Pour a trail of sugar from the small of my back to my neck. Now, lick it up.,Meet me in the closet for a round of seven minutes in heaven. The rules? You must keep the making out above the belt.,Dip your fingertips in mouthwash and then rub my nipples, so I’ll get an erotic, tingly sensation the moment you touch me.,Pick a spot on my body that isn’t usually considered sexual—elbows, knees, ankles—and lavish it with kisses until I’m turned on.`.split(','),
dare_l3 = `You have ten seconds to excite me just by kissing. Hint: You're not limited to my lips.,Imitate my most flexible sex move.,Make out with me like we used to before we started having sex.,Go find your old Halloween costume and put it on for me. Then, let's decide what to role play.,Place whipped cream on your favorite parts of my body. Now, lick it off.,Eat a strawberry in the most sensual way possible.,Engage in foreplay with me for five minutes with one rule: You're allowed to kiss me anywhere but my mouth.,Give me a massage anywhere on my body for 10 minutes.,Do something to me right now that you've been fantasizing about.,Find something sweet to swipe across your lips and give me a passionate kiss.,Drag me to the closet for an adult round of seven minutes in heaven. You must keep the making out above the belt.,Stimulate two parts of my body at once. Use your hands on one part and lips on another.,Using your mouth, make your way from my wrist to my ear. Take your time!,In your most sultry voice, tell me what you loved about the last time we had sex.,Hop in the shower with me and wash my body, making sure not to miss any hard spots.`.split(',');
function dare(){
  const netques = [dare_l1, dare_l3,dare_l2], question_pack = netques[Math.floor(Math.random() * netques.length)], question = question_pack[Math.floor(Math.random() * question_pack.length)];
  return question;
}
function truth(){
  const netques = [t], question_pack = netques[Math.floor(Math.random() * netques.length)], question = question_pack[Math.floor(Math.random() * question_pack.length)];
  return question;
}

module.exports = {
  dare,
  truth,
}