const delay = ms => new Promise(res => setTimeout(res, ms));

jQuery('#contactForm').on('submit',function(e){
    e.preventDefault();
    jQuery('#btnSubmit').html('Please wait...');
    jQuery('#btnSubmit').attr('disabled',true);
    jQuery.ajax({
      url:'https://script.google.com/macros/s/AKfycby0ExUCOO-cfE95pIr21jqsNUP7FldEs06ZaVMF5U5MaWPRP-Z2LxQc9VbwGQaoAAH-/exec',
      type:'post',
      data:jQuery('#contactForm').serialize(),
      success: async function(result){
        jQuery('#contactForm')[0].reset();
        jQuery('#btnSubmit').html('Thank You');
        jQuery('#btnSubmit').attr('disabled',false);
        await delay(5000)
        jQuery('#btnSubmit').html('Submit');
        //window.location.href='';
      }
    });
    });