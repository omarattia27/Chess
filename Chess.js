var midd_of_move = false;
var allowed_grids = [];
var current_player = 0;
var current_pice = null;
var bubbles = [];

var Board = [['1','2','3','4','5','6','7','8'],
  ['9','10','11','12','13','14','15','16'],
  ['17','18','19','20','21','22','23','24'],
  ['25','26','27','28','29','30','31','32'],
  ['33','34','35','36','37','38','39','40'],
  ['41','42','43','44','45','46','47','48'],
  ['49','50','51','52','53','54','55','56'],
  ['57','58','59','60','61','62','63','64']];

class Chess_pice {

  constructor(type, img,x,y) {
    this.type = type;
    this.icon = img;
    this.x = x;
    this.y = y;
    this.coordinates = Board[x][y];


  }

}


var image = ["wN.png", "wK.png", "wB.png", "wR.png", "wP.png", "wQ.png",
"bN.png", "bK.png", "bB.png", "bR.png", "bP.png", "bQ.png"];

var King_White = new Chess_pice('King',image[1],4,0);
var Queen_White = new Chess_pice('Queen',image[5],3,0);
var Bishop1_White = new Chess_pice('Bishop',image[2],2,0);
var Bishop2_WHite = new Chess_pice('Bishop',image[2],5,0);
var Knight1_White = new Chess_pice('Knight',image[0],1,0);
var Knight2_White = new Chess_pice('Knight',image[0],6,0);
var Rook1_White = new Chess_pice('Rook',image[3],0,0);
var Rook2_White = new Chess_pice('Rook',image[3],7,0);
var Pown1_White = new Chess_pice('Pown',image[4],0,1);
var Pown2_White = new Chess_pice('Pown',image[4],1,1);
var Pown3_White = new Chess_pice('Pown',image[4],2,1);
var Pown4_White = new Chess_pice('Pown',image[4],3,1);
var Pown5_White = new Chess_pice('Pown',image[4],4,1);
var Pown6_White = new Chess_pice('Pown',image[4],5,1);
var Pown7_White = new Chess_pice('Pown',image[4],6,1);
var Pown8_White = new Chess_pice('Pown',image[4],7,1);

var King_Black = new Chess_pice('King',image[7],4,7);
var Queen_Black = new Chess_pice('Queen',image[11],3,7);
var Bishop1_Black = new Chess_pice('Bishop',image[8],2,7);
var Bishop2_Black = new Chess_pice('Bishop',image[8],5,7);
var Knight1_Black = new Chess_pice('Knight',image[6],1,7);
var Knight2_Black = new Chess_pice('Knight',image[6],6,7);
var Rook1_Black = new Chess_pice('Rook',image[9],0,7);
var Rook2_Black = new Chess_pice('Rook',image[9],7,7);
var Pown1_Black = new Chess_pice('Pown',image[10],1,6);
var Pown2_Black = new Chess_pice('Pown',image[10],2,6);
var Pown3_Black = new Chess_pice('Pown',image[10],3,6);
var Pown4_Black = new Chess_pice('Pown',image[10],4,6);
var Pown5_Black = new Chess_pice('Pown',image[10],5,6);
var Pown6_Black = new Chess_pice('Pown',image[10],6,6);
var Pown7_Black = new Chess_pice('Pown',image[10],7,6);
var Pown8_Black = new Chess_pice('Pown',image[10],0,6);


var player1 = [King_White, Queen_White, Bishop1_White, Bishop2_WHite, Knight1_White, Knight2_White, Rook1_White, Rook2_White, 
  Pown1_White, Pown2_White, Pown3_White, Pown4_White, Pown5_White, Pown6_White, Pown7_White, Pown8_White];

var player2 = [King_Black, Queen_Black, Bishop1_Black, Bishop2_Black, Knight1_Black, Knight2_Black, Rook1_Black, Rook2_Black, 
  Pown1_Black, Pown2_Black, Pown3_Black, Pown4_Black, Pown5_Black, Pown6_Black, Pown7_Black, Pown8_Black];

var player2_IDs = [King_Black.coordinates, Queen_Black.coordinates, Bishop1_Black.coordinates, Bishop2_Black.coordinates, Knight1_Black.coordinates, Knight2_Black.coordinates, Rook1_Black.coordinates, Rook2_Black.coordinates, 
  Pown1_Black.coordinates, Pown2_Black.coordinates, Pown3_Black.coordinates, Pown4_Black.coordinates, Pown5_Black.coordinates, Pown6_Black.coordinates, Pown7_Black.coordinates, Pown8_Black.coordinates];

