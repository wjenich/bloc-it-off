blocItOff = angular.module("blocItOff", ['firebase', 'ui.router']);


blocItOff.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
  
        $stateProvider.state('tasks', {
            url: '/',
            controller: 'Task.controller',
            templateUrl: '/templates/tasks.html'
        });

        $stateProvider.state('task-list', {
            url: '/task-list',
            controller: 'taskList.controller',
            templateUrl: '/templates/task-list.html'
        });
}]);
        
    

blocItOff.controller('Task.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    var ref = new Firebase("https://boiling-fire-1264.firebaseio.com/task");
    $scope.messages = $firebaseArray(ref);
    console.log($scope.messages)

////Sync tasks as an array
//    var tasks = sync.$asArray();
//    $scope.tasks= 'tasks';
//
//// Add a new task to the list 
//    $scope.addTask = function(task){
//        $scope.task.$add({
//            task: task,
//            state: "active",
//            dateDue: 
//            





}
]);
       
    
    
