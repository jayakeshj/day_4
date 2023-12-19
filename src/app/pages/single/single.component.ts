import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

  districts:any=[
    {
      id:1,
      title:"Alappuzha",
      paragraph:"Alappuzha, also known as Alleppey, is a captivating town in Kerala,South India, renowned for its mesmerizing backwaters, interwoven canals,and traditional houseboats. Often referred to as the Venice of theEast, Alappuzha offers a unique experience with its picturesquelandscapes adorned with coconut palms. Visitors can explore the tranquilbackwaters on traditional houseboats, witness the annual Nehru TrophyBoat Race, and enjoy the sandy shores of Alappuzha Beach. The town'shistoric lighthouse, coir industry, and vibrant local culture furthercontribute to its allure, making Alappuzha a delightful destination thatseamlessly combines natural beauty and cultural richness.",
      image:"https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/alleppey-backwaters-347.jpeg",
      content:"Also well-known as the 'Venice of the East' because of network of canals and waterways, Alappuzha is a district of immense natural beauty.It is embraced by the Arabian Sea in the west and has a network of lakes,lagoons and freshwater rivers criss-crossing it."
    },
    {
      id:2,
      title:"Ernakulam",
      paragraph:"Alappuzha, also known as Alleppey, is a captivating town in Kerala,South India, renowned for its mesmerizing backwaters, interwoven canals,and traditional houseboats. Often referred to as the Venice of theEast, Alappuzha offers a unique experience with its picturesquelandscapes adorned with coconut palms. Visitors can explore the tranquilbackwaters on traditional houseboats, witness the annual Nehru TrophyBoat Race, and enjoy the sandy shores of Alappuzha Beach. The town'shistoric lighthouse, coir industry, and vibrant local culture furthercontribute to its allure, making Alappuzha a delightful destination thatseamlessly combines natural beauty and cultural richness.",
      image:"https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/alleppey-backwaters-347.jpeg",
      content:"Also well-known as the 'Venice of the East' because of network of canals and waterways, Alappuzha is a district of immense natural beauty.It is embraced by the Arabian Sea in the west and has a network of lakes,lagoons and freshwater rivers criss-crossing it."
    },
    {
      id:3,
      title:"Kozhikode",
      paragraph:"Alappuzha, also known as Alleppey, is a captivating town in Kerala,South India, renowned for its mesmerizing backwaters, interwoven canals,and traditional houseboats. Often referred to as the Venice of theEast, Alappuzha offers a unique experience with its picturesquelandscapes adorned with coconut palms. Visitors can explore the tranquilbackwaters on traditional houseboats, witness the annual Nehru TrophyBoat Race, and enjoy the sandy shores of Alappuzha Beach. The town'shistoric lighthouse, coir industry, and vibrant local culture furthercontribute to its allure, making Alappuzha a delightful destination thatseamlessly combines natural beauty and cultural richness.",
      image:"https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/alleppey-backwaters-347.jpeg",
      content:"Also well-known as the 'Venice of the East' because of network of canals and waterways, Alappuzha is a district of immense natural beauty.It is embraced by the Arabian Sea in the west and has a network of lakes,lagoons and freshwater rivers criss-crossing it."
    },
    {
      id:4,
      title:"Palakkad",
      paragraph:"Alappuzha, also known as Alleppey, is a captivating town in Kerala,South India, renowned for its mesmerizing backwaters, interwoven canals,and traditional houseboats. Often referred to as the Venice of theEast, Alappuzha offers a unique experience with its picturesquelandscapes adorned with coconut palms. Visitors can explore the tranquilbackwaters on traditional houseboats, witness the annual Nehru TrophyBoat Race, and enjoy the sandy shores of Alappuzha Beach. The town'shistoric lighthouse, coir industry, and vibrant local culture furthercontribute to its allure, making Alappuzha a delightful destination thatseamlessly combines natural beauty and cultural richness.",
      image:"https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/alleppey-backwaters-347.jpeg",
      content:"Also well-known as the 'Venice of the East' because of network of canals and waterways, Alappuzha is a district of immense natural beauty.It is embraced by the Arabian Sea in the west and has a network of lakes,lagoons and freshwater rivers criss-crossing it."
    },
    {
      id:5,
      title:"Kollam",
      paragraph:"Alappuzha, also known as Alleppey, is a captivating town in Kerala,South India, renowned for its mesmerizing backwaters, interwoven canals,and traditional houseboats. Often referred to as the Venice of theEast, Alappuzha offers a unique experience with its picturesquelandscapes adorned with coconut palms. Visitors can explore the tranquilbackwaters on traditional houseboats, witness the annual Nehru TrophyBoat Race, and enjoy the sandy shores of Alappuzha Beach. The town'shistoric lighthouse, coir industry, and vibrant local culture furthercontribute to its allure, making Alappuzha a delightful destination thatseamlessly combines natural beauty and cultural richness.",
      image:"https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/alleppey-backwaters-347.jpeg",
      content:"Also well-known as the 'Venice of the East' because of network of canals and waterways, Alappuzha is a district of immense natural beauty.It is embraced by the Arabian Sea in the west and has a network of lakes,lagoons and freshwater rivers criss-crossing it."
    },
    {
      id:6,
      title:"Wayanad",
      paragraph:"Alappuzha, also known as Alleppey, is a captivating town in Kerala,South India, renowned for its mesmerizing backwaters, interwoven canals,and traditional houseboats. Often referred to as the Venice of theEast, Alappuzha offers a unique experience with its picturesquelandscapes adorned with coconut palms. Visitors can explore the tranquilbackwaters on traditional houseboats, witness the annual Nehru TrophyBoat Race, and enjoy the sandy shores of Alappuzha Beach. The town'shistoric lighthouse, coir industry, and vibrant local culture furthercontribute to its allure, making Alappuzha a delightful destination thatseamlessly combines natural beauty and cultural richness.",
      image:"https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/alleppey-backwaters-347.jpeg",
      content:"Also well-known as the 'Venice of the East' because of network of canals and waterways, Alappuzha is a district of immense natural beauty.It is embraced by the Arabian Sea in the west and has a network of lakes,lagoons and freshwater rivers criss-crossing it."
    },
    {
      id:7,
      title:"Idukki",
      paragraph:"Alappuzha, also known as Alleppey, is a captivating town in Kerala,South India, renowned for its mesmerizing backwaters, interwoven canals,and traditional houseboats. Often referred to as the Venice of theEast, Alappuzha offers a unique experience with its picturesquelandscapes adorned with coconut palms. Visitors can explore the tranquilbackwaters on traditional houseboats, witness the annual Nehru TrophyBoat Race, and enjoy the sandy shores of Alappuzha Beach. The town'shistoric lighthouse, coir industry, and vibrant local culture furthercontribute to its allure, making Alappuzha a delightful destination thatseamlessly combines natural beauty and cultural richness.",
      image:"https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/alleppey-backwaters-347.jpeg",
      content:"Also well-known as the 'Venice of the East' because of network of canals and waterways, Alappuzha is a district of immense natural beauty.It is embraced by the Arabian Sea in the west and has a network of lakes,lagoons and freshwater rivers criss-crossing it."
    },
    {
      id:8,
      title:"Trivandrum",
      paragraph:"Alappuzha, also known as Alleppey, is a captivating town in Kerala,South India, renowned for its mesmerizing backwaters, interwoven canals,and traditional houseboats. Often referred to as the Venice of theEast, Alappuzha offers a unique experience with its picturesquelandscapes adorned with coconut palms. Visitors can explore the tranquilbackwaters on traditional houseboats, witness the annual Nehru TrophyBoat Race, and enjoy the sandy shores of Alappuzha Beach. The town'shistoric lighthouse, coir industry, and vibrant local culture furthercontribute to its allure, making Alappuzha a delightful destination thatseamlessly combines natural beauty and cultural richness.",
      image:"https://www.tourism-of-india.com/pictures/travel_guide/attractions/thmb/alleppey-backwaters-347.jpeg",
      content:"Also well-known as the 'Venice of the East' because of network of canals and waterways, Alappuzha is a district of immense natural beauty.It is embraced by the Arabian Sea in the west and has a network of lakes,lagoons and freshwater rivers criss-crossing it."
    }
  ];

  constructor(public route: ActivatedRoute){

  }

  ngOnInit(){
    this.getDetails();

  }

  id:any;
  data:any;

  getDetails(){
    this.id=this.route.snapshot.params["id"];
    this.data=this.districts.filter((d:any) => d.id == this.id)
  }

}