$(document).ready(function(){
  $("#subscription_form_submit").click(function(){
    var ec_cust_name =  $("#footer_subscription_customer_name").val();
    var ec_cust_phone = $("#footer_subscription_customer_phone").val(); 
    
    if ($("#footer_subscription_customer_name,#footer_subscription_customer_phone").filter(function() { return $(this).val(); }).length > 0) {
      $('#subscribe_success_modal12431243').modal('show'); 
    }
    
    var ec_subscription_msg = "Assalamualaikum " + ec_cust_name + ", Thank you for subscribing to ILYN.";
    console.log(ec_subscription_msg);
    
    var url = "http://bangladeshsms.com/smsapi?api_key=C200038059f06f05487361.76812382&amp;type=text&amp;contacts="+ec_cust_phone+"&amp;senderid=8804445629100&amp;msg="+ec_subscription_msg;

    $.get(url,function(data,status) {
    },'html');
    
  });
});