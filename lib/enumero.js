var enumero=function(sampleText,n,splitOnSpaces,gaps){
  var splitOnSpaces=splitOnSpaces||true;
	var n=n||1;
	var lex={};
	var sampleText=sampleText.toLowerCase();
	if (splitOnSpaces==true){
		sample=sampleText.split(" ");
	}
	else{
		sample=sampleText.split("");
	}
	//at this point we have sampleText: the input text in lower case
	//and sample: the array of sampleText's constituents.
	//as well as lex: our eventual (but as-so-far-yet empty lexicon)
	
	//we'll need a Token class.
	
	var Token=function(identity){
	  this.identity=identity;
	  this.count=1;
	  this.instances=[];
	};
	
	//count things
	
	for (var i=0;i<sample.length-2;i++){
	  var token=sample[i]+" \\b\\w*\\b "+sample[i+2];
	  if (!lex[token]){
	  	lex[token]=new Token(token);
	  	for (var j=0;j<sample.length-2;j++){
	  		if (sample[i]===sample[j] && sample[i+2]===sample[j+2]){
	  			lex[token].instances.push(sample[j]+" "+sample[j+1]+" "+sample[j+2]);
	  		}
	  	}
	  } else {
	  	lex[token].count++;
	  }
	}
	
	return lex;
};

