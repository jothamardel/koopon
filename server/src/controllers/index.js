function get_greeting(req, res) {
  res.status(200).send({
    message: "hello,world!",
  });
}

module.exports = {
  get_greeting,
};
