const Fetch = require('node-fetch')
async function Awooify(avatar) {
    if (!avatar) throw new Error(`No Image`);

    const res = await Fetch(`https://nekobot.xyz/api/imagegen?type=awooify&url=${avatar}`), json = await res.json();
    
    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);
    return json.message;
};

async function Baguette(avatar) {
    if (!avatar) throw new Error(`No Image`);

    const res = await Fetch(`https://nekobot.xyz/api/imagegen?type=baguette&url=${avatar}`), json = await res.json();
    
    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);
    return json.message;
};

async function BlushFact(Message) {
    if (Message) throw new Error(`No Message`);
    if (Message.length > 1500) throw new Error(`Message Limit: 1500`);

    const res = await Fetch(`https://nekobot.xyz/api/imagegen?type=fact&text=${encodeURIComponent(Message)}`), json = await res.json();

    if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);
    return json.message
}


module.exports = {Awooify,Baguette,BlushFact}