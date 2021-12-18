async function Chat(Message) {
  if (!Message) throw new Error(`No Message`);
  if (Message.length > 1900) throw new Error(`Message Limit: 1900`);

  const res = await Fetch(
      encodeURI(`https://api.affiliateplus.xyz/api/chatbot?message=${Message}`)
    ),
    json = await res.json();

  if (!json.message) throw new Error(`Something Went Wrong, Try Again Later!`);

  let Data = json.message;
  return Data;
}

module.exports = { Chat };
