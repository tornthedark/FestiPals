import mongoose from 'mongoose';
import Act from './Act';

mongoose.connect( 'mongodb://test:test123@ds113938.mlab.com:13938/festipals');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
