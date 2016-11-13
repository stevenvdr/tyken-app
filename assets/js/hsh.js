
function readBlob(id, msg, callback) {

  var files = $(id + ' input')[0].files;
  if (!files.length) {
    console.log('Please select a file!');
    return;
  }

  var file = files[0];
  var start =  0;
  var stop = file.size - 1;

  var reader = new FileReader();

  // If we use onloadend, we need to check the readyState.
  reader.onloadend = function (evt) {
      if (evt.target.readyState == FileReader.DONE) { 
        $(id + ' .byte_range')[0].textContent = 
            ['Read bytes: ', start + 1, ' - ', stop + 1,
              ' of ', file.size, ' byte file'].join('');
        var hash = Sha256.hash(evt.target.result,'string');        
        $(id + ' .hashiresult')[0].textContent = msg + hash;
        callback(hash);
      }
    };

  var blob = file.slice(start, stop + 1);
  reader.readAsBinaryString(blob);
}

$(document).ready(function(){  
  document.querySelector('#verifydiv').addEventListener('click', function(evt) {
    if (evt.target.tagName.toLowerCase() == 'button') {
		$('#verifysuccess').addClass("hidden");
		$('#verifyfail').addClass("hidden");
		readBlob('#verifydiv', "Hash correctly computed: ", checkCertificate);
    } 
  }, false);

  document.querySelector('#certifydiv').addEventListener('click', function(evt) {
    if (evt.target.tagName.toLowerCase() == 'button') {
      $('#certifysuccess').addClass("hidden");
  		$('#certifyfail').addClass("hidden");
      readBlob('#certifydiv', "Hash correctly computed: ", issueCertificate);
    }
  }, false);
});