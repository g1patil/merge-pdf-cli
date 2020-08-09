#!/usr/bin/env node
const merge = require('easy-pdf-merge');
var args = process.argv.slice(2);

if(args.length == 0 || args.length ==1){
    console.log('Few or No files provided');
    console.log('command : merge-pdf file.pdf test.pdf ');
    process.exit();
}

merge(args,'merged-pdf.pdf',function(err){
  if(err) {
    return console.log(err)
  }
  console.log('Successfully created merged file : merged-pdf.pdf');
});