var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
  it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_a_person("Or A.")
    expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
  });
});

describe('Find a person in location return true', function() {
  it('Given a person name, check if the map includes a location information for it (a place or geo. location)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.check_if_person_in_location("Or A.")
    expect(posts).to.be.true;
  });
});

describe('Find a person in location return false', function() {
  it('Given a person name, check if the map includes a location information for it (a place or geo. location)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.check_if_person_in_location("Random")
    expect(posts).to.be.false;
  });
});


describe('Check persons with the same name with different locations return true', function() {
  it('Check if there are map inconsistencies, e.g., the same name with different locations', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.check_persons_with_the_same_name_with_different_locations()
    expect(posts).to.be.true;
  });
});

describe('Check persons with the same name with different locations return false', function() {
  it('Check if there are map inconsistencies, e.g., the same name with different locations', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or B. R.I.P at Langtang valley", "Random post"]);
    var posts = map.check_persons_with_the_same_name_with_different_locations()
    expect(posts).to.be.false;
  });
});
