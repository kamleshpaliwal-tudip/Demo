<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
String.prototype.isEmpty = function(){
   if(this==null||this=="")
    alert("true");
   else
    alert("false");

}


var string ="";
string.isEmpty();
</script>



</body>
</html> 