var player1_IDs = [King_White.coordinates, Queen_White.coordinates, Bishop1_White.coordinates, Bishop2_WHite.coordinates, Knight1_White.coordinates, Knight2_White.coordinates, Rook1_White.coordinates, Rook2_White.coordinates, 
  Pown1_White.coordinates, Pown2_White.coordinates, Pown3_White.coordinates, Pown4_White.coordinates, Pown5_White.coordinates, Pown6_White.coordinates, Pown7_White.coordinates, Pown8_White.coordinates];

function init_board() { 
    var i = 0; 
    for (i = 0; i < player1.length; i++) { 
          document.getElementById(player1[i].coordinates).src = player1[i].icon;
            
     }
     for(var j = 0; j<player2.length; j++){
          document.getElementById(player2[j].coordinates).src = player2[j].icon;
     }
   
    // Function to be executed 
}

function chick_clash_picee(pice){
   if(player1.includes(pice) == true){
     for(var i = 0; i<player2.length; i++){
       if(player2[i].coordinates == pice.coordinates){
          player2.splice(i,1);
       }
     }
   }else if(player2.includes(pice) == true){
    for(var i = 0; i<player1.length; i++){
      if(player1[i].coordinates == pice.coordinates){
         player1.splice(i,1);
      }
    }
  }
  remove_bubbles();
  init_board();
}

function remove_bubbles(){
  player1_IDs = [];
  player2_IDs = [];
  for(var k = 0; k<player1.length; k++){
    player1_IDs.push(player1[k].coordinates);
  }

  for(var k = 0; k<player2.length; k++){
    player2_IDs.push(player2[k].coordinates);
  }

  console.log(current_player);
  for(var i = 0; i<bubbles.length; i++){
    try{
    document.getElementById(bubbles[i]).src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    } catch(err){}
  }
  bubbles = [];
}

function reset(){
  midd_of_move = false;      
      allowed_grids = [];
      allowed_grids2 = [];
      current_pice = null;
      current_player++;
      remove_bubbles();
      init_board();
}

/*function check_mate(){
  if(current_player%2 == 0){
    for(var i = 0; i<player1; i++){
       if(){

       }
    }
  }else{
    for(){
       if(){

       }
    }
  }
}*/

function winner(){
  if(player1.includes(King_White) == false){
    document.getElementById("declare winner").innerHTML = "PLAYER 2 WON";
    console.log("player 2 won");
  }else if(player2.includes(King_Black) == false){
    document.getElementById("declare winner").innerHTML = "PLAYER 1 WON";
    console.log("player 1 won");
  }
  console.log("i was here BTW");
}

