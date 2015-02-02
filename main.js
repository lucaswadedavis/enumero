var enumero=function(sample,n,spaces){
	var spaces=spaces||false;
	var n=n||1;
	var lex={};
	var sample=sample.toLowerCase();
	if (spaces==true){
		sample=sample.split(" ");
	}
	else{
		sample=sample.split("");
	}

	app.m.sampleLength=sample.length;

	for (var i=0;i<=(sample.length-n);i++){
		//then populate the lexicon
			var compilation=[];
			for (var j=0;j<n;j++){
				compilation.push(sample[i+j])
			}
			if (spaces==true){
				compilation=compilation.join(" ");
			}
			else{
				compilation=compilation.join("");
			}

		if (!lex[compilation]){
			lex[compilation]={};
			lex[compilation].count=1;
		}
		else{
			lex[compilation].count++;
		}
	}
	return lex;
};

