import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalesService {

	allInfo: any[];

  constructor() { 

     this.allInfo = [

			{
			    "id" : 1,
			    "name" : "Said",
			    "country": "Maroc",
			    "adress" : "cyn rabat",
			    "profil" : "dev full stack",
			    "ced": 3,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 2,
			    "name" : "barry",
			    "country": "France",
			    "adress" : "cyn paris",
			    "profil" : "dev Go",
			    "ced": 1,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 3,
			    "name" : "Said",
			    "country": "Maroc",
			    "adress" : "cyn rabat",
			    "profil" : "dev python",
			    "ced": 4,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 4,
			    "name" : "Amine",
			    "country": "Maroc",
			    "adress" : "cyn rabat",
			    "profil" : "dev .net",
			    "ced": 3,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 5,
			    "name" : "Ali",
			    "country": "Maroc",
			    "adress" : "cyn rabat",
			    "profil" : "dev nodejs",
			    "ced": 5,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 6,
			    "name" : "Adil",
			    "country": "Maroc",
			    "adress" : "cyn rabat",
			    "profil" : "dev rectjs",
			    "ced": 3,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 7,
			    "name" : "Billal",
			    "country": "Maroc",
			    "adress" : "cyn rabat",
			    "profil" : "dev vusjs",
			    "ced": 4,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 8,
			    "name" : "Mohammed",
			    "country": "egypte",
			    "adress" : "cyn egy",
			    "profil" : "dev aangular",
			    "ced": 3,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 9,
			    "name" : "Youseef",
			    "country": "algerie",
			    "adress" : "cyn algeri",
			    "profil" : "dev java",
			    "ced": 2,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 10,
			    "name" : "ahmed",
			    "country": "Canada",
			    "adress" : "cyn canada",
			    "profil" : "dev php",
			    "ced": 1,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 11,
			    "name" : "Said",
			    "country": "algerie",
			    "adress" : "cyn algeri",
			    "profil" : "dev java",
			    "ced": 2,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			},
			{
			    "id" : 12,
			    "name" : "Youness",
			    "country": "Canada",
			    "adress" : "cyn canada",
			    "profil" : "dev php",
			    "ced": 1,
			    "datec" : "12/12/2019",
			    "desc" : "tao tato tao tao tao ao tato tao tao tao  ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao ao tato tao tao tao "
			}	


     ];
  }


}
