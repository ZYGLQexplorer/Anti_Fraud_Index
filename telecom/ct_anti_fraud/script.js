$(function (){
	
	var parameter = getQueryString("parameter");
	sendMessage(parameter);
	
    function doSuit(el, pageWidth, pageHeight) {
        var h = pageHeight
        var w = pageWidth
        var iw = window.innerWidth
        var ih = window.innerHeight
        // el.style.transformOrigin = '0 0'
        // el.style.overflow = 'hidden'
        // el.style.transform = `scale(${iw / w},${ih / h})`
    }
	
    function autoSuit(el, pageWidth, pageHeight) {
        // doSuit(el, pageWidth, pageHeight)

        // window.addEventListener('resize', () => {
        //     doSuit(el, pageWidth, pageHeight)
        // })
    }

    if(window.innerWidth < 1600){
        // autoSuit(document.body, 1600, 900)
    }

    document.body.style.opacity = 1

    //console.log(window.innerWidth,111)

})



function getQueryString(name){ 
     var reg  = new   RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
     var r  =  window.location.search.substr(1).match(reg); 
     if(r!=null){
		return  r[2]; 
	 }  
	 return ''; 
}

function sendMessage(parameter){
	try {
		$.ajax({
			url:"/warning",
			type:"GET",
			data:{param:parameter},
			success:function(data){
			//console.log('success',data)
			},
            error:function(err) {
               //console.log('fail',err)
            }
		});	 
	} catch (e) {
		console.log('fail',e)
	}
	
}
