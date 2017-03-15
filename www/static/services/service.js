

app.service("getNotesService",['$http',function($http){
  var notes=[];
  this.setNotes=function(data){
    this.notes=data;
  };
  this.getNotes=function(){
    return this.notes;
  };
}]);
