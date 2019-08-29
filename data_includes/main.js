PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "details", "trial", "trialbunny", "trialbunny2", "introductionanimals", "experiment", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Salutare tuturor! </p>")
    ,
    newText("<p> Salutare tuturor, vom juca un joc foarte distractiv împreună cu un vrăjitor, un pui de dragon, nişte umbre care aparţin unor animale şi sunete făcute de ele. (Fii atent şi la sunete deci.) </p>" ),
    newText("<p> Te rog introdu ID-ul tău, răspunde la nişte întrebări, iar apoi fă click pe butonul de mai jos pentru a începe experimentul.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
     newText("<p> Ce vârstă ai? </p>"),
    newTextInput("Age")
        .print()
	       ,
	  newText("<p> Ce sex ai? (M/ F/ Altul) </p>"),
	       newTextInput ("Gender")
        .print()
	       , 
	        newText("<p> Cu ce te ocupi?</p>"),
	    newTextInput ("Profession")  
        .print()
	       ,
	       newText ("<p>Pentru a trece la pagina următoare pe parcursul jocului, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID")))
	      
.log( "ID" , getVar("ID") );
PennController("welcome" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> A fost odată ca niciodată, într-un ţinut îndepărtat, un vrăjitor foarte talentat pe nume Merlin, căruia îi plăcea foarte mult să se joace cu umbre şi să îi facă pe ceilalţi să ghicească ale cui sunt. </p>")
	    ,
	                  
	     newImage ("wizardanddragon.png")
               .print ()
	   
	       ,
	       newKey(" ")
        .wait());
