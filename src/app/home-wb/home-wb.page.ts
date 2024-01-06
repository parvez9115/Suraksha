import { Component, OnInit } from '@angular/core';
import { AjaxServicesService } from '../service/ajax-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-wb',
  templateUrl: './home-wb.page.html',
  styleUrls: ['./home-wb.page.scss'],
})
export class HomeWbPage implements OnInit {
  data!: FormGroup;

  constructor(
    private ajax: AjaxServicesService,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {}

  create() {
    this.data = this.formBuilder.group({
      imei: ['', Validators.required],
      minutes: ['60', Validators.required],
      lat: ['010.199190N', Validators.required],
      long: ['076.371505E', Validators.required],
    });
  }

  get minutes() {
    return this.data.get('minutes');
  }

  stopPushing() {
    let url = `http://3.7.70.49:8081/trigger/stop/datawb?imeiNo=${this.data.value.imei}&latitude=${this.data.value.lat}&longitude=${this.data.value.long}`;
    this.ajax.ajaxget(url).subscribe((res) => {
      if (res == 200) {
        this.showPop('Data stoped successfully');
      } else {
        this.showPop('Data stop failed');
      }
    });
  }
  emergencyOff() {
    let url = `http://3.7.70.49:8081/trigger/emergencyoff/datawb?imeiNo=${this.data.value.imei}&latitude=${this.data.value.lat}&longitude=${this.data.value.long}`;
    this.ajax.ajaxget(url).subscribe((res) => {});
    this.showPop('Emergency off successfully');
  }
  emergencyOn() {
    let url = `http://3.7.70.49:8081/trigger/emergencyon/datawb?imeiNo=${this.data.value.imei}&latitude=${this.data.value.lat}&longitude=${this.data.value.long}`;
    this.ajax.ajaxget(url).subscribe((res) => {});
    this.showPop('Emergency on successfully');
  }
  ignitionyOn() {
    let url = `http://3.7.70.49:8081/trigger/ignitiononwb?imeiNo=${this.data.value.imei}`;
    this.ajax.ajaxget(url).subscribe((res) => {});
    this.showPop('Ignition on successfully');
  }

  ignitionyOff() {
    let url = `http://3.7.70.49:8081/trigger/ignitionoffwb?imeiNo=${this.data.value.imei}`;
    this.ajax.ajaxget(url).subscribe((res) => {});
    this.showPop('Ignition off successfully');
  }

  async showPop(data: any) {
    const alert = await this.alertController.create({
      subHeader: 'Confirm Message',
      message: data,
      buttons: ['OK'],
    });

    await alert.present();
  }

  push() {
    let url = `http://3.7.70.49:8081/trigger/start/datawb?imeiNo=${this.data.value.imei}&latitude=${this.data.value.lat}&longitude=${this.data.value.long}&time=${this.data.value.minutes}`;
    this.ajax.ajaxget(url).subscribe((res) => {
      if (res == 200) {
        this.showPop('Data pushed successfully');
      } else {
        this.showPop('Data push failed');
      }
    });
  }
  get imei() {
    return this.data.get('imei');
  }
  get lat() {
    return this.data.get('lat');
  }
  get long() {
    return this.data.get('long');
  }
  ngOnInit(): void {
    // let url = "https://mvt.apmkingstrack.com/fleettracking/esim/getDealerCAStatusPending?companyid=apm&invoiceno=&serialno=&dealer=apm-sa"
    // this.ajax.ajaxget(url).subscribe(res => {
    //   console.log(res)
    // })
    this.create();
  }
}
