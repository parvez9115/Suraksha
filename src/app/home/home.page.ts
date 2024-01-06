import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AjaxServicesService } from '../service/ajax-services.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
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
    let url = `http://3.7.70.49:8081/trigger/stop/data?imeiNo=${this.data.value.imei}&latitude=${this.data.value.lat}&longitude=${this.data.value.long}`;
    this.ajax.ajaxget(url).subscribe((res) => {
      if (res == 200) {
        this.showPop('Data stoped successfully');
      } else {
        this.showPop('Data stop failed');
      }
    });
  }
  emergencyOff() {
    let url = `http://3.7.70.49:8081/trigger/emergencyoff/data?imeiNo=${this.data.value.imei}&latitude=${this.data.value.lat}&longitude=${this.data.value.long}`;
    this.ajax.ajaxget(url).subscribe((res) => {});
    this.showPop('Emergency off successfully');
  }
  emergencyOn() {
    let url = `http://3.7.70.49:8081/trigger/emergencyon/data?imeiNo=${this.data.value.imei}&latitude=${this.data.value.lat}&longitude=${this.data.value.long}`;
    this.ajax.ajaxget(url).subscribe((res) => {});
    this.showPop('Emergency on successfully');
  }

  ignitionyOn() {
    let url = `http://3.7.70.49:8081/trigger/ignitionon?imeiNo=${this.data.value.imei}`;
    this.ajax.ajaxget(url).subscribe((res) => {});
    this.showPop('Ignition on successfully');
  }

  ignitionyOff() {
    let url = `http://3.7.70.49:8081/trigger/ignitionoff?imeiNo=${this.data.value.imei}`;
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
    let url = `http://3.7.70.49:8081/trigger/start/data?imeiNo=${this.data.value.imei}&latitude=${this.data.value.lat}&longitude=${this.data.value.long}&time=${this.data.value.minutes}`;
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
