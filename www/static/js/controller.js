app.controller("addNotesToDatabase", function($scope, $http, $location, getNotesService) {
    console.log("Inside Controller");
//    console.log($location.path());



    // $scope.viewNotes();
    function AddDataToDatabase(info) {
        console.log("Inside Add Data");
        var msg;
        var db = openDatabase('Sticky', '1.0', 'Test DB', 2 * 1024 * 1024);
        db.transaction(function(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS NOTES (ID INTEGER PRIMARY KEY, title TEXT,description TEXT,priority INTEGER)');
            tx.executeSql('INSERT INTO NOTES(title,description,priority) VALUES (?, ?,?)', [info.title, info.description, info.priority]);
            //                    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
            msg = '<p>Log message created and row inserted.</p>';
//            document.querySelector('#status').innerHTML = msg;


        });







    }

    $scope.addInfo = function(info) {
        // console.log("hai " + info);
        var results = AddDataToDatabase(info);
        console.log(results);
//        $scope.viewNotes();
            $location.path("/viewNotes");

    }


});
app.controller("ToDatabase", function($scope, $http, $location, getNotesService) {
    console.log("To database");
});



app.controller("getNotesFromDatabase", function($scope, $http, $location, getNotesService) {

//    $scope.noteList=[];
    var db = openDatabase('Sticky', '1.0', 'Test DB', 2 * 1024 * 1024);
    db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM NOTES', [], function(tx, results) {
                                          console.log("trans");
                                                                             $scope.noteList=results.rows;
//                                          getNotesService.setNotes(results.rows);
//                                          $location.path('/viewNotes');
                        $scope.title = "sachin";


                                      }, function(err){
                                      $scope.title = "sachin";
                                                                                 console.log("errrrrr");
                                                                               });
                                      },function(tx,results){
                                      $scope.title = "sachin";
                                      console.log("Returned rows = " + results.rows);
                                      },function(err){
                                      $scope.title = "sachin";
                                        console.log("sdsdakdhajksdhjkahdjkhfjkhsdfuwryuiweyruwyer "+err);
                                      });
//     console.log($scope.no)




//    console.log("dsdsd" + getNotesService.getNotes());
//    $scope.noteList = getNotesService.getNotes();
});