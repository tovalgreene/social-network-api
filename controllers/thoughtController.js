import Thought from '../models/Thought.js';
import User from '../models/User.js';

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find({})
      .select('-__v')
      .sort({ createdAt: -1 })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .select('-__v')
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(500).json(err));
  },

  createThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json({ message: 'Thought deleted' });
      })
      .catch((err) => res.status(400).json(err));
  },

  createReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

const createReaction = thoughtController.createReaction;
const createThought = thoughtController.createThought;
const deleteReaction = thoughtController.deleteReaction;
const getAllThoughts = thoughtController.getAllThoughts;
const getThoughtById = thoughtController.getThoughtById;
const updateThought = thoughtController.updateThought;
const deleteThought = thoughtController.deleteThought;

export { createThought, deleteReaction, getAllThoughts, getThoughtById, updateThought, deleteThought, createReaction };

export default thoughtController;




