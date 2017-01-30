$(document).ready(function(){
                        obj={likes: 0, dislikes: 0};
                        lcount=obj.likes;
                        dcount=obj.dislikes;
                        total=0;


                        $("#like").click(function(){
                                lcount=lcount+1;
                                $("#ldisplay").text(lcount);
                                obj.likes=lcount;
                                if(typeof(Storage) !== "undefined") {
                                    if (localStorage.likecount) {
                                         localStorage.likecount = Number(localStorage.likecount)+1;
                                     }
                                     else {
                                             localStorage.likecount = 1;
                                           }

                                     $("#likes").text(localStorage.likecount);
                                     
                                 }
                        });

                        $("#dis").click(function(){
                                dcount++;
                                $("#ddisplay").text(dcount);
                                obj.dislikes=dcount;

                                if(typeof(Storage) !== "undefined") {
                                    if (localStorage.dislikecount) {
                                         localStorage.dislikecount = Number(localStorage.dislikecount)+1;
                                     }
                                     else {
                                             localStorage.dislikecount = 1;
                                           }
                                    $("#dislikes").text(localStorage.dislikecount);
                                 
                                 }
                        });  
                                  if(typeof(Storage) !== "undefined") {
                                     localStorage.totalcount=Number(localStorage.likecount)+Number(localStorage.dislikecount);
                                     $("total").text("hi");
                                     }
                                        $("total").text("hi");

                   
                        
                        
                         });