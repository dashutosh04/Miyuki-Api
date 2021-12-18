async function ChangeMyMind(Message) {
  if (!Message) throw new Error(`No Message`);
  if (Message.length > 100) throw new Error(`Message Limit: 100`);

  const Data = encodeURI(
    `https://vacefron.nl/api/changemymind?text=${options.Message}`
  );
  if (!Data) throw new Error(`Something went wrong`);
  return Data;
}
module.exports = { ChangeMyMind };
