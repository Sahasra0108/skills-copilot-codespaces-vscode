function skillsMember() {
  var self = this;
  self.skills = ko.observableArray([]);
  self.addSkill = function() {
    self.skills.push(new Skill());
  };
  self.removeSkill = function(skill) {
    self.skills.remove(skill);
  };
}