const mongoose = require("mongoose");
const { Koopon } = require("../model/kooponModal");
async function createKoopon(req, res) {
  console.log(req.body);
  let {
    account_id,
    price,
    store_name,
    discount,
    start_date,
    expiry_date,
    quantity,
    issued_token,
  } = req.body;
  if (
    !account_id ||
    !price ||
    !store_name ||
    !discount ||
    !start_date ||
    !expiry_date ||
    !quantity ||
    !issued_token
  ) {
    res.status(400).json({
      message: `fields missing`,
    });
  }
  try {
    //check if Koopon already exists
    let data = await Koopon.findOneAndUpdate({ account_id }, { ...req.body });
    const allData = await Koopon.find({ account_id });
    console.log(data);
    if (data) {
      res.status(200).json({
        message: "successful",
        data: allData,
      });
      return;
    }
    const coupon = new Koopon({
      ...req.body,
    });

    await coupon.save();

    res.status(201).json({
      message: "Successfully created!",
      data: allData,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: `${error.message}`,
    });
  }
}

module.exports = { createKoopon };
