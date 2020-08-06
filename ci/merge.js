#!/usr/bin/env node
const merge = require('easy-pdf-merge');
console.log("Hello World");
var args = process.argv.slice(2);

if(args.length == 0 || args.length ==1){
    console.log('Few or No files provided');
    process.exit();
}

merge(args,'merged-pdf.pdf',function(err){
  if(err) {
    return console.log(err)
  }
  console.log('Success')
});