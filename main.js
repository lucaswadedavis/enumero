var enumero=function(sampleText,n,splitOnSpaces,gaps){
  var splitOnSpaces=splitOnSpaces||false;
	var n=n||1;
	var lex={};
	var sampleText=sampleText.toLowerCase();
	if (splitOnSpaces==true){
		sample=sample.split(" ");
	}
	else{
		sample=sample.split("");
	}
	//at this point we have sampleText: the input text in lower case
	//and sample: the array of sampleText's constituents.
	//as well as lex: our eventual (but as-so-far-yet empty lexicon)
	
	//we'll need a Token class.
	
	var Token=function(identity){
	  this.identity=identity;
	  this.count=1;
	  this.instances=[];
	}
	
	//count things
	
	for (var i=0;i<sample.length;i++){
	  var token=sample[i];
	  if (lex[token]){
	    lex[token].count++;
	  } else {
	    lex[token]=new Token(token);
	  }
	}
	
	return lex;
};