function myFunction(ID){

  if(midd_of_move == false){

    if(document.getElementById(ID).src != "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="){
      var i = 0
      for(i = 0; i < player1.length; i++) {

        if (player1[i].coordinates == ID) {
          
          midd_of_move = true;
          current_pice = player1[i];
          break;
        }

      }
        
      for(var j = 0; j < player2.length; j++) {
        if (player2[j].coordinates == ID) {
          
        midd_of_move = true;
        current_pice = player2[j];                                        //after identifying the chess pice
          break;
        }
      }
      
      if((current_pice.type == "Pown") ){
        allowed_grids = [];
        var fix_me = false;
        var black_powns = ['7','15','23','31','39','47','55','63'];
        var white_powns = ['2','10','18','26','34','42','50','58'];
        if(player1_IDs.includes(current_pice.coordinates) && current_player%2 == 0){
          allowed_grids.push([current_pice.x , (current_pice.y)]);
            try{
              allowed_grids.push([current_pice.x,(current_pice.y)+1]);
            } catch(err){} 

            if(white_powns.includes(ID)){//if(current_pice.y = 1){
              try{
                
                allowed_grids.push([current_pice.x , (current_pice.y)+2]);
              } catch(err){} 
            }else{
              fix_me = true;
            }
          
        }else if((player2_IDs.includes(current_pice.coordinates) && current_player%2 != 0)){

           try{
             allowed_grids.push([current_pice.x,(current_pice.y)-1]);
           } catch(err){} 
           
           if(black_powns.includes(ID)){//if(current_pice.y = 6){
            try{console.log(current_pice.x,"x coordinates",current_pice.y,"y coordinates");
              allowed_grids.push([current_pice.x , (current_pice.y)-2]);
            } catch(err){} 
           }

        }else{
          
          current_player--;;
        reset();
        return;
      } 

      for(var j = 0; j<allowed_grids.length; j++){
        try{
         if((player1_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false) && (player2_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false)){
           bubbles.push(Board[allowed_grids[j][0]][allowed_grids[j][1]]);
           document.getElementById(Board[allowed_grids[j][0]][allowed_grids[j][1]]).src = "bubble.png";
         }
        } catch(err){}
      }
        
      }else if(current_pice.type == "King"){
        if((current_pice.icon == "bK.png" && current_player%2 != 0)||(current_pice.icon == "wK.png" && current_player%2 == 0)){
        try{
          var a = Board[current_pice.x][(current_pice.y)+1];
          allowed_grids.push([current_pice.x, (current_pice.y)+1]);
          
        } catch(err){} 

        try{
          var a = Board[current_pice.x][(current_pice.y)-1];
          allowed_grids.push([current_pice.x,(current_pice.y)-1]);
          
        } catch(err){} 

        try{
          var a = Board[current_pice.x+1][(current_pice.y)+1];
          allowed_grids.push([current_pice.x+1, (current_pice.y)+1]);
          
        } catch(err){} 

        try{
          var a = Board[current_pice.x-1][(current_pice.y)+1];
          allowed_grids.push([current_pice.x-1, (current_pice.y)+1]);
          
        } catch(err){} 

        try{
          var a = Board[current_pice.x-1][(current_pice.y)-1];
          allowed_grids.push([(current_pice.x)-1,(current_pice.y)-1]);
          
        } catch(err){} 

        try{
          var a = Board[current_pice.x+1][(current_pice.y)];
          allowed_grids.push([(current_pice.x)+1,current_pice.y]);
          
        } catch(err){} 
        try{
          var a = Board[current_pice.x+1][(current_pice.y)-1];
          allowed_grids.push([(current_pice.x)+1,(current_pice.y)-1]);
          
        } catch(err){} 

        try{
          var a = Board[current_pice.x-1][(current_pice.y)];
          allowed_grids.push([(current_pice.x)-1,current_pice.y]);
          
        } catch(err){} 
        
        for(var j = 0; j<allowed_grids.length; j++){
          try{
           if((player1_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false) && (player2_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false)){
             bubbles.push(Board[allowed_grids[j][0]][allowed_grids[j][1]]);
             document.getElementById(Board[allowed_grids[j][0]][allowed_grids[j][1]]).src = "bubble.png";
           }
          } catch(err){}}
        }else{
          midd_of_move = false;
          return;
        }

      }else if(current_pice.type == "Queen"){
        var up_right = false;
        var up_left = false; 
        var down_right = false;
        var down_left = false;
        var down = false;
        var up = false;
        var right = false;
        var left = false;
        var b = null;


        for(var k = 1; k<8; k++){    

          /*try{                                                              //up_right
            var a = Board[current_pice.x-k][(current_pice.y-k)];
            if ((current_pice.icon == "wQ.png") && (current_player%2 == 0)){
              console.log('white',current_player);
              if(player1_IDs.includes(a)){
                up_right = true;
              }else if(player2_IDs.includes(a)){
                allowed_grids.push([(current_pice.x)-k,(current_pice.y)-k]);
                up_right = true;
              }
            }else if(current_pice.icon == "wQ.png" && (current_player%2 != 0)){
              
              midd_of_move = false;
              return 0;
            }else{
              if(player2_IDs.includes(a)){
                up_right = true;

              }else if(player1_IDs.includes(a)){
                allowed_grids.push([(current_pice.x)-k,(current_pice.y)-k]);
                up_right = true;
              }
            }

            if(up_right == false){
              
              allowed_grids.push([(current_pice.x)-k,(current_pice.y)-k]);
            } 
          }catch(err){} 
            

          try{

            var b = Board[current_pice.x+k][(current_pice.y-k)];
 
            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              console.log('white',current_player);
              if(player1_IDs.includes(b)){
                up_left = true;
              }else if(player2_IDs.includes(b)){
                allowed_grids.push([(current_pice.x)+k,(current_pice.y)-k]);
                up_left = true;
              }
            }else if(current_pice.icon == "wQ.png" && (current_player%2 != 0)){
              midd_of_move = false;
              return;
            }else{
              if(player2_IDs.includes(b)){
                up_left = true;

              }else if(player1_IDs.includes(b)){
                allowed_grids.push([(current_pice.x)+k,(current_pice.y)-k]);
                up_left = true;
              }
            }

            if(up_left == false){
              allowed_grids.push([current_pice.x+k,current_pice.y-k]);
            }
            
          } catch(err){} 

         
          try{
            var c = Board[current_pice.x+k][(current_pice.y+k)];

            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              console.log('white',current_player);
              if(player1_IDs.includes(c)){
                down_right = true;
              }else if(player2_IDs.includes(c)){
                allowed_grids.push([(current_pice.x)+k,(current_pice.y)+k]);
                down_right = true;
              }
              else if(current_pice.icon == "wQ.png" && (current_player%2 != 0)){
                midd_of_move = false;
                return;
              }}else{
              if(player2_IDs.includes(c)){
                down_right = true;

              }else if(player1_IDs.includes(c)){
                allowed_grids.push([(current_pice.x)+k,(current_pice.y)+k]);
                down_right = true;
              }
            }


           if(down_right == false){
           allowed_grids.push([current_pice.x+k,current_pice.y+k]);
           }
          } catch(err){} 

          try{
            var d = Board[current_pice.x-k][(current_pice.y+k)];

            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              console.log('white',current_player);
              if(player1_IDs.includes(d)){
                down_left = true;
              }else if(player2_IDs.includes(d)){
                allowed_grids.push([(current_pice.x)-k,(current_pice.y)+k]);
                down_left = true;
              }
            }else if(current_pice.icon == "wQ.png" && (current_player%2 != 0)){
              midd_of_move = false;
              return;
            }else{
              if(player2_IDs.includes(d)){
                down_left = true;

              }else if(player1_IDs.includes(d)){
                allowed_grids.push([(current_pice.x)-k,(current_pice.y)+k]);
                down_left = true;
              }
            }

            if(down_left == false){
                allowed_grids.push([current_pice.x-k, current_pice.y+k]);
            }
           
          } catch(err){} 
            
          
           try{

            var e = Board[current_pice.x-k][(current_pice.y)];

            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              console.log('white',current_player);
              if(player1_IDs.includes(e)){
                down = true;
              }else if(player2_IDs.includes(e)){
                allowed_grids.push([(current_pice.x)-k,(current_pice.y)]);
                down = true;
              }
            }else if(current_pice.icon == "wQ.png" && (current_player%2 != 0)){
              midd_of_move = false;
              return;
            }else{
              if(player2_IDs.includes(e)){
                down = true;

              }else if(player1_IDs.includes(e)){
                allowed_grids.push([(current_pice.x)-k,(current_pice.y)]);
                down = true;
              }
            }
          
           if(down == false){
            var a = Board[current_pice.x-k][(current_pice.y)];
            allowed_grids.push([current_pice.x-k, current_pice.y]);
           }
             
           } catch(err){} 

           try{
            var l = Board[current_pice.x+k][(current_pice.y)];

            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              console.log('white',current_player);
              if(player1_IDs.includes(l)){
                up = true;
              }else if(player2_IDs.includes(l)){
                allowed_grids.push([(current_pice.x)+k,(current_pice.y)]);
                up = true;
              }
            }else if(current_pice.icon == "wQ.png" && (current_player%2 != 0)){
              midd_of_move = false;
              return;
            }else{
              if(player2_IDs.includes(l)){
                up = true;

              }else if(player1_IDs.includes(l)){
                allowed_grids.push([(current_pice.x)+k,(current_pice.y)]);
                up = true;
              }
            }

             
             if(up == false){
              allowed_grids.push([current_pice.x+k, current_pice.y]);
             }
             
           } catch(err){} 


           try{
           
             var f = Board[current_pice.x][(current_pice.y+k)];

             if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
               console.log('white',current_player);
              if(player1_IDs.includes(f)){
                left = true;
              }else if(player2_IDs.includes(f)){
                allowed_grids.push([(current_pice.x),(current_pice.y)+k]);
                left = true;
              }
            }else if(current_pice.icon == "wQ.png" && (current_player%2 != 0)){
              midd_of_move = false;
              return;
            }else{
              if(player2_IDs.includes(f)){
                left = true;

              }else if(player1_IDs.includes(f)){
                allowed_grids.push([(current_pice.x),(current_pice.y)+k]);
                left = true;
              }
            }

             if(left == false){
               allowed_grids.push([current_pice.x, current_pice.y+k]);
             }
             
           } catch(err){} 


           try{
             var g = Board[current_pice.x][(current_pice.y-k)];

             if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              if(player1_IDs.includes(g)){
                right = true;
              }else if(player2_IDs.includes(g)){
                allowed_grids.push([(current_pice.x),(current_pice.y)-k]);
                right = true;
              }
            }else if(current_pice.icon == "wQ.png" && (current_player%2 != 0)){
              midd_of_move = false;
              return;
            }else{
              if(player2_IDs.includes(g)){
                right = true;

              }else if(player1_IDs.includes(g)){
                allowed_grids.push([(current_pice.x),(current_pice.y)-k]);
                right = true;
              }
            }

             if(right == false){
              allowed_grids.push([current_pice.x, current_pice.y-k]);
             }
             
           } catch(err){} */
           try{                                                              //up_right
            var a = Board[current_pice.x-k][(current_pice.y-k)];
            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              if(player1_IDs.includes(a)){
                up_right = true;
              }else if(player2_IDs.includes(a)){
                if(up_right == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)-k]);
                  
                }
                up_right = true;
              }
            }else if(current_pice.icon == "bQ.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(a)){
                up_right = true;

              }else if(player1_IDs.includes(a)){
                if(up_right == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)-k]);
                  
                }
                
                up_right = true;
              }
            }else {
              //current_player--;
              midd_of_move = false;
              return;
            }


            if(up_right == false){
              
              allowed_grids.push([(current_pice.x)-k,(current_pice.y)-k]);
              console.log("debugging",current_pice.x-k,current_pice.y-k);
            } 
          }catch(err){} 
            

          try{

            var b = Board[current_pice.x+k][(current_pice.y-k)];
 
            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              if(player1_IDs.includes(b)){
                up_left = true;
              }else if(player2_IDs.includes(b)){
                if(up_left == false){allowed_grids.push([(current_pice.x)+k,(current_pice.y)-k]);}
                
                up_left = true;
              }
            }else if(current_pice.icon == "bQ.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(b)){
                up_left = true;

              }else if(player1_IDs.includes(b)){
                if(up_left == false){allowed_grids.push([(current_pice.x)+k,(current_pice.y)-k]);
                  
                }
                up_left = true;
              }
            }else{
              //current_player--;
              midd_of_move = false;
              return;
            }


            if(up_left == false){
              allowed_grids.push([current_pice.x+k,current_pice.y-k]);
            }
            
          } catch(err){} 

         
          try{
            var c = Board[current_pice.x+k][(current_pice.y+k)];

            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              if(player1_IDs.includes(c)){
                down_right = true;
              }else if(player2_IDs.includes(c)){
                if(down_right == false){
                  allowed_grids.push([(current_pice.x)+k,(current_pice.y)+k]);
                  
                }
                down_right = true;
              }
            }else if(current_pice.icon == "bQ.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(c)){
                down_right = true;

              }else if(player1_IDs.includes(c)){
                if(down_right == false){
                  allowed_grids.push([(current_pice.x)+k,(current_pice.y)+k]);
                  
                }
                down_right = true;
              }
            }else{
              
              midd_of_move = false;
              //current_player--;
              return;
            }

           if(down_right == false){
           allowed_grids.push([current_pice.x+k,current_pice.y+k]);
           }
          } catch(err){} 

          try{
            var d = Board[current_pice.x-k][(current_pice.y+k)];

            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              if(player1_IDs.includes(d)){
                down_left = true;
              }else if(player2_IDs.includes(d)){
                if(down_left == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)+k]);
                }
                down_left = true;
              }
            }else if(current_pice.icon == "bQ.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(d)){
                down_left = true;

              }else if(player1_IDs.includes(d)){
                if(down_left == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)+k]);
                }
                down_left = true;
              }
            }else{

              //current_player--;
              midd_of_move = false;
              return;
            }


            if(down_left == false){
                allowed_grids.push([current_pice.x-k, current_pice.y+k]);
            }
           
          } catch(err){} 
          //paste here
          try{

            var e = Board[current_pice.x-k][(current_pice.y)];
  
            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              console.log('white',current_player);
              if(player1_IDs.includes(e)){
                down = true;
              }else if(player2_IDs.includes(e)){
                if(down == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)])}
                down = true;
              }
            }else if(current_pice.icon == "bQ.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(e)){
                down = true;
  
              }else if(player1_IDs.includes(e)){
                if(down == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)])};
                down = true;
              }
            }else {
              midd_of_move = false;
              //current_player--;
              return;
            }
          
           if(down == false){
            var a = Board[current_pice.x-k][(current_pice.y)];
            allowed_grids.push([current_pice.x-k, current_pice.y]);
           }
             
           } catch(err){} 
  
           try{
            var l = Board[current_pice.x+k][(current_pice.y)];
  
            if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              console.log('white',current_player);
              if(player1_IDs.includes(l)){
                up = true;
              }else if(player2_IDs.includes(l)){
                if(up == false){allowed_grids.push([(current_pice.x)+k,(current_pice.y)])};
                up = true;
              }
            }else if(current_pice.icon == "bQ.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(l)){
                up = true;
  
              }else if(player1_IDs.includes(l)){
                if(up == false){allowed_grids.push([(current_pice.x)+k,(current_pice.y)])};
                up = true;
              }
            }else {
              midd_of_move = false;
              //current_player--;
              return;
            }
  
             if(up == false){
              allowed_grids.push([current_pice.x+k, current_pice.y]);
             }
             
           } catch(err){} 
  
  
           try{
           
             var f = Board[current_pice.x][(current_pice.y+k)];
  
             if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
               console.log('white',current_player);
              if(player1_IDs.includes(f)){
                left = true;
              }else if(player2_IDs.includes(f)){
                if(left == false){allowed_grids.push([(current_pice.x),(current_pice.y)+k])};
                left = true;
              }
            
            }else if(current_pice.icon == "bQ.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(f)){
                left = true;
  
              }else if(player1_IDs.includes(f)){
                if(left == false){allowed_grids.push([(current_pice.x),(current_pice.y)+k])};
                left = true;
              }
            }else {
              midd_of_move = false;
              //current_player--;
              return;
            }
             if(left == false){
               allowed_grids.push([current_pice.x, current_pice.y+k]);
             }
             
           } catch(err){} 
  
  
           try{
             var g = Board[current_pice.x][(current_pice.y-k)];
  
             if (current_pice.icon == "wQ.png" && (current_player%2 == 0)){
              if(player1_IDs.includes(g)){
                right = true;
              }else if(player2_IDs.includes(g)){
                if(right == false){allowed_grids.push([(current_pice.x),(current_pice.y)-k]);}
                right = true;
              }
            
            }else if(current_pice.icon == "bQ.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(g)){
                right = true;
  
              }else if(player1_IDs.includes(g)){
                if(right == false){allowed_grids.push([(current_pice.x),(current_pice.y)-k]);}
                
                right = true;
              }
            }else{
              midd_of_move = false;
              //current_player--;
              return;
            }
             if(right == false){
              allowed_grids.push([current_pice.x, current_pice.y-k]);
             }
             
           } catch(err){} 
        }

        allowed_grids.push([(current_pice.x),(current_pice.y)]);
        for(var j = 0; j<allowed_grids.length; j++){
          try{
           if((player1_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false) && (player2_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false)){
             bubbles.push(Board[allowed_grids[j][0]][allowed_grids[j][1]]);
             document.getElementById(Board[allowed_grids[j][0]][allowed_grids[j][1]]).src = "bubble.png";
           }
          } catch(err){}
        }

      }else if(current_pice.type == "Bishop"){
        var up_right = false;
        var up_left = false; 
        var down_right = false;
        var down_left = false;        
        var b = null;
        
        
        for(var k = 1; k<8; k++){    

          try{                                                              //up_right
            var a = Board[current_pice.x-k][(current_pice.y-k)];
            if (current_pice.icon == "wB.png" && (current_player%2 == 0)){
              if(player1_IDs.includes(a)){
                up_right = true;
              }else if(player2_IDs.includes(a)){
                if(up_right == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)-k]);
                  
                }
                up_right = true;
              }
            }else if(current_pice.icon == "bB.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(a)){
                up_right = true;

              }else if(player1_IDs.includes(a)){
                if(up_right == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)-k]);
                  
                }
                
                up_right = true;
              }
            }else {
              //current_player--;
              midd_of_move = false;
              return;
            }


            if(up_right == false){
              
              allowed_grids.push([(current_pice.x)-k,(current_pice.y)-k]);
              console.log("debugging",current_pice.x-k,current_pice.y-k);
            } 
          }catch(err){} 
            

          try{

            var b = Board[current_pice.x+k][(current_pice.y-k)];
 
            if (current_pice.icon == "wB.png" && (current_player%2 == 0)){
              if(player1_IDs.includes(b)){
                up_left = true;
              }else if(player2_IDs.includes(b)){
                if(up_left == false){allowed_grids.push([(current_pice.x)+k,(current_pice.y)-k]);}
                
                up_left = true;
              }
            }else if(current_pice.icon == "bB.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(b)){
                up_left = true;

              }else if(player1_IDs.includes(b)){
                if(up_left == false){allowed_grids.push([(current_pice.x)+k,(current_pice.y)-k]);
                  
                }
                up_left = true;
              }
            }else{
              //current_player--;
              midd_of_move = false;
              return;
            }


            if(up_left == false){
              allowed_grids.push([current_pice.x+k,current_pice.y-k]);
            }
            
          } catch(err){} 

         
          try{
            var c = Board[current_pice.x+k][(current_pice.y+k)];

            if (current_pice.icon == "wB.png" && (current_player%2 == 0)){
              if(player1_IDs.includes(c)){
                down_right = true;
              }else if(player2_IDs.includes(c)){
                if(down_right == false){
                  allowed_grids.push([(current_pice.x)+k,(current_pice.y)+k]);
                  
                }
                down_right = true;
              }
            }else if(current_pice.icon == "bB.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(c)){
                down_right = true;

              }else if(player1_IDs.includes(c)){
                if(down_right == false){
                  allowed_grids.push([(current_pice.x)+k,(current_pice.y)+k]);
                  
                }
                down_right = true;
              }
            }else{
              
              midd_of_move = false;
              //current_player--;
              return;
            }

           if(down_right == false){
           allowed_grids.push([current_pice.x+k,current_pice.y+k]);
           }
          } catch(err){} 

          try{
            var d = Board[current_pice.x-k][(current_pice.y+k)];

            if (current_pice.icon == "wB.png" && (current_player%2 == 0)){
              if(player1_IDs.includes(d)){
                down_left = true;
              }else if(player2_IDs.includes(d)){
                if(down_left == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)+k]);
                }
                down_left = true;
              }
            }else if(current_pice.icon == "bB.png" && (current_player%2 != 0)){
              if(player2_IDs.includes(d)){
                down_left = true;

              }else if(player1_IDs.includes(d)){
                if(down_left == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)+k]);
                }
                down_left = true;
              }
            }else{

              //current_player--;
              midd_of_move = false;
              return;
            }


            if(down_left == false){
                allowed_grids.push([current_pice.x-k, current_pice.y+k]);
            }
           
          } catch(err){} }
            
        
        allowed_grids.push([(current_pice.x),(current_pice.y)]);
        for(var j = 0; j<allowed_grids.length; j++){
          try{
           if((player1_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false) && (player2_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false)){
             bubbles.push(Board[allowed_grids[j][0]][allowed_grids[j][1]]);
             document.getElementById(Board[allowed_grids[j][0]][allowed_grids[j][1]]).src = "bubble.png";
           }
          } catch(err){}
        }

      }else if(current_pice.type == "Rook"){
        
        var down = false;
        var up = false;
        var right = false;
        var left = false;
        var b = null;
       
        allowed_grids.push([current_pice.x, current_pice.y]);
        for(var k = 1; k<8; k++){
        try{

          var e = Board[current_pice.x-k][(current_pice.y)];

          if (current_pice.icon == "wR.png" && (current_player%2 == 0)){
            console.log('white',current_player);
            if(player1_IDs.includes(e)){
              down = true;
            }else if(player2_IDs.includes(e)){
              if(down == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)])}
              down = true;
            }
          }else if(current_pice.icon == "bR.png" && (current_player%2 != 0)){
            if(player2_IDs.includes(e)){
              down = true;

            }else if(player1_IDs.includes(e)){
              if(down == false){allowed_grids.push([(current_pice.x)-k,(current_pice.y)])};
              down = true;
            }
          }else {
            midd_of_move = false;
            //current_player--;
            return;
          }
        
         if(down == false){
          var a = Board[current_pice.x-k][(current_pice.y)];
          allowed_grids.push([current_pice.x-k, current_pice.y]);
         }
           
         } catch(err){} 

         try{
          var l = Board[current_pice.x+k][(current_pice.y)];

          if (current_pice.icon == "wR.png" && (current_player%2 == 0)){
            console.log('white',current_player);
            if(player1_IDs.includes(l)){
              up = true;
            }else if(player2_IDs.includes(l)){
              if(up == false){allowed_grids.push([(current_pice.x)+k,(current_pice.y)])};
              up = true;
            }
          }else if(current_pice.icon == "bR.png" && (current_player%2 != 0)){
            if(player2_IDs.includes(l)){
              up = true;

            }else if(player1_IDs.includes(l)){
              if(up == false){allowed_grids.push([(current_pice.x)+k,(current_pice.y)])};
              up = true;
            }
          }else {
            midd_of_move = false;
            //current_player--;
            return;
          }

           if(up == false){
            allowed_grids.push([current_pice.x+k, current_pice.y]);
           }
           
         } catch(err){} 


         try{
         
           var f = Board[current_pice.x][(current_pice.y+k)];

           if (current_pice.icon == "wR.png" && (current_player%2 == 0)){
             console.log('white',current_player);
            if(player1_IDs.includes(f)){
              left = true;
            }else if(player2_IDs.includes(f)){
              if(left == false){allowed_grids.push([(current_pice.x),(current_pice.y)+k])};
              left = true;
            }
          
          }else if(current_pice.icon == "bR.png" && (current_player%2 != 0)){
            if(player2_IDs.includes(f)){
              left = true;

            }else if(player1_IDs.includes(f)){
              if(left == false){allowed_grids.push([(current_pice.x),(current_pice.y)+k])};
              left = true;
            }
          }else {
            midd_of_move = false;
            //current_player--;
            return;
          }
           if(left == false){
             allowed_grids.push([current_pice.x, current_pice.y+k]);
           }
           
         } catch(err){} 


         try{
           var g = Board[current_pice.x][(current_pice.y-k)];

           if (current_pice.icon == "wR.png" && (current_player%2 == 0)){
            if(player1_IDs.includes(g)){
              right = true;
            }else if(player2_IDs.includes(g)){
              if(right == false){allowed_grids.push([(current_pice.x),(current_pice.y)-k]);}
              right = true;
            }
          
          }else if(current_pice.icon == "bR.png" && (current_player%2 != 0)){
            if(player2_IDs.includes(g)){
              right = true;

            }else if(player1_IDs.includes(g)){
              if(right == false){allowed_grids.push([(current_pice.x),(current_pice.y)-k]);}
              
              right = true;
            }
          }else{
            midd_of_move = false;
            //current_player--;
            return;
          }
           if(right == false){
            allowed_grids.push([current_pice.x, current_pice.y-k]);
           }
           
         } catch(err){} 
       
      }


      allowed_grids.push([(current_pice.x),(current_pice.y)]);
      for(var j = 0; j<allowed_grids.length; j++){
        try{
         if((player1_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false) && (player2_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false)){
           bubbles.push(Board[allowed_grids[j][0]][allowed_grids[j][1]]);
           document.getElementById(Board[allowed_grids[j][0]][allowed_grids[j][1]]).src = "bubble.png";
         }
        } catch(err){}
      }
      
      }else if(current_pice.type == "Knight"){
        if((current_pice.icon == "bN.png" && current_player%2 != 0)||(current_pice.icon == "wN.png" && current_player%2 == 0)){
          try{
            var a = Board[current_pice.x+1][(current_pice.y-2)];
             allowed_grids.push([current_pice.x+1,current_pice.y-2]);
           } catch(err){}
  
           try{
            var a = Board[current_pice.x-1][(current_pice.y-2)];
             allowed_grids.push([current_pice.x-1,current_pice.y-2]);
           } catch(err){}
  
           try{
            var a = Board[current_pice.x-1][(current_pice.y+2)];
             allowed_grids.push([current_pice.x-1,current_pice.y+2]);
           } catch(err){}
  
           try{
            var a = Board[current_pice.x+1][(current_pice.y+2)];
             allowed_grids.push([current_pice.x+1,current_pice.y+2]);
           } catch(err){}
           //******************************************************
           try{
            var a = Board[current_pice.x+2][(current_pice.y+1)];
             allowed_grids.push([current_pice.x+2,current_pice.y+1]);
           } catch(err){}
  
           try{
            var a = Board[current_pice.x-2][(current_pice.y+1)];
             allowed_grids.push([current_pice.x-2,current_pice.y+1]);
           } catch(err){}
  
           try{
            var a = Board[current_pice.x+2][(current_pice.y-1)];
             allowed_grids.push([current_pice.x+2,current_pice.y-1]);
           } catch(err){}
  
           try{
            var a = Board[current_pice.x-2][(current_pice.y-1)];
             allowed_grids.push([current_pice.x-2,current_pice.y-1]);
           } catch(err){}
        }else{
          midd_of_move = false;
          return;
        }
        
        allowed_grids.push([current_pice.x , (current_pice.y)]);
         for(var j = 0; j<allowed_grids.length; j++){
           try{
            if((player1_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false) && (player2_IDs.includes(Board[allowed_grids[j][0]][allowed_grids[j][1]]) == false)){
              bubbles.push(Board[allowed_grids[j][0]][allowed_grids[j][1]]);
              document.getElementById(Board[allowed_grids[j][0]][allowed_grids[j][1]]).src = "bubble.png";
            }
           } catch(err){}
         }
      }

      
    }
  }else{
    var allowed_grids2 = []
    
    for(var num = 0; num<allowed_grids.length; num++){
      
       allowed_grids2.push(Board[allowed_grids[num][0]][allowed_grids[num][1]]);
    }
    
    if(allowed_grids2.includes(ID) == true){
      var player = null;
      if(player1_IDs.includes(current_pice.coordinates)){
         player = 'W';
         if(player1_IDs.includes(ID)){
           current_pice = null;
           midd_of_move = false;
           allowed_grids = [];
           allowed_grids2 = [];
           remove_bubbles();
            return 0 ;
         }
      }else{
         player = 'B';
         if(player2_IDs.includes(ID)){
           current_pice = null;
           midd_of_move = false;
           allowed_grids = [];
           allowed_grids2 = [];
           remove_bubbles();
          return 0 ;
       }
      }


      if (current_pice.coordinates == ID) {
      
        midd_of_move = false;       
        allowed_grids = [];
        allowed_grids2 = [];
        remove_bubbles();
        init_board();
        return 0;
      }
      var r,v;
      for(var n = 0; n<allowed_grids.length; n++){
        
        if(Board[allowed_grids[n][0]][allowed_grids[n][1]] == ID){
          r = allowed_grids[n][0];
          v = allowed_grids[n][1];
        }
      }
      document.getElementById(current_pice.coordinates).src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
      
      current_pice.x = r;
      current_pice.y = v;
      current_pice.coordinates = ID; 
     chick_clash_picee(current_pice);
      
      midd_of_move = false;      
      allowed_grids = [];
      allowed_grids2 = [];
      current_pice = null;
      current_player++;
      remove_bubbles();
      init_board();
      winner();
  }

 }
 
}
init_board();