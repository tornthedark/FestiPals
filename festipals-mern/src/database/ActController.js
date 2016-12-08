import connect from 'mongoose';
import Act from './act';

export function getAllActs() {

    mongoose.connect('mongodb://localhost/myappdatabase');

    Act.find({}, function(err, users) {
      if (err) throw err;

      // object of all the users
      console.log(users);
    });

    return { heh: "heh"};
}
