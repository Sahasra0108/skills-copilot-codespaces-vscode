function skillsMember() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/member/skillsMember.html',
        controller: 'SkillsMemberCtrl',
        controllerAs: 'skillsMember'
    };
}