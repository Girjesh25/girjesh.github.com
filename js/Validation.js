$(function() {
    function validate() {
        if ($('#<%=txtName.ClientID%>').val() == "") {
            alert("1");
            return false;
        }
        
    }
});