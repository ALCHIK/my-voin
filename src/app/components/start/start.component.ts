import { Component, OnInit} from '@angular/core';

import {InfoService} from '../../services/info.service';
import {Equipment} from '../../models/equipment.model';
import {Description} from '../../models/description.model';
import {Person} from '../../models/person.model';

@Component({
  selector: 'app-start',
  templateUrl: 'start.component.html'
})

export class StartComponent implements OnInit{
  constructor(private infoService:InfoService) { }
  person: any;
  equipmArr: Equipment;
  helmets: Description[];
  chests: Description[];
  gloves: Description[];
  boots: Description[];
  swords: Description[];
  girlImage: string;
  girlImageUnderHelmet: string;
  girlName: string;

  data = {
    'helmet':'',
    'chest': '',
    'glove': '',
    'boots': '',
    'sword': '',

  }
  ngOnInit() {
    this.infoService.getInformation().subscribe(
      (data) => {
        this.person = data['person'];
        this.girlImage = this.person['img'];
        this.girlImageUnderHelmet = this.person['alt-img'];
        this.girlName = this.person['name'];

        this.equipmArr = data['equipment'];
        this.helmets = this.equipmArr['helmets'];
        this.chests = this.equipmArr['chests'];
        this.gloves = this.equipmArr['gloves'];
        this.boots = this.equipmArr['boots'];
        this.swords = this.equipmArr['swords'];
      }
    );
  }

  ChooseClotherType(obj:{}) {
    let countEquipment=0;
    let countArmor = 0;
    let countAttack = 0;
    let countHealth = 0;
    for (let key in obj) {
      if (obj[key].hasOwnProperty('price')) {
        countEquipment+= parseInt(obj[key].price)
        countArmor+=parseInt(obj[key].armor);
        countAttack+=parseInt(obj[key].attack);
        countHealth+=parseInt(obj[key].health);
      }
    }
    return {
      'countEquipment': countEquipment,
      'countArmor': countArmor,
      'countAttack': countAttack,
      'countHealth': countHealth

    }
  }
  Counter(personInfo: any, objValEquip: any) {
    let countEquipment=0;
    let countArmor = 0;
    let countAttack = 0;
    let countHealth = 0;
    if (personInfo) {
      countArmor = parseInt(personInfo.armor);
      countAttack = parseInt(personInfo.attack);
      countHealth = parseInt(personInfo.health);
    }

    let summary = this.ChooseClotherType(objValEquip);
    countArmor+=summary.countArmor;
    countAttack+=summary.countAttack;
    countHealth+=summary.countHealth;
    countEquipment+=summary.countEquipment;

    return [countEquipment,countHealth,countArmor,countAttack]
  }



  equipmentChanged(equipment: any,name: string){
    this.data[name]= equipment
  }

}
