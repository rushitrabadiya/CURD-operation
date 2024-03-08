const List = require("./../models/listModel");

exports.getAllList = async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json({
      status: "success",
      result: lists.length,
      data: {
        lists,
      },
    });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};
exports.getList = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json({
      status: "success",
      //   result: list.length,
      data: {
        list,
      },
    });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};
exports.updateList = async (req, res) => {
  try {
    const list = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      //   result: list.length,
      data: {
        list,
      },
    });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};
exports.deleteList = async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      message: "Delete List ",
      //   result: list.length,
      data: {
        list: null,
      },
    });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};
exports.createList = async (req, res) => {
  try {
    // const newList = new List({})
    // newList.save()

    const newList = await List.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        list: newList,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
