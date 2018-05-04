const mongoose = require ('mongoose');
// create Schema
const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        reqired: true

    },
    password: {
        type: String,
        required: true

    },
    avatar: {
        type: String
        //required: true // getting from gravatar

    },
    date: {
        type: Date,
        default: Date.now
    }
});
module. exports= User = mongoose.model('users', UserSchema);

