import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  title = 'angular';

name:string='45';
age:number=0;

districts:any=[
  {
    id:1,
    name:"Trivandrum",
    image:"https://tse2.mm.bing.net/th?id=OIP.6U4UN0KH5pVU7JEwY19OqQHaDt&pid=Api&P=0&h=180",
    description:"Trivandrum, the capital city of Kerala is the best place to start the visit. Trivandrum is the perfect gateway to backwaters and beaches."
  },
  {
    id:2,
    name:"kollam",
    image:"http://4.bp.blogspot.com/-1dIqboKxqKM/TkKHU6vFLcI/AAAAAAAABG0/Q5fGDnvT3NY/s1600/Kollam+Tourist+Places.jpg",
    description:"Kollam is the fourth largest city in Kerala. Kollam has some of the beautiful backwaters in Kerala. Famous Ashtamudi lake is situated in Kollam district"
  },
  {
    id:3,
    name:"Pathanamthitta",
    image:"https://www.keralatravels.com/userfiles/1474367718__1314.jpeg",
    description:"Pathanamthitta, the smallest district in God’s own country is renowned as the centre of Pilgrim Worship in Kerala. The famous shrine of Lord Ayyappa in Sabari hills is situated in Pathanamthitta. Every year crores of pilgrims visit the adobe of Ayyappa in the sacred sabari hills.Pathanamthitta is also known for learning and experiencing of many cultural and traditional practices of Kerala. This is a land of cultural training centres, water fiestas and pilgrim centres."
  },
  {
    id:4,
    name:"Alappuzha",
    image:"https://wallpapercave.com/wp/wp7877187.jpg",
    description:"Alleppey vacations promise to offer loads of fun, beauty and adventure. If you want to take a break from the stressful daily life travel to Alleppey and make your holidays the most memorable one. Alleppey also known as Alappuzha is the city of canals and lagoons. Alleppey is the hub of backwater tourism. This huge backwaters of canals, lagoons and lakes provide the lifeline of Alleppey."
  },
  {
    id:5,
    name:"Kottayam",
    image:"https://d3f6ixrx8a9kmw.cloudfront.net/data/v4/destinations/ca654294-af2b-4ef7-b6ed-0a7682bedd43/resources/31292.jpg",
    description:"Kottayam is a wonderful district in Central Kerala bordered by the lofty Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. Kuttanad is blessed with serene backwater stretches, lush paddy fields, hills and hillocks, rubber plantations and many more attractions."
  },
  {
    id:6,
    name:"Ernakulam",
    image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/FotoJet-cover-erna.jpg",
    description:"Apart from Kochi there are so many interesting places in Ernakulam. Some of the must visit places in here include: This historically important palace built by Portuguese is one of the marvellous attractions in Ernakulam. Mattancherry Palace also called as the Dutch palace draws thousands of tourists with its elegant charm. The architectural beauty .."
  },
  {
    id:7,
    name:"Idukki",
    image:"https://keralatourism.travel/images/destinations/headers/idukki-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    description:"A landlocked district, Idukki is one of the most nature rich areas of Kerala. High ranges and wooded valleys are girded by three main rivers – Periyar, Thalayar and Thodupuzhayar – and their tributaries. The River Pamba also has its origin here. As a tourist destination, Idukki offers diverse attractions like Wildlife sancturies, Hill stations, Dams, Spece plantation tours, Mountain treks, Elephant rides etc."
  },
  {
    id:8,
    name:"Thrissur",
    image:"https://wallpapercave.com/wp/wp8050617.jpg",
    description:"Officially known as the cultural capital of Kerala, Thrissur is famous for fostering classical Keralan performing arts, religious sites and the renowned  Thrissur Pooram festival, Onam festival and Vadakkumnathan Temple.Thrissur is the short form of Thiru-Shiva-Per-Ur which literally means “a city with three temples of Lord Shiva”. Thrissur later became anglicised to Trichur. "
  },
  {
    id:9,
    name:"Kozhikodu",
    image:"https://www.holidify.com/images/compressed/3896.jpg?v=1.1",
    description:"With her natural beauty, the folklore and the glorious past Kozhikode is an ideal holiday destination. There are a number of attractions in Kozhikode which worth a visit. Mananchira Square, a man made fresh water lake situated at the heart of the city is the landmark of Kozhikode. This was originally the private bath of Zamorins. Mananchira Square ..."
  },
  {
    id:10,
    name:"Wayanad",
    image:"https://images.thrillophilia.com/image/upload/s--ZVFrJBLk--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/118/245/original/1520674557_kerala-top.jpg.jpg",
    description:"Wayanad is an agrarian district located in the north-east region of the Indian state of Kerala, at the southernmost tip of the Deccan Plateau.It is known for its cool climate, misty peaks and green forests. The whole area is totally green with hills and vallies and natural life. In the east one can find Wayanad Wildlife Sanctuary which is a rich, forested locale with regions of high elevation and home to creatures including Asiatic elephants, tigers and panthers. In the Ambukuthi Hills toward the south, one can find Edakkal Caves which contain antiquated petroglyphs, some ageing back to the Neolithic age."
  },
  {
    id:11,
    name:"Malappuram",
    image:"https://www.fundayholidays.com/wp-content/uploads/2019/11/cheruppadimala.jpg",
    description:"Malappuram district has a rich and vibrant history. The military headquarters of the Zamorins of Kozhikode since ancient times, this district was the site for many of the Mappila Revolts (uprising against the British East India Company in Kerala) between 1792 and 1921. Malappuram literally means a land atop hills and the region is enriched by three great rivers flowing through it - the Chaliyar, Kadalundi and the Bharathapuzha."
  },
  {
    id:12,
    name:"Palakkadu",
    image:"https://keralatourism.travel/images/destinations/headers/palakkad-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    description:"Palakkad is one of the fourteen districts of Kerala and has no coastal line. The district opens the state to the rest of the country through the Palakkad Gap with a width of 32 to 40 Kms. Its geographical position, historical background, educational status, tourism hot-spots and above all, the development activities that are carried out, are wide and varied. The district is one of the main granaries of Kerala and its economy is primarily agricultural. The district is also the land of Palmyrahs."
  },
  {
    id:13,
    name:"Kannur",
    image:"https://tse1.mm.bing.net/th?id=OIP.79Oy7ouE5YXoCLBm13ThVQHaEn&pid=Api&P=0&h=180",
    description:"Located on the Malabar Coast of Kerala, Kannur (fondly known as Cannanore), is a beautiful city bundled with a plethora of sightseeing options like beaches, monuments, ancient temples and picnic spots.Steeped in the distinctive local art forms like Theyyam, Kannur still has an aura of the bygone colonial era. The deep footprints of the Dutch, the Portuguese, the British and the Mysore Sultanate are still imbibed into the town and can be witnessed all around."
  },
  {
    id:14,
    name:"Kasargod",
    image:"https://media-cdn.tripadvisor.com/media/photo-s/1a/0d/b1/d4/img-20191117-160707-largejpg.jpg",
    description:"Kasargod, the land of seven languages and several cultures. The place of harmonious coexistence of Hindu, Muslim, Christian religions. The district has famous tourist centres, including the international fame BEKAL FORT & BEACH. There are also places which can be converted to attract the tourists. Kasaragod is known as the Land of Gods, Forts, Rivers, Beautiful hills and lengthy sandy beaches. visit to these places evoke enthralling moments to the visitors."
  }
];



challenge(){
  alert('The name is '+this.name)
}






}