PennController("details" ,
	    defaultText
	        .print()
	    
	       ,
newText ("<p> Acum Merlin joacă jocul umbrelor cu un pui de dragon foarte drăguţ care trebuie să ghicească a cărui animal este umbra pe care o are în faţa sa.</p>")
	,
newText("<p> Pentru a îl ajuta pe puiul de dragon, acesta va vedea alături de umbră atât toate animalele din joc, cât şi animalele care se află atunci pe scenă. </p>")
,	       
newText ("<p> Când ghiceşte a cui e umbra în mod corect, trebuie să recompensezi puiul de dragon cu un măr mare, iar atunci când nu ghiceşte a cui e umbra, îi dai doar un măr mic. </p>")
,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	    
PennController("trial" ,
	    defaultText
	        .print()
	    
	       ,
newText ("<p> Hai să facem cunoştinţă cu un iepuraş foarte drăguţ. </p> "),
	       newImage ("smallpinkbunny", "smallpinkbunny.png")
	       .print ()
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
)
;

PennController("trialbunny" ,
	    defaultText
	        .print()
	    
	       ,
	       newText 
	       ("<p> Hop-hop, iată că s-a dus în spatele cortinei. Pentru a răsplăti dragonul, fă pur şi simplu click pe mărul dorit.</p>"),
	      
	       newImage ("bunnyshadowallbunnies", "bunnyshadowallbunnies.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Puiul de dragon: Este o vacă. </p>")
	       ,
	       newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("trialbunny2" ,
	    defaultText
	        .print()
	    
	       ,
	       
	      
	       newImage ("bunnyshadowallbunnies", "bunnyshadowallbunnies.png")
	       .print ( )
	       ,
	       newText ("<p> Puiul de dragon: Este un iepuraş. </p>")
	       ,
	       newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> Hai acum să facem cunoştinţă cu celelalte animale din spectacol. Avem un grup de trei câini. </p>")
	    ,
	                  
	     newImage ("threedogs.png")
               .print ()
	       ,
	       newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	      )
;

PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	   
	       newText ("<p> Un grup de trei broaşte. </p>")
	    ,
	                  
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       )
;       
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> Un grup de trei pisici. </p>")
	    ,
	                  
	     newImage ("threecats.png")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> Un grup de trei vaci. </p>")
	    ,
	                  
	     newImage ("threecows.png")
               .print ()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Toate animalele au plecat de pe scenă. Hai să vedem dacă puiul de dragon ghiceşte animalul după umbra de pe cortină şi să îl răsplătim.</p>")
		,
		newImage ("dogshadowalldogs", "dogshadowalldogs.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,

		newText ("<p> Puiul de dragon: Sigur că este un câine. </p>")
	       ,
	        newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowalldogs", "dogshadowalldogs.png")
               .print ()
		,
	
		newText ("<p> Puiul de dragon: Poate că este o pisică. </p>")
	       ,
	      newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowalldogs", "dogshadowalldogs.png")
               .print ()
		,

	       newText ("<p> Puiul de dragon: Sigur că este o pisică. </p>")
	       ,
	       newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowalldogs", "dogshadowalldogs.png")
               .print ()
		,

	       newText ("<p> Puiul de dragon: Poate că este un câine </p>")
	       ,
	       newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Foarte bine. Într-adevăr, umbra e a unui câine, a unuia din cei trei câini pe care i-ai văzut la început.</p>")
	     ,
	       newImage ("threedogs.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Acum umbra se poate încă vedea dar câinele galben s-a întors înapoi pe scenă.</p>")
	          ,        
	     newImage ("yellowdog.png")
               .print ()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,

		newText ("<p> Hai să vedem ce zice puiul de dragon despre umbră şi să îl răsplătim. </p>")
	       ,
		newText ("<p> Puiul de dragon: Poate că este câinele roşu.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este câinele roşu. </p>")
		,
	        newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este câinele galben.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este câinele galben.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este câinele albastru.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	        ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowonedogonstage", "dogshadowonedogonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este câinele albastru.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	        ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Umbra este încă în lumina reflectoarelor dar câinele roşu s-a întors şi el pe scenă, alăturându-se câinelui galben.</p>")
	         ,         
	     newImage ("twodogs.png")
               .print ()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Hai acum să vedem ce are de zis puiul de dragon despre umbră şi să îl răsplătim. </p>")
		,
		newText ("<p> Puiul de dragon: Sigur că este câinele roşu.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newAudio("barking", "barking.mp3")
		.play()
		,
		newText ("<p> Puiul de dragon: Sigur că este câinele albastru.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	        ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;


PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
	
		newText ("<p> Puiul de dragon: Poate că este câinele albastru.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	        ,
		
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("dogshadowtwodogsonstage", "dogshadowtwodogsonstage.png")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este câinele roşu.</p>")
		,
		newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	        ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem a cui este umbra. Pam-pam! Este câinele albastru! </p>")
	         ,         
	     newImage ("bluedogonstage.jpg")
               .print ()
	       ,
	       	newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
)
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să trecem acum la grupul broaştelor. </p>")
	    ,
	                  
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
	        newText ("<p> Acum se duc toate în spatele cortinei. </p>") 
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să ne uităm la umbra pe care puiul de dragon o vede şi să îl răsplătim pentru ce spune.</p>")
		,
		newImage ("frogshadow.jpg")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,

		newText ("<p> Puiul de dragon: Poate că este un câine. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Sigur că este o broască. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este un câine. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este o broască. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Foarte bine. Într-adevăr, umbra e a unei broaşte, a uneia din cele trei broaşte pe care le-ai văzut la început..</p>")
	         ,         
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Umbra este încă acolo dar broasca albastră s-a întors pe scenă.</p>")
	          ,        
	     newImage ("bluefrog.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newAudio("frogsoundsshort", "frogsoundsshort.mp3")
		.play()
		,

		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbră şi să îl răsplătim. </p>")
	       ,
		newText ("<p> Puiul de dragon: Sigur că este broasca mov.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este broasca roşie.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este broasca albastră.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este broasca mov.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
	
		,
		newText ("<p> Puiul de dragon: Sigur că este broasca roşie.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este broasca albastră.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Uite, nu e broasca mov. Broasca mov a revenit din spatele cortinei, alăturându-se broaştei albastre, dar umbra este încă acolo.</p>")
	         ,         
	     newImage ("twofrogs.png")
               .print ()
	       ,
	       newAudio("frogsoundsshort", "frogsoundsshort.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
		,
		newText ("<p> Hai să vedem ce zice puiul de dragon despre umbră şi să îl răsplătim. </p>")
		,
		newText ("<p> Puiul de dragon: Poate că este pisica roşie.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Sigur că este pisica roşie.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este broasca roşie.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("frogshadow.jpg")
               .print ()
		,
		
		newText ("<p> Puiul de dragon: Sigur că este broasca roşie. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem a cui este umbra. Pam-pam! Este broasca roşie! </p>")
	         ,         
	     newImage ("redfrogrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
)
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să trecem la grupul pisicilor. </p>")
	    ,
	                  
	     newImage ("threecats.png")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
		,
	        newText ("<p> Acum toate pisicile se duc după cortină. </p>") 
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce zice puiul de dragon despre umbră şi să îl răsplătim. .</p>")
		,
		newImage ("catshadow.jpg")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,

		newText ("<p> Puiul de dragon: Poate că este un câine. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Sigur că este o pisică. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este un câine. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este o pisică. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Foarte bine. Într-adevăr, umbra e a unei pisici, a uneia din cei trei pisici pe care le-ai văzut la început. </p>")
	         ,         
	     newImage ("threecats.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Acum umbra se poate încă vedea dar pisica verde s-a întors înapoi pe scenă.</p>")
	          ,        
	     newImage ("greencat.jpg")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,

		newText ("<p> Hai acum să vedem ce zice puiul de dragon despre umbră şi să îl răsplătim. </p>")
	       ,
		newText ("<p> Puiul de dragon: Poate că este pisica albastră.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
	
		newText ("<p> Puiul de dragon: Poate că este pisica verde.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este pisica roz.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este pisica roz.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
	
		,
		newText ("<p> Puiul de dragon: Sigur că este pisica albastră.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este pisica verde.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Uite, nu e pisica albastră. Pisica albastră a revenit pe scenă, alăturându-se pisicii verzi, dar umbra este încă acolo.</p>")
	         ,         
	     newImage ("twocats.jpg")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newAudio("catsounds", "catsounds.mp3")
		.play()
		,
		newText ("<p> Hai să vedem ce zice puiul de dragon despre umbră şi să îl răsplătim. </p>")
	
		,
		newText ("<p> Puiul de dragon: Sigur că este pisica roz.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este iepurele roz.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este pisica roz.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("catshadow.jpg")
               .print ()
		,
		
		newText ("<p> Puiul de dragon: Sigur că este iepurele roz. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai acum să vedem a cui este umbra.Pam-pam! Este pisica roz! </p>")
	         ,         
	     newImage ("pinkcatrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
)
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să trecem mai departe la grupul vacilor. </p>")
	    ,
	                  
	     newImage ("threecows.png")
               .print ()
	       ,
	       newAudio("cowsounds", "cowsounds.mp3")
		.play()
		,
	        newText ("<p> Acum toate vacile se duc în spatele cortinei. </p>") 
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbră şi să îl răsplătim .</p>")
		,
		newImage ("cowshadow.jpg")
               .print ()
		,
		newAudio("cowsounds", "cowsounds.mp3")
		.play()
		,

		newText ("<p> Puiul de dragon: Sigur că este o pisică. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este o vacă. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este o vacă. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este o pisică. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Foarte bine. Într-adevăr, umbra e a unei vaci, a uneia din cele trei vaci pe care le-ai văzut la început.</p>")
	         ,         
	     newImage ("threecows.png")
               .print ()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Acum umbra se poate încă vedea dar vaca portocalie s-a întors înapoi pe scenă.</p>")
	          ,        
	     newImage ("orangecow.png")
               .print ()
	       ,
	       newAudio("cowsounds", "cowsounds.mp3")
		.play(),
	       
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newAudio("cowsounds", "cowsounds.mp3")
		.play()
		,

		newText ("<p> Hai să vedem ce zice puiul de dragon despre umbră şi să îl răsplătim. </p>")
	       ,
		newText ("<p> Puiul de dragon: Sigur că este vaca verde.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că  este vaca galbenă.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este vaca portocalie.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Poate că este vaca verde.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
	
		,
		newText ("<p> Puiul de dragon: Sigur că este vaca galbenă.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Poate că este vaca portocalie.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Uite, nu este vaca galbenă! Vaca galbenă a venit din spatele cortinei şi s-a alăturat celei portocalii, dar umbra este încă în acelaşi loc.</p>")
	         ,         
	     newImage ("twocows.png")
               .print ()
	       ,
	       newAudio("cowsounds", "cowsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newAudio("cowsounds", "cowsounds.mp3")
		.play()
		,
		newText ("<p> Hai să vedem ce spune puiul de dragon despre umbră şi să îl recompensăm. </p>")
		,
		newText ("<p> Puiul de dragon: Poate că este vaca verde.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;

PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,

		newText ("<p> Puiul de dragon: Sigur că este pisica verde.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		newText ("<p> Puiul de dragon: Sigur că este vaca verde.</p>")
		,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController ("experiment",
		defaultText
	        .print(),
		newImage ("cowshadow.jpg")
               .print ()
		,
		
		newText ("<p> Puiul de dragon: Poate că este pisica verde. </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("experiment" ,
	    defaultText
	        .print(),
	       newText ("<p> Hai să vedem acum a cui este umbra. Pam-pam! Este vaca verde! </p>")
	         ,         
	     newImage ("greencowrevealedonstage.jpg")
               .print ()
	       ,
	       newAudio("cowsounds", "cowsounds.mp3")
		.play()
		,
	       newKey(" ")
        .wait()
	       
)
;
PennController.SendResults( "send" );
PennController( "final" ,
    newText("<p> Puiul de dragon spune “Mulţumesc” pentru mere şi la fel şi vrăjitorul! Pa-pa! :) Mulţumesc pentru participare!</p>")
        .print()
	       ,
	newImage ("dragon.png")
     .print ()
    ,
    newText("<p><a href='https://www.put.your/platform/confirmation/link.here'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
	       )

  
