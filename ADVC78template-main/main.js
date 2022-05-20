var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg" , "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://st2.depositphotos.com/2435397/8050/i/450/depositphotos_80500412-stock-photo-cartoon-older-woman.jpg", "https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://t4.ftcdn.net/jpg/02/45/13/75/360_F_245137550_Q9fbN1XemwMrrTXf9njmgUhjS4G7aVgq.jpg"];
var names = ["Family Book","Ravi Kumar", "Divya Sree", "Shasmika", "Dharma Goud", "Vijaya", "Kireeti", "Agasthya", "Aditya"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
