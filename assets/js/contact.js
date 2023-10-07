document.getElementById('sendMail').addEventListener('submit', function(e){
    e.preventDefault();
    $('.wait').show();
    let formdata = new FormData(this);
    const post_data = {
        name: formdata.get('name'),
        email: formdata.get('email'),
        subject: formdata.get('subject'),
        message: formdata.get('message'),
    }
    $.ajax({
        url: 'https://dydxmultitasking.in/api/index.php?api=1.0&user_id=1&action=mail_send_from_rvlancersolutions&token=testtoken_rohit&api_version=1.0.0',
        type: 'POST',
        data: post_data,
        success: function(res){
            let ar = res.split(' ');
            let successAr = ['Email', 'was', 'sent'];
            let findWord = [];
            ar.forEach(function(word){
                if(successAr.includes(word)){
                    console.log(word);
                    findWord = [...findWord,word];
                }
            });
            let text = findWord.toString();
            let text2 = successAr.toString();
            if(text == text2){
                window.location.href='./success.html';
            }else{
                alert('Some technical issue occur');
            }
        }
    });
});