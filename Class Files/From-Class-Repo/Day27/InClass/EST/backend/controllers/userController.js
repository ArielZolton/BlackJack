import User from "../models/user.js";

/*
this way export will be an object like this:
{
    createUser: async (req, res) => {
        ...
    }
}
*/
// export.createUser = async (req, res) => {

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createUser = async (req, res) => {
  try {
    // const user = await User.create(req.body);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      data: {
        id: savedUser._id,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: `User with id ${req.params.id} not found`,
      });
    }

    res.status(200).json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  // put and patch in the same route
  try {
    // const newUserData = {
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password
    // }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        message: `User with id ${req.params.id} not found`,
      });
    }

    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        message: `User with id ${req.params.id} not found`,
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export default { createUser, getUser, updateUser, deleteUser };
