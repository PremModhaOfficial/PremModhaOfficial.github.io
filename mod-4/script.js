
var names=new Array();
names[0]="Prem";
names[1]="Modha";
names[2]="ram";
names[3]="shyam";
names[4]="raju";
names[5]="bheem";
names[6]="chutki";
names[7]="dholu";
names[8]="bholu";
names[9]="Kaliya";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
