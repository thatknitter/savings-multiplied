function getJSON(url, cb){	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onload = function(){
		cb(JSON.parse(xhr.responseText));	
	};
	xhr.send();
}

function addItemToList($list, item){
  var $li = document.createElement('li');
  var $img = document.createElement('img');
  var $price = document.createElement('p');
  var $remain = document.createElement('p');
  var $seller = document.createElement('p');
  var $title = document.createElement('p');
  debugger;
  $price.innerHTML = item.price;
  $remain.innerHTML = item.remaining;
  $seller.innerHTML = item.seller;
  $title.innerHTML = item.title;
  $img.src = item.image;
  $li.appendChild($img);
  $li.appendChild($price);
  $li.appendChild($remain);
  $li.appendChild($seller);
  $li.appendChild($title);
  $list.appendChild($li);
}

document.addEventListener("DOMContentLoaded", function(){
  var $target = document.getElementById("target");
  getJSON('https://savingsmultipliedssh.firebaseio.com/itemlist.json', function(data){
       var item = data;
       addItemToList($target, item);    
  });
        
  


});
